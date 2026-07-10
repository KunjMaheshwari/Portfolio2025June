import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';

type GithubActivityState = {
  status: 'loading' | 'ready' | 'fallback';
  repoCount: number | null;
  followers: number | null;
  stars: number | null;
  contributions: number | null;
  contributionSvg: string | null;
  message?: string;
};

type LeetCodeActivityState = {
  status: 'loading' | 'ready' | 'fallback';
  solved: number | null;
  easy: number | null;
  medium: number | null;
  hard: number | null;
  contestRating: number | null;
  message?: string;
};

type DeveloperActivityState = {
  github: GithubActivityState;
  leetcode: LeetCodeActivityState;
  lastUpdated: string | null;
};

const initialState: DeveloperActivityState = {
  github: {
    status: 'loading',
    repoCount: null,
    followers: null,
    stars: null,
    contributions: null,
    contributionSvg: null,
  },
  leetcode: {
    status: 'loading',
    solved: null,
    easy: null,
    medium: null,
    hard: null,
    contestRating: null,
  },
  lastUpdated: null,
};

function getGithubUsername() {
  return profile.githubUsername ?? profile.github.split('/').filter(Boolean).pop() ?? 'KunjMaheshwari';
}

async function fetchGithubActivity(username: string, signal: AbortSignal): Promise<GithubActivityState> {
  try {
    const [profileResponse, reposResponse, contributionsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { signal }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { signal }),
      fetch(`https://github.com/users/${username}/contributions?to=${new Date().toISOString().slice(0, 10)}`, { signal }),
    ]);

    if (!profileResponse.ok) {
      throw new Error('GitHub profile unavailable');
    }

    const profileData = await profileResponse.json();
    const repos = reposResponse.ok ? await reposResponse.json() : [];
    const contributionSvg = contributionsResponse.ok ? await contributionsResponse.text() : null;

    const stars = Array.isArray(repos)
      ? repos.reduce((total: number, repo: { stargazers_count?: number }) => total + (repo.stargazers_count ?? 0), 0)
      : null;

    const contributions = contributionSvg
      ? Array.from(contributionSvg.matchAll(/data-count="(\d+)"/g)).reduce((total, match) => total + Number(match[1]), 0)
      : null;

    return {
      status: 'ready',
      repoCount: typeof profileData.public_repos === 'number' ? profileData.public_repos : null,
      followers: typeof profileData.followers === 'number' ? profileData.followers : null,
      stars,
      contributions,
      contributionSvg,
    };
  } catch {
    return {
      status: 'fallback',
      repoCount: null,
      followers: null,
      stars: null,
      contributions: null,
      contributionSvg: null,
      message: 'Live GitHub data could not be loaded right now.',
    };
  }
}

async function fetchLeetCodeActivity(username: string, signal: AbortSignal): Promise<LeetCodeActivityState> {
  try {
    const gqlResponse = await fetch('https://leetcode.com/kunjm/', {
      method: 'POST',
      signal,
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
          query userPublicStats($username: String!) {
            matchedUser(username: $username) {
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
            userContestRanking(username: $username) {
              rating
            }
          }
        `,
        variables: { username },
      }),
    });

    if (gqlResponse.ok) {
      const payload = await gqlResponse.json();
      const acCounts = payload?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum ?? [];
      const solved = acCounts.find((item: { difficulty: string; count: number }) => item.difficulty === 'All')?.count ?? null;
      const easy = acCounts.find((item: { difficulty: string; count: number }) => item.difficulty === 'Easy')?.count ?? null;
      const medium = acCounts.find((item: { difficulty: string; count: number }) => item.difficulty === 'Medium')?.count ?? null;
      const hard = acCounts.find((item: { difficulty: string; count: number }) => item.difficulty === 'Hard')?.count ?? null;
      const contestRating = payload?.data?.userContestRanking?.rating ? Math.round(payload.data.userContestRanking.rating) : null;

      if (solved !== null || contestRating !== null) {
        return {
          status: 'ready',
          solved,
          easy,
          medium,
          hard,
          contestRating,
        };
      }
    }

    const fallbackResponse = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, { signal });
    if (fallbackResponse.ok) {
      const payload = await fallbackResponse.json();
      return {
        status: 'ready',
        solved: typeof payload.totalSolved === 'number' ? payload.totalSolved : null,
        easy: typeof payload.easySolved === 'number' ? payload.easySolved : null,
        medium: typeof payload.mediumSolved === 'number' ? payload.mediumSolved : null,
        hard: typeof payload.hardSolved === 'number' ? payload.hardSolved : null,
        contestRating: typeof payload.ranking === 'number' ? payload.ranking : null,
      };
    }

    return {
      status: 'fallback',
      solved: null,
      easy: null,
      medium: null,
      hard: null,
      contestRating: null,
      message: 'LeetCode stats are unavailable right now.',
    };
  } catch {
    return {
      status: 'fallback',
      solved: null,
      easy: null,
      medium: null,
      hard: null,
      contestRating: null,
      message: 'LeetCode profile could not be fetched at the moment.',
    };
  }
}

export function useDeveloperActivity() {
  const [state, setState] = useState<DeveloperActivityState>(initialState);

  useEffect(() => {
    const controller = new AbortController();
    const githubUsername = getGithubUsername();
    const leetcodeUsername = profile.leetcodeUsername ?? githubUsername.toLowerCase();
    let active = true;

    async function load() {
      const [github, leetcode] = await Promise.all([
        fetchGithubActivity(githubUsername, controller.signal),
        fetchLeetCodeActivity(leetcodeUsername, controller.signal),
      ]);

      if (!active) return;

      setState({
        github,
        leetcode,
        lastUpdated: new Date().toISOString(),
      });
    }

    load();

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  return state;
}