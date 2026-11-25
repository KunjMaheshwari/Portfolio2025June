import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

/**
 * Ultra-thin GPU-scaled scroll progress indicator pinned to the top viewport edge.
 */
export function ScrollProgressBar() {
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent via-accent-cyan to-accent shadow-[0_0_12px_rgba(139,92,246,0.65)]"
    />
  );
}
