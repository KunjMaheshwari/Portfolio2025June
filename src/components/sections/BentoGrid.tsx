import { ArrowUpRight, Briefcase, MapPin, Sparkles, Terminal } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLenis } from '../../hooks/useLenis';
import { BentoCard } from '../ui/BentoCard';
import { MagneticButton } from '../ui/MagneticButton';

export function BentoGrid() {
  const { scrollTo } = useLenis();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {/* Card A — Engineering Philosophy (2 cols) */}
      <BentoCard
        className="bg-card/75 backdrop-blur-xl md:col-span-2 lg:col-span-2"
        spotlightColor="rgba(139, 92, 246, 0.16)"
      >
        <div className="flex h-full flex-col justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Engineering Philosophy</span>
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink-primary sm:text-[1.65rem]">
              {profile.philosophyTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
              {profile.philosophyBody}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {profile.principles.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-white/[0.08] bg-canvas/65 p-3.5 backdrop-blur-md transition-colors hover:border-white/[0.16]"
              >
                <span className="font-mono text-[10px] font-semibold text-accent-cyan">{p.step}</span>
                <div className="mt-1 text-sm font-semibold text-ink-primary">{p.title}</div>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </BentoCard>

      {/* Card B — Current Role & Focus (2 cols) */}
      <BentoCard
        className="bg-card/75 backdrop-blur-xl md:col-span-2 lg:col-span-2"
        spotlightColor="rgba(56, 189, 248, 0.14)"
        delay={0.08}
      >
        <div className="flex h-full flex-col justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-cyan">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Current Status & Focus</span>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Active · Shipping
              </span>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-canvas/65 p-4 backdrop-blur-md">
                <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <div className="text-sm font-semibold text-ink-primary">{profile.currentRole}</div>
                  <div className="mt-0.5 text-xs text-ink-secondary">
                    Java enterprise automation for Oracle EPM + building Spring AI, Next.js & open-source agent tooling
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-canvas/65 px-4 py-3 backdrop-blur-md">
                <MapPin className="h-4 w-4 shrink-0 text-accent-cyan" aria-hidden="true" />
                <span className="text-xs font-medium text-ink-secondary">{profile.location}</span>
              </div>
            </div>

            <div className="mt-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                Engineering Focus Areas
              </div>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-white/[0.1] bg-canvas/55 px-3 py-1 text-xs text-ink-secondary backdrop-blur-md"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/[0.08] bg-canvas/65 p-3.5 backdrop-blur-md">
                <div className="font-mono text-lg font-bold text-ink-primary">760+</div>
                <div className="mt-0.5 text-[11px] text-ink-muted">LeetCode Solved · Java & SQL</div>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-canvas/65 p-3.5 backdrop-blur-md">
                <div className="font-mono text-lg font-bold text-ink-primary">100+</div>
                <div className="mt-0.5 text-[11px] text-ink-muted">External Open-Source PRs</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
            <span className="text-xs text-ink-muted">{profile.availabilityText}</span>
            <MagneticButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact', { offset: -72 });
              }}
              variant="secondary"
              className="min-h-9 px-4 py-2 text-xs"
            >
              <span>Quick Connect</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </MagneticButton>
          </div>
        </div>
      </BentoCard>
    </div>
  );
}
