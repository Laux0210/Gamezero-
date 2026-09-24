import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "../config/contact";
import { BrandMark } from "./BrandMark";

export function FooterSection() {
  return (
    <footer id="contato" className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <BrandMark />
          <p>Consoles, jogos e upgrades com contexto, critério e atendimento humano.</p>
        </div>

        <div className="site-footer__column">
          <h3>Navegue</h3>
          <a href="#experiencia">Experiência</a>
          <a href="#geracoes">Gerações</a>
          <a href="#jornada">Como funciona</a>
          <a href="#faq">Dúvidas</a>
        </div>

        <div className="site-footer__column">
          <h3>Atendimento</h3>
          <p>Segunda a sexta<br />{CONTACT.hours.weekdays}</p>
          <p>Sábado<br />{CONTACT.hours.saturday}</p>
        </div>

        <div className="site-footer__column">
          <h3>Converse</h3>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp <ArrowUpRight aria-hidden="true" />
          </a>
          <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">
            Instagram <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} GAME ZER0</p>
        <p>Porto Alegre, RS</p>
      </div>
    </footer>
  );
}
