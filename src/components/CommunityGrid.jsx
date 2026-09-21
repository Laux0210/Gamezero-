import { CONTACT } from "../config/contact";
import { Icon } from "./Icons";
import { ArrowUpRight } from "lucide-react";

const communityCards = [
  {
    type: "photo-large",
    title: "Fachada da loja física",
    description: "Uma loja real, construída perto de quem joga e respira videogame todos os dias.",
    image: "/instagram/storefront.jpg",
    link: "https://www.instagram.com/lojagamezero/p/CkHHV5cPfD-/",
    tag: "Loja Física",
  },
  {
    type: "quote",
    quote: "A avaliação do meu PS4 foi rápida e justa. Consegui pegar o PS5 sem complicação e com total segurança.",
    author: "Cliente Game Zero",
    detail: "Upgrade para PS5",
    highlight: false,
  },
  {
    type: "photo-medium",
    title: "Cultura gamer de verdade",
    description: "A paixão por games começa na entrada da loja com arte clássica e acervo vivo.",
    image: "/instagram/god-of-war-front.jpg",
    link: "https://www.instagram.com/lojagamezero/p/CkRYLBPPqHQ/",
    tag: "Comunidade",
  },
  {
    type: "quote",
    quote: "Estava atrás de um clássico raro de PS2 há meses. A equipe localizou a versão original impecável.",
    author: "Colecionador",
    detail: "Encomenda especial",
    highlight: true,
  },
  {
    type: "photo-medium",
    title: "Acervo de controles e jogos",
    description: "Dezenas de opções e acessórios testados para você escolher.",
    image: "/instagram/playstation-wall.jpg",
    link: "https://www.instagram.com/lojagamezero/p/DW45KXckyGK/",
    tag: "Acervo",
  },
  {
    type: "quote",
    quote: "Atendimento de quem realmente entende o que você tá falando. Dá gosto comprar com quem joga.",
    author: "Gamer entusiasta",
    detail: "Consultoria de Setup",
    highlight: false,
  },
];

export function CommunityGrid() {
  return (
    <section id="comunidade" className="w-full px-5 py-12 md:py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-2">
            Comunidade & Bastidores
          </span>
          <h2 className="text-foreground font-display text-4xl sm:text-5xl font-semibold tracking-[-0.025em] leading-tight">
            A loja acontece todos os dias na @lojagamezero.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
            Publicações reais da marca: dia a dia da loja, novidades, clientes e bastidores para você acompanhar de perto.
          </p>
        </div>
        <a
          href={CONTACT.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#16171a] hover:bg-[#22242a] border border-white/15 hover:border-white/25 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all shadow-sm shrink-0 active:scale-[0.98]"
        >
          <Icon name="instagram" className="h-4 w-4 text-zinc-400" />
          <span>Seguir no Instagram</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
        </a>
      </div>

      {/* Grid of Photo & Community Feedback Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communityCards.map((card, idx) => {
          if (card.type.startsWith("photo")) {
            return (
              <a
                key={idx}
                href={card.link}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 aspect-[4/3] md:aspect-[5/4] flex flex-col justify-end p-5 transition-all duration-300 hover:border-white/25"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.75] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/15 text-[10px] font-bold uppercase tracking-wider text-silver mb-2">
                    {card.tag}
                  </span>
                  <h3 className="text-white font-display text-xl font-semibold tracking-[-0.025em] leading-tight group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {card.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-white/15 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>
            );
          }

          return (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 ${
                card.highlight
                  ? "bg-gradient-to-b from-white/10 to-white/5 border-white/25"
                  : "bg-card/40 border-white/10 hover:border-white/20"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-white">
                  {"★".repeat(5)}
                </div>
                <p className="text-foreground text-sm sm:text-base font-normal leading-relaxed italic">
                  “{card.quote}”
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                <div>
                  <span className="block text-xs font-semibold text-white">{card.author}</span>
                  <span className="block text-[11px] text-muted-foreground">{card.detail}</span>
                </div>
                <span className="text-[10px] font-mono text-white/80 uppercase">VERIFICADO</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
