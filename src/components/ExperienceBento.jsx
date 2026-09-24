import {
  ArrowUpRight,
  CircleCheck,
  Gamepad2,
  Headphones,
  RefreshCw,
  Search,
  Wrench,
} from "lucide-react";
import { createElement } from "react";
import { CONTACT, createWhatsAppUrl } from "../config/contact";
import { getAssetUrl } from "../utils/assets";

const tradeUrl = createWhatsAppUrl(
  "Olá! Quero avaliar meu console para fazer um upgrade com a Game Zero.",
);
const curationUrl = createWhatsAppUrl(
  "Olá! Procuro um console, jogo ou acessório específico e gostaria de ajuda.",
);
const upgradeUrl = createWhatsAppUrl(
  "Olá! Quero ajuda para escolher um upgrade para o meu setup.",
);

function ExperienceCard({
  href,
  icon,
  title,
  description,
  external = false,
  media = false,
}) {
  return (
    <a
      className={`experience-card group${media ? " experience-card--media" : ""}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {media && (
        <>
          <img
            className="experience-card__image"
            src={getAssetUrl("/instagram/storefront.jpg")}
            alt="Fachada da loja Game Zero"
          />
          <span className="experience-card__scrim" aria-hidden="true" />
        </>
      )}

      <span className="experience-card__top">
        <span className="experience-card__icon">
          {createElement(icon, { "aria-hidden": true })}
        </span>
        <ArrowUpRight className="experience-card__arrow" aria-hidden="true" />
      </span>

      <span className="experience-card__copy">
        <strong>{title}</strong>
        <span>{description}</span>
      </span>
    </a>
  );
}

export function ExperienceBento() {
  return (
    <section
      id="experiencia"
      className="chapter-shell experience-section"
      aria-labelledby="experience-title"
    >
      <div className="experience-showcase">
        <header className="experience-showcase__intro">
          <p className="experience-showcase__eyebrow">Por que Game Zero</p>
          <h2 id="experience-title">
            A escolha certa muda toda a experiência.
          </h2>
          <p>
            Consoles, jogos e acessórios com procedência, curadoria e suporte
            para você jogar sem preocupação.
          </p>
        </header>

        <div className="experience-columns grid-flow-dense">
          <div className="experience-column experience-column--one">
            <ExperienceCard
              href={tradeUrl}
              icon={RefreshCw}
              title="Seu console também pode ser o próximo passo."
              description="Avaliamos seu usado com critérios claros para transformar o que você já tem em um upgrade seguro."
              external
              media
            />
            <ExperienceCard
              href="#geracoes"
              icon={Gamepad2}
              title="Coleção para todas as gerações."
              description="Do clássico ao atual, reunimos consoles, jogos e acessórios que continuam fazendo história."
            />
          </div>

          <div className="experience-column experience-column--two">
            <ExperienceCard
              href="#geracoes"
              icon={CircleCheck}
              title="Procedência antes da promessa."
              description="Itens testados, condições explicadas e atendimento que continua depois da compra."
            />
            <ExperienceCard
              href={upgradeUrl}
              icon={Wrench}
              title="Upgrade com segurança."
              description="Encontre o console, acessório ou periférico certo para evoluir seu setup sem comprar no escuro."
              external
            />
          </div>

          <div className="experience-column experience-column--three">
            <ExperienceCard
              href={curationUrl}
              icon={Search}
              title="Não encontrou? A gente procura."
              description="Encomendas e curadoria para edições, jogos e acessórios específicos."
              external
            />
            <ExperienceCard
              href={CONTACT.whatsappUrl}
              icon={Headphones}
              title="Atendimento humano, de gamer para gamer."
              description="Dúvidas e recomendações com uma equipe que entende o produto e acompanha sua jornada."
              external
            />
          </div>
        </div>

        <p className="experience-note">
          Atendimento direto pelo WhatsApp oficial:{" "}
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
            {CONTACT.whatsappLabel}
          </a>
        </p>
      </div>
    </section>
  );
}
