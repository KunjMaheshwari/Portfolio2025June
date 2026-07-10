import { useEffect, useState } from 'react';

type UseCountUpOptions = {
  end: number;
  duration?: number;
  delay?: number;
  shouldStart?: boolean;
};

export function useCountUp({ end, duration = 1.4, delay = 0, shouldStart = true }: UseCountUpOptions) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setValue(0);
      return;
    }

    let frame = 0;
    let started = false;
    let startTime = 0;

    const tick = (time: number) => {
      if (!started) {
        startTime = time;
        started = true;
      }

      const elapsed = Math.max(0, time - startTime - delay * 1000);
      const progress = Math.min(1, elapsed / (duration * 1000));
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [delay, duration, end, shouldStart]);

  return value;
}