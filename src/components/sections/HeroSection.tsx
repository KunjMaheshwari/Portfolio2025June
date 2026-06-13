import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight, FiExternalLink, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../../data/portfolio';
import { MagneticButton } from '../MagneticButton';

const HeroCanvas = lazy(() => import('../HeroCanvas').then((module) => ({ default: module.HeroCanvas })));

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(10,132,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.88)_92%)] dark:bg-[radial-gradient(circle_at_50%_10%,rgba(41,151,255,0.22),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.96)_92%)]" />
      <div className="absolute right-[-18rem] top-20 h-[40rem] w-[40rem] rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      <Suspense fallback={<div className="absolute inset-0" aria-hidden="true" />}>
        <HeroCanvas />
      </Suspense>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex rounded-full border border-stroke bg-surface/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-white/8"
          >
            FAANG-ready software portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-balance text-5xl font-semibold tracking-[-0.055em] text-ink sm:text-7xl lg:text-[6.6rem] lg:leading-[0.9] dark:text-white"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-6 max-w-3xl text-balance text-xl font-medium leading-8 tracking-[-0.02em] text-muted sm:text-2xl sm:leading-9 dark:text-white/68"
          >
            {profile.headline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton href="#projects">
              View featured work <FiArrowDownRight aria-hidden="true" />
            </MagneticButton>
            <MagneticButton href={`mailto:${profile.email}`} variant="secondary">
              Contact me <FiMail aria-hidden="true" />
            </MagneticButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Core technologies"
          >
            {profile.signal.map((item) => (
              <span
                key={item}
                className="rounded-full border border-stroke bg-surface/70 px-3 py-1.5 text-sm font-medium text-muted backdrop-blur-xl dark:border-white/10 dark:bg-white/8 dark:text-white/70"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18 }}
          className="relative mx-auto w-full max-w-md lg:mr-0"
          data-parallax="-5"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-stroke bg-surface/76 p-4 shadow-[0_28px_90px_rgba(5,5,7,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/8 dark:shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
            <div className="rounded-[1.45rem] border border-stroke bg-elevated p-6 dark:border-white/8 dark:bg-white/7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold text-brand-blue">Current role</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink dark:text-white">
                    {profile.role}
                  </h2>
                  <p className="mt-2 text-sm text-muted dark:text-white/62">Cognizant Technology Solutions</p>
                </div>
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-system-green opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-system-green" />
                </span>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-stroke bg-surface p-4 text-ink transition hover:-translate-y-1 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:border-white/10 dark:bg-black/24 dark:text-white"
                >
                  <FaGithub className="mb-4 h-6 w-6" aria-hidden="true" />
                  <span className="text-sm font-semibold">GitHub</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-stroke bg-surface p-4 text-ink transition hover:-translate-y-1 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:border-white/10 dark:bg-black/24 dark:text-white"
                >
                  <FaLinkedin className="mb-4 h-6 w-6 text-brand-blue" aria-hidden="true" />
                  <span className="text-sm font-semibold">LinkedIn</span>
                </a>
              </div>
              <a
                href="#contact"
                className="mt-4 flex items-center justify-between rounded-2xl bg-ink px-4 py-4 text-sm font-semibold text-white transition hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:bg-white dark:text-black"
              >
                Open to software engineering roles <FiExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
