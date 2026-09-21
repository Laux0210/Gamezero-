export function SectionHeading({ title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <h2 className="font-display text-5xl font-black leading-[0.92] tracking-[-0.03em] text-balance text-white sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description ? <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
