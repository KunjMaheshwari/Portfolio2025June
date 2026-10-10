type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div data-reveal className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
      <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-80" aria-hidden="true" />
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-blue sm:text-xs">{eyebrow}</p>
      <h2 className="font-display text-balance text-4xl font-semibold tracking-[-0.07em] text-ink sm:text-6xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg dark:text-white/62">
          {description}
        </p>
      ) : null}
    </div>
  );
}
