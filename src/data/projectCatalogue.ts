export type ProjectVisual =
  | { type: 'image'; src: string; alt: string }
  | { type: 'abstract'; alt: string };

export type ProjectCatalogueEntry = {
  title: string;
  description: string;
  problem: string;
  approach: string;
  technologies: string[];
  category: string;
  visual: ProjectVisual;
  githubUrl: string;
  demoUrl?: string;
};

const rawAsset = (repository: string, asset: string) =>
  `https://raw.githubusercontent.com/KunjMaheshwari/${repository}/main/public/${asset}`;

export const projectCatalogue = [
  {
    title: 'Regen-AI',
    description:
      'A streaming AI chat application built around real-world concerns rather than a prompt-only demo.',
    problem:
      'AI chat needs more than model access: conversations need to persist, responses need to stream, and the application needs a reliable product foundation.',
    approach:
      'Built a Next.js App Router application with OpenRouter model access, token-by-token streaming, authentication, and conversation persistence through Prisma and PostgreSQL.',
    technologies: ['Next.js', 'OpenRouter', 'Prisma', 'PostgreSQL', 'Playwright'],
    category: 'AI application',
    visual: {
      type: 'image',
      src: rawAsset('Regen-AI', 'regenailogo.svg'),
      alt: 'Regen-AI project logo',
    },
    githubUrl: 'https://github.com/KunjMaheshwari/Regen-AI',
    demoUrl: 'https://regenai-ten.vercel.app',
  },
  {
    title: 'LogicK',
    description:
      'An interactive problem-solving platform designed to strengthen logical reasoning through structured challenges.',
    problem:
      'Problem-solving practice can become difficult to navigate when challenges, feedback, and the surrounding learning experience are disconnected.',
    approach:
      'Developed a Next.js application with an AI-oriented stack that includes Google Gemini API, Prisma ORM, Docker, E2B sandboxing, and Inngest.',
    technologies: ['Next.js', 'Google Gemini API', 'Prisma ORM', 'Docker', 'E2B', 'Inngest'],
    category: 'AI learning platform',
    visual: {
      type: 'image',
      src: rawAsset('LogicK', 'LogicKLogo.svg'),
      alt: 'LogicK project logo',
    },
    githubUrl: 'https://github.com/KunjMaheshwari/LogicK',
  },
  {
    title: 'Playwright Automation',
    description:
      'A scalable Playwright automation framework covering end-to-end testing, locator strategies, reporting, and CI/CD.',
    problem:
      'Reliable browser automation depends on maintainable test structure, useful reporting, and repeatable execution in development and CI.',
    approach:
      'Organized a JavaScript Playwright framework around pages, specs, tests, Postman assets, Allure reporting, and GitHub Actions workflows.',
    technologies: ['JavaScript', 'Playwright', 'Allure Reports', 'GitHub Actions', 'Postman'],
    category: 'Software quality',
    visual: { type: 'abstract', alt: 'Abstract Playwright test execution visual' },
    githubUrl: 'https://github.com/KunjMaheshwari/Playwright-Automation',
  },
  {
    title: 'Naukri Resume Automation',
    description:
      'A Node.js automation script that signs in to Naukri and uploads the latest resume for a personal productivity workflow.',
    problem:
      'Refreshing a resume profile manually is repetitive and easy to forget when the source document changes.',
    approach:
      'Implemented a Puppeteer flow with environment-based credentials, human-like typing delays, checkpoint screenshots, validation scripts, and explicit exit codes.',
    technologies: ['Node.js', 'Puppeteer', 'dotenv'],
    category: 'Browser automation',
    visual: { type: 'abstract', alt: 'Abstract browser automation visual' },
    githubUrl: 'https://github.com/KunjMaheshwari/Naukri-Resume-Automation',
  },
] satisfies readonly ProjectCatalogueEntry[];
