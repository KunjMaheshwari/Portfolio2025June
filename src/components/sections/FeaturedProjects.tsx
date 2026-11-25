import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu,
  ExternalLink,
  GitPullRequest,
  Github,
  Layers,
  Search,
  Sparkles,
  Terminal,
} from 'lucide-react';
import {
  allProjects,
  featuredProjects,
  projectCategories,
  type ProjectCategory,
  type ProjectItem,
} from '../../data/projects';
import { cn } from '../../lib/utils';
import { CaseStudyModal } from '../ui/CaseStudyModal';
import { CinematicVideoBackground } from '../ui/CinematicVideoBackground';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Tilt3DCard } from '../ui/Tilt3DCard';

gsap.registerPlugin(ScrollTrigger);

function ProjectPreviewVisual({ project }: { project: ProjectItem }) {
  return (
    <div className="relative flex h-full min-h-[340px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.1] bg-secondary p-5 shadow-glass sm:min-h-[430px] sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-25 blur-3xl transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${project.accentFrom}, ${project.accentTo} 60%, transparent 100%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-engineering-grid opacity-35 mask-radial-fade"
      />

      {/* Window Chrome */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="ml-2 max-w-[200px] truncate rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-ink-muted sm:max-w-xs">
            {project.demoUrl ? new URL(project.demoUrl).host : `github.com/KunjMaheshwari/${project.id}`}
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-cyan">
          {project.category}
        </span>
      </div>

      {/* Product Showcase Visual */}
      <div className="relative z-10 my-6 flex flex-1 flex-col justify-center">
        {project.mockupType === 'codepilot' && (
          <div className="space-y-3.5">
            <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-card/95 p-4">
              <div className="flex items-center gap-2.5">
                <GitPullRequest className="h-4 w-4 text-accent" />
                <div>
                  <div className="text-xs font-semibold text-ink-primary">PR #39 · Spring Security Context Isolation</div>
                  <div className="font-mono text-[10px] text-emerald-400">Spring Boot · Redis Queue · Gemini AI Review</div>
                </div>
              </div>
              <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] text-purple-200">
                Analyzed
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.08] bg-card/90 p-3.5 font-mono text-[11px] text-ink-secondary">
                <div className="text-[10px] uppercase tracking-wider text-accent-cyan">Async Pipeline</div>
                <div className="mt-2 space-y-1">
                  <div className="text-emerald-400">✓ GitHub Webhook Verified</div>
                  <div className="text-emerald-400">✓ Redis Job Enqueued</div>
                  <div className="text-ink-primary">→ Gemini Diff Findings Posted</div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-card/90 p-3.5 font-mono text-[11px] text-ink-secondary">
                <div className="text-[10px] uppercase tracking-wider text-accent">Stack & Quality</div>
                <div className="mt-2 space-y-1">
                  <div>PostgreSQL + Migrations</div>
                  <div>Docker + GitHub Actions</div>
                  <div>Playwright E2E + Integration</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {project.mockupType === 'ai-chat' && (
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              {project.logoUrl ? (
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.12] bg-white/95 p-2">
                  <img src={project.logoUrl} alt={`${project.title} logo`} className="h-full w-full object-contain" loading="lazy" />
                </div>
              ) : null}
              <div>
                <div className="text-sm font-semibold text-ink-primary">{project.title} · Streaming Session</div>
                <div className="font-mono text-[11px] text-emerald-400">OpenRouter · PostgreSQL + Prisma Synced</div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-card/90 p-4 font-mono text-xs leading-relaxed text-ink-secondary">
              <div className="text-[10px] uppercase tracking-wider text-ink-muted">User Prompt</div>
              <p className="mt-1 text-ink-primary">Design a resilient streaming API route with token persistence.</p>
              <div className="mt-3 border-t border-white/[0.06] pt-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-accent">
                  <span>Assistant Stream</span>
                  <span>200 OK · Persisted</span>
                </div>
                <p className="mt-1.5 text-ink-secondary">
                  Streaming tokens via ReadableStream while persisting thread checkpoints to PostgreSQL through Prisma ORM…
                </p>
              </div>
            </div>
          </div>
        )}

        {project.mockupType === 'ai-sandbox' && (
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              {project.logoUrl ? (
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.12] bg-white/95 p-2">
                  <img src={project.logoUrl} alt={`${project.title} logo`} className="h-full w-full object-contain" loading="lazy" />
                </div>
              ) : null}
              <div>
                <div className="text-sm font-semibold text-ink-primary">LogicK · AI Reasoning Workspace</div>
                <div className="font-mono text-[11px] text-accent">Gemini API · E2B Sandbox · Inngest</div>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.08] bg-card/90 p-4">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-accent-cyan">
                  <Code2 className="h-3.5 w-3.5" />
                  <span>E2B ISOLATED RUNNER</span>
                </div>
                <div className="mt-2.5 space-y-1.5 font-mono text-[11px] text-ink-secondary">
                  <div>$ container.exec("verify_solution")</div>
                  <div className="text-emerald-400">✓ All test assertions passed</div>
                  <div className="text-ink-muted">Dockerized · Isolated</div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-card/90 p-4">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-accent">
                  <Cpu className="h-3.5 w-3.5" />
                  <span>GEMINI REASONING</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-ink-secondary">
                  Structured hints queued through Inngest background workers with Prisma persistence.
                </p>
              </div>
            </div>
          </div>
        )}

        {project.mockupType === 'dental' && (
          <div className="space-y-3">
            <div className="rounded-2xl border border-white/[0.08] bg-card/90 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                  <Layers className="h-3.5 w-3.5" />
                  <span>ToothSync · Clinical Operations</span>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                  Google Sheets Synced
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2.5">
                {['Patient Records', 'Appointments', 'Billing & Ledger'].map((mod, idx) => (
                  <div key={mod} className="rounded-xl border border-white/[0.06] bg-elevated/80 p-3">
                    <div className="font-mono text-[10px] text-ink-muted">0{idx + 1}</div>
                    <div className="mt-1 text-xs font-semibold text-ink-primary">{mod}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-elevated/70 px-4 py-2.5 font-mono text-[11px] text-ink-secondary">
              <span>Next.js + TypeScript · Financial Integrity Guards</span>
              <span className="text-accent-cyan">Live</span>
            </div>
          </div>
        )}

        {project.mockupType === 'spring-ai' && (
          <div className="rounded-2xl border border-white/[0.08] bg-card/95 p-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-amber-400">
              <Terminal className="h-3.5 w-3.5" />
              <span>Spring Boot · Spring AI Tool-Calling Loop</span>
            </div>
            <div className="mt-3 space-y-2 text-[11px]">
              <div className="text-ink-secondary">[tool:planSite] Generating component hierarchy...</div>
              <div className="text-emerald-400">[tool:writeFile] sandbox/index.html (validated path)</div>
              <div className="text-emerald-400">[tool:writeFile] sandbox/styles.css (validated path)</div>
              <div className="mt-2 border-t border-white/[0.06] pt-2 text-accent-cyan">
                OpenRouter multi-tool execution complete · Secure FS guard active
              </div>
            </div>
          </div>
        )}

        {project.mockupType === 'vector-search' && (
          <div className="rounded-2xl border border-white/[0.08] bg-card/95 p-4">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-pink-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Spring AI · Semantic Vector Similarity</span>
            </div>
            <div className="mt-3 rounded-xl border border-white/[0.08] bg-elevated/75 px-3.5 py-2.5 font-mono text-xs text-ink-primary">
              Query: "mind-bending sci-fi thriller about time and memory"
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[10px]">
              {[
                { label: 'Cosine 0.94', title: 'Inception' },
                { label: 'Cosine 0.91', title: 'Memento' },
                { label: 'Cosine 0.89', title: 'Interstellar' },
              ].map((m) => (
                <div key={m.title} className="rounded-lg border border-white/[0.06] bg-elevated/60 p-2.5">
                  <div className="text-accent-cyan">{m.label}</div>
                  <div className="mt-0.5 text-xs font-semibold text-ink-primary">{m.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Highlights Strip */}
      <div className="relative z-10 grid gap-2 border-t border-white/[0.08] pt-4 sm:grid-cols-3">
        {project.highlights.map((highlight) => (
          <div key={highlight} className="flex items-start gap-1.5 text-[11px] leading-snug text-ink-secondary">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const reduceMotion = useReducedMotion() ?? false;
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [caseStudyProject, setCaseStudyProject] = useState<ProjectItem | null>(null);

  // Catalogue filter state
  const [showCatalogue, setShowCatalogue] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'az'>('featured');

  useEffect(() => {
    const container = pinSectionRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const trigger = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${featuredProjects.length * 520}`,
        pin: true,
        scrub: 0.4,
        anticipatePin: 1,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          const nextIdx = Math.min(
            featuredProjects.length - 1,
            Math.floor(self.progress * featuredProjects.length),
          );
          setActiveIndex(nextIdx);
        },
      });
      triggerRef.current = trigger;

      return () => {
        trigger.kill();
        triggerRef.current = null;
      };
    });

    return () => mm.revert();
  }, []);

  const handleSelectProject = (idx: number) => {
    setActiveIndex(idx);
    const trigger = triggerRef.current;
    if (trigger) {
      const targetProgress = (idx + 0.12) / featuredProjects.length;
      const targetScroll = trigger.start + (trigger.end - trigger.start) * targetProgress;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const filteredCatalogue = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = allProjects.filter((p) => {
      const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
      const textMatch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q);
      return catMatch && textMatch;
    });

    if (sortBy === 'az') {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === 'newest') {
      return [...list].sort((a, b) => Number(b.year) - Number(a.year));
    }
    return list;
  }, [searchQuery, selectedCategory, sortBy]);

  const activeProject = featuredProjects[activeIndex];

  return (
    <section id="projects" className="relative scroll-mt-20 overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-32">
      <CinematicVideoBackground
        src="/videos/projects-environment.mp4"
        poster="/videos/projects-environment-poster.jpg"
        lighting="cyan-violet"
        overlayOpacity={0.78}
        videoOpacity={0.5}
        crossfadeMs={580}
        enableParallax={false}
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              02 / Featured Engineering Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink-primary sm:text-5xl">
              Production systems,{' '}
              <span className="text-ink-secondary">not weekend demos.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-secondary">
            Six flagship architectures in Java Spring Boot, Spring AI, Next.js, and PostgreSQL — followed by the complete searchable 20-project catalogue.
          </p>
        </ScrollReveal>
      </div>

      {/* DESKTOP: Cinematic Pinned Split-Screen Showcase */}
      <div ref={pinSectionRef} className="relative z-10 hidden lg:block">
        <div className="mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-8 py-16">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {featuredProjects.map((project, idx) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => handleSelectProject(idx)}
                  className={cn(
                    'rounded-full px-3 py-1.5 font-mono text-[11px] transition-all',
                    idx === activeIndex
                      ? 'border border-accent/60 bg-accent/15 text-ink-primary shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                      : 'border border-white/[0.08] bg-card/60 text-ink-muted hover:border-white/[0.16] hover:text-ink-secondary',
                  )}
                >
                  {project.index} · {project.title.split(' ')[0]}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 font-mono text-xs text-ink-muted">
              <span>
                {activeProject.index} / 0{featuredProjects.length}
              </span>
              <div className="h-1 w-24 overflow-hidden rounded-full bg-white/[0.08]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-cyan transition-all duration-150"
                  style={{ width: `${Math.max(14, scrollProgress * 100)}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 items-center gap-10">
            <div className="col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-5"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-accent-cyan">
                    <span>{activeProject.index}</span>
                    <span className="text-white/20">/</span>
                    <span>{activeProject.category}</span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold tracking-[-0.03em] text-ink-primary xl:text-4xl">
                      {activeProject.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                      {activeProject.description}
                    </p>
                  </div>

                  <div className="space-y-3.5 border-y border-white/[0.08] py-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                        Problem Solved
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
                        {activeProject.problem}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                        Architecture & Implementation
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
                        {activeProject.architecture}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.08] bg-card px-2.5 py-1 font-mono text-[11px] text-ink-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setCaseStudyProject(activeProject)}
                      className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/15 px-4 py-2 text-xs font-semibold text-ink-primary transition-colors hover:bg-accent/25"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                    {activeProject.githubUrl && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-xs font-semibold text-ink-primary transition-colors hover:border-white/[0.24] hover:bg-white/[0.1]"
                      >
                        <Github className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {activeProject.demoUrl && (
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-ink-primary px-4 py-2 text-xs font-semibold text-canvas transition-all hover:bg-white hover:shadow-[0_0_24px_rgba(139,92,246,0.3)]"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Tilt3DCard maxTilt={5} className="rounded-3xl border-0 bg-transparent shadow-none">
                    <ProjectPreviewVisual project={activeProject} />
                  </Tilt3DCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE & TABLET: Stacked Flagship Cards */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 lg:hidden">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-3xl border border-white/[0.08] bg-card/90 p-5 sm:p-7"
          >
            <div className="mb-5">
              <ProjectPreviewVisual project={project} />
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-accent-cyan">
              <span>{project.index}</span>
              <span className="text-white/20">/</span>
              <span>{project.category}</span>
            </div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink-primary">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.08] bg-elevated px-2.5 py-1 font-mono text-[11px] text-ink-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => setCaseStudyProject(project)}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-accent/50 bg-accent/15 px-4 py-2 text-xs font-semibold text-ink-primary"
              >
                <span>Case Study</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-xs font-semibold text-ink-primary"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-full bg-ink-primary px-4 py-2 text-xs font-semibold text-canvas"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* COMPLETE SEARCHABLE PROJECT CATALOGUE (20 VERIFIED REPOSITORIES) */}
      <div id="catalogue" className="relative z-10 mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <div className="rounded-3xl border border-white/[0.08] bg-card/70 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                Complete Project Catalogue · {allProjects.length} Verified Repositories
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink-primary sm:text-3xl">
                Search & Filter All Engineering Builds
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setShowCatalogue((v) => !v)}
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 font-mono text-xs text-ink-primary transition-colors hover:border-white/[0.24] md:self-auto"
            >
              {showCatalogue ? 'Collapse Catalogue' : `View All ${allProjects.length} Projects`}
            </button>
          </div>

          {showCatalogue && (
            <div className="mt-6 space-y-6">
              {/* Search + Sort Bar */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1 sm:max-w-md">
                  <Search
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by project, tech stack (Java, Spring AI, Playwright)..."
                    aria-label="Search projects"
                    className="w-full rounded-full border border-white/[0.1] bg-elevated/80 py-2.5 pl-10 pr-4 text-xs text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-ink-muted">Sort:</span>
                  {(['featured', 'newest', 'az'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setSortBy(mode)}
                      className={cn(
                        'rounded-full px-3 py-1.5 font-mono text-[11px] capitalize transition-colors',
                        sortBy === mode
                          ? 'bg-white/[0.12] text-ink-primary'
                          : 'text-ink-muted hover:text-ink-secondary',
                      )}
                    >
                      {mode === 'az' ? 'A–Z' : mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Project categories">
                {projectCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      'rounded-full px-3 py-1.5 font-mono text-[11px] transition-all',
                      selectedCategory === cat
                        ? 'bg-violet-700 text-white shadow-[0_0_18px_rgba(139,92,246,0.35)]'
                        : 'border border-white/[0.08] bg-elevated/60 text-ink-secondary hover:border-white/[0.18] hover:text-ink-primary',
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Catalogue Grid with Interactive 3D Tilt Cards */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredCatalogue.map((project) => (
                  <Tilt3DCard
                    key={project.id}
                    maxTilt={6}
                    glareColor="rgba(139, 92, 246, 0.16)"
                    className="bg-elevated/65"
                  >
                    <article className="group flex h-full flex-col justify-between p-5">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-cyan">
                            {project.category}
                          </span>
                          <span className="font-mono text-[10px] text-ink-muted">{project.year}</span>
                        </div>
                        <h4 className="mt-2 text-base font-semibold tracking-tight text-ink-primary group-hover:text-white">
                          {project.title}
                        </h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-4 space-y-3.5 border-t border-white/[0.06] pt-3.5">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-white/[0.06] bg-card px-2 py-0.5 font-mono text-[10px] text-ink-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
                          <div className="flex items-center gap-3">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-ink-secondary transition-colors hover:text-ink-primary"
                              >
                                <Github className="h-3.5 w-3.5" aria-hidden="true" />
                                <span>Code</span>
                              </a>
                            )}
                            {project.demoUrl && (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-accent-cyan transition-colors hover:text-white"
                              >
                                <span>Live</span>
                                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                              </a>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => setCaseStudyProject(project)}
                            className="font-mono text-[11px] text-accent transition-colors hover:text-purple-200"
                          >
                            Case Study →
                          </button>
                        </div>
                      </div>
                    </article>
                  </Tilt3DCard>
                ))}
              </div>

              {filteredCatalogue.length === 0 && (
                <div className="rounded-2xl border border-white/[0.06] bg-elevated/40 py-10 text-center text-sm text-ink-muted">
                  No projects match "{searchQuery}". Try clearing filters or searching another technology.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Deep-Dive Engineering Case Study Modal */}
      <CaseStudyModal project={caseStudyProject} onClose={() => setCaseStudyProject(null)} />
    </section>
  );
}
