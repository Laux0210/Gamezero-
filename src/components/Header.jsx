import { useEffect, useRef, useState } from "react";
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
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const previousOverflow = document.body.style.overflow;

    function closeMenu({ returnFocus = false } = {}) {
      setIsOpen(false);

      if (returnFocus) {
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") closeMenu({ returnFocus: true });
    }

    function handleBreakpointChange(event) {
      if (event.matches) closeMenu();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, [isOpen]);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="site-header-inner mx-auto flex h-18 max-w-[1280px] items-center justify-between">
        <BrandMark />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
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
          ref={menuButtonRef}
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
