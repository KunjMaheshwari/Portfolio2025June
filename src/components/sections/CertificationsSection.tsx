import { FiArrowUpRight } from 'react-icons/fi';
import { certifications } from '../../data/portfolio';
import { SectionHeading } from '../SectionHeading';

export function CertificationsSection() {
  return (
    <section id="certifications" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Validated fundamentals in cloud and IT support."
          description="Signals that back up the engineering foundation with vendor-recognized learning."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              data-reveal
              className="group flex min-h-44 items-start justify-between gap-6 rounded-[2rem] border border-stroke bg-surface p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:border-white/10 dark:bg-white/7 dark:hover:bg-white/10 sm:p-8"
            >
              <div>
                <cert.icon className="mb-8 h-10 w-10 text-brand-blue transition group-hover:scale-110" aria-hidden="true" />
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-ink dark:text-white">{cert.title}</h3>
                <p className="mt-2 text-muted dark:text-white/62">{cert.issuer}</p>
              </div>
              <FiArrowUpRight className="h-5 w-5 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-blue" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
