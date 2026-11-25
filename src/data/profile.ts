export interface PrincipleItem {
  step: string;
  title: string;
  detail: string;
}

export interface CredibilityMetric {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  sublabel: string;
  source: string;
}

export const profile = {
  name: 'Kunj Maheshwari',
  initials: 'KM',
  roleBadge: 'Software Engineer | Backend Engineering | AI Engineering | Test Automation',
  roleFull:
    'Software Engineer | Backend Engineering | AI Engineering | Test Automation',
  currentRole: 'Programmer Analyst at Cognizant',
  location: 'Pune, Maharashtra, India',
  email: 'kunjm@outlook.com',
  github: 'https://github.com/KunjMaheshwari',
  githubUsername: 'KunjMaheshwari',
  linkedin: 'https://www.linkedin.com/in/kunjm/',
  leetcode: 'https://leetcode.com/u/kunjm/',
  medium: 'https://medium.com/@KunjMaheshwari',
  takeuforward: 'https://takeuforward.org/profile/kunjmaheshwari',
  holopin: 'https://www.holopin.io/@kunjmaheshwari#badges',
  resume: '/Kunj-Maheshwari-Resume.pdf',
  headlineLine1: 'Building intelligent systems.',
  headlineLine2: 'Engineering what comes next.',
  intro:
    'I’m Kunj Maheshwari — a Software Engineer building distributed backend services, agentic AI applications, full-stack products, and enterprise automation frameworks. From Java & Spring Boot architectures to open-source AI tooling and Oracle EPM automation at Cognizant, I engineer software built to scale and last.',
  philosophyTitle: 'Good software is a sequence of clear architectural decisions.',
  philosophyBody:
    'I work across the full lifecycle of software systems: designing backend services in Java and Spring Boot, shipping AI-native full-stack products with Next.js and PostgreSQL, contributing to open-source agent ecosystems, and validating critical paths with Playwright and Selenium automation.',
  principles: [
    {
      step: '01',
      title: 'Backend & Systems',
      detail: 'Java, Spring Boot, PostgreSQL, Redis, async queues, and clean API boundaries.',
    },
    {
      step: '02',
      title: 'AI & Agentic Craft',
      detail: 'Spring AI, Gemini, Claude, OpenRouter, RAG pipelines, MCP, and sandboxed execution.',
    },
    {
      step: '03',
      title: 'Full-Stack Execution',
      detail: 'Production TypeScript, Next.js, React, Prisma ORM, and crisp product interfaces.',
    },
    {
      step: '04',
      title: 'Quality & Open Source',
      detail: 'Playwright, Selenium, REST Assured, CI/CD, and 100+ external open-source PRs.',
    },
  ] satisfies PrincipleItem[],
  interests: [
    'Backend & Distributed Systems',
    'Agentic AI & LLM Tooling',
    'Java & Spring Boot',
    'Full-Stack Architecture',
    'Developer Tooling & MCP',
    'Enterprise Test Automation',
  ],
  availabilityText: 'Open to high-impact software engineering & AI systems roles',
} as const;

/**
 * Verified live metrics retrieved from GitHub API, LeetCode GraphQL, and Cognizant delivery records.
 */
export const credibilityMetrics: CredibilityMetric[] = [
  {
    value: 760,
    suffix: '+',
    label: 'LeetCode Problems Solved',
    sublabel: '680 Java · 50 MySQL · 30 JS · 22 Badges',
    source: 'Live LeetCode GraphQL',
  },
  {
    value: 1076,
    suffix: '',
    label: 'GitHub Contributions (1Y)',
    sublabel: '268 public repos · 161 total PRs',
    source: 'Live GitHub API',
  },
  {
    value: 100,
    suffix: '+',
    label: 'External Open-Source PRs',
    sublabel: 'Google Research · OpenHands · Jenkins · Strands',
    source: 'Live GitHub Search API',
  },
  {
    value: 153,
    suffix: '',
    label: 'Automated Steps in 4 Days',
    sublabel: 'Veeva Quality Cloud POC (vs. 15-day plan)',
    source: 'Cognizant Delivery',
  },
  {
    value: 8.19,
    suffix: '',
    decimals: 2,
    label: 'B.Tech CSE CGPA',
    sublabel: 'VIT Bhopal University (2021–2025)',
    source: 'Academic Record',
  },
];

export const verifiedMetrics = credibilityMetrics.slice(0, 4);
