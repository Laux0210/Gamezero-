import { CONTACT } from "../config/contact";
import { BrandMark } from "./BrandMark";
import { Icon } from "./Icons";
import { ArrowUpRight } from "lucide-react";

export function FooterSection() {
  return (
    <footer id="contato" className="w-full border-t border-line/60 bg-panel/80 backdrop-blur-md pt-12 md:pt-16 pb-12 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-8">
        {/* Left column: Brand & Tagline */}
        <div className="flex flex-col items-start gap-4 max-w-sm">
          <BrandMark />
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-2">
            O ponto zero da sua experiência gamer. Consoles, trocas, acervo multigeração e consultoria especializada há 13 anos.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-8 w-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/25 transition"
            >
              <Icon name="instagram" className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="h-8 w-8 rounded-full border border-whatsapp/30 bg-whatsapp/10 flex items-center justify-center text-whatsapp hover:bg-whatsapp hover:text-black transition"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto">
          {/* Navegação */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#inicio" className="hover:text-white transition">Início</a></li>
              <li><a href="#geracoes" className="hover:text-white transition">Gerações</a></li>
              <li><a href="#atendimento" className="hover:text-white transition">Sua Jogada</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition">Como Funciona</a></li>
              <li><a href="#comunidade" className="hover:text-white transition">Comunidade</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Horários */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Atendimento</h4>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <p className="text-silver">Segunda a Sexta:</p>
              <p>{CONTACT.hours.weekdays}</p>
              <p className="text-silver pt-1">Sábado:</p>
              <p>{CONTACT.hours.saturday}</p>
            </div>
          </div>

          {/* Canais Oficiais */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Canais Oficiais</h4>
            <div className="space-y-2 text-xs">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-silver hover:text-white transition"
              >
                <span>WhatsApp {CONTACT.whatsappLabel}</span>
                <ArrowUpRight className="h-3 w-3 text-muted" />
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-silver hover:text-white transition"
              >
                <span>Instagram {CONTACT.instagramHandle}</span>
                <ArrowUpRight className="h-3 w-3 text-muted" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-line/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} GAME ZER0. Todos os direitos reservados.</p>
        <p>Atendimento humano especializado • De gamer para gamer</p>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href={CONTACT.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 px-4 py-3 bg-whatsapp text-black hover:bg-whatsapp-hover rounded-full shadow-2xl transition-all duration-200 hover:scale-105 font-bold text-xs uppercase tracking-wider"
        aria-label="Falar com a GAME ZER0 no WhatsApp"
      >
        <Icon name="whatsapp" className="h-5 w-5 text-black" />
        <span className="hidden sm:inline">Falar agora</span>
      </a>
    </footer>
  );
}
