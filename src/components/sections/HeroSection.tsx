import type { PointerEvent } from 'react';
import { lazy, Suspense } from 'react';
import { motion, useMotionValue, useReducedMotion, useTransform, type Variants } from 'framer-motion';
import { FaAws, FaBrain, FaCogs, FaRocket, FaStar } from 'react-icons/fa';
import { FiArrowDownRight, FiDownload } from 'react-icons/fi';
import { profile } from '../../data/portfolio';
import { MagneticButton } from '../MagneticButton';
import { HeroBackdrop } from './hero/HeroBackdrop';
import { HeroScrollCue } from './hero/HeroScrollCue';
import { HeroStatCard } from './hero/HeroStatCard';

const HeroCanvas = lazy(() => import('../HeroCanvas').then((module) => ({ default: module.HeroCanvas })));

const stats = [
  { value: '500+', label: 'DSA Problems Solved', icon: FaBrain },
  { value: 'AWS', label: 'Certified', icon: FaAws },
  { value: 'Cognizant', label: 'Engineer', icon: FaCogs },
  { value: 'AI', label: 'Application Builder', icon: FaRocket },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export function HeroSection() {
  const reduceMotion = useReducedMotion() ?? false;
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const cardX = useTransform(pointerX, [-0.5, 0.5], [-18, 18]);
  const cardY = useTransform(pointerY, [-0.5, 0.5], [-14, 14]);
  const glowX = useTransform(pointerX, [-0.5, 0.5], [-42, 42]);
  const glowY = useTransform(pointerY, [-0.5, 0.5], [-32, 32]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const nextX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const nextY = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(nextX);
    pointerY.set(nextY);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-bg px-4 pt-32 sm:px-6 lg:px-8 lg:pt-36"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <HeroBackdrop />
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl items-center py-16 lg:py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.96fr] lg:gap-16">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative z-10 max-w-3xl">
            <motion.p
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-stroke bg-surface/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue shadow-[0_18px_50px_rgba(5,5,7,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/8"
            >
              <FaStar aria-hidden="true" className="h-3.5 w-3.5" />
              Apple-inspired portfolio landing
            </motion.p>

            <motion.p variants={itemVariants} className="text-sm font-semibold uppercase tracking-[0.32em] text-muted dark:text-white/48">
              {profile.name}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display mt-5 max-w-4xl text-balance text-6xl font-semibold tracking-[-0.08em] text-ink sm:text-7xl lg:text-[7rem] lg:leading-[0.9] dark:text-white"
            >
              Building AI Applications, Automation Systems & Scalable Products
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-pretty text-lg font-medium leading-8 tracking-[-0.02em] text-muted sm:text-xl sm:leading-9 dark:text-white/72"
            >
              {profile.role}. Programmer Analyst Trainee at Cognizant with experience in Full-Stack Development, AI Applications, Test Automation, and Cloud Technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <MagneticButton href="#projects" className="min-w-[180px] px-6 py-3.5 text-base shadow-[0_22px_60px_rgba(10,132,255,0.24)]">
                View Projects <FiArrowDownRight aria-hidden="true" />
              </MagneticButton>
              <MagneticButton href={profile.resume} variant="secondary" download className="min-w-[180px] px-6 py-3.5 text-base">
                Download Resume <FiDownload aria-hidden="true" />
              </MagneticButton>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-2" aria-label="Core capabilities">
              {['React', 'TypeScript', 'AI Systems', 'Automation', 'Cloud'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stroke bg-surface/72 px-3.5 py-1.5 text-sm font-medium text-muted backdrop-blur-2xl dark:border-white/10 dark:bg-white/8 dark:text-white/68"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <HeroStatCard key={stat.label} delay={0.08 * index} {...stat} />
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <HeroScrollCue href="#projects" label="Scroll to explore projects" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
            style={reduceMotion ? undefined : { x: cardX, y: cardY }}
            className="relative mx-auto w-full max-w-[560px] lg:mr-0"
            data-parallax="-6"
          >
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/12 bg-white/8 p-4 shadow-[0_30px_100px_rgba(2,6,23,0.28)] backdrop-blur-2xl dark:bg-white/6 dark:shadow-[0_30px_100px_rgba(0,0,0,0.48)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(10,132,255,0.24),transparent_28%),radial-gradient(circle_at_76%_12%,rgba(191,90,242,0.16),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(48,209,88,0.1),transparent_26%)]" />
              <div className="relative rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] sm:p-7">
                <motion.div
                  style={reduceMotion ? undefined : { x: glowX, y: glowY }}
                  aria-hidden="true"
                  className="absolute left-1/2 top-[-5rem] h-44 w-44 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.26),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(41,151,255,0.28),transparent_72%)]"
                />
                <div className="relative flex items-start justify-between gap-6">
                  <div className="max-w-[18rem]">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/54">Current Focus</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white">
                      AI-first systems with product-grade polish
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-white/64">
                      Designing experiences where performance, clarity, and motion work together instead of competing.
                    </p>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 backdrop-blur-xl">
                    <span className="relative flex h-4 w-4">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-system-green opacity-60" />
                      <span className="relative inline-flex h-4 w-4 rounded-full bg-system-green" />
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    'Full-stack product engineering',
                    'AI workflow automation',
                    'Cloud-ready delivery',
                    'Motion-led user interfaces',
                  ].map((item) => (
                    <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-4 text-sm font-medium tracking-[-0.01em] text-white/78">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[1.35rem] border border-white/10 bg-black/10 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Signature Stack</p>
                    <p className="text-xs text-white/42">React • TS • Tailwind • Framer Motion</p>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: '18%' }}
                      animate={reduceMotion ? { width: '42%' } : { width: ['32%', '62%', '42%'] }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-full rounded-full bg-[linear-gradient(90deg,#0A84FF,#BF5AF2,#30D158)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <Suspense fallback={<div className="absolute inset-0" aria-hidden="true" />}>
            <HeroCanvas />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
