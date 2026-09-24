import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { CONTACT } from "../config/contact";
import { getAssetUrl } from "../utils/assets";

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true">
        <img src={getAssetUrl("/instagram/playstation-wall.jpg")} alt="" />
      </div>

      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-kicker">Treze anos vivendo cada geração</p>
        <h1 id="hero-title" className="hero-title">
          Seu próximo jogo começa no
          <span className="hero-inline-image" aria-hidden="true">
            <img src={getAssetUrl("/instagram/god-of-war-front.jpg")} alt="" />
          </span>
          ponto zero.
        </h1>
        <p className="hero-copy">
          Consoles, jogos e upgrades escolhidos com critério. Atendimento humano para você comprar, trocar e evoluir seu setup sem dúvida no caminho.
        </p>
        <div className="hero-actions" aria-label="Ações principais">
          <a className="button button--light" href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
            Encontrar meu console
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="button button--ghost" href="#experiencia">
            Conhecer a experiência
            <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-caption" aria-hidden="true">
        <span>GAME ZER0</span>
        <span>Porto Alegre, RS</span>
      </div>
    </section>
  );
}
