import { getAssetUrl } from "../utils/assets";

export function BrandMark({ compact = false }) {
  return (
    <a
      href="#inicio"
      className="brand-mark group inline-flex min-h-12 items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label="GAME ZER0 — ir para o início"
    >
      <img
        className="brand-logo"
        src={getAssetUrl("/instagram/game-zero-logo.jpg")}
        width="44"
        height="44"
        alt=""
      />
      {!compact ? <span className="brand-wordmark">GAME ZER0</span> : null}
    </a>
  );
}
