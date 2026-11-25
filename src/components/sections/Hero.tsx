import { useEffect, useRef, type MouseEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLenis } from '../../hooks/useLenis';
import { CinematicVideoBackground } from '../ui/CinematicVideoBackground';
import { MagneticButton } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const { scrollTo } = useLenis();
  const reduceMotion = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(content, {
        scale: 0.95,
        opacity: 0.25,
        y: -32,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const handleScrollToWork = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo('#projects', { offset: -72 });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:pt-32"
    >
      {/* Layer 1 & 2: Priority Hero Cinematic Background Video with Responsive WebP Poster */}
      <CinematicVideoBackground
        src="/videos/hero-background.mp4"
        poster="/videos/hero-poster.webp"
        mobilePoster="/videos/hero-poster-mobile.webp"
        priority
        scrim="left"
        lighting="violet-cyan"
        videoOpacity={0.78}
        overlayOpacity={0.44}
        crossfadeMs={620}
        showDotGrid
      />

      {/* Layer 3: Foreground Interactive Content */}
      <div ref={contentRef} className="relative z-10 mx-auto w-full max-w-6xl will-change-transform">
        <div className="max-w-3xl">
          {/* Identity Eyebrow + Role Badge */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 flex flex-wrap items-center gap-3 sm:mb-6"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink-primary">
              {profile.name}
            </span>
            <span className="hidden text-white/25 sm:inline">/</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-canvas/60 px-3 py-1 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-ink-secondary sm:text-[11px]">
                {profile.roleBadge}
              </span>
            </span>
          </motion.div>

          {/* Headline visible immediately on first paint (zero LCP opacity delay) */}
          <h1 className="text-[clamp(2.25rem,6.2vw,5.1rem)] font-bold leading-[1.03] tracking-[-0.045em] text-ink-primary">
            <span>{profile.headlineLine1}</span>
            <br />
            <span className="text-gradient-accent">{profile.headlineLine2}</span>
          </h1>

          {/* Introduction visible immediately (LCP candidate — no opacity:0 delay) */}
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-secondary sm:mt-6 sm:text-lg">
            {profile.intro}
          </p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-3.5"
          >
            <MagneticButton href="#projects" onClick={handleScrollToWork} variant="primary" className="px-5 py-2.5 sm:px-6 sm:py-3">
              <span>Explore My Work</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </MagneticButton>

            <MagneticButton href={profile.resume} download variant="secondary" className="px-5 py-2.5 sm:px-6 sm:py-3">
              <Download className="h-4 w-4 text-accent-cyan" aria-hidden="true" />
              <span>Download Resume</span>
            </MagneticButton>
          </motion.div>

          {/* Quick social & location metadata */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.68 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-white/[0.1] pt-5 text-xs text-ink-muted sm:mt-10 sm:pt-6"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-ink-secondary transition-colors hover:text-ink-primary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>github.com/KunjMaheshwari</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-ink-secondary transition-colors hover:text-ink-primary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              <span>linkedin.com/in/kunjm</span>
            </a>
            <span className="font-mono text-ink-muted">{profile.location}</span>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator (positioned cleanly in bottom-right on desktop to never collide with metadata) */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="pointer-events-none absolute bottom-6 right-8 z-10 hidden items-center gap-2 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">Scroll</span>
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
