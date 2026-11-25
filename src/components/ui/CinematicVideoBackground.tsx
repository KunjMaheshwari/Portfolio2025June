import { memo, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

export type VideoLightingPreset = 'violet-cyan' | 'cyan-violet' | 'violet' | 'cyan' | 'portal';
export type VideoScrimPreset = 'left' | 'vertical' | 'radial';

export interface CinematicVideoBackgroundProps {
  src: string;
  mobileSrc?: string;
  webmSrc?: string;
  poster: string;
  mobilePoster?: string;
  priority?: boolean;
  overlayOpacity?: number;
  videoOpacity?: number;
  lighting?: VideoLightingPreset;
  scrim?: VideoScrimPreset;
  objectPosition?: string;
  enableParallax?: boolean;
  showDotGrid?: boolean;
  /** Enable seamless dual-deck A/B crossfade looping (set false for natively seamless loops). */
  seamlessLoop?: boolean;
  /** Crossfade duration in milliseconds (recommended 500–800ms). */
  crossfadeMs?: number;
  className?: string;
}

const LIGHTING_GRADIENTS: Record<VideoLightingPreset, string> = {
  'violet-cyan':
    'radial-gradient(ellipse 65% 55% at 18% 28%, rgba(139, 92, 246, 0.16), transparent 65%), radial-gradient(ellipse 55% 45% at 82% 72%, rgba(56, 189, 248, 0.11), transparent 65%)',
  'cyan-violet':
    'radial-gradient(ellipse 60% 50% at 80% 25%, rgba(56, 189, 248, 0.15), transparent 65%), radial-gradient(ellipse 60% 50% at 20% 75%, rgba(139, 92, 246, 0.14), transparent 65%)',
  violet:
    'radial-gradient(ellipse 70% 55% at 50% 35%, rgba(139, 92, 246, 0.18), transparent 70%)',
  cyan:
    'radial-gradient(ellipse 70% 55% at 50% 40%, rgba(56, 189, 248, 0.15), transparent 70%)',
  portal:
    'radial-gradient(ellipse 58% 55% at 50% 50%, rgba(139, 92, 246, 0.2), rgba(56, 189, 248, 0.09) 48%, transparent 74%)',
};

/**
 * Reusable, LCP-optimized cinematic background video layer with seamless dual-deck A/B loop crossfading.
 * - Paints responsive WebP/JPEG poster immediately (zero CLS).
 * - Defers hero video hydration briefly post-paint so MP4 download never blocks FCP/LCP.
 * - Mounts standby Deck B only after Deck A is cached/decoded (zero extra initial bandwidth).
 * - Uses GPU-only opacity crossfades (zero per-frame React re-renders) with constant-luminance overlap.
 * - Pauses both decks off-screen or on tab switch; retains poster on error or prefers-reduced-motion.
 */
export const CinematicVideoBackground = memo(function CinematicVideoBackground({
  src,
  mobileSrc,
  webmSrc,
  poster,
  mobilePoster,
  priority = false,
  overlayOpacity = 0.7,
  videoOpacity = 0.62,
  lighting = 'violet-cyan',
  scrim = 'vertical',
  objectPosition = 'object-center',
  enableParallax = true,
  showDotGrid = false,
  seamlessLoop = true,
  crossfadeMs = 650,
  className,
}: CinematicVideoBackgroundProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaWrapRef = useRef<HTMLDivElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);

  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isDeckAReady, setIsDeckAReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const deckAReadyRef = useRef(false);

  useEffect(() => {
    deckAReadyRef.current = isDeckAReady;
  }, [isDeckAReady]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const sync = () => setIsMobileViewport(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // 1. Hydrate Hero video after initial paint; lazy-load non-hero videos near viewport
  useEffect(() => {
    if (reduceMotion || shouldLoadVideo || hasError) return;

    if (priority) {
      const delayMs = window.matchMedia('(max-width: 767px)').matches ? 650 : 120;
      const timer = window.setTimeout(() => {
        setShouldLoadVideo(true);
      }, delayMs);
      return () => window.clearTimeout(timer);
    }

    const container = containerRef.current;
    if (!container) return;

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          preloadObserver.disconnect();
        }
      },
      { rootMargin: '320px 0px' },
    );

    preloadObserver.observe(container);
    return () => preloadObserver.disconnect();
  }, [priority, reduceMotion, shouldLoadVideo, hasError]);

  // 2. Seamless Dual-Deck A/B Crossfade Loop & Viewport/Tab Playback Controller
  useEffect(() => {
    if (reduceMotion || !shouldLoadVideo || hasError) return;
    const container = containerRef.current;
    const deckA = videoARef.current;
    const deckB = videoBRef.current;
    if (!container || !deckA) return;

    let isVisible = priority;
    let activeIdx: 0 | 1 = 0;
    let isFading = false;
    let fadeStartTime = 0;
    let rafId = 0;

    const getDecks = () => {
      const a = videoARef.current;
      const b = videoBRef.current;
      return activeIdx === 0 ? { active: a, next: b } : { active: b, next: a };
    };

    const setStaticOpacity = () => {
      const { active, next } = getDecks();
      if (active) {
        active.style.zIndex = '2';
        active.style.opacity = deckAReadyRef.current ? String(videoOpacity) : '0';
      }
      if (next) {
        next.style.zIndex = '1';
        next.style.opacity = '0';
      }
    };

    const stopLoopMonitor = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const tick = (now: number) => {
      if (!isVisible || document.hidden) {
        rafId = 0;
        return;
      }

      const { active, next } = getDecks();
      if (!active) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      if (seamlessLoop && next && Number.isFinite(active.duration) && active.duration > 1.2) {
        const fadeSec = Math.min(crossfadeMs / 1000, active.duration * 0.28);
        const remaining = active.duration - active.currentTime;

        // Start crossfade handoff when approaching the end of the active deck
        if (!isFading && remaining <= fadeSec && remaining > 0.02) {
          isFading = true;
          fadeStartTime = now;
          next.currentTime = 0;
          next.style.zIndex = '2';
          active.style.zIndex = '1';
          next.style.opacity = '0';
          const p = next.play();
          if (p !== undefined) {
            p.catch(() => {
              // If play blocked, fall back gracefully
              isFading = false;
            });
          }
        }

        if (isFading) {
          const progress = Math.min(1, (now - fadeStartTime) / (fadeSec * 1000));
          // Smooth cosine ease prevents sudden acceleration or mid-fade dip
          const ease = 0.5 - 0.5 * Math.cos(Math.PI * progress);

          next.style.opacity = String(videoOpacity * ease);
          // Outgoing stays solid behind incoming until the final half of the fade to avoid dark dip
          active.style.opacity = String(videoOpacity * (1 - ease * 0.85));

          if (progress >= 1 || active.ended) {
            isFading = false;
            next.style.opacity = String(videoOpacity);
            active.style.opacity = '0';
            active.pause();
            active.currentTime = 0;
            activeIdx = activeIdx === 0 ? 1 : 0;
          }
        } else if (active.ended) {
          // Safety fallback if a tab lag skipped the fade window
          active.currentTime = 0;
          active.play().catch(() => {});
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    const syncPlayback = () => {
      const { active, next } = getDecks();
      if (isVisible && !document.hidden) {
        // Recover cleanly if tab was hidden mid-fade
        if (isFading) {
          isFading = false;
          if (next) {
            next.pause();
            next.currentTime = 0;
          }
          setStaticOpacity();
        }
        if (active) {
          active.style.zIndex = '2';
          if (deckAReadyRef.current) active.style.opacity = String(videoOpacity);
          active.play().catch(() => {});
        }
        if (next && !isFading) {
          next.pause();
          next.style.opacity = '0';
        }
        if (!rafId && seamlessLoop) {
          rafId = requestAnimationFrame(tick);
        }
      } else {
        stopLoopMonitor();
        isFading = false;
        if (active) active.pause();
        if (next) {
          next.pause();
          next.style.opacity = '0';
          if (next.currentTime > 0) next.currentTime = 0;
        }
      }
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.04 },
    );
    visibilityObserver.observe(container);

    const onTabVisibility = () => syncPlayback();
    document.addEventListener('visibilitychange', onTabVisibility);

    setStaticOpacity();
    syncPlayback();

    return () => {
      stopLoopMonitor();
      visibilityObserver.disconnect();
      document.removeEventListener('visibilitychange', onTabVisibility);
      deckA.pause();
      deckB?.pause();
    };
  }, [priority, reduceMotion, shouldLoadVideo, hasError, seamlessLoop, crossfadeMs, videoOpacity]);

  // 3. Subtle GPU-composited scroll parallax on desktop (disabled on mobile & reduced motion)
  useEffect(() => {
    if (!enableParallax || reduceMotion) return;
    const container = containerRef.current;
    const mediaWrap = mediaWrapRef.current;
    if (!container || !mediaWrap) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      const tween = gsap.fromTo(
        mediaWrap,
        { yPercent: -5, scale: 1.05 },
        {
          yPercent: 5,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        },
      );
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [enableParallax, reduceMotion]);

  const activeVideoSrc = isMobileViewport && mobileSrc ? mobileSrc : src;
  const activePoster = isMobileViewport && mobilePoster ? mobilePoster : poster;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 z-0 overflow-hidden bg-canvas',
        className,
      )}
    >
      {/* Layer 1: Responsive Poster (always instant, zero CLS) + Dual-Deck A/B Seamless Video */}
      <div
        ref={mediaWrapRef}
        className={cn(
          'absolute inset-0 will-change-transform',
          enableParallax && !reduceMotion && 'lg:-inset-y-[6%]',
        )}
      >
        <picture className="block h-full w-full">
          {mobilePoster && <source media="(max-width: 767px)" srcSet={mobilePoster} type="image/webp" />}
          {poster.endsWith('.webp') && <source srcSet={poster} type="image/webp" />}
          <img
            src={poster}
            alt=""
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'low'}
            style={{ opacity: videoOpacity }}
            className={cn('h-full w-full object-cover', objectPosition)}
          />
        </picture>

        {!reduceMotion && shouldLoadVideo && !hasError && (
          <>
            {/* Deck A — Primary video layer */}
            <video
              ref={videoARef}
              autoPlay
              muted
              loop={!seamlessLoop}
              playsInline
              preload={priority ? 'auto' : 'none'}
              poster={activePoster}
              onLoadedData={() => setIsDeckAReady(true)}
              onError={() => setHasError(true)}
              style={{ opacity: isDeckAReady ? videoOpacity : 0, zIndex: 2 }}
              className={cn(
                'absolute inset-0 h-full w-full object-cover',
                !isDeckAReady && 'transition-opacity duration-500 ease-out',
                objectPosition,
              )}
            >
              {webmSrc && <source src={webmSrc} type="video/webm" />}
              <source src={activeVideoSrc} type="video/mp4" />
            </video>

            {/* Deck B — Standby crossfade deck (mounted only after Deck A is decoded/cached) */}
            {seamlessLoop && isDeckAReady && (
              <video
                ref={videoBRef}
                muted
                playsInline
                preload="auto"
                onError={() => setHasError(true)}
                style={{ opacity: 0, zIndex: 1 }}
                className={cn('absolute inset-0 h-full w-full object-cover', objectPosition)}
              >
                {webmSrc && <source src={webmSrc} type="video/webm" />}
                <source src={activeVideoSrc} type="video/mp4" />
              </video>
            )}
          </>
        )}
      </div>

      {/* Layer 2A: Configurable readability dark scrim */}
      <div
        className="absolute inset-0 z-10 bg-canvas"
        style={{ opacity: Math.min(0.88, Math.max(0.25, overlayOpacity * 0.58)) }}
      />

      {scrim === 'left' && (
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-canvas/90 via-canvas/65 to-canvas/30" />
      )}
      {scrim === 'radial' && (
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'radial-gradient(ellipse 72% 64% at 50% 50%, rgba(5, 5, 7, 0.45) 0%, rgba(5, 5, 7, 0.88) 100%)',
          }}
        />
      )}

      {/* Layer 2B: Seamless obsidian top & bottom crossfade edges */}
      <div className="absolute inset-x-0 top-0 z-10 h-36 bg-gradient-to-b from-canvas via-canvas/65 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-canvas via-canvas/70 to-transparent" />

      {/* Layer 2C: Cyan / Violet atmospheric lighting */}
      <div className="absolute inset-0 z-10" style={{ background: LIGHTING_GRADIENTS[lighting] }} />

      {showDotGrid && <div className="bg-dot-grid mask-radial-fade absolute inset-0 z-10 opacity-25" />}
    </div>
  );
});
