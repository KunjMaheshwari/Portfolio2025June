import { FiArrowUpRight, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../../data/portfolio';
import { MagneticButton } from '../MagneticButton';

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="relative overflow-hidden rounded-[2.4rem] border border-stroke bg-ink p-6 text-white shadow-[0_30px_110px_rgba(5,5,7,0.22)] dark:border-white/10 dark:bg-white dark:text-black sm:p-10 lg:p-14">
          <div className="absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-brand-blue/24 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">Contact</p>
              <h2 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Let’s build software that feels fast, clear, and reliable.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 opacity-68">
                I am open to software engineering, full-stack development, Java backend, and automation-focused opportunities.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <MagneticButton href={`mailto:${profile.email}`} variant="primary" className="dark:bg-black dark:text-white">
                  Email me <FiMail aria-hidden="true" />
                </MagneticButton>
                <MagneticButton href={profile.linkedin} target="_blank" rel="noreferrer" variant="secondary" className="dark:border-black/10 dark:bg-black/[0.04] dark:text-black">
                  LinkedIn <FiArrowUpRight aria-hidden="true" />
                </MagneticButton>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { icon: FiMapPin, label: 'Location', value: profile.location, href: undefined },
                { icon: FaGithub, label: 'GitHub', value: 'KunjMaheshwari', href: profile.github },
                { icon: FaLinkedin, label: 'LinkedIn', value: 'kunjm', href: profile.linkedin },
              ].map((item) => {
                const content = (
                  <>
                    <item.icon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-50">{item.label}</p>
                      <p className="mt-1 font-semibold">{item.value}</p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-3xl border border-white/12 bg-white/8 p-4 transition hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:border-black/10 dark:bg-black/[0.04] dark:hover:bg-black/[0.07]"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-4 rounded-3xl border border-white/12 bg-white/8 p-4 dark:border-black/10 dark:bg-black/[0.04]">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
