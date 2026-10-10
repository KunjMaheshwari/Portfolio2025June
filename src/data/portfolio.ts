import {
  FaAws,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiExpress,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiSelenium,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

export const profile = {
  name: 'Kunj Maheshwari',
  role: 'Software Engineer | AI Builder | Automation Engineer',
  location: 'Pune, Maharashtra',
  email: 'kunjm@outlook.com',
  phone: '+91 70000 00000',
  github: 'https://github.com/KunjMaheshwari',
  githubUsername: 'KunjMaheshwari',
  leetcodeUsername: 'kunjmaheshwari',
  linkedin: 'https://www.linkedin.com/in/kunjm',
  leetcode: 'https://leetcode.com/u/kunjm/',
  medium: 'https://medium.com/@KunjMaheshwari',
  resume: '/Kunj-Maheshwari-Resume.txt',
  headline: 'Building AI Applications, Automation Systems & Scalable Products',
  summary:
    'I’m Kunj Maheshwari, a software engineer building AI-powered applications, backend systems, and reliable software through thoughtful engineering and automated testing.',
  signal: ['Java', 'MERN', 'Automation', 'AWS Cloud', 'Product Engineering'],
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Engineering Impact', href: '#engineering-impact' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Activity', href: '#activity' },
  { label: 'Contact', href: '#contact' },
];

export const metrics = [
  { value: '2+', label: 'Production-style full-stack builds' },
  { value: '8.19', label: 'CSE GPA at VIT Bhopal' },
  { value: 'Top 5%', label: 'NPTEL performance' },
  { value: '2', label: 'Professional certifications' },
];

export const experience = [
  {
    title: 'Programmer Analyst',
    company: 'Cognizant',
    employment: 'Full-time',
    period: 'August 2026 - Present',
    location: 'Pune City, Maharashtra, India',
    workMode: 'On-site',
    tags: ['CRAFT', 'Selenium WebDriver', 'Playwright', 'Java', 'Jenkins'],
    bullets: [
      'Develop and maintain Java-based automation solutions for Oracle EPM applications including EDMCS, EPBCS, FCCS, PCMCS, and NR using Selenium WebDriver, Playwright, and CRAFT.',
      'Design reusable workflows with Page Object Model, data-driven testing, explicit waits, and structured exception handling for maintainable regression coverage.',
      'Enhance framework components and automation infrastructure, troubleshoot enterprise workflows, and adapt solutions to changing application behavior.',
      'Work with Git, Maven, and Jenkins in automation development and CI/CD workflows while collaborating with QA and engineering stakeholders.',
    ],
  },
  {
    title: 'Programmer Analyst Trainee',
    company: 'Cognizant',
    employment: 'Full-time',
    period: 'August 2025 - August 2026',
    location: 'Pune City, Maharashtra, India',
    workMode: 'On-site',
    tags: ['Leadership', 'Regression testing', 'Java', 'Selenium', 'Playwright'],
    bullets: [
      'Automated 153 Veeva Quality Cloud test cases, expanding regression coverage and reducing repetitive manual validation.',
      'Automated end-to-end Workday workflows using Java and Selenium for more repeatable enterprise application testing.',
      'Developed and maintained CRAFT workflows, troubleshooting runtime issues and adapting automation to changing application behavior.',
      'Contributed to Playwright-based automation and collaborated with QA and engineering stakeholders to improve test reliability.',
    ],
  },
  {
    title: 'Programmer Analyst Trainee',
    company: 'Cognizant',
    employment: 'Internship',
    period: 'April 2025 - July 2025',
    location: 'Chennai, Tamil Nadu, India',
    workMode: 'On-site',
    tags: ['Leadership', 'Data structures', 'Java', 'Selenium WebDriver', 'TestNG'],
    bullets: [
      'Completed intensive Quality Engineering and Automation training covering Java, Selenium WebDriver, and TestNG.',
      'Developed automation scripts for complex web interfaces and cross-browser testing to improve consistency in data validation workflows.',
      'Led a seven-member team during framework development and task execution, coordinating implementation and automation strategy.',
      'Implemented robust XPath and CSS selector strategies for dynamic web elements.',
    ],
  },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'Vellore Institute of Technology Bhopal',
    period: '2021 - 2025',
    detail: 'CGPA 8.19/10.0',
  },
  {
    degree: 'Higher Secondary Certificate',
    school: 'Mansarovar Academy',
    period: '2019 - 2021',
    detail: '91%',
  },
  {
    degree: 'Senior Secondary Certificate',
    school: 'Vatsalya Senior Secondary School',
    period: '2018 - 2019',
    detail: '92%',
  },
];

export const projects = [
  {
    title: 'The Utopia Resort Restaurant',
    eyebrow: 'Hospitality commerce',
    overview:
      'A full-stack restaurant commerce platform designed to turn browsing, ordering, and admin management into a single polished experience.',
    problem:
      'Restaurant ordering flows often split customers and operators across disconnected screens, creating friction for both sides.',
    solution:
      'Built a responsive MERN application with customer ordering, admin management, and a clean information hierarchy that keeps the flow simple.',
    impact: ['Dual customer/admin workflows', 'Operational ordering flow', 'Production-ready deployment'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/KunjMaheshwari/The-Utopia-Resort',
    demo: 'https://the-utopia-resort-restaurant.vercel.app/',
  },
  {
    title: 'RegenAI',
    eyebrow: 'AI product studio',
    overview:
      'A production-ready AI chat application built to feel responsive, reliable, and ready for real-world usage.',
    problem:
      'Most AI chat prototypes focus on prompts, but ignore persistence, reliability, and the experience quality needed for production.',
    solution:
      'Built a Next.js application with OpenRouter, Prisma, PostgreSQL, React Query, and Playwright for a testable, production-ready workflow.',
    impact: ['Production-grade AI chat UX', 'Reliable persistence layer', 'Automated test coverage'],
    technologies: ['Next.js', 'OpenRouter', 'Prisma', 'PostgreSQL', 'React Query', 'Playwright'],
    github: 'https://github.com/KunjMaheshwari',
    demo: 'https://regen-ai.vercel.app/',
  },
  {
    title: 'Medicare',
    eyebrow: 'Public sector access',
    overview:
      'A healthcare scheme discovery platform designed to help users browse, compare, and understand benefits quickly.',
    problem:
      'Government scheme discovery can feel dense and fragmented, making it difficult for users to find the right program fast.',
    solution:
      'Created a React and TailwindCSS platform that organizes information clearly and guides users through a calmer discovery flow.',
    impact: ['Scheme discovery UX', 'Full-stack data flow', 'Responsive public portal'],
    technologies: ['React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/KunjMaheshwari/Medicare',
    demo: 'https://medicare-five-rouge.vercel.app/',
  },
  {
    title: 'ZigWheels Automation Framework',
    eyebrow: 'Quality engineering',
    overview:
      'An automation framework built to make regression testing more observable, repeatable, and production-friendly.',
    problem:
      'Manual regression checks are slow, error-prone, and difficult to scale when product updates happen frequently.',
    solution:
      'Designed a Selenium-based framework using TestNG, Apache POI, Page Object Model, and Extent Reports for maintainable test execution.',
    impact: ['Reliable regression coverage', 'Readable test reporting', 'Scalable framework structure'],
    technologies: ['Selenium', 'TestNG', 'Apache POI', 'Page Object Model', 'Extent Reports'],
    github: 'https://github.com/KunjMaheshwari',
    demo: 'https://github.com/KunjMaheshwari',
  },
];

export const skills = [
  { name: 'Java', level: 94, category: 'Language', icon: FaJava },
  { name: 'TypeScript', level: 84, category: 'Frontend', icon: SiTypescript },
  { name: 'JavaScript', level: 88, category: 'Frontend', icon: SiJavascript },
  { name: 'React', level: 90, category: 'Frontend', icon: FaReact },
  { name: 'Node.js', level: 78, category: 'Backend', icon: FaNodeJs },
  { name: 'Express.js', level: 84, category: 'Backend', icon: SiExpress },
  { name: 'MySQL', level: 88, category: 'Database', icon: SiMysql },
  { name: 'MongoDB', level: 80, category: 'Database', icon: SiMongodb },
  { name: 'AWS', level: 66, category: 'Cloud', icon: FaAws },
  { name: 'Selenium', level: 91, category: 'Testing', icon: SiSelenium },
  { name: 'Framer Motion', level: 82, category: 'Motion', icon: SiFramer },
  { name: 'Three.js', level: 68, category: 'Creative', icon: TbBrandThreejs },
  { name: 'TailwindCSS', level: 92, category: 'UI', icon: SiTailwindcss },
];

export const certifications = [
  {
    title: 'Claude Certified Architect – Foundations (CCA-F)',
    issuer: 'Anthropic',
    verificationLink: '',
    icon: FaAws,
    badge: 'Certification',
  },
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    verificationLink: '',
    icon: FaAws,
    badge: 'Certification',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    verificationLink: 'https://drive.google.com/file/d/1VHI9H8izuWi6Du2K7tm89QFF_ekC13vy/view',
    icon: FaAws,
    badge: 'Certification',
  },
  {
    title: 'Context Engineering Foundation',
    issuer: 'Cognizant',
    verificationLink: '',
    icon: SiFramer,
    badge: 'Training',
  },
  {
    title: 'Cloud Computing',
    issuer: 'IIT Kharagpur — NPTEL SWAYAM',
    verificationLink: '',
    icon: FaAws,
    badge: 'Elite+Silver',
  },
  {
    title: 'API Fundamentals Student Expert',
    issuer: 'Postman',
    verificationLink: '',
    icon: SiFramer,
    badge: 'Badge',
  },
  {
    title: 'API Bootcamp',
    issuer: 'GeeksforGeeks',
    verificationLink: '',
    icon: SiFramer,
    badge: 'Bootcamp',
  },
  {
    title: 'Azure Fundamentals Challenge',
    issuer: 'Microsoft Learn Student Ambassadors',
    verificationLink: '',
    icon: FaAws,
    badge: 'Challenge',
  },
];

export const awards = [
  { title: 'Amber Award', issuer: 'Cognizant', period: 'August 2026' },
  { title: 'Achiever Award', issuer: 'Cognizant', period: 'May 2026' },
  { title: 'The Coral Award', issuer: 'Cognizant', period: 'November 2025' },
  { title: 'Hacktoberfest 2024', issuer: 'Four accepted contributions', period: '2024' },
];

export const engineeringSkillGroups = [
  {
    title: 'AI engineering',
    skills: ['LLM integration', 'Generative AI applications', 'Prompt & context engineering', 'AI agents', 'Google Gemini', 'OpenRouter'],
  },
  {
    title: 'Backend development',
    skills: ['JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Prisma ORM', 'Java & SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Automation & quality',
    skills: ['Java', 'Selenium WebDriver', 'TestNG', 'Playwright', 'Cucumber', 'Regression testing'],
  },
  {
    title: 'Cloud & tools',
    skills: ['AWS fundamentals', 'Git & GitHub', 'Docker', 'CI/CD workflows'],
  },
];

export const activity = [
  {
    label: 'GitHub',
    value: 'KunjMaheshwari',
    description: 'Full-stack prototypes, Java practice, automation experiments, and deployment-ready UI builds.',
    href: profile.github,
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'kunjm',
    description: 'Professional updates, training milestones, technical writing, and career signal.',
    href: profile.linkedin,
    icon: FaLinkedin,
  },
];
