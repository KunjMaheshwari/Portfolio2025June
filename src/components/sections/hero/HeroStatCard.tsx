import type { IconType } from 'react-icons';
import { motion, type Variants } from 'framer-motion';
import { cn } from '../../../utils/cn';

type HeroStatCardProps = {
  value: string;
  label: string;
  icon: IconType;
  delay?: number;
  className?: string;
};

const statVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay },
  }),
};

export function HeroStatCard({ value, label, icon: Icon, delay = 0, className }: HeroStatCardProps) {
  return (
    <motion.div
      custom={delay}
      variants={statVariants}
      className={cn(
        'rounded-[1.4rem] border border-white/10 bg-white/8 p-4 backdrop-blur-2xl dark:border-white/10 dark:bg-white/6',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-2xl font-semibold tracking-[-0.05em] text-white">{value}</p>
          <p className="mt-1 text-sm leading-5 text-white/64">{label}</p>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-brand-blue">
          <Icon aria-hidden="true" className="h-4.5 w-4.5" />
        </span>
      </div>
    </motion.div>
  );
}
