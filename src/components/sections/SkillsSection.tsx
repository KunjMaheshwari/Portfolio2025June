import { skills } from '../../data/portfolio';
import { SectionHeading } from '../SectionHeading';

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for modern product teams."
          description="Frontend craft, backend fundamentals, data persistence, automation, and cloud literacy."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              data-reveal
              className="group rounded-[1.75rem] border border-stroke bg-surface p-5 shadow-soft transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/7"
            >
              <div className="flex items-start justify-between gap-4">
                <skill.icon className="h-7 w-7 text-brand-blue transition group-hover:scale-110" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted dark:text-white/54">{skill.category}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-ink dark:text-white">{skill.name}</h3>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-elevated dark:bg-white/8">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-blue via-system-green to-brand-purple"
                  style={{ width: `${skill.level}%` }}
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-muted dark:text-white/62">{skill.level}% working proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
