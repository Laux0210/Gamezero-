import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, MoveRight, X } from "lucide-react";

import { BrandMark } from "@/components/BrandMark";
import { CONTACT, createWhatsAppUrl } from "@/config/contact";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigationItems = [
  { title: "Início", href: "#inicio" },
  {
    title: "Explorar",
    description: "Uma jornada clara para escolher o console certo para o seu momento.",
    items: [
      { title: "Experiência", href: "#experiencia" },
      { title: "Gerações", href: "#geracoes" },
      { title: "Como funciona", href: "#jornada" },
      { title: "Dúvidas frequentes", href: "#faq" },
    ],
  },
  {
    title: "Atendimento",
    description: "Fale com a equipe para consultar o acervo, valores e disponibilidade.",
    items: [
      {
        title: "Avaliar meu console",
        href: createWhatsAppUrl("Olá! Quero avaliar meu console com a Game Zero."),
        external: true,
      },
      {
        title: "Consultar o acervo",
        href: createWhatsAppUrl("Olá! Quero consultar o acervo disponível da Game Zero."),
        external: true,
      },
      { title: "Instagram", href: CONTACT.instagramUrl, external: true },
      { title: "Localização e horários", href: "#contato" },
    ],
  },
];

function Header1() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-line transition-[background-color,box-shadow] duration-300",
        isScrolled
          ? "bg-background/95 shadow-xl shadow-black/20 backdrop-blur-2xl"
          : "bg-background/75 backdrop-blur-xl",
      )}
    >
      <div className="relative mx-auto flex min-h-20 w-full max-w-[88rem] items-center gap-4 px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        <div className="hidden items-center justify-start lg:flex">
          <NavigationMenu aria-label="Navegação principal">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <Button asChild variant="ghost" size="md">
                      <NavigationMenuLink href={item.href}>{item.title}</NavigationMenuLink>
                    </Button>
                  ) : (
                    <>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[31rem] p-4">
                        <div className="grid grid-cols-[0.9fr_1.1fr] gap-4">
                          <div className="flex min-h-56 flex-col justify-between rounded-xl bg-secondary/55 p-5">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                                {item.title}
                              </p>
                              <p className="mt-3 text-sm leading-6 text-foreground/80">
                                {item.description}
                              </p>
                            </div>
                            <Button asChild size="sm" className="w-fit">
                              <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
                                Falar com a equipe
                                <ArrowUpRight aria-hidden="true" />
                              </a>
                            </Button>
                          </div>

                          <div className="flex flex-col justify-center gap-1">
                            {item.items.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                target={subItem.external ? "_blank" : undefined}
                                rel={subItem.external ? "noreferrer" : undefined}
                                className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground focus:bg-secondary focus:outline-none"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight
                                  className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1"
                                  aria-hidden="true"
                                />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 lg:justify-center">
          <BrandMark />
        </div>

        <div className="hidden items-center justify-end gap-3 lg:flex">
          <Button asChild variant="ghost" size="md">
            <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </Button>
          <span className="h-7 w-px bg-line" aria-hidden="true" />
          <Button asChild>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
              Consultar acervo
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>

        <Button
          ref={menuButtonRef}
          variant="outline"
          size="icon"
          type="button"
          className="shrink-0 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="gamezero-mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      {isOpen ? (
        <div
          id="gamezero-mobile-menu"
          className="absolute left-0 top-full max-h-[calc(100svh-5rem)] w-full overflow-y-auto border-t border-line bg-background px-4 py-5 shadow-2xl shadow-black/40 sm:px-6 lg:hidden"
          data-lenis-prevent
        >
          <nav className="mx-auto flex w-full max-w-[88rem] flex-col" aria-label="Navegação mobile">
            {navigationItems.map((item) => (
              <div key={item.title} className="border-b border-line py-4 first:pt-0">
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center justify-between py-2 text-lg font-semibold"
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                    <MoveRight className="size-4 text-muted-foreground" aria-hidden="true" />
                  </a>
                ) : (
                  <>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {item.title}
                    </p>
                    <div className="flex flex-col">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          target={subItem.external ? "_blank" : undefined}
                          rel={subItem.external ? "noreferrer" : undefined}
                          className="flex items-center justify-between py-2.5 text-base text-foreground/85"
                          onClick={closeMobileMenu}
                        >
                          {subItem.title}
                          <MoveRight className="size-4 text-muted-foreground" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}

            <Button asChild size="lg" className="mt-5 w-full">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMobileMenu}>
                Falar com a equipe
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export { Header1 };
