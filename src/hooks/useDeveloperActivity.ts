import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';

type ActivityStatus = 'loading' | 'ready' | 'fallback';

type GithubActivityState = {
  status: ActivityStatus;
  repoCount: number | null;
  followers: number | null;
  stars: null;
  contributions: null;
  message?: string;
};

type LeetCodeActivityState = {
  status: 'fallback';
  solved: null;
  easy: null;
  medium: null;
  hard: null;
  contestRating: null;
  message: string;
};

type DeveloperActivityState = {
  github: GithubActivityState;
  leetcode: LeetCodeActivityState;
  lastUpdated: string | null;
};

const leetcodeUnavailable: LeetCodeActivityState = {
  status: 'fallback',
  solved: null,
  easy: null,
  medium: null,
  hard: null,
  contestRating: null,
  message: 'Live LeetCode statistics are not displayed because there is no reliable browser-safe public API.',
};

const initialState: DeveloperActivityState = {
  github: {
    status: 'loading',
    repoCount: null,
    followers: null,
    stars: null,
    contributions: null,
  },
  leetcode: leetcodeUnavailable,
  lastUpdated: null,
};

function getGithubUsername() {
  return profile.githubUsername ?? profile.github.split('/').filter(Boolean).pop() ?? 'KunjMaheshwari';
}

async function fetchGithubProfile(username: string, signal: AbortSignal): Promise<GithubActivityState> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, { signal });

    if (!response.ok) {
      throw new Error('GitHub profile unavailable');
    }

    const profileData: unknown = await response.json();
    const data = typeof profileData === 'object' && profileData !== null ? profileData as Record<string, unknown> : {};

    return {
      status: 'ready',
      repoCount: typeof data.public_repos === 'number' ? data.public_repos : null,
      followers: typeof data.followers === 'number' ? data.followers : null,
      stars: null,
      contributions: null,
      message: 'Repository and follower counts are provided by the public GitHub profile API. Contribution and star totals are not scraped.',
    };
  } catch {
    return {
      status: 'fallback',
      repoCount: null,
      followers: null,
      stars: null,
      contributions: null,
      message: 'GitHub profile data could not be loaded right now. Visit the profile for current activity.',
    };
  }
}

export function useDeveloperActivity() {
  const [state, setState] = useState<DeveloperActivityState>(initialState);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    async function load() {
      const github = await fetchGithubProfile(getGithubUsername(), controller.signal);

      if (!active) return;

      setState({
        github,
        leetcode: leetcodeUnavailable,
        lastUpdated: new Date().toISOString(),
      });
    }

    void load();

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  return state;
}
