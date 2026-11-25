import { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Cpu, Github, Layers, ShieldCheck, X } from 'lucide-react';
import type { ProjectItem } from '../../data/projects';

type CaseStudyModalProps = {
  project: ProjectItem | null;
  onClose: () => void;
};

/**
 * Accessible deep-dive Engineering Case Study drawer/modal.
 * Keeps the homepage clean while giving FAANG recruiters & engineers
 * full problem, solution, architecture, decisions, and challenges context.
 */
export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-canvas/85 backdrop-blur-md"
          />

          {/* Modal Surface */}
          <motion.div
            data-lenis-prevent
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/[0.12] bg-secondary p-6 shadow-dock sm:p-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
              <div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-accent-cyan">
                  <span>CASE STUDY</span>
                  <span className="text-white/20">/</span>
                  <span>{project.category}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-ink-muted">{project.year}</span>
                </div>
                <h3
                  id="case-study-title"
                  className="mt-2 text-2xl font-bold tracking-tight text-ink-primary sm:text-3xl"
                >
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-secondary">{project.tagline}</p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-ink-secondary transition-colors hover:border-white/[0.25] hover:text-ink-primary"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Case Study Sections */}
            <div className="mt-6 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.08] bg-card/90 p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    Problem Statement
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink-secondary sm:text-sm">
                    {project.problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-card/90 p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-cyan">
                    Solution Delivered
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink-secondary sm:text-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-card/90 p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-cyan">
                  <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>System Architecture</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {project.architecture}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.08] bg-card/90 p-4">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Key Engineering Decisions</span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {(project.engineeringDecisions ?? project.highlights).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-ink-secondary">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-card/90 p-4">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Challenges & Reliability</span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {(project.challengesSolved ?? project.highlights).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-ink-secondary">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                  Technology Stack
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.1] bg-elevated px-3 py-1 font-mono text-xs text-ink-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
                <div className="flex flex-wrap items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.05] px-4 py-2 text-xs font-semibold text-ink-primary transition-colors hover:border-white/[0.28]"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      <span>GitHub Repository</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink-primary px-4 py-2 text-xs font-semibold text-canvas transition-all hover:bg-white"
                    >
                      <span>Live Deployment</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="font-mono text-xs text-ink-muted hover:text-ink-primary"
                >
                  Close (Esc)
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
