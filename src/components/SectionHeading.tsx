type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div data-reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg dark:text-white/62">
          {description}
        </p>
      ) : null}
    </div>
  );
}
