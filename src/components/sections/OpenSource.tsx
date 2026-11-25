import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Award, GitMerge, GitPullRequest, Github } from 'lucide-react';
import {
  externalContributions,
  githubActivityStats,
  ownedEngineeringPrs,
} from '../../data/openSource';
import { profile } from '../../data/profile';
import { cn } from '../../lib/utils';
import { CinematicVideoBackground } from '../ui/CinematicVideoBackground';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SpotlightCard } from '../ui/SpotlightCard';

type ContribDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const LEVEL_COLORS: Record<number, string> = {
  0: 'bg-white/[0.05]',
  1: 'bg-accent/35',
  2: 'bg-accent/60',
  3: 'bg-accent/85',
  4: 'bg-accent-cyan',
};

function GitHubHeatmap() {
  const [days, setDays] = useState<ContribDay[]>([]);
  const [total, setTotal] = useState<number>(githubActivityStats.lastYearContributions);
  const [hoveredDay, setHoveredDay] = useState<ContribDay | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch('https://github-contributions-api.jogruber.de/v4/KunjMaheshwari?y=last')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active || !data?.contributions) return;
        setDays(data.contributions);
        if (typeof data.total?.lastYear === 'number') {
          setTotal(data.total.lastYear);
        }
      })
      .catch(() => {
        // Keep verified GitHub API stat fallback
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const weeks = useMemo(() => {
    if (days.length === 0) return [];
    const grouped: ContribDay[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      grouped.push(days.slice(i, i + 7));
    }
    return grouped.slice(-52);
  }, [days]);

  const activeDaysCount = useMemo(() => days.filter((d) => d.count > 0).length, [days]);

  return (
    <div className="rounded-3xl border border-white/[0.1] bg-card/80 p-5 backdrop-blur-xl sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-cyan">
            Live GitHub Contribution Graph
          </div>
          <div className="mt-1 text-sm text-ink-secondary">
            {hoveredDay ? (
              <span className="font-mono text-xs text-ink-primary">
                {hoveredDay.date}: <strong className="text-accent-cyan">{hoveredDay.count}</strong> contribution
                {hoveredDay.count === 1 ? '' : 's'}
              </span>
            ) : (
              <>
                <strong className="font-mono text-ink-primary">{total.toLocaleString('en-US')}</strong>{' '}
                contributions in the last 12 months
                {activeDaysCount > 0 ? (
                  <>
                    {' '}across <strong className="font-mono text-ink-primary">{activeDaysCount}</strong> active days
                  </>
                ) : null}
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-ink-muted">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((lvl) => (
            <span key={lvl} className={cn('h-2.5 w-2.5 rounded-[3px]', LEVEL_COLORS[lvl])} />
          ))}
          <span>More</span>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto pb-1">
        {weeks.length > 0 ? (
          <div
            className="inline-flex gap-[3px]"
            role="img"
            aria-label={`GitHub heatmap showing ${total} contributions in the last year`}
            onMouseLeave={() => setHoveredDay(null)}
          >
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[3px]">
                {week.map((day) => (
                  <span
                    key={day.date}
                    onMouseEnter={() => setHoveredDay(day)}
                    title={`${day.date}: ${day.count} contribution${day.count === 1 ? '' : 's'}`}
                    className={cn(
                      'h-2.5 w-2.5 rounded-[2.5px] transition-transform duration-150 hover:scale-125',
                      LEVEL_COLORS[day.level],
                    )}
                  />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-20 items-center justify-center rounded-xl border border-white/[0.06] bg-elevated/50 font-mono text-xs text-ink-muted">
            {loading
              ? 'Loading live GitHub contribution calendar...'
              : `${total.toLocaleString('en-US')} verified contributions on github.com/KunjMaheshwari`}
          </div>
        )}
      </div>
    </div>
  );
}

export function OpenSource() {
  const [activeTab, setActiveTab] = useState<'merged' | 'open' | 'owned'>('merged');

  const mergedExternal = useMemo(
    () => externalContributions.filter((p) => p.status === 'merged'),
    [],
  );
  const openExternal = useMemo(
    () => externalContributions.filter((p) => p.status === 'open'),
    [],
  );

  const items =
    activeTab === 'merged'
      ? mergedExternal
      : activeTab === 'open'
        ? openExternal
        : ownedEngineeringPrs;

  const mergedExternalCount = mergedExternal.length;
  const openExternalCount = openExternal.length;

  return (
    <section id="open-source" className="relative scroll-mt-20 overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-32">
      <CinematicVideoBackground
        src="/videos/opensource-network.mp4"
        poster="/videos/opensource-network-poster.jpg"
        lighting="cyan"
        overlayOpacity={0.78}
        videoOpacity={0.52}
        crossfadeMs={750}
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              06 / Open-Source Contribution Hub
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink-primary sm:text-5xl">
              Shipping to the wider{' '}
              <span className="text-ink-secondary">AI & developer ecosystem.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-secondary">
              Verified external pull requests across AI agent SDKs, MCP tooling, evaluation harnesses, and Jenkins — clearly distinguishing merged contributions from open in-review PRs and self-owned repositories.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={githubActivityStats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink-primary px-4 py-2.5 text-xs font-semibold text-canvas transition-all hover:bg-white"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={profile.holopin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-ink-primary transition-colors hover:border-white/[0.24]"
            >
              <Award className="h-4 w-4 text-accent-cyan" aria-hidden="true" />
              <span>Hacktoberfest Badges</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Transparent Contribution Breakdown */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-purple-500/25 bg-card/75 p-4 backdrop-blur-md">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-purple-300">
              Featured Merged External PRs
            </div>
            <div className="mt-1 font-mono text-2xl font-bold text-ink-primary">
              {mergedExternalCount} <span className="text-xs font-normal text-ink-muted">highlighted</span>
            </div>
            <p className="mt-1 text-[11px] text-ink-muted">
              Merged into nanocoder, unienv-ai & lasagna
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-500/25 bg-card/75 p-4 backdrop-blur-md">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-300">
              Open (In-Review) External PRs
            </div>
            <div className="mt-1 font-mono text-2xl font-bold text-ink-primary">
              {openExternalCount} <span className="text-xs font-normal text-ink-muted">in review</span>
            </div>
            <p className="mt-1 text-[11px] text-ink-muted">
              Google Research, OpenHands, Strands & Jenkins (not claimed as merged)
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.1] bg-card/75 p-4 backdrop-blur-md">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-accent-cyan">
              Owned Repository PRs
            </div>
            <div className="mt-1 font-mono text-2xl font-bold text-ink-primary">
              {githubActivityStats.totalPullRequests - githubActivityStats.externalPullRequests}{' '}
              <span className="text-xs font-normal text-ink-muted">self-owned</span>
            </div>
            <p className="mt-1 text-[11px] text-ink-muted">
              CodePilot, Playwright & automation repos (separate from external OSS)
            </p>
          </div>
        </div>

        {/* Live Interactive GitHub Heatmap */}
        <GitHubHeatmap />

        {/* Three-Category PR Tabs (Merged External / Open External / Owned Repo Work) */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex flex-wrap gap-1 rounded-2xl border border-white/[0.08] bg-card/90 p-1.5 sm:rounded-full" role="tablist" aria-label="Open source contribution categories">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'merged'}
              onClick={() => setActiveTab('merged')}
              className={cn(
                'rounded-full px-4 py-1.5 font-mono text-xs transition-all',
                activeTab === 'merged'
                  ? 'bg-violet-700 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                  : 'text-ink-secondary hover:text-ink-primary',
              )}
            >
              Merged External ({mergedExternalCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'open'}
              onClick={() => setActiveTab('open')}
              className={cn(
                'rounded-full px-4 py-1.5 font-mono text-xs transition-all',
                activeTab === 'open'
                  ? 'bg-violet-700 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                  : 'text-ink-secondary hover:text-ink-primary',
              )}
            >
              Open External ({openExternalCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'owned'}
              onClick={() => setActiveTab('owned')}
              className={cn(
                'rounded-full px-4 py-1.5 font-mono text-xs transition-all',
                activeTab === 'owned'
                  ? 'bg-violet-700 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                  : 'text-ink-secondary hover:text-ink-primary',
              )}
            >
              Owned Repos ({ownedEngineeringPrs.length})
            </button>
          </div>
        </div>

        {/* PR Contribution Cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((pr) => (
            <SpotlightCard key={pr.id} accent={pr.status === 'merged' ? 'violet' : 'cyan'} className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {pr.status === 'merged' ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-purple-500/35 bg-purple-500/15 px-2.5 py-0.5 font-mono text-[10px] font-medium text-purple-200">
                      <GitMerge className="h-3 w-3" aria-hidden="true" />
                      Merged
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/35 bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-300">
                      <GitPullRequest className="h-3 w-3" aria-hidden="true" />
                      Open · In Review
                    </span>
                  )}
                  <a
                    href={`https://github.com/${pr.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-medium text-accent-cyan hover:underline"
                  >
                    {pr.repo}
                  </a>
                  <span className="font-mono text-[11px] text-ink-muted">#{pr.prNumber}</span>
                </div>
                <span className="shrink-0 font-mono text-[11px] text-ink-muted">{pr.date}</span>
              </div>

              <h3 className="mt-3 text-sm font-semibold leading-snug text-ink-primary">
                {pr.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-secondary">{pr.description}</p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-3.5">
                <div className="flex flex-wrap gap-1.5">
                  {pr.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.06] bg-elevated px-2 py-0.5 font-mono text-[10px] text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-ink-primary transition-colors hover:text-accent-cyan"
                >
                  <span>View PR</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
