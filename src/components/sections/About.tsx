import { CinematicVideoBackground } from '../ui/CinematicVideoBackground';
import { ScrollReveal } from '../ui/ScrollReveal';
import { BentoGrid } from './BentoGrid';

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-32">
      <CinematicVideoBackground
        src="/videos/about-universe.mp4"
        poster="/videos/about-universe-poster.jpg"
        lighting="violet-cyan"
        overlayOpacity={0.74}
        videoOpacity={0.56}
        crossfadeMs={740}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mb-12 max-w-2xl sm:mb-16">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            03 / About & Engineering Philosophy
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink-primary sm:text-5xl">
            Curious about systems.{' '}
            <span className="text-ink-secondary">Serious about craft.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-secondary">
            Combining enterprise Java automation discipline with full-stack AI product engineering.
          </p>
        </ScrollReveal>

        <BentoGrid />
      </div>
    </section>
  );
}
