export type PrStatus = 'merged' | 'open' | 'closed';

export interface PullRequestContribution {
  id: string;
  prNumber: number;
  repo: string;
  title: string;
  description: string;
  date: string;
  status: PrStatus;
  scope: 'external' | 'owned';
  url: string;
  tags: string[];
}

export const githubActivityStats = {
  username: 'KunjMaheshwari',
  profileUrl: 'https://github.com/KunjMaheshwari',
  publicRepos: 268,
  lastYearContributions: 1076,
  totalPullRequests: 161,
  externalPullRequests: 100,
  followers: 25,
  snapshotNote: 'Verified via live GitHub API · Nov 2026',
} as const;

/**
 * Verified EXTERNAL open-source pull requests (strictly separated from self-owned repos).
 */
export const externalContributions: PullRequestContribution[] = [
  {
    id: 'nanocoder-1985',
    prNumber: 1985,
    repo: 'Nano-Collective/nanocoder',
    title: 'feat: support million-token context limit suffixes',
    description:
      'Added support for million-token (M) context window suffixes in model configuration parsing for long-context LLMs.',
    date: '2026-11-06',
    status: 'merged',
    scope: 'external',
    url: 'https://github.com/Nano-Collective/nanocoder/pull/1985',
    tags: ['TypeScript', 'AI CLI', 'LLM Config'],
  },
  {
    id: 'unienv-121',
    prNumber: 121,
    repo: 'rupeshbharambe24/unienv-ai',
    title: 'feat(mcp): add VS Code, Zed, Windsurf, and LM Studio MCP clients',
    description:
      'Extended Model Context Protocol (MCP) client discovery and configuration across four major AI IDEs and local LLM runtimes.',
    date: '2026-11-18',
    status: 'merged',
    scope: 'external',
    url: 'https://github.com/rupeshbharambe24/unienv-ai/pull/121',
    tags: ['MCP', 'Developer Tools', 'CLI'],
  },
  {
    id: 'unienv-124',
    prNumber: 124,
    repo: 'rupeshbharambe24/unienv-ai',
    title: 'feat(plugin): add installable Claude Code plugin with unienv skill',
    description:
      'Shipped a packaged Claude Code plugin and skill enabling agents to manage unified developer environments directly.',
    date: '2026-11-18',
    status: 'merged',
    scope: 'external',
    url: 'https://github.com/rupeshbharambe24/unienv-ai/pull/124',
    tags: ['Claude Code', 'AI Agents', 'Plugin'],
  },
  {
    id: 'unienv-113',
    prNumber: 113,
    repo: 'rupeshbharambe24/unienv-ai',
    title: 'feat(sandbox): generate and install agent sandbox allow-rules',
    description:
      'Implemented automated sandbox allow-rule generation to keep AI coding agent execution safe and reproducible.',
    date: '2026-11-18',
    status: 'merged',
    scope: 'external',
    url: 'https://github.com/rupeshbharambe24/unienv-ai/pull/113',
    tags: ['Security', 'Sandboxing', 'Agents'],
  },
  {
    id: 'lasagna-109',
    prNumber: 109,
    repo: 'dolev31/lasagna',
    title: 'Fix KILT TriviaQA benchmark question loading',
    description:
      'Resolved dataset loading bug in the KILT TriviaQA evaluation benchmark pipeline and fixed generation-track routing (#108).',
    date: '2026-11-18',
    status: 'merged',
    scope: 'external',
    url: 'https://github.com/dolev31/lasagna/pull/109',
    tags: ['Python', 'AI Benchmarks', 'Bug Fix'],
  },
  {
    id: 'unienv-117',
    prNumber: 117,
    repo: 'rupeshbharambe24/unienv-ai',
    title: 'feat(cli): add `unienv export` and `unienv import` commands',
    description:
      'Built portable environment export/import commands alongside Homebrew formula support (#119) and fish/nushell wiring (#130).',
    date: '2026-11-18',
    status: 'merged',
    scope: 'external',
    url: 'https://github.com/rupeshbharambe24/unienv-ai/pull/117',
    tags: ['CLI', 'Shells', 'Homebrew'],
  },
  {
    id: 'google-harness-232',
    prNumber: 232,
    repo: 'google-research/harness2',
    title: 'fix(core): re-assert persisted ledger budget identity on resume, judge, and report',
    description:
      'Hardened persisted budget identity checks across resume/judge/report paths and added token-scrubbing config safeguards (#231).',
    date: '2026-11-24',
    status: 'open',
    scope: 'external',
    url: 'https://github.com/google-research/harness2/pull/232',
    tags: ['Google Research', 'Security', 'Eval Harness'],
  },
  {
    id: 'openhands-7051',
    prNumber: 7051,
    repo: 'OpenHands/software-agent-sdk',
    title: 'feat(agent-server): add GET /api/llm/models/upstream and profile drift warning',
    description:
      'Added an upstream LLM models introspection endpoint and optional profile drift warning to the OpenHands agent server.',
    date: '2026-11-21',
    status: 'open',
    scope: 'external',
    url: 'https://github.com/OpenHands/software-agent-sdk/pull/7051',
    tags: ['OpenHands', 'Agent SDK', 'API'],
  },
  {
    id: 'strands-6445',
    prNumber: 6445,
    repo: 'strands-agents/harness-sdk',
    title: 'fix(harness-ts): insert new_str literally in edit tool without pattern expansion',
    description:
      'Fixed JavaScript String.prototype.replace special-pattern expansion bug in the Strands TypeScript agent edit tool.',
    date: '2026-11-20',
    status: 'open',
    scope: 'external',
    url: 'https://github.com/strands-agents/harness-sdk/pull/6445',
    tags: ['Strands Agents', 'TypeScript', 'Tooling'],
  },
  {
    id: 'jenkins-196',
    prNumber: 196,
    repo: 'jenkins-infra/plugin-modernizer-stats',
    title: 'fix(tests & a11y): deterministic PluginList tests, aria-pressed & error states',
    description:
      'Submitted 5 PRs (#196, #202, #204, #207, #208) improving integration test determinism, ARIA accessibility, route focus, and export error handling.',
    date: '2026-11-22',
    status: 'open',
    scope: 'external',
    url: 'https://github.com/jenkins-infra/plugin-modernizer-stats/pull/196',
    tags: ['Jenkins', 'React', 'Accessibility', 'Testing'],
  },
];

/**
 * Key engineering PRs on self-owned repositories (explicitly distinguished from external OSS).
 */
export const ownedEngineeringPrs: PullRequestContribution[] = [
  {
    id: 'codepilot-39',
    prNumber: 39,
    repo: 'KunjMaheshwari/codepilot',
    title: 'fix(test): prevent SecurityContextHolder mock leak into AiReviewEngineIntegrationTest',
    description:
      'Isolated Spring Security test contexts across integration tests alongside Redis reliability, DB migrations, and Docker CI hardening.',
    date: '2026-11-23',
    status: 'merged',
    scope: 'owned',
    url: 'https://github.com/KunjMaheshwari/codepilot/pull/39',
    tags: ['Java', 'Spring Boot', 'Integration Tests'],
  },
  {
    id: 'codepilot-37',
    prNumber: 37,
    repo: 'KunjMaheshwari/codepilot',
    title: 'Production-readiness: backend stability, Redis resilience & E2E verification',
    description:
      'Hardened asynchronous Gemini PR review workflows, GitHub webhook security, frontend redesign, and Playwright CI checks.',
    date: '2026-11-22',
    status: 'merged',
    scope: 'owned',
    url: 'https://github.com/KunjMaheshwari/codepilot/pull/37',
    tags: ['Spring Boot', 'Redis', 'Gemini AI', 'Docker'],
  },
];
