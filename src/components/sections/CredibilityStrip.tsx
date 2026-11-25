import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { credibilityMetrics, type CredibilityMetric } from '../../data/profile';

function MetricCounter({ item }: { item: CredibilityMetric }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion() ?? false;
  const [val, setVal] = useState(() => (reduceMotion ? item.value : 0));

  useEffect(() => {
    if (!inView || reduceMotion) {
      setVal(item.value);
      return;
    }

    const duration = 1000;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(item.value * eased);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setVal(item.value);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, item.value, reduceMotion]);

  const formatted = item.decimals
    ? val.toFixed(item.decimals)
    : Math.round(val).toLocaleString('en-US');

  return (
    <div
      ref={ref}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-card/75 p-4 transition-colors duration-200 hover:border-white/[0.16] sm:p-5"
    >
      <div className="font-mono text-2xl font-bold tracking-tight text-ink-primary sm:text-3xl">
        {formatted}
        <span className="text-accent">{item.suffix}</span>
      </div>
      <div className="mt-2">
        <div className="text-xs font-semibold text-ink-primary">{item.label}</div>
        <div className="mt-0.5 text-[11px] leading-snug text-ink-muted">{item.sublabel}</div>
      </div>
      <span className="mt-3 inline-block font-mono text-[9px] uppercase tracking-[0.14em] text-accent-cyan/80">
        {item.source}
      </span>
    </div>
  );
}

export function CredibilityStrip() {
  return (
    <section aria-label="Verified engineering credibility metrics" className="relative z-10 border-y border-white/[0.06] bg-secondary/60 py-10">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {credibilityMetrics.map((metric) => (
            <MetricCounter key={metric.label} item={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
