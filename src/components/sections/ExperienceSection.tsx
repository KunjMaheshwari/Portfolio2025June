import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../../data/portfolio';
import { SectionHeading } from '../SectionHeading';

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Training to enterprise execution."
          description="A concise timeline centered on Java, backend fundamentals, and agile delivery."
        />

        <div className="relative">
          <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-stroke dark:bg-white/10 md:block" aria-hidden="true" />
          <div className="space-y-5">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.title}`}
                data-reveal
                className="relative rounded-[2rem] border border-stroke bg-surface p-6 shadow-soft dark:border-white/10 dark:bg-white/7 md:ml-12 sm:p-8"
              >
                <div className="absolute -left-[3.25rem] top-8 hidden h-9 w-9 place-items-center rounded-full border border-stroke bg-bg text-brand-blue shadow-soft dark:border-white/10 dark:bg-black md:grid">
                  <FiBriefcase aria-hidden="true" />
                </div>
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                  <div>
                    <p className="text-sm font-semibold text-brand-blue">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink dark:text-white">{item.title}</h3>
                    <p className="mt-1 text-muted dark:text-white/62">{item.company} / {item.location}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-stroke px-3 py-1 text-xs font-semibold text-muted dark:border-white/10 dark:text-white/64">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted dark:text-white/66 sm:grid-cols-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-2xl bg-elevated p-4 dark:bg-white/7">{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
