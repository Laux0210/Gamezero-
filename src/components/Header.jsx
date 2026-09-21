import { useState } from "react";
import { CONTACT } from "../config/contact";
import { BrandMark } from "./BrandMark";
import { Icon } from "./Icons";

const links = [
  ["Início", "#inicio"],
  ["Especialidades", "#especialidades"],
  ["Como funciona", "#como-funciona"],
  ["Comunidade", "#comunidade"],
  ["Contato", "#contato"],
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-ink/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <BrandMark />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a className="nav-link" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            className="icon-button"
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram da GAME ZER0"
          >
            <Icon name="instagram" className="h-5 w-5" />
          </a>
          <a className="button button-light min-h-11 px-5 text-sm" href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>

        <button
          className="icon-button mobile-menu-trigger"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <Icon name={isOpen ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-line bg-ink px-5 lg:hidden">
          <nav className="flex flex-col py-4" aria-label="Navegação mobile">
            {links.map(([label, href]) => (
              <a
                className="flex min-h-12 items-center border-b border-line text-sm font-semibold text-silver"
                href={href}
                key={href}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <a className="button button-light mt-4 min-h-12" href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
