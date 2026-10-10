import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaCode, FaLayerGroup, FaUsers } from 'react-icons/fa';
import { FiBriefcase, FiCheckCircle, FiChevronDown } from 'react-icons/fi';
import { experience } from '../../data/portfolio';
import { SectionHeading } from '../SectionHeading';

type TimelineMilestone = {
  label: string;
  value: string;
  icon: typeof FiBriefcase;
};

type TimelinePointProps = {
  title: string;
  detail: string;
  icon: typeof FiBriefcase;
  accent: string;
  delay: number;
};

function TimelinePoint({ title, detail, icon: Icon, accent, delay }: TimelinePointProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      data-reveal
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay }}
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
      className="group relative rounded-[2rem] border border-white/10 bg-surface/78 p-5 shadow-[0_20px_70px_rgba(5,5,7,0.08)] backdrop-blur-2xl dark:bg-white/7 dark:shadow-[0_20px_70px_rgba(0,0,0,0.28)] sm:p-6"
    >
      <div className={`absolute inset-x-0 top-0 h-1 rounded-t-[2rem] bg-gradient-to-r ${accent}`} />
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-stroke bg-bg text-brand-blue shadow-soft dark:border-white/10 dark:bg-black/20">
          <Icon aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink dark:text-white">{title}</h3>
            <span className="rounded-full border border-stroke bg-elevated px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted dark:border-white/10 dark:bg-white/8 dark:text-white/54">
              Current role
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-muted dark:text-white/62">{detail}</p>
        </div>
      </div>
    </motion.div>
  );
}

function MilestoneCard({ label, value, icon: Icon }: TimelineMilestone) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-2xl dark:bg-white/6">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-stroke bg-surface/84 text-brand-blue dark:border-white/10 dark:bg-white/8">
          <Icon aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted dark:text-white/48">{label}</p>
          <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-ink dark:text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const reduceMotion = useReducedMotion() ?? false;
  const highlights = useMemo(
    () => [
      { label: 'Team leadership', value: 'Led 6 engineers', icon: FaUsers },
      { label: 'Framework delivery', value: 'Selenium automation', icon: FaLayerGroup },
      { label: 'Execution quality', value: '100% success', icon: FiCheckCircle },
      { label: 'Backend depth', value: 'Java + JDBC', icon: FaCode },
    ],
    [],
  );

  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="A vertical timeline built like an Apple product story."
          description="One premium experience narrative that emphasizes leadership, automation delivery, and engineering credibility."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="relative">
            <div className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-blue via-brand-purple to-transparent md:block" aria-hidden="true" />
            <motion.div
              aria-hidden="true"
              className="absolute left-[1.3rem] top-2 hidden h-8 w-8 rounded-full border border-brand-blue/30 bg-brand-blue/10 shadow-[0_0_0_10px_rgba(10,132,255,0.06)] md:block"
              initial={reduceMotion ? false : { scale: 0.8, opacity: 0.2 }}
              whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            />
            <div className="space-y-5 md:pl-14">
              <TimelinePoint
                title={experience[0].title}
                detail={`${experience[0].company} / ${experience[0].location} · ${experience[0].period}`}
                icon={FiBriefcase}
                accent="from-brand-blue via-brand-purple to-system-green"
                delay={0}
              />

              <motion.article
                data-reveal
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.08 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink p-6 text-white shadow-[0_28px_90px_rgba(5,5,7,0.22)] dark:border-white/10 dark:bg-white dark:text-black sm:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(10,132,255,0.24),transparent_26%),radial-gradient(circle_at_88%_0%,rgba(191,90,242,0.16),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_58%)] dark:bg-[radial-gradient(circle_at_12%_14%,rgba(10,132,255,0.16),transparent_26%),radial-gradient(circle_at_88%_0%,rgba(191,90,242,0.12),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.35),transparent_58%)]" />
                <div className="relative flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/58 dark:text-black/54">Cognizant</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">Programmer Analyst Trainee</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 dark:text-black/68">
                      Delivering automation solutions, backend stability, and team-level execution with product-minded discipline.
                    </p>
                  </div>
                  <div className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/78 backdrop-blur-xl dark:border-black/10 dark:bg-black/5 dark:text-black/68">
                    Aug 2025 - Present
                  </div>
                </div>

                <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    'Led a team of 6 engineers',
                    'Built Selenium automation frameworks',
                    'Achieved 100% automation execution',
                    'Strong Java and JDBC expertise',
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.55, delay: 0.08 + index * 0.05 }}
                      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                      className="rounded-[1.35rem] border border-white/10 bg-white/8 px-4 py-4 text-sm font-medium leading-6 text-white/84 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-black/10 dark:bg-black/5 dark:text-black/78"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className="relative mt-6 flex items-center gap-3 text-sm font-medium text-white/66 dark:text-black/66">
                  <FiChevronDown aria-hidden="true" />
                  Scroll for the supporting impact stack
                </div>
              </motion.article>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <MilestoneCard key={item.label} {...item} />
              ))}
            </div>

            <motion.div
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.12 }}
              className="relative overflow-hidden rounded-[2rem] border border-stroke bg-surface/78 p-6 shadow-[0_24px_90px_rgba(5,5,7,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,132,255,0.12),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(191,90,242,0.1),transparent_22%)]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-blue">Execution summary</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {experience[0].bullets.map((bullet) => (
                    <div key={bullet} className="rounded-[1.35rem] border border-stroke bg-elevated p-4 text-sm leading-6 text-muted dark:border-white/10 dark:bg-white/7 dark:text-white/68">
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay: 0.16 }}
              className="rounded-[1.75rem] border border-stroke bg-surface/78 p-4 shadow-[0_18px_50px_rgba(5,5,7,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted dark:text-white/62">
                <span>Animated progression line, staggered reveal, and hover lift are enabled.</span>
                <span className="rounded-full border border-stroke px-3 py-1 font-semibold text-ink dark:border-white/10 dark:text-white">Apple storytelling style</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
