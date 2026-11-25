import { useState } from 'react';
import { ArrowUpRight, Check, Copy, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { CinematicVideoBackground } from '../ui/CinematicVideoBackground';
import { KineticText } from '../ui/KineticText';
import { MagneticButton } from '../ui/MagneticButton';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-28 sm:py-36">
      <CinematicVideoBackground
        src="/videos/contact-portal.mp4"
        poster="/videos/contact-portal-poster.jpg"
        scrim="radial"
        lighting="portal"
        overlayOpacity={0.68}
        videoOpacity={0.68}
        crossfadeMs={660}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
          10 / Start a Conversation
        </p>

        <h2 className="mt-5 text-[clamp(2.35rem,6.8vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.045em] text-ink-primary">
          <KineticText text="Have something" triggerOnView />
          <br />
          <KineticText text="interesting to build?" triggerOnView delay={0.12} gradient />
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-primary/85 sm:text-lg">
          Let’s create something meaningful together. Whether it’s an AI application, backend architecture, or resilient automation, I’d love to connect.
        </p>

        {/* Direct Email Pill with Copy Action */}
        <div className="mt-9 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-canvas/80 p-1.5 pl-5 backdrop-blur-xl">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-sm font-medium text-ink-primary transition-colors hover:text-accent-cyan sm:text-base"
          >
            {profile.email}
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.08] px-3.5 py-2 text-xs font-medium text-ink-primary transition-colors hover:bg-white/[0.15]"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-ink-secondary" aria-hidden="true" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Magnetic Primary Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
          <MagneticButton href={`mailto:${profile.email}`} variant="primary" className="px-6 py-3">
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>Email Me</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </MagneticButton>

          <MagneticButton
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="px-6 py-3"
          >
            <Linkedin className="h-4 w-4 text-accent-cyan" aria-hidden="true" />
            <span>LinkedIn</span>
          </MagneticButton>

          <MagneticButton
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="px-6 py-3"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span>GitHub</span>
          </MagneticButton>

          <MagneticButton
            href={profile.resume}
            download
            variant="secondary"
            className="px-6 py-3"
          >
            <FileText className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>Resume</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
