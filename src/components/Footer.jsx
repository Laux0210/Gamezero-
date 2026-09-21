import { CONTACT } from "../config/contact";
import { BrandMark } from "./BrandMark";
import { Icon } from "./Icons";

export function Footer() {
  return (
    <footer id="contato" className="border-t border-line bg-panel">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <BrandMark />
            <h2 className="mt-8 max-w-2xl font-display text-5xl font-black leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl">
              Seu próximo game começa aqui.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:justify-self-end">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-muted">ATENDIMENTO</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-silver">Horários, envio e retirada são confirmados diretamente com nossa equipe.</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-muted">CANAIS OFICIAIS</p>
              <div className="mt-3 flex flex-col items-start gap-2">
                <a className="footer-link" href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
                <a className="footer-link" href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">{CONTACT.instagramHandle}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GAME ZER0. Todos os direitos reservados.</p>
          <p>Consultoria gamer • Trocas • Encomendas</p>
        </div>
      </div>

      <a
        className="whatsapp-fab"
        href={CONTACT.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a GAME ZER0 no WhatsApp"
      >
        <Icon name="whatsapp" className="h-6 w-6" />
        <span className="hidden sm:inline">Falar agora</span>
      </a>
    </footer>
  );
}
