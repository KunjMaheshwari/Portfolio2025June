import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDownRight } from 'react-icons/fi';

type HeroScrollCueProps = {
  href: string;
  label: string;
};

export function HeroScrollCue({ href, label }: HeroScrollCueProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.a
      href={href}
      animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
      transition={reduceMotion ? undefined : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      className="group inline-flex items-center gap-3 rounded-full border border-stroke bg-surface/72 px-4 py-2.5 text-sm font-medium text-muted shadow-[0_18px_50px_rgba(5,5,7,0.08)] backdrop-blur-2xl transition hover:text-ink dark:border-white/10 dark:bg-white/8 dark:text-white/64 dark:hover:text-white"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:scale-105 dark:bg-white dark:text-black">
        <FiArrowDownRight aria-hidden="true" />
      </span>
      <span>{label}</span>
    </motion.a>
  );
}