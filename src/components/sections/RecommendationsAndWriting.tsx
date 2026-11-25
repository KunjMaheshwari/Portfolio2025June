import { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, BookOpenText, Check, Linkedin, Quote, Users } from 'lucide-react';
import { communityRoles } from '../../data/community';
import { profile } from '../../data/profile';
import { publicationsList } from '../../data/publications';
import { linkedinSnapshot, recommendationsList } from '../../data/recommendations';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SpotlightCard } from '../ui/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

function chunkWords(text: string, groupSize = 4): string[] {
  const words = text.split(' ');
  const chunks: string[] = [];
  for (let i = 0; i < words.length; i += groupSize) {
    chunks.push(words.slice(i, i + groupSize).join(' '));
  }
  return chunks;
}

export function RecommendationsAndWriting() {
  const reduceMotion = useReducedMotion() ?? false;
  const socialProofRef = useRef<HTMLDivElement>(null);

  const [followersDisplay, setFollowersDisplay] = useState<string>(linkedinSnapshot.followers);
  const [connectionsDisplay, setConnectionsDisplay] = useState<string>(linkedinSnapshot.connections);

  const recChunksById = useMemo(
    () =>
      Object.fromEntries(
        recommendationsList.map((rec) => [rec.id, chunkWords(rec.summary, 4)]),
      ),
    [],
  );

  useEffect(() => {
    const root = socialProofRef.current;
    if (!root) return;

    const prefersReduced =
      reduceMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setFollowersDisplay(linkedinSnapshot.followers);
      setConnectionsDisplay(linkedinSnapshot.connections);
      return;
    }

    const counterState = { followers: 0, connections: 0 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      // 1. Recommendations Card sequence
      tl.fromTo(
        '[data-anim="rec-card"]',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.55 },
        0,
      )
        .fromTo(
          '[data-anim="rec-quote-icon"]',
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.42, ease: 'back.out(1.7)' },
          0.12,
        )
        .fromTo(
          '[data-anim="rec-word-group"]',
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.04 },
          0.2,
        )
        .fromTo(
          '[data-anim="rec-verified-badge"]',
          { opacity: 0, y: -4 },
          { opacity: 1, y: 0, duration: 0.35 },
          0.36,
        )
        .fromTo(
          '[data-anim="rec-tag"]',
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.34, stagger: 0.06 },
          0.46,
        )
        .fromTo(
          '[data-anim="rec-separator"]',
          { scaleX: 0 },
          { scaleX: 1, duration: 0.48, ease: 'power2.inOut', transformOrigin: 'left center' },
          0.6,
        )
        .fromTo(
          '[data-anim="rec-author"]',
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.38 },
          0.72,
        )
        .fromTo(
          '[data-anim="rec-link"]',
          { opacity: 0, x: -6 },
          { opacity: 1, x: 0, duration: 0.36 },
          0.82,
        );

      // 2. LinkedIn Public Snapshot Card + smooth eased counters
      tl.fromTo(
        '[data-anim="li-card"]',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.18,
      )
        .fromTo(
          '[data-anim="li-tile"]',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.42, stagger: 0.1 },
          0.3,
        )
        .to(
          counterState,
          {
            followers: 9,
            connections: 500,
            duration: 1.15,
            ease: 'power3.out',
            onStart: () => {
              setFollowersDisplay('~0K');
              setConnectionsDisplay('0+');
            },
            onUpdate: () => {
              setFollowersDisplay(`~${Math.round(counterState.followers)}K`);
              setConnectionsDisplay(`${Math.round(counterState.connections)}+`);
            },
            onComplete: () => {
              setFollowersDisplay(linkedinSnapshot.followers);
              setConnectionsDisplay(linkedinSnapshot.connections);
            },
          },
          0.32,
        );

      // 3. TEDx Community Leadership Card (enters after Recommendation card)
      tl.fromTo(
        '[data-anim="tedx-card"]',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.52 },
        0.44,
      )
        .fromTo(
          '[data-anim="tedx-heading"]',
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.35 },
          0.56,
        )
        .fromTo(
          '[data-anim="tedx-date"]',
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.35 },
          0.64,
        )
        .fromTo(
          '[data-anim="tedx-org"]',
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.36 },
          0.7,
        )
        .fromTo(
          '[data-anim="tedx-role"]',
          { opacity: 0, x: -8 },
          { opacity: 1, x: 0, duration: 0.4 },
          0.76,
        )
        .fromTo(
          '[data-anim="tedx-desc"]',
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.4 },
          0.84,
        )
        .fromTo(
          '[data-anim="tedx-bullet"]',
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.09 },
          0.92,
        )
        .fromTo(
          '[data-anim="tedx-check"]',
          { opacity: 0, scale: 0.55 },
          { opacity: 1, scale: 1, duration: 0.32, stagger: 0.09, ease: 'back.out(1.8)' },
          0.92,
        );
    }, root);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section id="writing" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* LINKEDIN SOCIAL PROOF & RECOMMENDATIONS */}
        <ScrollReveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              07 / Recommendations, Writing & Community
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink-primary sm:text-5xl">
              Peer trust, technical writing{' '}
              <span className="text-ink-secondary">& community impact.</span>
            </h2>
          </div>

          <a
            href={linkedinSnapshot.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-ink-primary transition-colors hover:border-accent-cyan md:self-auto"
          >
            <Linkedin className="h-4 w-4 text-accent-cyan" aria-hidden="true" />
            <span>View LinkedIn Profile</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </ScrollReveal>

        <div ref={socialProofRef} className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Recommendations Card (7 cols) */}
          <div className="lg:col-span-7">
            {recommendationsList.map((rec) => (
              <div key={rec.id} data-anim="rec-card" className="h-full will-change-transform">
                <SpotlightCard
                  accent="violet"
                  className="flex h-full flex-col justify-between p-6 transition-shadow duration-300 hover:shadow-[0_0_42px_rgba(139,92,246,0.14)] sm:p-8"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                        <span data-anim="rec-quote-icon" className="inline-flex will-change-transform">
                          <Quote className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>Recommendations</span>
                      </span>
                      <span
                        data-anim="rec-verified-badge"
                        className="rounded-full border border-white/[0.08] bg-elevated px-2.5 py-0.5 font-mono text-[10px] text-ink-muted"
                      >
                        LinkedIn Verified
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-ink-primary sm:text-base">
                      {(recChunksById[rec.id] ?? [rec.summary]).map((chunk, idx) => (
                        <span
                          key={`${rec.id}-chunk-${idx}`}
                          data-anim="rec-word-group"
                          className="mr-[0.28em] inline-block last:mr-0"
                        >
                          {chunk}
                        </span>
                      ))}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {rec.highlights.map((h) => (
                        <span
                          key={h}
                          data-anim="rec-tag"
                          className="rounded-full border border-white/[0.08] bg-elevated/80 px-2.5 py-1 font-mono text-[10px] text-ink-secondary transition-colors duration-200 hover:border-accent/35 hover:text-ink-primary"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5">
                    <div
                      data-anim="rec-separator"
                      aria-hidden="true"
                      className="mb-5 h-px w-full bg-gradient-to-r from-accent/40 via-white/[0.12] to-transparent"
                    />
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div data-anim="rec-author">
                        <div className="text-sm font-semibold text-ink-primary">{rec.author}</div>
                        <div className="text-xs text-ink-muted">{rec.relationship}</div>
                      </div>
                      <a
                        href={rec.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-anim="rec-link"
                        className="group/link inline-flex items-center gap-1.5 font-mono text-xs text-accent-cyan transition-colors hover:text-white"
                      >
                        <span>Read on LinkedIn</span>
                        <ArrowUpRight
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>

          {/* LinkedIn Social Proof Snapshot + TEDx Community Leadership (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            <div data-anim="li-card" className="will-change-transform">
              <SpotlightCard
                accent="cyan"
                className="p-6 transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(56,189,248,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-cyan">
                    {linkedinSnapshot.snapshotLabel}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent-cyan/25 bg-accent-cyan/10 shadow-[0_0_18px_rgba(56,189,248,0.3)]">
                    <Linkedin className="h-4 w-4 text-accent-cyan" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div
                    data-anim="li-tile"
                    className="rounded-2xl border border-white/[0.06] bg-elevated/65 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-cyan/30 hover:bg-elevated/90"
                  >
                    <div className="font-mono text-2xl font-bold text-ink-primary">
                      {followersDisplay}
                    </div>
                    <div className="mt-1 text-xs text-ink-secondary">Followers</div>
                    <div className="mt-0.5 font-mono text-[9px] text-ink-muted">Indexed snapshot</div>
                  </div>
                  <div
                    data-anim="li-tile"
                    className="rounded-2xl border border-white/[0.06] bg-elevated/65 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-cyan/30 hover:bg-elevated/90"
                  >
                    <div className="font-mono text-2xl font-bold text-ink-primary">
                      {connectionsDisplay}
                    </div>
                    <div className="mt-1 text-xs text-ink-secondary">Connections</div>
                    <div className="mt-0.5 font-mono text-[9px] text-ink-muted">Indexed snapshot</div>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {communityRoles.map((role) => (
              <div key={role.id} data-anim="tedx-card" className="will-change-transform">
                <SpotlightCard
                  accent="violet"
                  className="p-6 transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.14)]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      data-anim="tedx-heading"
                      className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent"
                    >
                      <Users className="h-4 w-4" aria-hidden="true" />
                      <span>Community Leadership</span>
                    </span>
                    <span data-anim="tedx-date" className="font-mono text-[10px] text-ink-muted">
                      {role.period}
                    </span>
                  </div>
                  <h3 data-anim="tedx-org" className="mt-3 text-base font-semibold text-ink-primary">
                    {role.organization}
                  </h3>
                  <div data-anim="tedx-role" className="text-xs font-medium text-accent-cyan">
                    {role.role}
                  </div>
                  <p data-anim="tedx-desc" className="mt-2 text-xs leading-relaxed text-ink-secondary">
                    {role.description}
                  </p>
                  <ul className="mt-3 space-y-1.5 border-t border-white/[0.06] pt-3">
                    {role.highlights.map((h) => (
                      <li
                        key={h}
                        data-anim="tedx-bullet"
                        className="flex items-start gap-2 text-xs text-ink-secondary"
                      >
                        <span data-anim="tedx-check" className="mt-0.5 inline-flex shrink-0">
                          <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>

        {/* PUBLISHED TECHNICAL ARTICLES (MEDIUM) — intentionally untouched */}
        <div className="mt-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-cyan">
                <BookOpenText className="h-4 w-4" aria-hidden="true" />
                <span>Technical Publications · Medium</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink-primary sm:text-3xl">
                Essays on Agentic AI, Distributed Systems & Automation
              </h3>
            </div>
            <a
              href={profile.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-secondary transition-colors hover:text-ink-primary"
            >
              <span>All Articles on Medium</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {publicationsList.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-card/85 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.2]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 font-mono text-[10px]">
                    <span className="text-accent">{article.topic}</span>
                    <span className="text-ink-muted">{article.date}</span>
                  </div>
                  <h4 className="mt-2.5 text-sm font-semibold leading-snug text-ink-primary group-hover:text-white">
                    {article.title}
                  </h4>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[10px] text-ink-muted">
                  <span>{article.tags.slice(0, 2).join(' · ')}</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-cyan"
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
