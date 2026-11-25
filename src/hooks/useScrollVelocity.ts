import { useEffect, useState } from 'react';
import { useLenis } from './useLenis';

/**
 * Tracks smoothed Lenis scroll velocity (clamped) for restrained kinetic motion.
 */
export function useScrollVelocity(maxClamp = 12) {
  const { lenis } = useLenis();
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    if (!lenis) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onScroll = ({ velocity: v }: { velocity: number }) => {
      const clamped = Math.max(-maxClamp, Math.min(maxClamp, v * 0.4));
      setVelocity(Math.abs(clamped) < 0.05 ? 0 : clamped);
    };

    lenis.on('scroll', onScroll);
    return () => {
      lenis.off('scroll', onScroll);
    };
  }, [lenis, maxClamp]);

  return velocity;
}
