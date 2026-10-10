type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div data-reveal className="mb-12 max-w-3xl sm:mb-16">
      <div className="mb-5 h-px w-12 bg-brand-blue" aria-hidden="true" />
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue sm:text-xs">{eyebrow}</p>
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
