import { useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  accent?: 'violet' | 'cyan';
};

export function SpotlightCard({ children, className, accent = 'violet' }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const glow = accent === 'cyan' ? 'rgba(56, 189, 248, 0.14)' : 'rgba(139, 92, 246, 0.15)';

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/[0.08] bg-card/85 backdrop-blur-xl transition-colors duration-300 hover:border-white/[0.18]',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: hovered && !reduceMotion ? 1 : 0,
          background: `radial-gradient(360px circle at ${coords.x}px ${coords.y}px, ${glow}, transparent 65%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
