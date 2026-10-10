import { FiMapPin, FiTarget, FiZap } from 'react-icons/fi';
import { education, metrics, profile } from '../../data/portfolio';
import { SectionHeading } from '../SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering discipline with product taste."
          description="A recruiter-friendly snapshot of how I think, build, and grow."
        />

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-reveal className="rounded-[2rem] border border-stroke bg-surface p-6 shadow-soft dark:border-white/10 dark:bg-white/7 sm:p-8">
            <p className="text-lg leading-8 text-muted dark:text-white/68">{profile.summary}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: FiTarget, title: 'Focus', text: 'Backend correctness, frontend polish, and measurable performance.' },
                { icon: FiZap, title: 'Strength', text: 'Fast learner across Java, cloud fundamentals, and MERN delivery.' },
                { icon: FiMapPin, title: 'Location', text: profile.location },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-stroke bg-elevated p-5 dark:border-white/8 dark:bg-white/7">
                  <item.icon className="mb-5 h-5 w-5 text-brand-blue" aria-hidden="true" />
                  <h3 className="font-semibold text-ink dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted dark:text-white/62">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="grid gap-5">
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-stroke bg-surface p-5 shadow-soft dark:border-white/10 dark:bg-white/7">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-ink dark:text-white">{metric.value}</p>
                  <p className="mt-2 text-sm leading-5 text-muted dark:text-white/62">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[2rem] border border-stroke bg-ink p-6 text-white shadow-soft dark:border-white/10 dark:bg-white dark:text-black">
              <h3 className="text-lg font-semibold tracking-[-0.02em]">Education</h3>
              <div className="mt-5 space-y-4">
                {education.map((item) => (
                  <div key={item.degree} className="border-t border-white/12 pt-4 first:border-t-0 first:pt-0 dark:border-black/10">
                    <p className="font-semibold">{item.degree}</p>
                    <p className="mt-1 text-sm opacity-70">{item.school}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] opacity-60">
                      {item.period} / {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
