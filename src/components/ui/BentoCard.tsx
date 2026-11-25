import { useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { SPRING_CONFIG } from '../../lib/animations';

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  delay?: number;
};

export function BentoCard({
  children,
  className,
  spotlightColor = 'rgba(139, 92, 246, 0.16)',
  delay = 0,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ ...SPRING_CONFIG, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-card/90 p-6 md:p-7',
        'transition-[border-color,transform,box-shadow] duration-300 ease-out',
        'hover:border-white/[0.18] hover:shadow-[0_24px_64px_rgba(0,0,0,0.55),0_0_40px_rgba(139,92,246,0.08)]',
        !reduceMotion && 'hover:-translate-y-0.5',
        className,
      )}
    >
      {/* Top inner highlight rim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      {/* Mouse-tracking spotlight radial gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: isHovered && !reduceMotion ? 1 : 0,
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 65%)`,
        }}
      />

      {/* Subtle animated border glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500"
        style={{
          opacity: isHovered && !reduceMotion ? 1 : 0,
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 60%)`,
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
