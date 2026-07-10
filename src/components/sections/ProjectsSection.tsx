import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiPlayCircle, FiCode, FiServer, FiDatabase } from 'react-icons/fi';
import { projects } from '../../data/portfolio';
import { SectionHeading } from '../SectionHeading';
import { cn } from '../../utils/cn';

type ProjectRecord = (typeof projects)[number];

interface TechNodeProps {
  name: string;
  icon?: React.ElementType;
}

function TechNode({ name, icon }: TechNodeProps) {
  const Icon = icon ?? FiCode;

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur-xl dark:border-black/10 dark:bg-black/[0.04] dark:text-white/64">
      {icon && <Icon className="h-3.5 w-3.5" />}
      <span>{name}</span>
    </div>
  );
}

function ArchitectureDiagram({ project }: { project: ProjectRecord }) {
  const Icon = (name: string) => {
    switch(name.toLowerCase()) {
      case 'react': return FiCode;
      case 'nodejs': return FiServer;
      case 'express': return FiServer;
      case 'mongodb': default: return FiDatabase;
    }
  };

  const getTechIcon = (name: string) => Icon(name);

  return (
    <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.84] to-white/[0.65] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.1)] backdrop-blur-xl dark:from-black/[0.18] dark:to-black/[0.12]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-system-green" />

      {/* Frontend Layer */}
      <div className="relative mb-6 rounded-xl border border-white/15 bg-black/[0.02] p-4 dark:border-white/8">
        <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Frontend Layer</h3>
        <div className="flex flex-wrap items-end justify-between gap-3 rounded-lg border border-stroke bg-white/[0.84] p-3 dark:border-black/15 dark:bg-black/[0.06]">
          {project.technologies.filter((t) => t.startsWith('React') || t === 'Next.js').map((tech, i) => (
            <TechNode key={i} name={tech} />
          ))}
        </div>
      </div>

      {/* Backend Layer */}
      <div className="relative mb-6 rounded-xl border border-white/15 bg-black/[0.02] p-4 dark:border-white/8">
        <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">Backend Layer</h3>
        <div className="flex flex-wrap items-end justify-between gap-3 rounded-lg border border-stroke bg-white/[0.84] p-3 dark:border-black/15 dark:bg-black/[0.06]">
          {project.technologies.filter((t) => t.startsWith('Node') || t === 'Express').map((tech, i) => (
            <TechNode key={i} name={tech} />
          ))}
        </div>
      </div>

      {/* Data Layer */}
      <div className="relative rounded-xl border border-white/15 bg-black/[0.02] p-4 dark:border-white/8">
        <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-system-green">Data Layer</h3>
        <div className="flex flex-wrap items-end justify-between gap-3 rounded-lg border border-stroke bg-white/[0.84] p-3 dark:border-black/15 dark:bg-black/[0.06]">
          {project.technologies.filter((t) => t.startsWith('Mongo') || t === 'PostgreSQL' || t === 'MySQL').map((tech, i) => (
            <TechNode key={i} name={tech} />
          ))}
        </div>
      </div>

      {/* Flow Arrows */}
      <svg className="absolute inset-0 pointer-events-none opacity-30" aria-hidden="true">
        {[1, 2].map((layer) => (
          <motion.path
            key={layer}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: 'power3.out' }}
            d={`M52 68 L97 ${layer === 1 ? '78' : '68'} M52 106 L97 ${layer === 1 ? '116' : '106'}`}
            fill="none"
            stroke={layer === 1 ? '#6aa4ff' : '#bf5af2'}
            strokeWidth="1.3"
          />
        ))}
      </svg>
    </div>
  );
}

function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.article
      data-reveal
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: index * 0.08 }}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      className={cn(
        'group relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/8 shadow-[0_28px_90px_rgba(2,6,23,0.12)] backdrop-blur-2xl transition-transform dark:bg-white/6 dark:shadow-[0_28px_90px_rgba(0,0,0,0.36)]',
        featured ? 'lg:col-span-2' : '',
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_30%,rgba(255,255,255,0.05)_70%,transparent)] opacity-80" />
      <div className="absolute right-[-4rem] top-[-4rem] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.22),transparent_70%)] blur-3xl transition duration-700 group-hover:scale-110" />
      <div className="relative grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-blue">{project.eyebrow}</p>
            <span className="rounded-full border border-stroke bg-surface/72 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted dark:border-white/10 dark:bg-white/8 dark:text-white/48">
              Featured
            </span>
          </div>

          <div className="mt-5 flex items-end justify-between gap-4">
            <h3 className="max-w-2xl text-3xl font-semibold tracking-[-0.06em] text-ink dark:text-white sm:text-4xl">
              {project.title}
            </h3>
            <span className="font-display text-5xl font-semibold tracking-[-0.08em] text-ink/10 dark:text-white/10">
              0{index + 1}
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted dark:text-white/66">
            {project.overview}
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.4rem] border border-stroke bg-elevated p-4 dark:border-white/10 dark:bg-white/7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted dark:text-white/48">Problem</p>
              <p className="mt-3 text-sm leading-6 text-ink dark:text-white/78">{project.problem}</p>
            </div>
            <div className="rounded-[1.4rem] border border-stroke bg-elevated p-4 dark:border-white/10 dark:bg-white/7 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted dark:text-white/48">Solution</p>
              <p className="mt-3 text-sm leading-6 text-ink dark:text-white/78">{project.solution}</p>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {project.impact.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-stroke bg-surface/78 p-4 text-sm font-medium leading-6 text-ink dark:border-white/10 dark:bg-white/7 dark:text-white/80"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <ArchitectureDiagram project={project} />

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((item) => (
              <span
                key={item}
                className="rounded-full border border-stroke bg-surface/76 px-3.5 py-1.5 text-xs font-semibold text-muted backdrop-blur-xl dark:border-white/10 dark:bg-white/8 dark:text-white/64"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(5,5,7,0.18)] transition hover:-translate-y-0.5 hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:bg-white dark:text-black"
            >
              Live demo <FiPlayCircle aria-hidden="true" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stroke bg-surface/78 px-5 py-3 text-sm font-semibold text-ink shadow-[0_18px_44px_rgba(5,5,7,0.08)] transition hover:-translate-y-0.5 hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:bg-white/12"
            >
              GitHub <FaGithub aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative min-h-[24rem] overflow-hidden border-t border-stroke bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.06))] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] lg:border-l lg:border-t-0">
          <motion.div
            initial={reduceMotion ? false : { scale: 1.05 }}
            whileHover={reduceMotion ? undefined : { scale: 1.12 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(10,132,255,0.26),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(191,90,242,0.16),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(48,209,88,0.12),transparent_30%)]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_32%,rgba(255,255,255,0.04)_72%,transparent)] opacity-70" />
          <div className="relative flex h-full min-h-[24rem] items-end p-6 sm:p-8">
            <div className="w-full rounded-[2rem] border border-white/10 bg-black/10 p-5 backdrop-blur-2xl dark:bg-black/15">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/58">Story arc</p>
                  <p className="mt-2 text-xl font-semibold tracking-[-0.05em] text-white">
                    {project.title === 'RegenAI'
                      ? 'A modern AI product experience with reliable orchestration.'
                      : project.title === 'ZigWheels Automation Framework'
                        ? 'A framework built to make regression feel predictable.'
                        : 'A polished experience designed to reduce user friction.'}
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/66">
                  Scroll reveal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured projects"
          title="Projects framed as product stories, not a technology dump."
          description="Each project highlights the problem, the solution, and the impact so recruiters can understand the engineering judgment behind the build."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
