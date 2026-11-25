import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { Check, GraduationCap, MapPin } from 'lucide-react';
import { educationList, experiences } from '../../data/experience';
import { SPRING_CONFIG } from '../../lib/animations';
import { CinematicVideoBackground } from '../ui/CinematicVideoBackground';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SpotlightCard } from '../ui/SpotlightCard';

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 75%'],
  });

  const beamScaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative scroll-mt-20 overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-32">
      <CinematicVideoBackground
        src="/videos/experience.mp4"
        poster="/videos/experience-poster.jpg"
        lighting="violet"
        overlayOpacity={0.78}
        videoOpacity={0.5}
        crossfadeMs={780}
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mb-14 max-w-2xl sm:mb-16">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            05 / Experience & Education
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink-primary sm:text-5xl">
            Enterprise discipline,{' '}
            <span className="text-ink-secondary">applied every day.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-secondary">
            Career progression at Cognizant spanning Java automation frameworks, Oracle EPM, Veeva Quality Cloud, and Workday — built on a Computer Science foundation from VIT Bhopal University.
          </p>
        </ScrollReveal>

        {/* Vertical Timeline with Aceternity-style Glowing Beam */}
        <div ref={timelineRef} className="relative pl-8 sm:pl-12">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-3 top-2 w-px bg-white/[0.08] sm:left-4"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reduceMotion ? 1 : beamScaleY }}
            className="absolute bottom-2 left-3 top-2 w-[2px] origin-top -translate-x-[0.5px] bg-gradient-to-b from-accent via-accent-cyan to-accent/20 shadow-[0_0_16px_rgba(139,92,246,0.7)] sm:left-4"
          />

          <ol className="space-y-8">
            {experiences.map((item, idx) => (
              <motion.li
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...SPRING_CONFIG, delay: idx * 0.06 }}
                className="relative"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-8 top-6 flex h-6 w-6 items-center justify-center rounded-full border sm:-left-12 sm:h-8 sm:w-8 ${
                    item.isCurrent
                      ? 'border-accent bg-accent/20 shadow-[0_0_24px_rgba(139,92,246,0.65)]'
                      : 'border-white/[0.16] bg-card'
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      item.isCurrent ? 'bg-accent' : 'bg-ink-muted'
                    }`}
                  />
                </span>

                <SpotlightCard
                  accent={item.isCurrent ? 'violet' : 'cyan'}
                  className="p-6 sm:p-7"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                          {item.organization}
                        </span>
                        <span className="text-white/20">·</span>
                        <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-ink-secondary">
                          {item.employment}
                        </span>
                        {item.isCurrent && (
                          <span className="rounded-full border border-accent/35 bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] text-purple-200">
                            Current Role
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-xl font-bold tracking-tight text-ink-primary sm:text-2xl">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex flex-col items-start gap-1 text-left sm:items-end sm:text-right">
                      <span className="font-mono text-xs font-medium text-ink-primary">
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                        <MapPin className="h-3 w-3" aria-hidden="true" />
                        {item.location} · {item.workMode}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                    {item.description}
                  </p>

                  <div className="mt-5 grid gap-5 border-y border-white/[0.08] py-4 md:grid-cols-2">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                        Core Responsibilities
                      </div>
                      <ul className="mt-2.5 space-y-2">
                        {item.responsibilities.map((resp) => (
                          <li
                            key={resp}
                            className="flex items-start gap-2 text-xs leading-relaxed text-ink-secondary sm:text-sm"
                          >
                            <Check
                              className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-cyan"
                              aria-hidden="true"
                            />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-accent/20 bg-accent/[0.05] p-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                        Measurable Achievements
                      </div>
                      <ul className="mt-2.5 space-y-2">
                        {item.measurableAchievements.map((ach) => (
                          <li
                            key={ach}
                            className="flex items-start gap-2 text-xs leading-relaxed text-ink-primary sm:text-sm"
                          >
                            <Check
                              className="mt-1 h-3.5 w-3.5 shrink-0 text-accent"
                              aria-hidden="true"
                            />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.08] bg-elevated/80 px-2.5 py-1 font-mono text-[11px] text-ink-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Education Row */}
        <div className="mt-14">
          <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-cyan">
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            <span>Education</span>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {educationList.map((edu, index) => (
              <SpotlightCard key={edu.id} accent={index === 0 ? 'violet' : 'cyan'} className="p-6">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-mono text-[11px] text-ink-muted">{edu.period}</span>
                  <span className="rounded-full border border-white/[0.08] bg-elevated px-2.5 py-0.5 font-mono text-[10px] text-accent-cyan">
                    {edu.score}
                  </span>
                </div>
                <h3 className="mt-2.5 text-base font-semibold text-ink-primary">
                  {edu.institution}
                </h3>
                <p className="mt-1 text-xs text-ink-secondary">{edu.qualification}</p>
                {edu.highlights && (
                  <ul className="mt-3 space-y-1.5 border-t border-white/[0.06] pt-3">
                    {edu.highlights.map((h) => (
                      <li key={h} className="text-[11px] leading-snug text-ink-muted">
                        · {h}
                      </li>
                    ))}
                  </ul>
                )}
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
