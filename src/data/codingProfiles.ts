export interface CodingProfileItem {
  id: string;
  platform: string;
  handle: string;
  url: string;
  primaryStat: string;
  primaryLabel: string;
  details: string[];
  badgeText: string;
  accentColor: string;
}

/**
 * Live-verified statistics from GitHub API and LeetCode GraphQL (retrieved Nov 2026),
 * plus verified profile links for TakeUForward, Holopin, and Medium.
 */
export const codingProfiles: CodingProfileItem[] = [
  {
    id: 'github',
    platform: 'GitHub',
    handle: '@KunjMaheshwari',
    url: 'https://github.com/KunjMaheshwari',
    primaryStat: '1,076',
    primaryLabel: 'Contributions (Last 12 Months)',
    details: ['268 public repositories', '161 total pull requests (100+ external OSS)', 'Java, TypeScript, Python & JS'],
    badgeText: 'GitHub API · Nov 2026',
    accentColor: '#F5F5F7',
  },
  {
    id: 'leetcode',
    platform: 'LeetCode',
    handle: '@kunjm',
    url: 'https://leetcode.com/u/kunjm/',
    primaryStat: '760',
    primaryLabel: 'Problems Solved (Rank #81,638)',
    details: ['236 Easy · 427 Medium · 97 Hard', '680 Java · 50 MySQL · 30 JavaScript', '22 Badges (500 Days, 365 Days, Top SQL 50)'],
    badgeText: 'LeetCode API · Nov 2026',
    accentColor: '#F59E0B',
  },
  {
    id: 'takeuforward',
    platform: 'TakeUForward',
    handle: '@kunjmaheshwari',
    url: 'https://takeuforward.org/profile/kunjmaheshwari',
    primaryStat: 'DSA',
    primaryLabel: 'Structured Interview & System Prep',
    details: ['Systematic DSA sheet progression', 'Graphs, DP, Trees & Sliding Window', 'Interview problem-solving discipline'],
    badgeText: 'Verified Profile',
    accentColor: '#EF4444',
  },
  {
    id: 'holopin',
    platform: 'Holopin',
    handle: '@kunjmaheshwari',
    url: 'https://www.holopin.io/@kunjmaheshwari#badges',
    primaryStat: '4 PRs',
    primaryLabel: 'Hacktoberfest 2024 Verified Badges',
    details: ['Hacktoberfest 2024 completer', 'Verified open-source digital badges', 'Public community badge board'],
    badgeText: 'Open Source Badges',
    accentColor: '#38BDF8',
  },
  {
    id: 'medium',
    platform: 'Medium',
    handle: '@KunjMaheshwari',
    url: 'https://medium.com/@KunjMaheshwari',
    primaryStat: '10+',
    primaryLabel: 'Published Technical Articles',
    details: ['Agentic AI, Claude Code & LangGraph', 'Distributed Systems & Message Queues', 'CRAFT Automation Architecture'],
    badgeText: 'Live Medium Feed',
    accentColor: '#8B5CF6',
  },
];
