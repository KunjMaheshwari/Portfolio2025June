import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLenis } from '../../hooks/useLenis';
import { MagneticButton } from '../ui/MagneticButton';

export function Footer() {
  const { scrollTo } = useLenis();

  return (
    <footer className="border-t border-white/[0.08] bg-canvas/90 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <div className="text-sm font-semibold tracking-tight text-ink-primary">
            {profile.name}
          </div>
          <p className="font-mono text-xs text-ink-muted">
            © {new Date().getFullYear()} {profile.name}. Engineered with precision.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-ink-secondary">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink-primary"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink-primary"
          >
            LinkedIn
          </a>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink-primary"
          >
            LeetCode
          </a>
          <a
            href={profile.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink-primary"
          >
            Medium
          </a>
        </div>

        <MagneticButton
          type="button"
          variant="secondary"
          aria-label="Scroll back to top"
          onClick={() => scrollTo(0, { duration: 1.2 })}
          className="min-h-10 px-4 py-2 text-xs"
        >
          <span>Back to top</span>
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </MagneticButton>
      </div>
    </footer>
  );
}
