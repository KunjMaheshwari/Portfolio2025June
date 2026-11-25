import type { IconType } from 'react-icons';
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiAnthropic,
  SiApachemaven,
  SiCucumber,
  SiExpress,
  SiGithubactions,
  SiGooglegemini,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRedis,
  SiSelenium,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { TbApi, TbBrandOpenai, TbDatabase, TbNetwork, TbTestPipe } from 'react-icons/tb';

export interface SkillItem {
  name: string;
  icon: IconType;
  accent?: string;
  evidence: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  shortLabel: string;
  skills: SkillItem[];
}

/**
 * Evidence-backed technical arsenal (no inflated percentage ratings).
 * Every technology maps directly to verified repositories or Cognizant work.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    shortLabel: 'Languages',
    skills: [
      { name: 'Java', icon: FaJava, accent: '#FB923C', evidence: 'CodePilot · Spring AI · 680 LeetCode · Cognizant' },
      { name: 'TypeScript', icon: SiTypescript, accent: '#38BDF8', evidence: 'ToothSync · BrainBox AI · Portfolio 2.0' },
      { name: 'JavaScript', icon: SiJavascript, accent: '#FACC15', evidence: 'Regen-AI · LogicK · Playwright · K6' },
      { name: 'Python', icon: FaPython, accent: '#38BDF8', evidence: 'AI Agent Engineering · Production RAG' },
      { name: 'SQL', icon: TbDatabase, accent: '#A78BFA', evidence: 'PostgreSQL · MySQL · Top SQL 50' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    shortLabel: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, accent: '#4ADE80', evidence: 'CodePilot · Spring AI Agent · Netflix Vector' },
      { name: 'Spring AI', icon: SiSpringboot, accent: '#34D399', evidence: 'Website Builder Agent · Vector Embeddings' },
      { name: 'Node.js', icon: FaNodeJs, accent: '#4ADE80', evidence: 'Utopia Resort · Medicare · Naukri Automation' },
      { name: 'Express.js', icon: SiExpress, accent: '#F5F5F7', evidence: 'MERN REST APIs' },
      { name: 'REST APIs', icon: TbApi, accent: '#38BDF8', evidence: 'Spring Boot · Express · REST Assured' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Agents',
    shortLabel: 'AI & Agents',
    skills: [
      { name: 'Google Gemini', icon: SiGooglegemini, accent: '#8B5CF6', evidence: 'CodePilot · LogicK' },
      { name: 'Anthropic Claude', icon: SiAnthropic, accent: '#FB923C', evidence: 'CCA-F Certified · Claude Code Skills' },
      { name: 'OpenRouter', icon: TbBrandOpenai, accent: '#A78BFA', evidence: 'Regen-AI · Spring AI Agent' },
      { name: 'LangChain & RAG', icon: SiLangchain, accent: '#34D399', evidence: 'Production-Ready RAG Chatbot' },
      { name: 'MCP & Agents', icon: TbNetwork, accent: '#38BDF8', evidence: 'AI-Agent-Engineering · unienv-ai MCP PRs' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    shortLabel: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, accent: '#38BDF8', evidence: 'Portfolio 2.0 · Utopia Resort · Medicare' },
      { name: 'Next.js', icon: SiNextdotjs, accent: '#F5F5F7', evidence: 'CodePilot · Regen-AI · LogicK · ToothSync' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, accent: '#38BDF8', evidence: 'Portfolio 2.0 · ToothSync · Medicare' },
      { name: 'HTML5', icon: FaHtml5, accent: '#FB923C', evidence: 'Semantic & Accessible UI' },
      { name: 'CSS3', icon: FaCss3Alt, accent: '#38BDF8', evidence: 'Responsive Design & Motion' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    shortLabel: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, accent: '#38BDF8', evidence: 'CodePilot · Regen-AI' },
      { name: 'Redis', icon: SiRedis, accent: '#F87171', evidence: 'CodePilot async review caching & queues' },
      { name: 'MySQL', icon: SiMysql, accent: '#38BDF8', evidence: '50 LeetCode SQL · Java JDBC' },
      { name: 'MongoDB', icon: SiMongodb, accent: '#4ADE80', evidence: 'Utopia Resort · Medicare' },
      { name: 'Prisma ORM', icon: SiPrisma, accent: '#F5F5F7', evidence: 'Regen-AI · LogicK' },
    ],
  },
  {
    id: 'automation',
    label: 'Automation',
    shortLabel: 'Automation',
    skills: [
      { name: 'Selenium', icon: SiSelenium, accent: '#4ADE80', evidence: 'Cognizant Oracle EPM · Veeva · Workday' },
      { name: 'Playwright', icon: TbTestPipe, accent: '#8B5CF6', evidence: 'CodePilot · Regen-AI · Playwright Framework' },
      { name: 'REST Assured', icon: TbApi, accent: '#38BDF8', evidence: 'API Automation Framework' },
      { name: 'TestNG', icon: TbTestPipe, accent: '#38BDF8', evidence: 'Enterprise Java Test Suites' },
      { name: 'Cucumber', icon: SiCucumber, accent: '#4ADE80', evidence: 'BDD Automation Workflows' },
      { name: 'Maven', icon: SiApachemaven, accent: '#FB923C', evidence: 'Java Builds & CI Pipelines' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    shortLabel: 'DevOps',
    skills: [
      { name: 'Docker', icon: FaDocker, accent: '#38BDF8', evidence: 'CodePilot · LogicK' },
      { name: 'GitHub Actions', icon: SiGithubactions, accent: '#38BDF8', evidence: 'CI/CD · Playwright · CodePilot' },
      { name: 'Jenkins', icon: FaJenkins, accent: '#F87171', evidence: 'Cognizant CI/CD · plugin-modernizer PRs' },
      { name: 'AWS', icon: FaAws, accent: '#FB923C', evidence: 'AWS Certified Cloud Practitioner' },
      { name: 'Git & GitHub', icon: FaGitAlt, accent: '#FB923C', evidence: '268 Repos · 161 PRs' },
      { name: 'Vercel', icon: SiVercel, accent: '#F5F5F7', evidence: 'CodePilot · Regen-AI · ToothSync' },
      { name: 'Postman', icon: SiPostman, accent: '#FB923C', evidence: 'API Student Expert · Collections' },
      { name: 'GitHub OSS', icon: FaGithub, accent: '#F5F5F7', evidence: '100+ External Open-Source PRs' },
    ],
  },
];
