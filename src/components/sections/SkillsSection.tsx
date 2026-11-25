import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { skillCategories, type SkillItem } from '../../data/skills';
import { cn } from '../../lib/utils';
import { CinematicVideoBackground } from '../ui/CinematicVideoBackground';
import { ScrollReveal } from '../ui/ScrollReveal';

type GalaxyCluster = {
  id: string;
  label: string;
  x: number;
  y: number;
  accent: string;
  skills: SkillItem[];
};

const ORBITAL_POSITIONS: Record<string, { x: number; y: number; accent: string; mobileLabel: string }> = {
  ai: { x: 50, y: 15, accent: '#8B5CF6', mobileLabel: 'AI & Agents' },
  backend: { x: 78, y: 33, accent: '#4ADE80', mobileLabel: 'Backend' },
  databases: { x: 78, y: 69, accent: '#38BDF8', mobileLabel: 'Databases' },
  automation: { x: 50, y: 86, accent: '#A78BFA', mobileLabel: 'Automation' },
  devops: { x: 22, y: 69, accent: '#FB923C', mobileLabel: 'DevOps' },
  frontend: { x: 22, y: 33, accent: '#38BDF8', mobileLabel: 'Frontend' },
};

const GALAXY_ORDER = ['ai', 'backend', 'databases', 'automation', 'devops', 'frontend'] as const;

export function SkillsSection() {
  const reduceMotion = useReducedMotion() ?? false;

  const languagesCategory = skillCategories.find((c) => c.id === 'languages');

  const clusters: GalaxyCluster[] = GALAXY_ORDER.map((id) => {
    const cat = skillCategories.find((c) => c.id === id)!;
    const pos = ORBITAL_POSITIONS[id];
    // Fold core languages into Backend & Frontend context while keeping dedicated Languages strip
    return {
      id: cat.id,
      label: cat.label,
      x: pos.x,
      y: pos.y,
      accent: pos.accent,
      skills: cat.skills,
    };
  });

  const [activeClusterId, setActiveClusterId] = useState<string>('ai');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(clusters[0].skills[0]);

  const activeCluster = clusters.find((c) => c.id === activeClusterId) ?? clusters[0];

  const handleSelectCluster = (cluster: GalaxyCluster) => {
    setActiveClusterId(cluster.id);
    setSelectedSkill(cluster.skills[0]);
  };

  return (
    <section id="skills" className="relative scroll-mt-20 overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-32">
      <CinematicVideoBackground
        src="/videos/skills-network.mp4"
        poster="/videos/skills-network-poster.jpg"
        lighting="cyan-violet"
        overlayOpacity={0.78}
        videoOpacity={0.54}
        crossfadeMs={680}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mb-12 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-cyan">
            04 / Interactive Technology Galaxy
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink-primary sm:text-5xl">
            An interconnected stack,{' '}
            <span className="text-ink-secondary">proven in production.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-secondary">
            Explore six interconnected engineering domains — click or hover any orbital cluster to inspect verified repositories and enterprise evidence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* LEFT: Interactive SVG + CSS Constellation Galaxy (6 cols on desktop) */}
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-white/[0.1] bg-card/75 p-4 backdrop-blur-xl sm:min-h-[440px] lg:col-span-6">
            <div className="pointer-events-none absolute left-5 top-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              Select a domain node
            </div>

            {/* Interconnected SVG Orbital Rings & Synaptic Links */}
            <svg
              viewBox="0 0 100 100"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.35" strokeDasharray="1.5 2" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(139,92,246,0.16)" strokeWidth="0.3" />

              {/* Perimeter links between adjacent clusters */}
              {clusters.map((cluster, idx) => {
                const next = clusters[(idx + 1) % clusters.length];
                return (
                  <line
                    key={`${cluster.id}-${next.id}`}
                    x1={cluster.x}
                    y1={cluster.y}
                    x2={next.x}
                    y2={next.y}
                    stroke="rgba(255,255,255,0.07)"
                    strokeWidth="0.28"
                  />
                );
              })}

              {/* Radial spokes from core to each cluster */}
              {clusters.map((cluster) => {
                const isActive = cluster.id === activeClusterId;
                return (
                  <line
                    key={`spoke-${cluster.id}`}
                    x1="50"
                    y1="50"
                    x2={cluster.x}
                    y2={cluster.y}
                    stroke={isActive ? cluster.accent : 'rgba(255,255,255,0.12)'}
                    strokeWidth={isActive ? '0.65' : '0.3'}
                    strokeOpacity={isActive ? 0.85 : 0.45}
                  />
                );
              })}
            </svg>

            {/* Central Core Node */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/50 bg-canvas/90 text-center shadow-[0_0_32px_rgba(139,92,246,0.28)] sm:h-24 sm:w-24">
              <span className="font-mono text-[10px] font-bold tracking-wider text-ink-primary">
                KUNJ
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-accent-cyan">
                STACK
              </span>
            </div>

            {/* Interactive Orbital Cluster Nodes (stationary button hit target, gently floating inner surface) */}
            {clusters.map((cluster, idx) => {
              const isActive = cluster.id === activeClusterId;
              return (
                <button
                  key={cluster.id}
                  type="button"
                  onClick={() => handleSelectCluster(cluster)}
                  onMouseEnter={() => handleSelectCluster(cluster)}
                  style={{ left: `${cluster.x}%`, top: `${cluster.y}%` }}
                  aria-pressed={isActive}
                  className={cn(
                    'absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isActive ? 'z-20' : 'z-10',
                  )}
                >
                  <motion.div
                    animate={
                      reduceMotion || isActive
                        ? { y: 0 }
                        : { y: [0, idx % 2 === 0 ? -3 : 3, 0] }
                    }
                    transition={{
                      repeat: reduceMotion || isActive ? 0 : Infinity,
                      duration: 4.4 + idx * 0.4,
                      ease: 'easeInOut',
                    }}
                    className={cn(
                      'rounded-2xl border px-3 py-2 transition-all duration-200',
                      isActive
                        ? 'scale-105 border-accent/70 bg-elevated/95 shadow-[0_0_28px_rgba(139,92,246,0.35)]'
                        : 'border-white/[0.1] bg-canvas/85 hover:border-white/[0.25]',
                    )}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: cluster.accent }}
                      />
                      <span className="whitespace-nowrap font-mono text-[10px] font-semibold text-ink-primary sm:text-[11px]">
                        <span className="sm:hidden">{ORBITAL_POSITIONS[cluster.id].mobileLabel}</span>
                        <span className="hidden sm:inline">{cluster.label}</span>
                      </span>
                    </div>
                    <div className="mt-0.5 font-mono text-[9px] text-ink-muted">
                      {cluster.skills.length} tools
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Interactive Domain & Technology Inspector (6 cols on desktop) */}
          <div className="flex flex-col justify-between gap-5 rounded-3xl border border-white/[0.1] bg-card/75 p-6 backdrop-blur-xl lg:col-span-6">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-cyan">
                    Active Domain
                  </span>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-ink-primary">
                    {activeCluster.label}
                  </h3>
                </div>
                <span className="rounded-full border border-white/[0.1] bg-elevated px-3 py-1 font-mono text-[10px] text-ink-secondary">
                  {activeCluster.skills.length} Verified
                </span>
              </div>

              {/* Selectable Technology Chips in Active Cluster */}
              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {activeCluster.skills.map((skill) => {
                  const Icon = skill.icon;
                  const isFocused = selectedSkill.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => setSelectedSkill(skill)}
                      onMouseEnter={() => setSelectedSkill(skill)}
                      className={cn(
                        'flex flex-col items-start rounded-xl border p-3.5 text-left transition-all duration-200',
                        isFocused
                          ? 'border-accent/60 bg-elevated/95 shadow-[0_0_24px_rgba(139,92,246,0.18)]'
                          : 'border-white/[0.08] bg-canvas/60 hover:border-white/[0.18]',
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon
                          className="h-4 w-4 shrink-0"
                          style={{ color: skill.accent ?? '#A1A1AA' }}
                          aria-hidden="true"
                        />
                        <span className="text-xs font-semibold text-ink-primary">{skill.name}</span>
                      </div>
                      <p className="mt-1.5 font-mono text-[10px] leading-snug text-ink-muted">
                        {skill.evidence}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Technology Evidence Spotlight + Core Languages Strip */}
            <div className="space-y-4 border-t border-white/[0.08] pt-4">
              <div className="rounded-2xl border border-accent/25 bg-accent/[0.06] p-4">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Selected Technology Evidence</span>
                </div>
                <div className="mt-1.5 text-sm font-semibold text-ink-primary">
                  {selectedSkill.name}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
                  Verified usage across: <span className="font-mono text-ink-primary">{selectedSkill.evidence}</span>
                </p>
              </div>

              {languagesCategory && (
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    Core Programming Languages
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {languagesCategory.skills.map((lang) => {
                      const Icon = lang.icon;
                      return (
                        <button
                          key={lang.name}
                          type="button"
                          onClick={() => setSelectedSkill(lang)}
                          className={cn(
                            'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] transition-colors',
                            selectedSkill.name === lang.name
                              ? 'border-accent/60 bg-accent/15 text-ink-primary'
                              : 'border-white/[0.08] bg-canvas/60 text-ink-secondary hover:border-white/[0.18]',
                          )}
                        >
                          <Icon className="h-3.5 w-3.5" style={{ color: lang.accent }} aria-hidden="true" />
                          <span>{lang.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
