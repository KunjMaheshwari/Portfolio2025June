import type { MouseEvent, ReactNode } from 'react';
import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../utils/cn';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

type ButtonProps = BaseProps & Omit<HTMLMotionProps<'button'>, 'children' | 'className' | 'href' | 'ref'> & { children: ReactNode; href?: never };
type AnchorProps = BaseProps & Omit<HTMLMotionProps<'a'>, 'children' | 'className' | 'ref'> & { children: ReactNode; href: string };

export function MagneticButton(props: ButtonProps | AnchorProps) {
  return isAnchorProps(props) ? <MagneticAnchor {...props} /> : <MagneticNativeButton {...props} />;
}

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return typeof props.href === 'string';
}

function getSharedClassName(variant: NonNullable<BaseProps['variant']>, className?: string) {
  return cn(
    'group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full px-5 py-3 text-sm font-semibold leading-none outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
    variant === 'primary' &&
      'bg-ink text-white shadow-[0_16px_44px_rgba(5,5,7,0.16)] hover:bg-ink/90 dark:bg-white dark:text-black dark:hover:bg-white/90',
    variant === 'secondary' &&
      'border border-stroke bg-surface/72 text-ink backdrop-blur-xl hover:bg-elevated dark:border-white/12 dark:bg-white/8 dark:text-white dark:hover:bg-white/12',
    variant === 'ghost' &&
      'text-muted hover:bg-elevated hover:text-ink dark:text-white/68 dark:hover:bg-white/8 dark:hover:text-white',
    className,
  );
}

const shine = (
  <span
    aria-hidden="true"
    className="absolute inset-y-0 -left-1/2 w-1/2 translate-x-[-80%] skew-x-[-18deg] bg-white/30 opacity-0 blur-md transition duration-700 group-hover:translate-x-[360%] group-hover:opacity-100"
  />
);

function MagneticAnchor(props: AnchorProps) {
  const { className, variant = 'primary', children, ...rest } = props;
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 18, mass: 0.4 });
  const reduceMotion = useReducedMotion() ?? false;

  const onMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      style={{ x, y }}
      className={getSharedClassName(variant, className)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {shine}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
}

function MagneticNativeButton(props: ButtonProps) {
  const { className, variant = 'primary', children, ...rest } = props;
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 18, mass: 0.4 });
  const reduceMotion = useReducedMotion() ?? false;

  const onMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (reduceMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      className={getSharedClassName(variant, className)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {shine}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
