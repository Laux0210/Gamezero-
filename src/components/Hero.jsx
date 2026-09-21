import { CONTACT } from "../config/contact";
import { AnimatedPaths } from "./AnimatedPaths";
import { Icon } from "./Icons";

const trust = [
  "Atendimento especializado",
  "Procedência e garantia",
  "Avaliação justa em upgrades",
];

export function Hero() {
  return (
    <section id="inicio" className="hero-shell relative overflow-hidden border-b border-line">
      <AnimatedPaths />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[1440px] flex-col px-5 sm:px-8 lg:px-12">
        <div className="flex flex-1 flex-col items-center justify-center py-20 text-center sm:py-24 lg:py-28">
          <div className="hero-eyebrow">
            <span className="hero-pulse" aria-hidden="true" />
            Consultoria gamer, trocas e encomendas
          </div>

          <h1 className="mt-8 max-w-6xl font-display text-[clamp(3.55rem,8.2vw,8rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-balance text-white">
            <span className="hero-title-line hero-title-line-first">O ponto zero da sua</span>{" "}
            <span className="hero-title-line hero-title-line-second">experiência gamer.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-silver sm:text-lg sm:leading-8">
            Consoles, jogos, setups e upgrades com atendimento próximo, avaliação transparente e experiência de quem realmente vive o universo gamer.
          </p>

          <div className="mt-9 flex w-full max-w-xl flex-col justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <a className="button button-light min-h-13" href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
              Falar com nossa equipe
              <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a className="button button-outline min-h-13" href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">
              <Icon name="instagram" className="h-5 w-5" />
              Acompanhar no Instagram
            </a>
          </div>

          <ul className="mt-10 flex max-w-3xl flex-wrap justify-center gap-x-7 gap-y-3" aria-label="Compromissos da GAME ZER0">
            {trust.map((item) => (
              <li className="flex items-center gap-2 text-sm leading-5 text-muted" key={item}>
                <Icon name="check" className="h-4 w-4 shrink-0 text-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-platforms">
          <p className="hero-platforms-label">Experiência especializada</p>
          <ul className="hero-platforms-list" aria-label="Plataformas e serviços">
            <li>PlayStation 5</li>
            <li>Xbox Series</li>
            <li>Nintendo Switch</li>
            <li>Setups e upgrades</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
