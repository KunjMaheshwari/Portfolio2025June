import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SPRING_CONFIG } from '../../lib/animations';
import { cn } from '../../lib/utils';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function ScrollReveal({ children, className, delay = 0, y = 24 }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...SPRING_CONFIG, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
