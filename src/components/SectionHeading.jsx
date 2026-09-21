export function SectionHeading({ kicker, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-muted">
        {align !== "center" ? <span className="h-px w-8 bg-white" aria-hidden="true" /> : null}
        {kicker}
      </p>
      <h2 className="font-display text-5xl font-black leading-[0.9] tracking-[-0.035em] text-balance text-white sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description ? <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
