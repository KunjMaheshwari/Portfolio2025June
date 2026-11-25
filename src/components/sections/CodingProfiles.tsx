import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaMedium } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { TbAward, TbCode } from 'react-icons/tb';
import { codingProfiles } from '../../data/codingProfiles';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SpotlightCard } from '../ui/SpotlightCard';

function PlatformIcon({ id, color }: { id: string; color: string }) {
  const props = { className: 'h-5 w-5', style: { color }, 'aria-hidden': true as const };
  switch (id) {
    case 'github':
      return <FaGithub {...props} />;
    case 'leetcode':
      return <SiLeetcode {...props} />;
    case 'medium':
      return <FaMedium {...props} />;
    case 'holopin':
      return <TbAward {...props} />;
    default:
      return <TbCode {...props} />;
  }
}

export function CodingProfiles() {
  return (
    <section id="profiles" className="relative bg-secondary/35 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mb-12 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            08 / Coding & Community Profiles
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink-primary sm:text-5xl">
            Verified across{' '}
            <span className="text-ink-secondary">engineering platforms.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {codingProfiles.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <SpotlightCard
                accent={item.id === 'github' || item.id === 'medium' ? 'violet' : 'cyan'}
                className="flex h-full flex-col justify-between p-5 transition-transform duration-200 group-hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-elevated">
                      <PlatformIcon id={item.id} color={item.accentColor} />
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-primary"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-semibold text-ink-primary">{item.platform}</div>
                    <div className="font-mono text-[11px] text-ink-muted">{item.handle}</div>
                  </div>

                  <div className="mt-4 border-t border-white/[0.06] pt-3">
                    <div className="font-mono text-2xl font-bold text-ink-primary">
                      {item.primaryStat}
                    </div>
                    <div className="mt-0.5 text-[11px] text-ink-secondary">{item.primaryLabel}</div>
                  </div>

                  <ul className="mt-3 space-y-1">
                    {item.details.map((d) => (
                      <li key={d} className="text-[11px] leading-snug text-ink-muted">
                        · {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-2">
                  <span className="inline-block rounded-full border border-white/[0.08] bg-elevated px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent-cyan">
                    {item.badgeText}
                  </span>
                </div>
              </SpotlightCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
