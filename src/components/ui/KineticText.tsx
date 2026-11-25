import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { EASE_CINEMATIC } from '../../lib/animations';

type KineticTextProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  stagger?: number;
  triggerOnView?: boolean;
  gradient?: boolean;
};

/**
 * Word-level staggered reveal that safely supports multi-line gradient text
 * and ARIA 1.2 accessibility (uses .sr-only text instead of prohibited aria-label on spans).
 */
export function KineticText({
  text,
  className,
  wordClassName,
  as = 'span',
  delay = 0,
  stagger = 0.045,
  triggerOnView = false,
  gradient = false,
}: KineticTextProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const words = text.split(' ');
  const Tag = as;

  if (reduceMotion) {
    return (
      <Tag className={cn(gradient && 'text-gradient-accent', className)}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag className={cn('inline', className)}>
      <span className="sr-only">{text}</span>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="mr-[0.26em] inline-block overflow-hidden pb-[0.08em] align-bottom last:mr-0"
        >
          <motion.span
            className={cn(
              'inline-block',
              gradient && 'text-gradient-accent',
              wordClassName,
            )}
            initial={{ y: '100%', opacity: 0 }}
            {...(triggerOnView
              ? { whileInView: { y: '0%', opacity: 1 }, viewport: { once: true, amount: 0.05 } }
              : { animate: { y: '0%', opacity: 1 } })}
            transition={{
              duration: 0.6,
              delay: delay + index * stagger,
              ease: EASE_CINEMATIC,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
