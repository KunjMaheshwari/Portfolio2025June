import { FiArrowUpRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolio';
import { SectionHeading } from '../SectionHeading';

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured projects"
          title="Selected work with clear product intent."
          description="Full-stack projects chosen for recruiter signal: scoped problems, modern stacks, and live deployments."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-reveal
              className="group relative overflow-hidden rounded-[2rem] border border-stroke bg-surface p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(5,5,7,0.15)] dark:border-white/10 dark:bg-white/7 dark:hover:shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:p-8"
            >
              <div className="absolute right-0 top-0 h-44 w-44 translate-x-10 translate-y-[-4rem] rounded-full bg-brand-blue/12 blur-3xl transition group-hover:scale-125" aria-hidden="true" />
              <p className="text-sm font-semibold text-brand-blue">{project.eyebrow}</p>
              <div className="mt-16 flex items-end justify-between gap-4">
                <h3 className="max-w-lg text-3xl font-semibold tracking-[-0.04em] text-ink dark:text-white">
                  {project.title}
                </h3>
                <span className="text-6xl font-semibold tracking-[-0.08em] text-ink/5 dark:text-white/8">0{index + 1}</span>
              </div>
              <p className="mt-5 text-base leading-7 text-muted dark:text-white/64">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-elevated px-3 py-1.5 text-xs font-semibold text-muted dark:bg-white/8 dark:text-white/70">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {project.impact.map((item) => (
                  <div key={item} className="rounded-2xl border border-stroke bg-elevated p-4 text-sm font-medium text-ink dark:border-white/8 dark:bg-white/7 dark:text-white">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:bg-white dark:text-black"
                >
                  Live demo <FiArrowUpRight aria-hidden="true" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stroke px-5 py-3 text-sm font-semibold text-ink transition hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:border-white/10 dark:text-white dark:hover:bg-white/8"
                >
                  GitHub <FaGithub aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
