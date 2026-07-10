import { FiArrowUpRight, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../../data/portfolio';
import { MagneticButton } from '../MagneticButton';

const contactItems = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: undefined },
  { icon: FaGithub, label: 'GitHub', value: 'KunjMaheshwari', href: profile.github },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'kunjm', href: profile.linkedin },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[2.6rem] border border-stroke bg-ink p-6 text-white shadow-[0_30px_110px_rgba(5,5,7,0.22)] dark:border-white/10 dark:bg-white dark:text-black sm:p-10 lg:p-14"
        >
          <div className="absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-brand-blue/24 blur-3xl" aria-hidden="true" />
          <div className="absolute left-[-6rem] bottom-[-8rem] h-72 w-72 rounded-full bg-brand-purple/20 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-blue">Contact</p>
              <h2 className="font-display max-w-4xl text-balance text-4xl font-semibold tracking-[-0.07em] sm:text-6xl">
                Let&apos;s build software that feels fast, clear, and reliable.
              </h2>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/72 sm:text-xl dark:text-black/72">
                Open to software engineering, full-stack development, Java backend, and automation-focused opportunities. If you are hiring for a product team, this is the best place to start.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <MagneticButton href={`mailto:${profile.email}`} variant="primary" className="dark:bg-black dark:text-white">
                  Email me <FiMail aria-hidden="true" />
                </MagneticButton>
                <MagneticButton href={profile.linkedin} target="_blank" rel="noreferrer" variant="secondary" className="dark:border-black/10 dark:bg-black/[0.04] dark:text-black">
                  LinkedIn <FiArrowUpRight aria-hidden="true" />
                </MagneticButton>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/70 dark:text-black/60">
                <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 backdrop-blur-2xl dark:border-black/10 dark:bg-black/[0.04]">Response-focused</span>
                <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 backdrop-blur-2xl dark:border-black/10 dark:bg-black/[0.04]">Open to interviews</span>
                <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 backdrop-blur-2xl dark:border-black/10 dark:bg-black/[0.04]">Recruiter friendly</span>
              </div>
            </div>

            <div className="grid gap-3">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <item.icon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/48 dark:text-black/48">{item.label}</p>
                      <p className="mt-1 font-semibold text-white dark:text-black">{item.value}</p>
                    </div>
                  </>
                );

                if (!item.href) {
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-3xl border border-white/12 bg-white/8 p-4 dark:border-black/10 dark:bg-black/[0.04]"
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-3xl border border-white/12 bg-white/8 p-4 transition hover:-translate-y-0.5 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:border-black/10 dark:bg-black/[0.04] dark:hover:bg-black/[0.07]"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
