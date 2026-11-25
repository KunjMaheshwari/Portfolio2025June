export type ProjectCategory =
  | 'AI & Machine Learning'
  | 'Backend Engineering'
  | 'Full-Stack Development'
  | 'Automation Engineering'
  | 'Developer Tools'
  | 'Learning & Experiments';

export type ProjectMockupType =
  | 'codepilot'
  | 'ai-chat'
  | 'ai-sandbox'
  | 'dental'
  | 'spring-ai'
  | 'vector-search'
  | 'commerce'
  | 'automation';

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: ProjectCategory;
  featured: boolean;
  tagline: string;
  description: string;
  problem: string;
  architecture: string;
  highlights: string[];
  engineeringDecisions?: string[];
  challengesSolved?: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  logoUrl?: string;
  accentFrom: string;
  accentTo: string;
  mockupType: ProjectMockupType;
  year: string;
}

const rawAsset = (repository: string, asset: string) =>
  `https://raw.githubusercontent.com/KunjMaheshwari/${repository}/main/public/${asset}`;

/**
 * Complete verified project catalogue backed directly by public GitHub repositories
 * under github.com/KunjMaheshwari.
 */
export const allProjects: ProjectItem[] = [
  // ================= TOP 6 FEATURED ENGINEERING PROJECTS =================
  {
    id: 'codepilot',
    index: '01',
    title: 'CodePilot',
    category: 'Backend Engineering',
    featured: true,
    year: '2026',
    tagline: 'AI-powered GitHub Pull Request code review platform.',
    description:
      'An automated GitHub PR review platform combining a Java Spring Boot backend, asynchronous review pipelines, Gemini AI analysis, and a Next.js dashboard.',
    problem:
      'Manual pull request reviews create delivery bottlenecks and inconsistent defect detection across fast-moving engineering teams.',
    architecture:
      'Java Spring Boot REST & webhook backend backed by PostgreSQL and Redis for async review orchestration, OAuth authentication, Gemini AI diff analysis, Next.js frontend, Docker containers, CI/CD, and integration + Playwright E2E testing.',
    highlights: [
      'Java Spring Boot + PostgreSQL + Redis async review engine',
      'GitHub OAuth & PR diff analysis powered by Gemini AI',
      'Dockerized CI/CD with integration & Playwright test suites',
    ],
    engineeringDecisions: [
      'Decoupled GitHub webhook ingestion from Gemini AI analysis using Redis-backed asynchronous processing so PR webhooks respond quickly.',
      'Persisted review state and migrations in PostgreSQL with Spring Boot service boundaries and OAuth authentication.',
      'Paired Spring Boot integration tests with Playwright E2E checks inside Dockerized CI pipelines.',
    ],
    challengesSolved: [
      'Isolated Spring Security SecurityContextHolder test state to prevent cross-test mock leaks in AiReviewEngineIntegrationTest (PR #39).',
      'Hardened Redis reliability, database migrations, and webhook security for production readiness (PR #37).',
    ],
    technologies: ['Java', 'Spring Boot', 'Next.js', 'Gemini AI', 'PostgreSQL', 'Redis', 'Docker', 'Playwright'],
    githubUrl: 'https://github.com/KunjMaheshwari/codepilot',
    demoUrl: 'https://codepilot-wi3s.vercel.app/',
    accentFrom: '#8B5CF6',
    accentTo: '#38BDF8',
    mockupType: 'codepilot',
  },
  {
    id: 'regen-ai',
    index: '02',
    title: 'Regen-AI',
    category: 'AI & Machine Learning',
    featured: true,
    year: '2026',
    tagline: 'Production-grade streaming AI chat with durable persistence.',
    description:
      'A scalable Generative AI chat application built with Next.js, OpenRouter multi-model routing, real-time token streaming, authentication, and PostgreSQL persistence.',
    problem:
      'Most AI chat prototypes wrap a single prompt endpoint without durable thread persistence, multi-model routing, or automated E2E verification.',
    architecture:
      'Next.js App Router frontend connected to OpenRouter APIs for multi-model streaming, Prisma ORM + PostgreSQL for conversation persistence, React Query state synchronization, and Playwright automated testing.',
    highlights: [
      'Real-time token streaming across multiple LLM providers',
      'PostgreSQL + Prisma schema with authenticated multi-session threads',
      'End-to-end Playwright test suite covering core chat journeys',
    ],
    engineeringDecisions: [
      'Routed LLM inference through OpenRouter instead of hard-coding a single vendor SDK for multi-model flexibility.',
      'Normalized authenticated conversation threads in PostgreSQL via Prisma ORM with React Query client synchronization.',
    ],
    challengesSolved: [
      'Maintained smooth token-by-token streaming UI updates while reliably persisting completed turns to PostgreSQL.',
      'Added Playwright automated regression coverage to validate critical chat and authentication flows.',
    ],
    technologies: ['Next.js', 'React', 'OpenRouter', 'PostgreSQL', 'Prisma', 'React Query', 'Playwright'],
    githubUrl: 'https://github.com/KunjMaheshwari/Regen-AI',
    demoUrl: 'https://regenai-ten.vercel.app',
    logoUrl: rawAsset('Regen-AI', 'regenailogo.svg'),
    accentFrom: '#8B5CF6',
    accentTo: '#38BDF8',
    mockupType: 'ai-chat',
  },
  {
    id: 'logick',
    index: '03',
    title: 'LogicK',
    category: 'AI & Machine Learning',
    featured: true,
    year: '2026',
    tagline: 'Interactive AI problem-solving platform with sandboxed execution.',
    description:
      'An interactive problem-solving and logical reasoning platform pairing structured challenges with Google Gemini guidance and isolated code execution.',
    problem:
      'Engineers learning problem-solving face fragmented workflows when challenges, isolated execution environments, and AI feedback live in separate tools.',
    architecture:
      'Next.js full-stack application integrating Google Gemini API, Prisma ORM, Docker, E2B isolated sandboxes for safe execution, and Inngest for reliable background job workflows.',
    highlights: [
      'Google Gemini API contextual reasoning & structured hints',
      'Isolated code execution via E2B Sandboxes & Docker',
      'Event-driven background orchestration powered by Inngest',
    ],
    engineeringDecisions: [
      'Executed untrusted user submissions inside isolated E2B Sandboxes rather than the application server process.',
      'Used Inngest for durable, event-driven background orchestration alongside Prisma ORM for challenge state.',
    ],
    challengesSolved: [
      'Coordinated real-time UI feedback across asynchronous sandbox execution and Google Gemini reasoning calls.',
      'Structured challenge progression and reasoning guidance within a single cohesive Next.js workspace.',
    ],
    technologies: ['Next.js', 'Google Gemini API', 'Prisma', 'Docker', 'E2B', 'Inngest'],
    githubUrl: 'https://github.com/KunjMaheshwari/LogicK',
    logoUrl: rawAsset('LogicK', 'LogicKLogo.svg'),
    accentFrom: '#A855F7',
    accentTo: '#6366F1',
    mockupType: 'ai-sandbox',
  },
  {
    id: 'toothsync',
    index: '04',
    title: 'ToothSync',
    category: 'Full-Stack Development',
    featured: true,
    year: '2026',
    tagline: 'Dental clinic management platform with billing & Google Sheets sync.',
    description:
      'A modern dental practice management platform built with Next.js and TypeScript to unify patient records, appointments, prescriptions, billing, and financial controls.',
    problem:
      'Independent clinics rely on disconnected spreadsheets and paper registers, causing scheduling errors and billing reconciliation overhead.',
    architecture:
      'Next.js + TypeScript responsive clinical dashboard with secure authentication, patient & treatment lifecycle tracking, financial integrity guards, and automated Google Sheets synchronization.',
    highlights: [
      'Unified patient records, appointments, prescriptions & billing',
      'Financial integrity controls & secure role-based auth',
      'Automated Google Sheets sync for clinic reporting',
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Google Sheets API'],
    githubUrl: 'https://github.com/KunjMaheshwari/ToothSync',
    demoUrl: 'https://doctor-kinjal.vercel.app',
    accentFrom: '#10B981',
    accentTo: '#38BDF8',
    mockupType: 'dental',
  },
  {
    id: 'spring-ai-website-builder-agent',
    index: '05',
    title: 'Spring AI Website Builder Agent',
    category: 'Backend Engineering',
    featured: true,
    year: '2026',
    tagline: 'Java Spring AI autonomous agent with multi-tool execution.',
    description:
      'An AI-powered website builder agent built with Java, Spring Boot, Spring AI, and OpenRouter demonstrating structured LLM tool calling and secure filesystem generation.',
    problem:
      'Bringing agentic multi-step file generation safely into enterprise Java ecosystems requires strict tool contracts and path-sandboxed filesystem access.',
    architecture:
      'Java & Spring Boot service orchestrating Spring AI tool-calling loops over OpenRouter models, executing multi-tool workflows with guarded filesystem writes to generate complete web assets.',
    highlights: [
      'Java Spring Boot + Spring AI multi-tool calling loop',
      'OpenRouter model abstraction for flexible LLM routing',
      'Secure sandboxed filesystem generation for web outputs',
    ],
    technologies: ['Java', 'Spring Boot', 'Spring AI', 'OpenRouter', 'LLM Tool Calling'],
    githubUrl: 'https://github.com/KunjMaheshwari/spring-ai-website-builder-agent',
    accentFrom: '#F59E0B',
    accentTo: '#8B5CF6',
    mockupType: 'spring-ai',
  },
  {
    id: 'netflix-vector-recommendations',
    index: '06',
    title: 'Netflix Movie Recommendation System',
    category: 'AI & Machine Learning',
    featured: true,
    year: '2026',
    tagline: 'Semantic movie discovery powered by Spring AI vector embeddings.',
    description:
      'A Netflix-inspired semantic discovery engine built with Java, Spring Boot, Spring AI, and OpenRouter embeddings to recommend titles by contextual similarity.',
    problem:
      'Keyword-based media search fails to capture mood, plot nuance, and thematic similarity across large catalogs.',
    architecture:
      'Spring Boot backend generating high-dimensional embeddings via Spring AI and OpenRouter, computing vector similarity rankings to surface contextually aligned recommendations.',
    highlights: [
      'Semantic vector similarity search beyond keyword matching',
      'Java Spring Boot + Spring AI embedding pipeline',
      'OpenRouter embedding integration with clean discovery UI',
    ],
    technologies: ['Java', 'Spring Boot', 'Spring AI', 'OpenRouter', 'Vector Embeddings'],
    githubUrl: 'https://github.com/KunjMaheshwari/Netflix-Movie-Recommendation-System-with-Vector-Embeddings',
    accentFrom: '#EC4899',
    accentTo: '#8B5CF6',
    mockupType: 'vector-search',
  },

  // ================= COMPLETE CATALOGUE (ADDITIONAL VERIFIED REPOS) =================
  {
    id: 'brainbox-ai',
    index: '07',
    title: 'BrainBox AI',
    category: 'AI & Machine Learning',
    featured: false,
    year: '2026',
    tagline: 'AI-assisted knowledge workspace & modern note-taking app.',
    description:
      'Designed and shipped a modern note-taking workspace using TypeScript and AI-assisted development, refining requirements, UI/UX, and live deployment.',
    problem: 'Personal knowledge bases quickly become cluttered without structured organization and fast search.',
    architecture: 'TypeScript web application with iterative prompt-engineered UI/UX, structured workspace views, and production deployment.',
    highlights: ['Clean knowledge workspace UI', 'Iterative AI-assisted product shipping', 'Live production deployment'],
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Prompt Engineering'],
    githubUrl: 'https://github.com/KunjMaheshwari/brainbox-ai-dashboard',
    demoUrl: 'https://thoughtbox-studio.lovable.app',
    accentFrom: '#8B5CF6',
    accentTo: '#38BDF8',
    mockupType: 'ai-chat',
  },
  {
    id: 'utopia-resort',
    index: '08',
    title: 'The Utopia Resort Restaurant',
    category: 'Full-Stack Development',
    featured: false,
    year: '2025',
    tagline: 'Full-stack MERN hospitality commerce & admin platform.',
    description:
      'Unified restaurant commerce platform combining customer menu browsing, live cart ordering, and an operator admin dashboard.',
    problem: 'Hospitality ordering flows often split customers and operators across disconnected interfaces.',
    architecture: 'MERN stack with React + Tailwind CSS storefront, Node.js & Express REST APIs, and MongoDB persistence.',
    highlights: ['Dual customer storefront & admin console', 'End-to-end order APIs', 'Live Vercel deployment'],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    demoUrl: 'https://the-utopia-resort-restaurant.vercel.app/',
    accentFrom: '#F59E0B',
    accentTo: '#8B5CF6',
    mockupType: 'commerce',
  },
  {
    id: 'api-automation-framework',
    index: '09',
    title: 'API Automation Framework',
    category: 'Automation Engineering',
    featured: false,
    year: '2026',
    tagline: 'Production-ready Java REST Assured & Allure API test suite.',
    description:
      'Enterprise-grade REST API automation framework featuring reusable request specs, environment configs, structured logging, Allure reporting, and data sanitization.',
    problem: 'Ad-hoc API tests lack environment portability, secure log sanitization, and executive-ready reporting.',
    architecture: 'Java + REST Assured + TestNG + Maven architecture with Allure HTML reports and secure token redaction.',
    highlights: ['Reusable REST Assured client layer', 'Allure reporting & Maven profiles', 'Secure log data sanitization'],
    technologies: ['Java', 'REST Assured', 'TestNG', 'Maven', 'Allure Reports'],
    githubUrl: 'https://github.com/KunjMaheshwari/API-Automation-Framework',
    accentFrom: '#38BDF8',
    accentTo: '#10B981',
    mockupType: 'automation',
  },
  {
    id: 'playwright-automation',
    index: '10',
    title: 'Playwright Automation Framework',
    category: 'Automation Engineering',
    featured: false,
    year: '2026',
    tagline: 'Scalable E2E browser & API automation with GitHub Actions CI.',
    description:
      'Modular Playwright automation framework covering Page Object Model architecture, resilient locators, Postman API assets, Allure reports, and CI/CD.',
    problem: 'Browser test suites become flaky without strict abstractions and repeatable CI pipelines.',
    architecture: 'JavaScript Playwright framework organized into pages, specs, Postman collections, Allure reporting, and GitHub Actions.',
    highlights: ['Page Object Model architecture', 'Allure HTML diagnostics', 'GitHub Actions CI integration'],
    technologies: ['JavaScript', 'Playwright', 'Allure Reports', 'GitHub Actions', 'Postman'],
    githubUrl: 'https://github.com/KunjMaheshwari/Playwright-Automation',
    accentFrom: '#38BDF8',
    accentTo: '#8B5CF6',
    mockupType: 'automation',
  },
  {
    id: 'ai-aviation-jobs',
    index: '11',
    title: 'AI Aviation Jobs',
    category: 'Automation Engineering',
    featured: false,
    year: '2026',
    tagline: 'Aviation recruitment portal with Playwright CI/CD verification.',
    description:
      'Aviation recruitment web application paired with automated end-to-end Playwright test coverage and Node.js 22 CI workflow compatibility.',
    problem: 'Job portals require continuous verification of search, filter, and application flows across runtime upgrades.',
    architecture: 'JavaScript web application with Playwright E2E regression suites running in GitHub Actions.',
    highlights: ['Recruitment portal testing suite', 'Node.js 22 Playwright CI workflow', 'Automated regression checks'],
    technologies: ['JavaScript', 'Playwright', 'GitHub Actions', 'CI/CD'],
    githubUrl: 'https://github.com/KunjMaheshwari/AI-Aviation-Jobs',
    accentFrom: '#38BDF8',
    accentTo: '#6366F1',
    mockupType: 'automation',
  },
  {
    id: 'production-rag-chatbot',
    index: '12',
    title: 'Production-Ready RAG Chatbot',
    category: 'AI & Machine Learning',
    featured: false,
    year: '2026',
    tagline: 'Document Q&A Retrieval-Augmented Generation pipeline with LangChain.',
    description:
      'A Retrieval-Augmented Generation chatbot built with Python and LangChain to ingest custom documents and ground LLM answers in retrieved context.',
    problem: 'General-purpose LLMs hallucinate on private domain documents without grounded retrieval.',
    architecture: 'Python + LangChain document chunking, vector indexing, similarity retrieval, and grounded answer synthesis.',
    highlights: ['Custom document ingestion pipeline', 'LangChain retrieval orchestration', 'Grounded context-aware responses'],
    technologies: ['Python', 'LangChain', 'RAG', 'LLMs'],
    githubUrl: 'https://github.com/KunjMaheshwari/Production-Ready-RAG-Chatbot',
    accentFrom: '#8B5CF6',
    accentTo: '#10B981',
    mockupType: 'ai-chat',
  },
  {
    id: 'ai-agent-engineering',
    index: '13',
    title: 'AI Agent Engineering',
    category: 'AI & Machine Learning',
    featured: false,
    year: '2026',
    tagline: 'Reference implementations for agents, tools, memory, RAG & MCP.',
    description:
      'Practical engineering repository exploring LLM agents, tool calling, persistent memory, RAG, Model Context Protocol (MCP), and production orchestration.',
    problem: 'Translating agentic AI theory into reliable, observable production workflows requires hands-on patterns.',
    architecture: 'Modular Python experiments covering tool execution, memory loops, RAG retrieval, and MCP server/client workflows.',
    highlights: ['Tool calling & agent orchestration', 'Memory & RAG architecture patterns', 'MCP integration examples'],
    technologies: ['Python', 'LLMs', 'AI Agents', 'RAG', 'MCP'],
    githubUrl: 'https://github.com/KunjMaheshwari/AI-Agent-Engineering',
    accentFrom: '#A855F7',
    accentTo: '#38BDF8',
    mockupType: 'ai-sandbox',
  },
  {
    id: 'medicare',
    index: '14',
    title: 'Medicare Healthcare Portal',
    category: 'Full-Stack Development',
    featured: false,
    year: '2025',
    tagline: 'Public healthcare scheme discovery & comparison platform.',
    description:
      'Full-stack web application helping citizens browse, filter, and compare Indian government healthcare schemes cleanly.',
    problem: 'Government healthcare benefit information is often dense and fragmented across portals.',
    architecture: 'React + Tailwind CSS discovery frontend backed by Node.js, Express, and MongoDB.',
    highlights: ['Calm scheme discovery UX', 'Full-stack MERN backend', 'Live Vercel deployment'],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: 'https://medicare-five-rouge.vercel.app/',
    accentFrom: '#10B981',
    accentTo: '#38BDF8',
    mockupType: 'dental',
  },
  {
    id: 'amazon-mobile-scraping',
    index: '15',
    title: 'Automated Amazon Mobile Listings',
    category: 'Automation Engineering',
    featured: false,
    year: '2025',
    tagline: 'Java Selenium e-commerce scraping & data validation suite.',
    description:
      'Cognizant mini-project automating product search, sorting, extraction, and validation of mobile listings on Amazon using Java and Selenium.',
    problem: 'Manual verification of dynamic e-commerce listings, filters, and pricing data is slow and error-prone.',
    architecture: 'Java + Selenium WebDriver automation with structured assertions and dynamic element handling.',
    highlights: ['Dynamic DOM locator strategies', 'Automated listing validation', 'Cognizant engineering project'],
    technologies: ['Java', 'Selenium WebDriver', 'TestNG'],
    githubUrl:
      'https://github.com/KunjMaheshwari/Automated-Web-Scraping-and-Validation-of-Mobile-Listings-on-E-commerce-Platform',
    accentFrom: '#F59E0B',
    accentTo: '#38BDF8',
    mockupType: 'automation',
  },
  {
    id: 'naukri-automation',
    index: '16',
    title: 'Naukri Resume Automation',
    category: 'Developer Tools',
    featured: false,
    year: '2026',
    tagline: 'Headless Puppeteer pipeline for automated resume refreshes.',
    description:
      'Node.js Puppeteer automation script that authenticates securely via dotenv, uploads the latest resume, and verifies completion with checkpoint screenshots.',
    problem: 'Manually refreshing job portal resumes after every edit is repetitive and easy to forget.',
    architecture: 'Node.js + Puppeteer workflow with human-paced input delays, visual checkpoints, and explicit exit codes.',
    highlights: ['Checkpoint screenshot verification', 'Environment-scoped credentials', 'Deterministic exit codes'],
    technologies: ['Node.js', 'Puppeteer', 'dotenv'],
    githubUrl: 'https://github.com/KunjMaheshwari/Naukri-Resume-Automation',
    accentFrom: '#8B5CF6',
    accentTo: '#EC4899',
    mockupType: 'automation',
  },
  {
    id: 'grafana-k6',
    index: '17',
    title: 'Grafana K6 Load Testing',
    category: 'Automation Engineering',
    featured: false,
    year: '2026',
    tagline: 'Performance, stress & threshold testing suites with Grafana K6.',
    description:
      'Comprehensive JavaScript load-testing scripts using Grafana K6 to benchmark API latency, concurrency thresholds, and system resilience.',
    problem: 'Functional tests alone cannot reveal throughput bottlenecks or tail-latency degradation under load.',
    architecture: 'K6 scenario scripts with virtual user ramps, p95 latency thresholds, and checks.',
    highlights: ['Load & stress test scenarios', 'p95/p99 latency thresholds', 'CI-friendly K6 scripts'],
    technologies: ['JavaScript', 'Grafana K6', 'Performance Testing'],
    githubUrl: 'https://github.com/KunjMaheshwari/Grafana-K6',
    accentFrom: '#8B5CF6',
    accentTo: '#F59E0B',
    mockupType: 'automation',
  },
  {
    id: 'pathfinder',
    index: '18',
    title: 'Pathfinder Algorithm Visualizer',
    category: 'Learning & Experiments',
    featured: false,
    year: '2026',
    tagline: 'Interactive BFS, DFS, Dijkstra & A* graph visualizer.',
    description:
      'Zero-dependency interactive pathfinding visualizer letting users draw walls and compare BFS, DFS, Dijkstra, and A* traversal in real time.',
    problem: 'Graph traversal heuristics are much easier to internalize when node exploration is visually observable.',
    architecture: 'Single-file dependency-free HTML/CSS/JS engine deployed on GitHub Pages.',
    highlights: ['BFS, DFS, Dijkstra & A* algorithms', 'Zero external dependencies', 'Live GitHub Pages demo'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Algorithms'],
    githubUrl: 'https://github.com/KunjMaheshwari/Pathfinder',
    demoUrl: 'https://kunjmaheshwari.github.io/Pathfinder/',
    accentFrom: '#38BDF8',
    accentTo: '#10B981',
    mockupType: 'vector-search',
  },
  {
    id: 'restassured-learning',
    index: '19',
    title: 'RestAssured Learning',
    category: 'Automation Engineering',
    featured: false,
    year: '2026',
    tagline: 'API chaining, schema validation, auth & payload verification in Java.',
    description:
      'Structured Java REST Assured suite covering API chaining, JSON/XML schema validation, cookies, headers, authorization flows, and response parsing.',
    problem: 'Mastering end-to-end API contract verification requires structured patterns across auth and schema layers.',
    architecture: 'Java + REST Assured modular test classes covering CRUD chaining, auth schemes, and schema assertions.',
    highlights: ['API request chaining', 'JSON & XML schema validation', 'Auth, cookies & header testing'],
    technologies: ['Java', 'REST Assured', 'TestNG', 'JSON Schema'],
    githubUrl: 'https://github.com/KunjMaheshwari/RestAssured-Learning',
    accentFrom: '#38BDF8',
    accentTo: '#8B5CF6',
    mockupType: 'automation',
  },
  {
    id: 'leetcode-java',
    index: '20',
    title: 'LeetCode Java Solutions',
    category: 'Learning & Experiments',
    featured: false,
    year: '2026',
    tagline: 'Curated Java DSA solutions with test harness & metrics.',
    description:
      'Curated Java solutions for Arrays, Strings, Linked Lists, Trees, Graphs, and Dynamic Programming backed by a reusable TestCaseHarness.',
    problem: 'Interview preparation benefits from clean, refactored solutions with repeatable local verification.',
    architecture: 'Organized Java packages covering core DSA patterns, linked-list utilities, and solution metrics.',
    highlights: ['Arrays, Trees, Graphs & DP in Java', 'Reusable TestCaseHarness utilities', 'Aligned with 760+ solved problems'],
    technologies: ['Java', 'Data Structures', 'Algorithms'],
    githubUrl: 'https://github.com/KunjMaheshwari/LeetCode',
    accentFrom: '#F59E0B',
    accentTo: '#38BDF8',
    mockupType: 'codepilot',
  },
];

export const featuredProjects: ProjectItem[] = allProjects.filter((p) => p.featured);

export const projectCategories: Array<'All' | ProjectCategory> = [
  'All',
  'AI & Machine Learning',
  'Backend Engineering',
  'Full-Stack Development',
  'Automation Engineering',
  'Developer Tools',
  'Learning & Experiments',
];
