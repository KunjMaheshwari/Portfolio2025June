import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const x = useSpring(useMotionValue(0), { stiffness: 500, damping: 36 });
  const y = useSpring(useMotionValue(0), { stiffness: 500, damping: 36 });

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canHover || reduceMotion) {
      return;
    }

    const move = (event: PointerEvent) => {
      x.set(event.clientX - 13);
      y.set(event.clientY - 13);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const down = () => setActive(true);
    const up = () => setActive(false);

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-6 w-6 rounded-full border border-brand-blue/60 mix-blend-difference md:block"
      style={{ x, y }}
      animate={{ scale: active ? 0.72 : 1, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.16 }}
    />
  );
}
