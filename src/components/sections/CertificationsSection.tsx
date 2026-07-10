import type { IconType } from 'react-icons';
import { motion, useReducedMotion } from 'framer-motion';
import { FaAws } from 'react-icons/fa';
import { FiArrowUpRight, FiShield, FiAward } from 'react-icons/fi';
import { certifications } from '../../data/portfolio';
import { SectionHeading } from '../SectionHeading';

type CertificationRecord = (typeof certifications)[number];

function CertificationBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue backdrop-blur-2xl dark:bg-white/6">
      <FiShield aria-hidden="true" />
      {label}
    </span>
  );
}

type CertificationCardProps = {
  cert: CertificationRecord;
  index: number;
};

function CertificationCard({ cert, index }: CertificationCardProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const hasVerification = Boolean(cert.verificationLink);
  const Icon = cert.icon as IconType;

  return (
    <motion.article
      data-reveal
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/8 p-6 shadow-[0_26px_90px_rgba(2,6,23,0.12)] backdrop-blur-2xl dark:bg-white/6 dark:shadow-[0_26px_90px_rgba(0,0,0,0.34)] sm:p-7"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_32%,rgba(255,255,255,0.04)_72%,transparent)] opacity-80" />
      <div className="absolute right-[-3rem] top-[-3rem] h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.18),transparent_70%)] blur-3xl transition duration-700 group-hover:scale-110" />

      <div className="relative flex h-full flex-col justify-between gap-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <CertificationBadge label={cert.badge || 'Verified'} />
            <div className="mt-5 flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-stroke bg-surface/80 text-brand-blue shadow-[0_18px_40px_rgba(10,132,255,0.12)] dark:border-white/10 dark:bg-white/8">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.05em] text-ink dark:text-white">{cert.title}</h3>
                <p className="mt-2 text-sm font-medium text-muted dark:text-white/62">{cert.issuer}</p>
              </div>
            </div>
          </div>
          <span className="rounded-full border border-stroke bg-elevated px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted dark:border-white/10 dark:bg-white/8 dark:text-white/50">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[1.35rem] border border-stroke bg-surface/80 p-4 text-sm leading-6 text-muted dark:border-white/10 dark:bg-white/7 dark:text-white/68">
            Apple-style presentation for recruiter readability.
          </div>
          <div className="rounded-[1.35rem] border border-stroke bg-surface/80 p-4 text-sm leading-6 text-muted dark:border-white/10 dark:bg-white/7 dark:text-white/68">
            Certification badge, verification support, and hover motion included.
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {hasVerification ? (
            <a
              href={cert.verificationLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(5,5,7,0.18)] transition hover:-translate-y-0.5 hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:bg-white dark:text-black"
            >
              Verification link <FiArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stroke bg-surface/78 px-5 py-3 text-sm font-semibold text-muted dark:border-white/10 dark:bg-white/8 dark:text-white/54">
              Verification pending <FiAward aria-hidden="true" />
            </span>
          )}
          <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stroke bg-surface/78 px-5 py-3 text-sm font-semibold text-muted dark:border-white/10 dark:bg-white/8 dark:text-white/54">
            Badge displayed for credibility <FiShield aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Premium certification cards with verification support."
          description="A polished credentials section that helps recruiters verify cloud, support, and AI-oriented learning at a glance."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
