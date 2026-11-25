import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Subtle desktop-only ambient pointer halo that complements (never replaces) the native cursor.
 * Automatically disabled on touch devices and when prefers-reduced-motion is enabled.
 */
export function DesktopCursor() {
  const reduceMotion = useReducedMotion() ?? false;
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 260, damping: 28, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 260, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (reduceMotion) return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      const interactive = Boolean(
        target?.closest('a, button, input, [role="tab"], [role="button"]'),
      );
      setIsInteractive(interactive);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled || reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: ringX,
        y: ringY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: isInteractive ? 1.55 : 1,
      }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="pointer-events-none fixed left-0 top-0 z-[70] h-7 w-7 rounded-full border border-accent/55 bg-accent/[0.06] shadow-[0_0_20px_rgba(139,92,246,0.28)]"
    />
  );
}
