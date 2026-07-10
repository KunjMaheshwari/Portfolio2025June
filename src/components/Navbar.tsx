import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiChevronRight, FiHome, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navItems, profile } from '../data/portfolio';
import { cn } from '../utils/cn';
import { ThemeToggle } from './ThemeToggle';

type NavbarProps = {
  isDark: boolean;
  onThemeToggle: () => void;
};

type NavItem = (typeof navItems)[number];

const desktopNavItems = navItems.filter((item) => item.href !== '#home');

const navIcons: Record<string, typeof FiHome> = {
  '#home': FiHome,
  '#engineering-impact': FiSun,
  '#about': FiMoon,
  '#experience': FiMenu,
  '#projects': FiMenu,
  '#skills': FiMenu,
  '#certifications': FiMenu,
  '#activity': FiMenu,
  '#contact': FiMenu,
};

function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.28, 0.4, 0.55, 0.7],
        rootMargin: '-18% 0px -48% 0px',
      },
    );

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

function navigateToHash(hash: string) {
  if (hash === '#home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function DesktopNavButton({ item, active, onNavigate }: { item: NavItem; active: boolean; onNavigate: (hash: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(item.href)}
      className={cn(
        'relative rounded-full px-4 py-2 text-sm font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-brand-blue',
        active
          ? 'text-ink dark:text-white'
          : 'text-muted hover:text-ink dark:text-white/64 dark:hover:text-white',
      )}
    >
      <span className="relative z-10">{item.label}</span>
      {active ? (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-0 rounded-full border border-white/12 bg-white/72 shadow-[0_16px_50px_rgba(2,6,23,0.12)] backdrop-blur-2xl dark:bg-white/10"
          transition={{ type: 'spring', stiffness: 520, damping: 42 }}
        />
      ) : null}
    </button>
  );
}

function MobileDockButton({ item, active, onNavigate }: { item: NavItem; active: boolean; onNavigate: (hash: string) => void }) {
  const Icon = navIcons[item.href] ?? FiMenu;

  return (
    <button
      type="button"
      onClick={() => onNavigate(item.href)}
      className={cn(
        'flex min-w-[4.4rem] flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue',
        active
          ? 'text-ink dark:text-white'
          : 'text-muted hover:text-ink dark:text-white/60 dark:hover:text-white',
      )}
    >
      <span
        className={cn(
          'grid h-9 w-9 place-items-center rounded-2xl border transition',
          active
            ? 'border-white/10 bg-white/82 shadow-[0_12px_30px_rgba(2,6,23,0.16)] dark:bg-white/12'
            : 'border-transparent bg-white/0 dark:bg-white/6',
        )}
      >
        <Icon aria-hidden="true" className="h-4 w-4" />
      </span>
      <span>{item.label}</span>
    </button>
  );
}

export function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;
  const activeSection = useActiveSection(['home', ...desktopNavItems.map((item) => item.href.replace('#', ''))]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const handleNavigate = (hash: string) => {
    closeMenu();
    navigateToHash(hash);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <motion.nav
          aria-label="Primary navigation"
          initial={reduceMotion ? false : { y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          className={cn(
            'mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500',
            scrolled
              ? 'border-white/10 bg-white/74 shadow-[0_24px_80px_rgba(2,6,23,0.14)] dark:border-white/10 dark:bg-black/42'
              : 'border-white/10 bg-white/48 shadow-[0_18px_60px_rgba(2,6,23,0.08)] dark:bg-black/24',
          )}
        >
          <button
            type="button"
            onClick={() => handleNavigate('#home')}
            className="group flex min-h-10 items-center gap-3 rounded-full px-2 font-semibold tracking-[-0.01em] text-ink outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:text-white"
            aria-label={`${profile.name} home`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-xs text-white shadow-[0_16px_40px_rgba(5,5,7,0.22)] transition-transform group-hover:scale-105 dark:bg-white dark:text-black">
              KM
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {desktopNavItems.map((item) => (
              <DesktopNavButton
                key={item.href}
                item={item}
                active={activeSection === item.href.replace('#', '')}
                onNavigate={handleNavigate}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex">
              <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            </div>
            <button
              type="button"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/72 text-ink shadow-[0_16px_40px_rgba(2,6,23,0.1)] backdrop-blur-2xl transition hover:bg-white/86 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:border-white/10 dark:bg-white/8 dark:text-white sm:hidden"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 max-w-7xl rounded-[1.8rem] border border-white/10 bg-white/78 p-2 shadow-[0_24px_80px_rgba(2,6,23,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-black/82 sm:hidden"
            >
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavigate(item.href)}
                    className={cn(
                      'flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-brand-blue',
                      activeSection === item.href.replace('#', '')
                        ? 'bg-white/90 text-ink dark:bg-white/12 dark:text-white'
                        : 'text-ink hover:bg-white/60 dark:text-white dark:hover:bg-white/8',
                    )}
                  >
                    <span>{item.label}</span>
                    <FiChevronRight aria-hidden="true" className="h-4 w-4 opacity-60" />
                  </button>
                ))}
                <div className="mt-1 px-2 pb-1">
                  <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <motion.nav
        aria-label="Mobile bottom navigation"
        initial={reduceMotion ? false : { y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 lg:hidden"
      >
        <div className="mx-auto max-w-7xl rounded-[1.9rem] border border-white/10 bg-white/76 p-2 shadow-[0_24px_90px_rgba(2,6,23,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-black/70">
          <div className="flex items-stretch gap-1 overflow-x-auto pb-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => (
              <MobileDockButton
                key={item.href}
                item={item}
                active={activeSection === item.href.replace('#', '')}
                onNavigate={handleNavigate}
              />
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}