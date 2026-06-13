import { FiMoon, FiSun } from 'react-icons/fi';

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      onClick={onToggle}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-surface/82 text-ink shadow-soft backdrop-blur-2xl transition hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg dark:border-white/12 dark:bg-white/8 dark:text-white dark:hover:bg-white/12"
    >
      <FiSun className="absolute h-4 w-4 transition duration-300 dark:-rotate-90 dark:scale-0 dark:opacity-0" />
      <FiMoon className="absolute h-4 w-4 rotate-90 scale-0 opacity-0 transition duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100" />
    </button>
  );
}
