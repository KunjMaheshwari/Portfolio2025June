import type { IconType } from 'react-icons';
import type { PointerEvent } from 'react';
import { motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import {
  FaAws,
  FaCloud,
  FaCode,
  FaDatabase,
  FaServer,
  FaVial,
} from 'react-icons/fa';
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSelenium,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
} from 'react-icons/si';
import { SectionHeading } from '../SectionHeading';
import { cn } from '../../utils/cn';

type SkillItem = {
  name: string;
  icon: IconType;
};

type SkillGroup = {
  label: string;
  title: string;
  description: string;
  icon: IconType;
  accent: string;
  items: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    label: 'Programming',
    title: 'Strong language fundamentals for shipping real products.',
    description: 'The base layer for product engineering, automation, and implementation speed.',
    icon: FaCode,
    accent: 'from-brand-blue via-brand-purple to-system-green',
    items: [
      { name: 'Java', icon: FaCode },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    label: 'Frontend',
    title: 'Interfaces built with product polish and motion awareness.',
    description: 'Modern UI systems that feel responsive, tactile, and premium.',
    icon: SiReact,
    accent: 'from-brand-blue via-cyan-400 to-brand-purple',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TailwindCSS', icon: SiTailwindcss },
    ],
  },
  {
    label: 'Backend',
    title: 'Server-side systems that support product-level reliability.',
    description: 'APIs, orchestration, and service structure for scalable delivery.',
    icon: FaServer,
    accent: 'from-system-green via-emerald-400 to-brand-blue',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
    ],
  },
  {
    label: 'Databases',
    title: 'Persistence choices tuned for speed, structure, and clarity.',
    description: 'Data layers chosen for reliable product workflows and maintainable schemas.',
    icon: FaDatabase,
    accent: 'from-brand-purple via-fuchsia-400 to-brand-blue',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    label: 'Testing',
    title: 'Automation coverage that helps teams ship with confidence.',
    description: 'Hands-on test engineering for regression, reporting, and repeatability.',
    icon: FaVial,
    accent: 'from-slate-500 via-brand-blue to-system-green',
    items: [
      { name: 'Selenium', icon: SiSelenium },
      { name: 'Playwright', icon: FaVial },
      { name: 'TestNG', icon: FaVial },
      { name: 'Apache POI', icon: FaVial },
    ],
  },
  {
    label: 'Cloud',
    title: 'Deployment-ready thinking with cloud literacy at the core.',
    description: 'Infrastructure awareness to support release-ready product experiences.',
    icon: FaCloud,
    accent: 'from-brand-blue via-sky-400 to-brand-purple',
    items: [{ name: 'AWS', icon: FaAws }],
  },
];

function SkillCloudChip({ item, index }: { item: SkillItem; index: number }) {
  const reduceMotion = useReducedMotion() ?? false;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left) / bounds.width - 0.5);
    y.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65, delay: index * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
      style={reduceMotion ? undefined : { rotateX, rotateY }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-3 shadow-[0_16px_50px_rgba(2,6,23,0.1)] backdrop-blur-2xl transition-transform hover:-translate-y-1 dark:bg-white/6"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-surface/80 text-brand-blue dark:border-white/10 dark:bg-white/8">
        <item.icon aria-hidden="true" className="h-4.5 w-4.5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-ink dark:text-white">{item.name}</p>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted dark:text-white/48">Technology</p>
      </div>
    </motion.div>
  );
}

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.article
      data-reveal
      initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/8 p-6 shadow-[0_28px_90px_rgba(2,6,23,0.12)] backdrop-blur-2xl dark:bg-white/6 dark:shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-7"
    >
      <div className={cn('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', group.accent)} />
      <div className="absolute right-[-3rem] top-[-3rem] h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.16),transparent_70%)] blur-3xl transition duration-700 group-hover:scale-110" />
      <div className="relative flex items-start justify-between gap-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-stroke bg-surface/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue dark:border-white/10 dark:bg-white/8">
            <group.icon aria-hidden="true" className="h-3.5 w-3.5" />
            {group.label}
          </div>
          <h3 className="mt-5 max-w-md text-2xl font-semibold tracking-[-0.05em] text-ink dark:text-white">
            {group.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted dark:text-white/64">{group.description}</p>
        </div>
      </div>

      <div className="relative mt-7 flex flex-wrap gap-3">
        {group.items.map((item, itemIndex) => (
          <SkillCloudChip key={item.name} item={item} index={index + itemIndex} />
        ))}
      </div>
    </motion.article>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills & Technologies"
          title="An interactive technology cloud with Apple-style polish."
          description="A categorized view of the stack that recruiters can scan quickly while still feeling premium and story-driven."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillGroupCard key={group.label} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
