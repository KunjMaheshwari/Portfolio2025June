import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navItems, profile } from '../data/portfolio';
import { cn } from '../utils/cn';
import { ThemeToggle } from './ThemeToggle';

type NavbarProps = {
  isDark: boolean;
  onThemeToggle: () => void;
};

export function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Primary navigation"
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500',
          scrolled
            ? 'border-stroke bg-surface/78 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-black/42'
            : 'border-transparent bg-transparent',
        )}
      >
        <a
          href="#home"
          onClick={close}
          className="flex min-h-10 items-center gap-2 rounded-full px-2 font-semibold tracking-[-0.01em] text-ink outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:text-white"
          aria-label={`${profile.name} home`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs text-white dark:bg-white dark:text-black">
            KM
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted transition hover:bg-elevated hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:text-white/68 dark:hover:bg-white/8 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
          <button
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-surface/82 text-ink shadow-soft backdrop-blur-2xl transition hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:border-white/12 dark:bg-white/8 dark:text-white lg:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-stroke bg-surface/92 p-2 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-black/86 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex rounded-2xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:text-white dark:hover:bg-white/8"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
