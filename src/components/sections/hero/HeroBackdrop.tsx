import { motion, useReducedMotion } from 'framer-motion';

export function HeroBackdrop() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(10,132,255,0.22),transparent_26%),radial-gradient(circle_at_18%_18%,rgba(191,90,242,0.14),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(48,209,88,0.12),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0)_34%,rgba(255,255,255,0.18)_100%)] dark:bg-[radial-gradient(circle_at_50%_8%,rgba(10,132,255,0.22),transparent_26%),radial-gradient(circle_at_18%_18%,rgba(191,90,242,0.14),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(48,209,88,0.12),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0)_34%,rgba(0,0,0,0.92)_100%)]" />
      <div className="hero-grid absolute inset-0 opacity-30 dark:opacity-20" />
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -12, 0], x: [0, 10, 0] }}
        transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.42),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(10,132,255,0.5),transparent_72%)]"
      />
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, 16, 0], x: [0, -12, 0] }}
        transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute right-[-8rem] top-[14%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(191,90,242,0.24),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(191,90,242,0.34),transparent_72%)]"
      />
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -10, 0], x: [0, 14, 0] }}
        transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2.1 }}
        className="absolute bottom-[-8rem] left-[20%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(48,209,88,0.18),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(48,209,88,0.24),transparent_72%)]"
      />
      <div className="hero-noise absolute inset-x-0 bottom-0 h-[40vh] opacity-40 dark:opacity-20" />
    </div>
  );
}