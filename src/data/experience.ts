export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  employment: string;
  period: string;
  location: string;
  workMode: string;
  isCurrent?: boolean;
  description: string;
  responsibilities: string[];
  measurableAchievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  qualification: string;
  period: string;
  score: string;
  highlights?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'cognizant-pa',
    organization: 'Cognizant',
    role: 'Programmer Analyst',
    employment: 'Full-time',
    period: 'Aug 2026 — Present',
    location: 'Pune, Maharashtra, India',
    workMode: 'On-site',
    isCurrent: true,
    description:
      'Engineering and maintaining Java-based enterprise automation frameworks and CI/CD quality pipelines for Oracle EPM suites.',
    responsibilities: [
      'Develop and maintain Java-based automation solutions for Oracle EPM applications (EDMCS, EPBCS, FCCS, PCMCS, NR) using Selenium WebDriver, Playwright, and CRAFT.',
      'Architect reusable Page Object Model workflows, data-driven test harnesses, explicit wait strategies, and structured exception handling.',
      'Integrate Git, Maven, and Jenkins across CI/CD pipelines while collaborating with developers, QA leads, and enterprise stakeholders.',
    ],
    measurableAchievements: [
      'Awarded the Amber Award (Aug 2026) for high-impact contributions to Regeneron MTS project delivery and account-level engineering activities.',
      'Standardized reusable CRAFT framework components across five Oracle EPM enterprise modules (EDMCS, EPBCS, FCCS, PCMCS, NR).',
    ],
    technologies: ['Java', 'Selenium WebDriver', 'Playwright', 'CRAFT', 'Oracle EPM', 'Maven', 'Jenkins', 'Git'],
  },
  {
    id: 'cognizant-pat-ft',
    organization: 'Cognizant',
    role: 'Programmer Analyst Trainee',
    employment: 'Full-time',
    period: 'Aug 2025 — Aug 2026',
    location: 'Pune, Maharashtra, India',
    workMode: 'On-site',
    description:
      'Delivered high-velocity enterprise automation proofs of concept and end-to-end regression suites across Veeva Quality Cloud and Workday.',
    responsibilities: [
      'Automated end-to-end Workday workflows using Java and Selenium WebDriver for repeatable enterprise release verification.',
      'Implemented CRAFT framework integrations, resolved runtime defects, and adapted suites to evolving enterprise UI behavior.',
      'Contributed to Playwright-based automation modernization alongside QA and engineering stakeholders.',
    ],
    measurableAchievements: [
      'Delivered a Veeva Quality Cloud proof of concept involving 153 automated steps in 4 days against a planned 15-day timeline.',
      'Earned the Coral Award (Nov 2025) and Achiever Award (May 2026) for sustained delivery excellence.',
    ],
    technologies: ['Java', 'Selenium WebDriver', 'Playwright', 'Veeva Quality Cloud', 'Workday', 'CRAFT'],
  },
  {
    id: 'cognizant-pat-intern',
    organization: 'Cognizant',
    role: 'Programmer Analyst Trainee',
    employment: 'Internship',
    period: 'Apr 2025 — Jul 2025',
    location: 'Chennai, Tamil Nadu, India',
    workMode: 'On-site',
    description:
      'Completed intensive Quality Engineering & Java Automation training and led a 7-member engineering pod during framework delivery.',
    responsibilities: [
      'Completed intensive training in Core Java, OOP, JDBC, Selenium WebDriver, TestNG, and enterprise software engineering.',
      'Built cross-browser automation scripts and resilient XPath/CSS locator strategies for dynamic enterprise web applications.',
    ],
    measurableAchievements: [
      'Led a 7-member engineering team during automation framework architecture and sprint execution, coordinating code reviews and strategy.',
    ],
    technologies: ['Java', 'Selenium WebDriver', 'TestNG', 'Data Structures', 'Team Leadership'],
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'vit-bhopal',
    institution: 'VIT Bhopal University',
    qualification: 'B.Tech in Computer Science and Engineering',
    period: '2021 — 2025',
    score: 'CGPA 8.19 / 10.0',
    highlights: [
      'Core Member — Media & PR Outreach Team, TEDx VIT Bhopal (May 2023 – Feb 2025)',
      'NPTEL Cloud Computing (IIT Kharagpur) — Elite + Silver (Top 5%)',
    ],
  },
  {
    id: 'mansarovar',
    institution: 'Mansarovar Academy',
    qualification: 'Higher Secondary Certificate (Class XII)',
    period: '2019 — 2021',
    score: '91%',
  },
  {
    id: 'vatsalya',
    institution: 'Vatsalya Senior Secondary School',
    qualification: 'Senior Secondary Certificate (Class X)',
    period: '2018 — 2019',
    score: '92%',
  },
];
