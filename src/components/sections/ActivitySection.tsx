import { Component, useRef, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { FiBookOpen, FiCode, FiExternalLink, FiGitBranch, FiRefreshCw, FiStar, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi';
import { education, experience, profile } from '../../data/portfolio';
import { useCountUp } from '../../hooks/useCountUp';
import { useDeveloperActivity } from '../../hooks/useDeveloperActivity';
import { SectionHeading } from '../SectionHeading';
import { cn } from '../../utils/cn';

type MetricCardProps = {
  label: string;
  value: number | null;
  icon: IconType;
  suffix?: string;
  isInView: boolean;
  delay?: number;
};

type ActivityErrorBoundaryProps = {
  children: ReactNode;
};

type ActivityErrorBoundaryState = {
  hasError: boolean;
};

class ActivityErrorBoundary extends Component<ActivityErrorBoundaryProps, ActivityErrorBoundaryState> {
  state: ActivityErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ActivityErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section id="activity" className="section-shell">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Developer Activity"
              title="Developer activity is temporarily unavailable."
              description="Use the verified public profiles below for the latest activity."
            />
            <div className="rounded-[2rem] border border-stroke bg-surface/78 p-6 text-sm text-muted shadow-[0_18px_50px_rgba(5,5,7,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:text-white/62">
              <a href={profile.github} target="_blank" rel="noreferrer" className="font-semibold text-brand-blue hover:opacity-80">
                View GitHub profile
              </a>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

function MetricCard({ label, value, icon: Icon, suffix = '', isInView, delay = 0 }: MetricCardProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const animatedValue = useCountUp({ end: value ?? 0, shouldStart: isInView && value !== null && !reduceMotion, delay });

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 shadow-[0_18px_50px_rgba(2,6,23,0.1)] backdrop-blur-2xl dark:bg-white/6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted dark:text-white/46">{label}</p>
          <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.06em] text-ink dark:text-white sm:text-4xl">
            {value === null ? '—' : `${animatedValue}${suffix}`}
          </p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-stroke bg-surface/80 text-brand-blue dark:border-white/10 dark:bg-white/8">
          <Icon aria-hidden={true} className="h-5 w-5" />
        </span>
      </div>
    </motion.div>
  );
}

function StatePill({ label, status }: { label: string; status: 'ready' | 'fallback' | 'loading' }) {
  const tone =
    status === 'ready'
      ? 'text-system-green border-system-green/20 bg-system-green/10'
      : status === 'fallback'
        ? 'text-brand-blue border-brand-blue/20 bg-brand-blue/10'
        : 'text-muted border-stroke bg-elevated dark:border-white/10 dark:bg-white/8';

  return (
    <span className={cn('inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]', tone)}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

function GraphPanel({ status, profileUrl }: { status: 'ready' | 'fallback' | 'loading'; profileUrl: string }) {
  return (
    <div className="rounded-[1.8rem] border border-stroke bg-surface/78 p-4 shadow-[0_18px_50px_rgba(5,5,7,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue">Contribution activity</p>
          <p className="mt-2 text-sm text-muted dark:text-white/62">Contribution data is not scraped in the browser.</p>
        </div>
        <StatePill label={status} status={status} />
      </div>
      <div className="rounded-[1.6rem] border border-stroke bg-surface/78 p-4 dark:border-white/10 dark:bg-white/6">
        <a
          href={profileUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
        >
          View GitHub activity <FiExternalLink aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function LeetCodeBar({ label, value, total, isInView, delay }: { label: string; value: number | null; total: number; isInView: boolean; delay: number }) {
  const reduceMotion = useReducedMotion() ?? false;
  const animatedValue = useCountUp({ end: value ?? 0, shouldStart: isInView && value !== null && !reduceMotion, delay });
  const width = value === null ? '0%' : `${Math.max(8, Math.round((animatedValue / Math.max(total, 1)) * 100))}%`;

  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="text-muted dark:text-white/62">{label}</span>
        <span className="font-semibold text-ink dark:text-white">{value === null ? '—' : animatedValue}</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-elevated dark:bg-white/8">
        <motion.div
          initial={false}
          animate={{ width }}
          transition={reduceMotion ? { duration: 0 } : { duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay }}
          className="h-full rounded-full bg-[linear-gradient(90deg,#0A84FF,#BF5AF2,#30D158)]"
        />
      </div>
    </div>
  );
}

function ActivitySectionContent() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20% 0px -15% 0px' });
  const reduceMotion = useReducedMotion() ?? false;
  const activity = useDeveloperActivity();
  const leetcodeUsername = profile.leetcodeUsername ?? profile.githubUsername ?? '';
  const leetcodeProfileUrl = `https://leetcode.com/${encodeURIComponent(leetcodeUsername)}/`;

  return (
    <section id="activity" ref={sectionRef} className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Developer Activity"
          title="Live engineering signal, presented like a product analytics dashboard."
          description="GitHub profile counts load when available, while detailed public activity links directly to the source profiles."
        />

        {/* Experience Timeline */}
        <div className="mb-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.94] to-white/[0.76] p-8 shadow-[0_30px_95px_rgba(2,6,23,0.1)] backdrop-blur-xl dark:from-black/[0.16] dark:to-black/[0.12]">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h3 className="text-lg font-semibold tracking-[0.05em] text-brand-blue uppercase">Experience Timeline</h3>
            <span className="rounded-full border border-stroke bg-surface/72 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted dark:border-white/10 dark:bg-white/8 dark:text-white/56">Live data</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="relative">
              {/* Vertical Line */}
              <svg className="absolute left-4 top-3 h-[calc(100%-6rem)] w-px -z-10 bg-gradient-to-b from-brand-blue via-brand-purple to-system-green" />

              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.7 }}
                >
                  <div className="relative flex items-start gap-6 rounded-[2rem] border border-stroke bg-white/[0.84] p-6 shadow-lg backdrop-blur-xl dark:border-black/15 dark:bg-black/[0.08]">
                    {/* Timeline Dot */}
                    <div className="absolute left-3 top-7 flex h-6 w-6 items-center justify-center rounded-full border-[2px] bg-gradient-to-br from-brand-blue to-brand-purple shadow-md ring-4 ring-white dark:ring-black/10" />

                    <div className="flex-1">
                      <span className="mb-3 inline-flex min-h-7 items-center gap-2 rounded-full border border-stroke bg-surface/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] dark:border-white/10 dark:bg-white/8">
                        {exp.period}
                      </span>

                      <h4 className="text-xl font-bold tracking-[-0.05em] text-ink">{exp.title}</h4>
                      <p className="mt-1 text-sm font-medium text-muted dark:text-white/62">{exp.company}, {exp.location}</p>

                      <div className="mt-5 flex flex-wrap gap-3">
                        {exp.tags.map((tag, i) => (
                          <span key={i} className="rounded-full border border-stroke bg-surface/74 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] dark:border-white/8 dark:bg-black/[0.06]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <ul className="mt-5 space-y-3">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm leading-6 text-muted dark:text-white/70">
                            <FiTrendingUp className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Progress Bar */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                      className="h-px w-full rounded-[999px] bg-gradient-to-r from-brand-blue via-brand-purple to-system-green"
                    />

                    {/* Completion Dot */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] bg-white dark:border-black/10">
                      <FiTrendingUp className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education Section */}
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + experience.length) * 0.15, duration: 0.7 }}
              >
                <div className="relative flex items-start gap-6 rounded-[2rem] border border-stroke bg-white/[0.84] p-6 shadow-lg backdrop-blur-xl dark:border-black/15 dark:bg-black/[0.08]">
                  {/* Timeline Dot */}
                  <div className="absolute left-3 top-7 flex h-6 w-6 items-center justify-center rounded-full border-[2px] bg-gradient-to-br from-brand-purple to-system-green shadow-md ring-4 ring-white dark:ring-black/10" />

                  <div className="flex-1">
                    <span className="mb-3 inline-flex min-h-7 items-center gap-2 rounded-full border border-stroke bg-surface/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] dark:border-white/10 dark:bg-white/8">
                      {edu.period}
                    </span>

                    <h4 className="text-xl font-bold tracking-[-0.05em] text-ink">{edu.degree}</h4>
                    <p className="mt-1 text-sm font-medium text-muted dark:text-white/62">{edu.school}, CGPA {edu.detail.split(' ')[1]}</p>

                    <div className="mt-5 flex items-center gap-3 rounded-[1.8rem] border border-stroke bg-surface/74 p-4">
                      <FiStar className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                      <span className="text-sm font-semibold tracking-wide dark:text-white/80">{edu.detail}</span>
                    </div>

                    {/* Progress Bar */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + experience.length) * 0.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                      className="h-px w-full rounded-[999px] bg-gradient-to-r from-brand-purple via-system-green to-transparent"
                    />

                    {/* Completion Dot */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] bg-white dark:border-black/10">
                      <FiStar className="h-4 w-4 text-brand-purple" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Auto-sync Banner */}
            <div className="mt-8 rounded-[1.6rem] border border-stroke bg-surface/72 px-5 py-4 text-sm shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-black/[0.06]">
              <span>GitHub profile counts refresh when available. Detailed activity remains on the source profiles.</span>
              <div className="mt-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted dark:text-white/54">
                <FiRefreshCw aria-hidden="true" />
                {activity.lastUpdated ? `Last updated ${new Date(activity.lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : 'Syncing live data'}
              </div>
            </div>

          </motion.div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.article
            data-reveal
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            whileHover={reduceMotion ? undefined : { y: -6 }}
            className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/8 p-6 shadow-[0_28px_90px_rgba(2,6,23,0.12)] backdrop-blur-2xl dark:bg-white/6 dark:shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-7"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(10,132,255,0.16),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(191,90,242,0.14),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.1),transparent_36%,rgba(255,255,255,0.04)_74%,transparent)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <StatePill label={activity.github.status} status={activity.github.status} />
                  <div className="mt-5 flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-stroke bg-surface/80 text-brand-blue dark:border-white/10 dark:bg-white/8">
                      <FaGithub aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-3xl font-semibold tracking-[-0.06em] text-ink dark:text-white">GitHub</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-muted dark:text-white/62">
                        Public repository and follower counts from GitHub’s supported profile API.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-full border border-stroke bg-elevated px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted dark:border-white/10 dark:bg-white/8 dark:text-white/50">
                  {profile.githubUsername}
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <MetricCard label="Repositories" value={activity.github.repoCount} icon={FiBookOpen} isInView={isInView} delay={0.04} />
                <MetricCard label="Followers" value={activity.github.followers} icon={FiUsers} isInView={isInView} delay={0.08} />
                <MetricCard label="Stars" value={activity.github.stars} icon={FiStar} isInView={isInView} delay={0.12} />
                <MetricCard label="Contributions" value={activity.github.contributions} icon={FiGitBranch} isInView={isInView} delay={0.16} />
              </div>

              <div className="mt-6">
                <GraphPanel status={activity.github.status} profileUrl={profile.github} />
              </div>

              {activity.github.message ? (
                <div className="mt-4 rounded-[1.4rem] border border-stroke bg-surface/80 px-4 py-3 text-sm text-muted dark:border-white/10 dark:bg-white/6 dark:text-white/62">
                  <p>{activity.github.message}</p>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 font-semibold text-brand-blue hover:opacity-80">
                    View GitHub profile <FiExternalLink aria-hidden="true" />
                  </a>
                </div>
              ) : null}
            </div>
          </motion.article>

          <motion.article
            data-reveal
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.08 }}
            whileHover={reduceMotion ? undefined : { y: -6 }}
            className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/8 p-6 shadow-[0_28px_90px_rgba(2,6,23,0.12)] backdrop-blur-2xl dark:bg-white/6 dark:shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-7"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(10,132,255,0.16),transparent_28%),radial-gradient(circle_at_18%_0%,rgba(48,209,88,0.14),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.1),transparent_36%,rgba(255,255,255,0.04)_74%,transparent)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <StatePill label={activity.leetcode.status} status={activity.leetcode.status} />
                  <div className="mt-5 flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-stroke bg-surface/80 text-brand-blue dark:border-white/10 dark:bg-white/8">
                      <FiCode aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-3xl font-semibold tracking-[-0.06em] text-ink dark:text-white">LeetCode</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-muted dark:text-white/62">
                        Live statistics are not scraped; use the configured public profile for current activity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-full border border-stroke bg-elevated px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted dark:border-white/10 dark:bg-white/8 dark:text-white/50">
                  {profile.leetcodeUsername}
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <MetricCard label="Problems solved" value={activity.leetcode.solved} icon={FiTrendingUp} isInView={isInView} delay={0.04} />
                <MetricCard label="Contest rating" value={activity.leetcode.contestRating} icon={FiZap} isInView={isInView} delay={0.08} />
              </div>

              <div className="mt-6 grid gap-4 rounded-[1.8rem] border border-stroke bg-surface/78 p-5 dark:border-white/10 dark:bg-white/6">
                <LeetCodeBar label="Easy" value={activity.leetcode.easy} total={activity.leetcode.solved ?? 1} isInView={isInView} delay={0.03} />
                <LeetCodeBar label="Medium" value={activity.leetcode.medium} total={activity.leetcode.solved ?? 1} isInView={isInView} delay={0.06} />
                <LeetCodeBar label="Hard" value={activity.leetcode.hard} total={activity.leetcode.solved ?? 1} isInView={isInView} delay={0.09} />
              </div>

              {activity.leetcode.message ? (
                <div className="mt-4 rounded-[1.4rem] border border-stroke bg-surface/80 px-4 py-3 text-sm text-muted dark:border-white/10 dark:bg-white/6 dark:text-white/62">
                  <p>{activity.leetcode.message}</p>
                  <a href={leetcodeProfileUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 font-semibold text-brand-blue hover:opacity-80">
                    View LeetCode profile <FiExternalLink aria-hidden="true" />
                  </a>
                </div>
              ) : null}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export function ActivitySection() {
  return (
    <ActivityErrorBoundary>
      <ActivitySectionContent />
    </ActivityErrorBoundary>
  );
}
