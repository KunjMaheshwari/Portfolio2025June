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
  role: 'Programmer Analyst Trainee',
  location: 'Pune, Maharashtra',
  email: 'kunjm@outlook.com',
  phone: '+91 70000 00000',
  github: 'https://github.com/KunjMaheshwari',
  linkedin: 'https://www.linkedin.com/in/kunjm',
  resume: '#contact',
  headline:
    'Software engineer building reliable Java, MERN, and automation systems with product-grade interfaces.',
  summary:
    'I am a Computer Science graduate from VIT Bhopal and a Programmer Analyst Trainee at Cognizant. My work sits at the intersection of enterprise Java, full-stack product engineering, automation, and clear user experience. I care about clean architecture, measured performance, and interfaces that feel calm under pressure.',
  signal: ['Java', 'MERN', 'Automation', 'AWS Cloud', 'Product Engineering'],
};

export const navItems = [
  { label: 'Home', href: '#home' },
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
    company: 'Cognizant Technology Solutions',
    period: 'Aug 2025 - Present',
    location: 'Pune, Maharashtra',
    tags: ['Java 8', 'JDBC', 'Agile', 'Enterprise Apps'],
    bullets: [
      'Trained on Core Java, JDBC, advanced Java concepts, functional interfaces, lambdas, and stream APIs.',
      'Developed and optimized enterprise-style Java applications while participating in sprint rituals and code reviews.',
      'Debugged complex issues and improved system behavior through structured problem solving and peer collaboration.',
    ],
  },
  {
    title: 'Analyst Trainee',
    company: 'Cognizant Technology Solutions',
    period: 'Apr 2025 - Jul 2025',
    location: 'Chennai, Tamil Nadu',
    tags: ['Java', 'MySQL', 'REST APIs', 'OOP'],
    bullets: [
      'Completed foundational training in software engineering, Java programming, and database management.',
      'Built RESTful APIs and backend services with Java and MySQL through real-world training assignments.',
      'Earned recognition for adaptability, quick learning, communication, and teamwork during onboarding.',
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
    description:
      'Full-stack food delivery prototype for restaurant operations with customer ordering, admin management, and a polished responsive interface.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    impact: ['Dual customer/admin workflows', 'Operational ordering flow', 'Vercel deployment'],
    github: 'https://github.com/KunjMaheshwari/The-Utopia-Resort',
    demo: 'https://the-utopia-resort-restaurant.vercel.app/',
  },
  {
    title: 'Medicare Healthcare Schemes Portal',
    eyebrow: 'Public sector access',
    description:
      'Healthcare schemes portal designed to make Indian government healthcare benefits easier to discover, compare, and understand.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    impact: ['Scheme discovery UX', 'Full-stack data flow', 'Responsive public portal'],
    github: 'https://github.com/KunjMaheshwari/Medicare',
    demo: 'https://medicare-five-rouge.vercel.app/',
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
    link: 'https://drive.google.com/file/d/1VHI9H8izuWi6Du2K7tm89QFF_ekC13vy/view',
    icon: FaAws,
  },
  {
    title: 'Google IT Support Professional',
    issuer: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/MP6T6Y6ZC2CE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof',
    icon: SiCoursera,
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
