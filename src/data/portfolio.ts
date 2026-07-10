import {
  FaAws,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiCoursera,
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
  resume: '/Kunj-Maheshwari-Resume.txt',
  headline: 'Building AI Applications, Automation Systems & Scalable Products',
  summary:
    'I am a Computer Science graduate from VIT Bhopal and a Programmer Analyst Trainee at Cognizant. My work sits at the intersection of enterprise Java, full-stack product engineering, automation, and clear user experience. I care about clean architecture, measured performance, and interfaces that feel calm under pressure.',
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
    title: 'Programmer Analyst Trainee',
    company: 'Cognizant',
    period: 'Aug 2025 - Present',
    location: 'Pune, Maharashtra',
    tags: ['Leadership', 'Selenium', 'Java', 'JDBC'],
    bullets: [
      'Led a team of 6 engineers to deliver automation workflows with clear ownership and execution discipline.',
      'Built Selenium automation frameworks and delivered automation solutions that reached 100% execution success.',
      'Applied strong Java and JDBC expertise to stabilize backend flows and improve delivery quality.',
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
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    verificationLink: 'https://drive.google.com/file/d/1VHI9H8izuWi6Du2K7tm89QFF_ekC13vy/view',
    icon: FaAws,
    badge: 'Cloud',
  },
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Coursera',
    verificationLink: 'https://www.coursera.org/account/accomplishments/professional-cert/MP6T6Y6ZC2CE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof',
    icon: SiCoursera,
    badge: 'IT Support',
  },
  {
    title: 'Claude Certified Architect Foundations',
    issuer: 'Anthropic',
    verificationLink: '',
    icon: FaAws,
    badge: 'AI Systems',
  },
  {
    title: 'Context Engineering Certification',
    issuer: 'Modern AI Practice',
    verificationLink: '',
    icon: SiFramer,
    badge: 'Prompt Systems',
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
