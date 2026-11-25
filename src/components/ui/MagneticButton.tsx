import { useRef, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent';

type BaseProps = {
  variant?: Variant;
  className?: string;
  strength?: number;
  children: ReactNode;
};

type AnchorProps = BaseProps &
  Omit<HTMLMotionProps<'a'>, 'children' | 'className' | 'ref'> & {
    href: string;
  };

type ButtonProps = BaseProps &
  Omit<HTMLMotionProps<'button'>, 'children' | 'className' | 'href' | 'ref'> & {
    href?: never;
  };

function variantStyles(variant: Variant, className?: string) {
  return cn(
    'group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
    variant === 'primary' &&
      'bg-ink-primary text-canvas shadow-[0_12px_36px_rgba(245,245,247,0.14)] hover:bg-white hover:shadow-[0_16px_44px_rgba(139,92,246,0.25)]',
    variant === 'accent' &&
      'bg-accent text-white shadow-[0_10px_32px_rgba(139,92,246,0.35)] hover:bg-accent/90',
    variant === 'secondary' &&
      'border border-white/[0.12] bg-white/[0.04] text-ink-primary backdrop-blur-md hover:border-white/[0.24] hover:bg-white/[0.08]',
    variant === 'ghost' && 'text-ink-secondary hover:bg-white/[0.06] hover:text-ink-primary',
    className,
  );
}

const sheen = (
  <span
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[320%] group-hover:opacity-100"
  />
);

export function MagneticButton(props: AnchorProps | ButtonProps) {
  if (typeof props.href === 'string') {
    return <MagneticAnchor {...(props as AnchorProps)} />;
  }
  return <MagneticNativeButton {...(props as ButtonProps)} />;
}

function MagneticAnchor({ variant = 'primary', className, strength = 0.24, children, ...rest }: AnchorProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 150, damping: 16, mass: 0.35 });
  const y = useSpring(rawY, { stiffness: 150, damping: 16, mass: 0.35 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left - rect.width / 2) * strength);
    rawY.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      style={reduceMotion ? undefined : { x, y }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={variantStyles(variant, className)}
      {...rest}
    >
      {sheen}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
}

function MagneticNativeButton({ variant = 'primary', className, strength = 0.24, children, ...rest }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 150, damping: 16, mass: 0.35 });
  const y = useSpring(rawY, { stiffness: 150, damping: 16, mass: 0.35 });

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left - rect.width / 2) * strength);
    rawY.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={reduceMotion ? undefined : { x, y }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={variantStyles(variant, className)}
      {...rest}
    >
      {sheen}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
