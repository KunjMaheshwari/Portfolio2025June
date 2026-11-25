import { useEffect, useState, type MouseEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useLenis } from '../../hooks/useLenis';
import { cn } from '../../lib/utils';
import { profile } from '../../data/profile';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'open-source', label: 'Open Source', href: '#open-source' },
  { id: 'credentials', label: 'Awards', href: '#credentials' },
] as const;

export function FloatingDock() {
  const { scrollTo } = useLenis();
  const reduceMotion = useReducedMotion() ?? false;
  const [activeId, setActiveId] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const threshold = window.innerHeight * 0.35;
      let current: string = NAV_ITEMS[0].id;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          current = item.id;
        }
      }
      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleNavigate = (e: MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveId(id);
    setMobileOpen(false);
    scrollTo(href, { offset: id === 'home' ? 0 : -88 });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex flex-col items-center px-4 pt-4 sm:pt-5">
      <motion.nav
        aria-label="Primary navigation"
        initial={reduceMotion ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'pointer-events-auto flex w-full max-w-[840px] items-center justify-between rounded-full border px-2.5 py-2 transition-all duration-300',
          scrolled
            ? 'border-white/[0.12] bg-secondary/85 shadow-dock backdrop-blur-2xl'
            : 'border-white/[0.08] bg-card/65 shadow-glass backdrop-blur-xl',
        )}
      >
        <a
          href="#home"
          onClick={(e) => handleNavigate(e, '#home', 'home')}
          aria-label={`${profile.name} — Back to top`}
          className="group flex items-center gap-2 rounded-full py-1 pl-1.5 pr-2 text-sm font-semibold tracking-tight text-ink-primary"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.12] bg-elevated font-mono text-xs font-semibold text-ink-primary transition-colors group-hover:border-accent/60 group-hover:text-accent">
            {profile.initials}
          </span>
          <span className="hidden text-xs font-medium text-ink-secondary transition-colors group-hover:text-ink-primary sm:inline">
            Kunj
          </span>
        </a>

        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavigate(e, item.href, item.id)}
                className={cn(
                  'relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200',
                  isActive ? 'text-ink-primary' : 'text-ink-secondary hover:text-ink-primary',
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeDockPill"
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                    className="absolute inset-0 -z-10 rounded-full border border-white/[0.12] bg-white/[0.08]"
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="#contact"
            onClick={(e) => handleNavigate(e, '#contact', 'contact')}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink-primary px-3.5 py-2 text-xs font-semibold text-canvas transition-all duration-200 hover:bg-white hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]"
          >
            <span>Let’s Connect</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-dock-menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-ink-primary transition-colors hover:border-white/[0.18] lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-dock-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.22 }}
            className="pointer-events-auto mt-2.5 w-full max-w-[840px] overflow-hidden rounded-2xl border border-white/[0.1] bg-secondary/95 p-2 shadow-dock backdrop-blur-2xl lg:hidden"
          >
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavigate(e, item.href, item.id)}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-white/[0.08] text-ink-primary'
                        : 'text-ink-secondary hover:bg-white/[0.04] hover:text-ink-primary',
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
