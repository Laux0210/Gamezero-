import { CONTACT } from "../config/contact";
import { Icon } from "./Icons";
import { getAssetUrl } from "../utils/assets";

const trust = [
  "Atendimento especializado",
  "Procedência e condições claras",
  "Avaliação justa em upgrades",
];

export function Hero() {
  return (
    <section id="inicio" className="hero-shell relative overflow-hidden border-b border-line">
      <div className="hero-frame relative z-10 mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[1440px] flex-col">
        <div className="hero-layout flex flex-1 items-center py-24 lg:py-28">
          <div className="hero-content">
            <h1 className="hero-title max-w-3xl font-display font-normal text-balance text-white">
              <span className="hero-title-line hero-title-line-first">O ponto zero da sua</span>{" "}
              <span className="hero-title-line hero-title-line-second">experiência gamer.</span>
            </h1>

            <p className="hero-copy mt-7 max-w-xl text-base leading-7 text-silver sm:text-lg sm:leading-8">
              Consoles, jogos, setups e upgrades com atendimento próximo, avaliação transparente e experiência de quem realmente vive o universo gamer.
            </p>

            <div className="hero-actions mt-9 flex w-full max-w-xl flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
              <a className="button button-light min-h-13" href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
                Falar com nossa equipe
                <Icon name="arrow" className="h-5 w-5" />
              </a>
              <a className="button button-outline min-h-13" href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">
                <Icon name="instagram" className="h-5 w-5" />
                Acompanhar no Instagram
              </a>
            </div>

            <div className="hero-availability mt-10" aria-label="Atendimento disponível nos canais oficiais">
              <span className="hero-pulse" aria-hidden="true" />
              Atendimento humano pelo WhatsApp e Instagram
            </div>

            <ul className="hero-trust mt-6 flex max-w-2xl flex-wrap gap-x-6 gap-y-3" aria-label="Compromissos da GAME ZER0">
              {trust.map((item) => (
                <li className="flex items-center gap-2 text-sm leading-5 text-muted" key={item}>
                  <Icon name="check" className="h-4 w-4 shrink-0 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual-stage">
            <figure className="hero-visual">
              <img
                src={getAssetUrl("/instagram/playstation-wall.jpg")}
                alt="Controles e jogos de PlayStation expostos na loja Game Zero"
                width="480"
                height="640"
                fetchPriority="high"
              />
              <figcaption>Acervo real da loja</figcaption>
            </figure>
            <div className="hero-tenure" aria-label="Treze anos de atendimento">
              <strong>13</strong>
              <span>anos entre gerações</span>
            </div>
          </div>
        </div>

        <div className="hero-platforms">
          <p className="hero-platforms-label">Do clássico ao atual</p>
          <ul className="hero-platforms-list" aria-label="Plataformas e serviços">
            <li>PlayStation 1–5 e PS Vita</li>
            <li>Xbox</li>
            <li>Nintendo</li>
            <li>Jogos, acessórios e setups</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
