import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaAws, FaCode, FaCogs, FaRobot } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { SectionHeading } from '../SectionHeading';
import { useCountUp } from '../../hooks/useCountUp';
import { cn } from '../../utils/cn';

type ImpactCardProps = {
  eyebrow: string;
  label: string;
  value: number;
  suffix?: string;
  icon: typeof FaAws;
  accent: string;
  delay: number;
  formatValue?: (value: number) => string;
};

function ImpactCard({ eyebrow, label, value, suffix = '', icon: Icon, accent, delay, formatValue }: ImpactCardProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const animatedValue = useCountUp({ end: value, shouldStart: !reduceMotion, delay, duration: 1.5 });

  return (
    <motion.div
      data-reveal
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1], delay }}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
      className={cn(
        'group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_24px_90px_rgba(2,6,23,0.14)] backdrop-blur-2xl transition-transform dark:bg-white/6 dark:shadow-[0_24px_90px_rgba(0,0,0,0.34)]',
        'before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_35%,rgba(255,255,255,0.04)_75%,transparent)] before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100',
      )}
    >
      <div className={cn('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', accent)} />
      <div className="relative flex items-start justify-between gap-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-muted dark:text-white/46">{eyebrow}</p>
          <div className="mt-5 flex items-baseline gap-2">
            <span className="font-display text-5xl font-semibold tracking-[-0.08em] text-ink dark:text-white sm:text-6xl">
              {formatValue ? formatValue(animatedValue) : `${animatedValue}`}
            </span>
            {suffix ? <span className="pb-1 text-lg font-semibold text-brand-blue">{suffix}</span> : null}
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted dark:text-white/64">{label}</p>
        </div>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-stroke bg-surface/84 text-brand-blue shadow-[0_18px_40px_rgba(10,132,255,0.14)] dark:border-white/10 dark:bg-white/8">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
      </div>
    </motion.div>
  );
}

type BadgeCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: typeof FaAws;
  accent: string;
  delay: number;
};

type ImpactCardDefinition = Omit<ImpactCardProps, 'delay' | 'formatValue'> & { type: 'count' };
type BadgeCardDefinition = Omit<BadgeCardProps, 'delay'> & { type: 'badge' };

function BadgeCard({ eyebrow, title, description, icon: Icon, accent, delay }: BadgeCardProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      data-reveal
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1], delay }}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_24px_90px_rgba(2,6,23,0.14)] backdrop-blur-2xl dark:bg-white/6 dark:shadow-[0_24px_90px_rgba(0,0,0,0.34)]"
    >
      <div className={cn('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', accent)} />
      <div className="relative flex h-full flex-col justify-between gap-5">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-muted dark:text-white/46">{eyebrow}</p>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-ink dark:text-white">{title}</h3>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-stroke bg-surface/84 text-brand-blue shadow-[0_18px_40px_rgba(10,132,255,0.14)] dark:border-white/10 dark:bg-white/8">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
        </div>
        <p className="max-w-xs text-sm leading-6 text-muted dark:text-white/64">{description}</p>
      </div>
    </motion.div>
  );
}

const launchVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export function EngineeringImpactSection() {
  const reduceMotion = useReducedMotion() ?? false;

  const cards = useMemo(
    (): Array<ImpactCardDefinition | BadgeCardDefinition> => [
      { type: 'count', eyebrow: 'Performance signal', value: 500, suffix: '+', label: 'DSA Problems Solved', icon: FaCode, accent: 'from-brand-blue via-brand-purple to-system-green' },
      { type: 'count', eyebrow: 'Delivery signal', value: 4, suffix: '+', label: 'Production Projects', icon: FaCogs, accent: 'from-system-green via-brand-blue to-brand-purple' },
      { type: 'badge', eyebrow: 'Cloud signal', title: 'AWS Certified Cloud Practitioner', description: 'Evidence of cloud fundamentals, architecture literacy, and deployment readiness.', icon: FaAws, accent: 'from-brand-blue via-sky-400 to-cyan-300' },
      { type: 'badge', eyebrow: 'Builder signal', title: 'AI Application Builder', description: 'Shipping AI-driven interfaces and practical automation experiences.', icon: FaRobot, accent: 'from-brand-purple via-fuchsia-400 to-brand-blue' },
      { type: 'badge', eyebrow: 'Role signal', title: 'Cognizant Programmer Analyst Trainee', description: 'Enterprise delivery mindset with product engineering habits.', icon: FaCogs, accent: 'from-slate-400 via-brand-blue to-brand-purple' },
      { type: 'count', eyebrow: 'Execution signal', value: 100, suffix: '%', label: 'Automation Execution Success', icon: FaRobot, accent: 'from-system-green via-emerald-400 to-brand-blue' },
    ],
    [],
  );

  return (
    <section id="engineering-impact" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Engineering Impact"
          title="Immediate credibility for recruiters who want signal, not noise."
          description="A launch-page style snapshot of output, certification, and execution strength designed to read like a premium product story."
        />

        <motion.div
          variants={launchVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {cards.map((card, index) =>
            card.type === 'count' ? (
              <ImpactCard
                key={`${card.label}-${card.value}`}
                eyebrow={card.eyebrow}
                label={card.label}
                value={card.value}
                suffix={card.suffix}
                icon={card.icon}
                accent={card.accent}
                delay={reduceMotion ? 0 : index * 0.08}
                formatValue={(count) => `${count}`}
              />
            ) : (
              <BadgeCard
                key={card.title}
                eyebrow={card.eyebrow}
                title={card.title}
                description={card.description}
                icon={card.icon}
                accent={card.accent}
                delay={reduceMotion ? 0 : index * 0.08}
              />
            ),
          )}
        </motion.div>

        <motion.div
          data-reveal
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.12 }}
          className="mt-6 flex items-center justify-between rounded-[2rem] border border-stroke bg-surface/72 px-5 py-4 text-sm text-muted shadow-[0_18px_50px_rgba(5,5,7,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:text-white/64"
        >
          <span>Scroll-reveal cards, mouse hover lift, and motion-safe animations are enabled.</span>
          <a href="#projects" className="inline-flex items-center gap-2 font-semibold text-brand-blue transition hover:opacity-80">
            View projects <FiArrowRight aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
