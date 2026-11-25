import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

export interface Tilt3DCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glareColor?: string;
}

/**
 * Interactive 3D perspective card with pointer-driven tilt, specular glare,
 * spring return, touch-device fallback, and keyboard accessibility.
 */
export function Tilt3DCard({
  children,
  className,
  maxTilt = 6.5,
  glareColor = 'rgba(139, 92, 246, 0.16)',
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const [canHover, setCanHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 200, damping: 22, mass: 0.5 });
  const rotateY = useSpring(rawRotateY, { stiffness: 200, damping: 22, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const interactive = canHover && !reduceMotion;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rawRotateY.set((px - 0.5) * maxTilt * 2);
    rawRotateX.set((0.5 - py) * maxTilt * 2);
    setGlarePos({ x: px * 100, y: py * 100 });
  };

  const handleMouseEnter = () => {
    if (interactive) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  return (
    <div style={{ perspective: interactive ? 1100 : undefined }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={
          interactive
            ? {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }
            : undefined
        }
        className={cn(
          'relative h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-card/85 transition-[border-color,box-shadow] duration-300',
          'hover:border-white/[0.2] hover:shadow-[0_24px_64px_rgba(0,0,0,0.55),0_0_32px_rgba(139,92,246,0.1)]',
          'focus-within:border-accent/60 focus-within:ring-1 focus-within:ring-accent/40',
          className,
        )}
      >
        {/* Top specular glass rim */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Pointer-driven dynamic lighting reflection */}
        {interactive && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(360px circle at ${glarePos.x}% ${glarePos.y}%, ${glareColor}, rgba(56, 189, 248, 0.06) 35%, transparent 70%)`,
            }}
          />
        )}

        <div className="relative z-20 h-full">{children}</div>
      </motion.div>
    </div>
  );
}
