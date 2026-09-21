import { CONTACT } from "../config/contact";
import { Icon } from "./Icons";
import { ZeroGlyph } from "./BrandMark";

const trust = [
  "Atendimento especializado",
  "Procedência e garantia",
  "Avaliação justa em upgrades",
];

export function Hero() {
  return (
    <section id="inicio" className="hero-grid relative overflow-hidden border-b border-line pt-18">
      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-[1440px] lg:grid-cols-[1.12fr_0.88fr]">
        <div className="relative z-10 flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-10 flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-muted">
            <span className="h-px w-10 bg-white" aria-hidden="true" />
            CONSULTORIA • TROCAS • ENCOMENDAS
          </div>
          <h1 className="max-w-4xl font-display text-[clamp(3.8rem,9vw,8.8rem)] font-black leading-[0.78] tracking-[-0.055em] text-balance text-white">
            O ponto zero da sua experiência gamer.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-silver sm:text-lg sm:leading-8">
            Especialistas em consoles, jogos, setups e upgrades. Atendimento personalizado de quem realmente entende e vive o mundo dos games.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="button button-light min-h-13" href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
              Falar com nossa equipe
              <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a className="button button-outline min-h-13" href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">
              <Icon name="instagram" className="h-5 w-5" />
              Acompanhar no Instagram
            </a>
          </div>

          <ul className="mt-12 grid gap-3 border-t border-line pt-6 sm:grid-cols-3" aria-label="Compromissos da GAME ZER0">
            {trust.map((item) => (
              <li className="flex items-start gap-2 text-sm leading-5 text-muted" key={item}>
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="zero-stage relative min-h-[28rem] overflow-hidden border-t border-line lg:min-h-0 lg:border-l lg:border-t-0">
          <span className="stage-index" aria-hidden="true">GZ / 00</span>
          <div className="zero-orbit" aria-hidden="true">
            <ZeroGlyph className="h-full w-full" />
          </div>
          <div className="stage-card">
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_16px_#fff]" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-white">ONLINE AGORA</p>
              <p className="mt-1 text-sm text-muted">Chame e fale com quem entende.</p>
            </div>
          </div>
          <p className="stage-caption" aria-hidden="true">PLAY / EVOLVE / REPEAT</p>
        </div>
      </div>
    </section>
  );
}
