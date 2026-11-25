import { ArrowUpRight, Award, BadgeCheck, BookOpen, ShieldCheck } from 'lucide-react';
import { achievementsList } from '../../data/achievements';
import { certificationsList } from '../../data/certifications';
import { CinematicVideoBackground } from '../ui/CinematicVideoBackground';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SpotlightCard } from '../ui/SpotlightCard';

export function AchievementsAndCredentials() {
  const certs = certificationsList.filter((c) => c.category === 'certification');
  const assessments = certificationsList.filter((c) => c.category === 'assessment');
  const learning = certificationsList.filter((c) => c.category === 'learning');

  return (
    <section id="credentials" className="relative scroll-mt-20 overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-32">
      <CinematicVideoBackground
        src="/videos/achievements-gallery.mp4"
        poster="/videos/achievements-gallery-poster.jpg"
        lighting="violet-cyan"
        overlayOpacity={0.78}
        videoOpacity={0.52}
        crossfadeMs={580}
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mb-12 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            07 / Awards & Credentials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink-primary sm:text-5xl">
            Verified recognition,{' '}
            <span className="text-ink-secondary">clearly categorized.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-secondary">
            Enterprise awards, industry certifications, technical assessments, and structured training — kept strictly distinct for full transparency.
          </p>
        </ScrollReveal>

        {/* Verified Awards Row */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            <Award className="h-4 w-4" aria-hidden="true" />
            <span>Awards & Recognition</span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
            {achievementsList.map((award, idx) => (
              <SpotlightCard
                key={award.id}
                accent="violet"
                className={`p-5 ${idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] text-purple-200">
                    {award.badge}
                  </span>
                  <span className="font-mono text-[11px] text-ink-muted">{award.date}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-ink-primary">{award.title}</h3>
                <div className="mt-0.5 font-mono text-[11px] text-accent-cyan">{award.issuer}</div>
                <p className="mt-2.5 text-xs leading-relaxed text-ink-secondary">
                  {award.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Separated Certifications, Assessments, and Learning Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Industry Certifications + Assessments (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            <SpotlightCard accent="cyan" className="p-6">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-cyan">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                <span>Industry Certifications</span>
              </div>
              <div className="mt-4 divide-y divide-white/[0.06]">
                {certs.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-3 py-3.5 first:pt-1 last:pb-0">
                    <div>
                      <div className="text-sm font-semibold text-ink-primary">{item.title}</div>
                      <div className="mt-0.5 text-xs text-ink-muted">{item.issuer}</div>
                    </div>
                    {item.verificationLink ? (
                      <a
                        href={item.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Verify ${item.title}`}
                        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/[0.12] bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-ink-primary transition-colors hover:border-accent-cyan"
                      >
                        <span>Verify</span>
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="shrink-0 rounded-full border border-white/[0.08] bg-elevated px-2.5 py-1 font-mono text-[10px] text-ink-secondary">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </SpotlightCard>

            <SpotlightCard accent="violet" className="p-6">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span>Assessments & Verified Badges</span>
              </div>
              <div className="mt-4 divide-y divide-white/[0.06]">
                {assessments.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-3 py-3 first:pt-1 last:pb-0">
                    <div>
                      <div className="text-sm font-medium text-ink-primary">{item.title}</div>
                      <div className="mt-0.5 text-xs text-ink-muted">{item.issuer}</div>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/[0.08] bg-elevated px-2.5 py-0.5 font-mono text-[10px] text-ink-secondary">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* Structured Learning & Bootcamps (7 cols) */}
          <SpotlightCard accent="violet" className="p-6 lg:col-span-7">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-secondary">
              <BookOpen className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Structured Engineering Courses & Bootcamps</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {learning.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-white/[0.06] bg-elevated/60 p-4 transition-colors hover:border-white/[0.14]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent-cyan">
                      {item.badge}
                    </span>
                  </div>
                  <div className="mt-1.5 text-sm font-medium text-ink-primary">{item.title}</div>
                  <div className="mt-0.5 text-xs text-ink-muted">{item.issuer}</div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
