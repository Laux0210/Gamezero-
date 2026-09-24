import { ArrowUpRight, CircleCheck, RefreshCw, Search } from "lucide-react";
import { CONTACT, createWhatsAppUrl } from "../config/contact";
import { getAssetUrl } from "../utils/assets";

const tradeUrl = createWhatsAppUrl("Olá! Quero avaliar meu console para fazer um upgrade com a Game Zero.");
const curationUrl = createWhatsAppUrl("Olá! Procuro um console, jogo ou acessório específico e gostaria de ajuda.");

export function ExperienceBento() {
  return (
    <section id="experiencia" className="chapter-shell" aria-labelledby="experience-title">
      <div className="section-intro section-intro--wide">
        <p className="eyebrow">Compra com contexto, não com pressão</p>
        <h2 id="experience-title">
          A escolha certa muda toda a experiência.
        </h2>
        <p>
          A Game Zero combina acervo multigeração, avaliação transparente e repertório técnico para indicar o que realmente faz sentido para você.
        </p>
      </div>

      <div className="experience-bento grid-flow-dense">
        <a className="bento-card bento-card--feature group" href={tradeUrl} target="_blank" rel="noreferrer">
          <div className="bento-card__media">
            <img
              className="transition-transform duration-700 ease-out group-hover:scale-105"
              src={getAssetUrl("/instagram/storefront.jpg")}
              alt="Fachada da loja Game Zero"
            />
          </div>
          <div className="bento-card__scrim" aria-hidden="true" />
          <div className="bento-card__content">
            <RefreshCw aria-hidden="true" />
            <div>
              <h3>Seu console também pode ser o próximo passo.</h3>
              <p>Avaliamos estado, acessórios e funcionamento com critérios claros para transformar seu usado em upgrade.</p>
            </div>
            <span className="text-link">
              Pedir avaliação <ArrowUpRight aria-hidden="true" />
            </span>
          </div>
        </a>

        <a className="bento-card bento-card--compact group" href="#geracoes">
          <div className="bento-card__icon">
            <CircleCheck aria-hidden="true" />
          </div>
          <div>
            <h3>Procedência antes da promessa.</h3>
            <p>Itens testados, condições explicadas e atendimento que continua depois da compra.</p>
          </div>
          <ArrowUpRight className="bento-card__arrow" aria-hidden="true" />
        </a>

        <a className="bento-card bento-card--compact bento-card--silver group" href={curationUrl} target="_blank" rel="noreferrer">
          <div className="bento-card__icon bento-card__icon--dark">
            <Search aria-hidden="true" />
          </div>
          <div>
            <h3>Não encontrou? A gente procura.</h3>
            <p>Encomendas e curadoria para edições, jogos e acessórios específicos.</p>
          </div>
          <ArrowUpRight className="bento-card__arrow" aria-hidden="true" />
        </a>
      </div>

      <p className="experience-note">
        Atendimento direto pelo WhatsApp oficial: <a href={CONTACT.whatsappUrl}>{CONTACT.whatsappLabel}</a>
      </p>
    </section>
  );
}
