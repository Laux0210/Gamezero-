export function ZeroGlyph({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 5C14.8 5 7 15.4 7 32s7.8 27 25 27 25-10.4 25-27S49.2 5 32 5Zm0 12c8.3 0 11.5 5.2 11.5 15S40.3 47 32 47 20.5 41.8 20.5 32 23.7 17 32 17Z"
        fill="currentColor"
      />
      <path d="M45 1h10L19 63H9L45 1Z" fill="currentColor" />
    </svg>
  );
}

export function BrandMark({ compact = false }) {
  return (
    <a
      href="#inicio"
      className="group inline-flex min-h-12 items-center gap-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label="GAME ZER0 — ir para o início"
    >
      <span className="font-display text-2xl font-black tracking-[-0.04em]">
        GAME
      </span>
      <ZeroGlyph className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6 motion-reduce:transition-none" />
      {!compact ? (
        <span className="sr-only">GAME ZER0</span>
      ) : null}
    </a>
  );
}
