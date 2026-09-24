import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CONTACT } from "../config/contact";
import { BrandMark } from "./BrandMark";

const navItems = [
  { name: "Experiência", href: "#experiencia" },
  { name: "Gerações", href: "#geracoes" },
  { name: "Como funciona", href: "#jornada" },
  { name: "Dúvidas", href: "#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const navigateTo = (event, href) => {
    event.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  return (
    <header className={`site-nav ${isScrolled ? "site-nav--scrolled" : ""}`}>
      <div className="site-nav__inner">
        <BrandMark />

        <nav className="site-nav__links" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => navigateTo(event, item.href)}>
              {item.name}
            </a>
          ))}
        </nav>

        <div className="site-nav__actions">
          <a className="nav-cta" href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
            <span>Consultar acervo</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <button
            ref={menuButtonRef}
            className="nav-menu-button"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu principal">
          <nav>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={(event) => navigateTo(event, item.href)}>
                {item.name}
              </a>
            ))}
          </nav>
          <a className="button button--light" href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
            Falar com a equipe
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      ) : null}
    </header>
  );
}
