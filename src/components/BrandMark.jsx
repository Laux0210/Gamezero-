import { getAssetUrl } from "../utils/assets";

export function BrandMark({ compact = false }) {
  return (
    <a className="brand-mark" href="#inicio" aria-label="GAME ZER0 — ir para o início">
      <img src={getAssetUrl("/instagram/game-zero-logo.jpg")} width="42" height="42" alt="" />
      {!compact ? <span>GAME ZER0</span> : null}
    </a>
  );
}
