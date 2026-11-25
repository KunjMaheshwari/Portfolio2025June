import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

type ScrollScrubContainerProps = {
  children: ReactNode;
  className?: string;
  onProgress?: (progress: number) => void;
  start?: string;
  end?: string;
  scrub?: number | boolean;
  pin?: boolean;
};

export function ScrollScrubContainer({
  children,
  className,
  onProgress,
  start = 'top top',
  end = 'bottom bottom',
  scrub = 0.6,
  pin = false,
}: ScrollScrubContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      end,
      scrub,
      pin,
      onUpdate: (self) => {
        onProgress?.(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [end, onProgress, pin, scrub, start]);

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {children}
    </div>
  );
}
