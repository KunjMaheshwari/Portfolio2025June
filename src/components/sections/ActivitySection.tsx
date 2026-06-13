import { FiCode, FiGitBranch, FiStar, FiTrendingUp } from 'react-icons/fi';
import { activity } from '../../data/portfolio';
import { SectionHeading } from '../SectionHeading';

const codeStats = [
  { icon: FiCode, label: 'Primary focus', value: 'Java + React systems' },
  { icon: FiGitBranch, label: 'Workflow', value: 'GitHub-first delivery' },
  { icon: FiTrendingUp, label: 'Signal', value: 'Consistent upskilling' },
  { icon: FiStar, label: 'Strength', value: 'Automation mindset' },
];

export function ActivitySection() {
  return (
    <section id="activity" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Coding activity"
          title="Readable public signal without vanity metrics."
          description="A clean overview of engineering activity, project presence, and professional channels."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal className="rounded-[2rem] border border-stroke bg-ink p-6 text-white shadow-soft dark:border-white/10 dark:bg-white dark:text-black sm:p-8">
            <h3 className="text-2xl font-semibold tracking-[-0.035em]">Engineering signal</h3>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {codeStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/12 bg-white/8 p-5 dark:border-black/10 dark:bg-black/[0.04]">
                  <stat.icon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] opacity-55">{stat.label}</p>
                  <p className="mt-2 font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {activity.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                data-reveal
                className="group rounded-[2rem] border border-stroke bg-surface p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:border-white/10 dark:bg-white/7 dark:hover:bg-white/10 sm:p-8"
              >
                <item.icon className="h-9 w-9 text-brand-blue transition group-hover:scale-110" aria-hidden="true" />
                <p className="mt-10 text-sm font-semibold text-brand-blue">{item.label}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-ink dark:text-white">{item.value}</h3>
                <p className="mt-4 text-sm leading-6 text-muted dark:text-white/62">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
