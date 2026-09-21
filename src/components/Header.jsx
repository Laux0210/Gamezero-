import { useEffect, useRef, useState } from "react";
import { CONTACT } from "../config/contact";
import { BrandMark } from "./BrandMark";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Icon } from "./Icons";

const navItems = [
  { name: "Início", href: "#inicio" },
  { name: "Gerações", href: "#geracoes" },
  { name: "Sua Jogada", href: "#atendimento" },
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Comunidade", href: "#comunidade" },
  { name: "FAQ", href: "#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    function handleScrollState() {
      setIsScrolled(window.scrollY > 20);
    }
    handleScrollState();
    window.addEventListener("scroll", handleScrollState, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", href);
    }
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    function handleBreakpointChange(event) {
      if (event.matches) setIsOpen(false);
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 px-5 sm:px-6 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <BrandMark />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-muted-foreground hover:text-foreground text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @lojagamezero"
            className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-xl border border-white/10 bg-[#16171a] text-muted-foreground hover:text-white hover:border-white/25 transition-colors shadow-sm"
          >
            <Icon name="instagram" className="h-4 w-4" />
          </a>

          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#16171a] hover:bg-[#22242a] text-white border border-white/15 hover:border-white/25 px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm active:scale-[0.98]"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
          </a>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-foreground border border-white/10 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-white transition"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Sheet */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md lg:hidden flex flex-col justify-end">
          <div className="relative bg-panel border-t border-line p-6 max-h-[85vh] overflow-y-auto rounded-t-3xl flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <BrandMark />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full border border-line text-muted-foreground hover:text-white"
                aria-label="Fechar navegação"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-silver hover:text-white text-lg font-medium py-2.5 border-b border-line/40 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#16171a] hover:bg-[#22242a] text-white border border-white/15 rounded-xl font-medium text-sm transition-all shadow-sm"
              >
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-400" />
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 rounded-xl font-medium text-sm transition-all"
              >
                <Icon name="instagram" className="h-4 w-4" />
                <span>Acompanhar @lojagamezero</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
