import { useState } from "react";
import { Check, ArrowUpRight, MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "../config/contact";

export function ServicesPricing() {
  const [filter, setFilter] = useState("todos");

  const services = [
    {
      id: "troca",
      name: "Trocas & Upgrades",
      badge: "Usado como parte",
      description: "Ideal para quem quer pular para a nova geração economizando.",
      features: [
        "Avaliação prévia e sem compromisso via fotos",
        "Critérios objetivos de conservação e itens inclusos",
        "Abatimento direto no valor do novo console",
        "Aceitamos PlayStation, Xbox e Nintendo",
        "Atendimento com confirmação rápida",
      ],
      buttonText: "Avaliar meu usado",
      message: "Olá! Gostaria de avaliar meu console/jogo usado para troca na Game Zero.",
      popular: false,
    },
    {
      id: "consultoria",
      name: "Consultoria & Setups",
      badge: "Mais Procurado",
      description: "Para montar o setup gamer perfeito com orientação especializada.",
      features: [
        "Escolha ideal entre PS5, Xbox Series ou Switch",
        "Orientação de cabos HDMI 2.1, taxas e áudio 3D",
        "Controles extras, bases carregadoras e docks",
        "Recomendações baseadas nos jogos que você joga",
        "Suporte direto para dúvidas de instalação",
      ],
      buttonText: "Pedir consultoria",
      message: "Olá! Gostaria de uma consultoria para montar ou melhorar meu setup na Game Zero.",
      popular: true,
    },
    {
      id: "encomenda",
      name: "Encomendas & Raros",
      badge: "Itens Específicos",
      description: "Localizamos edições especiais, clássicos de mídia física e colecionáveis.",
      features: [
        "Busca ativa da edição exata e região desejada",
        "Jogos clássicos de PS1, PS2, PS3 e PS Vita",
        "Checagem prévia de encarte, mídia e caixa",
        "Condições de reserva e prazos informados antes",
        "Envio seguro com rastreio ou retirada",
      ],
      buttonText: "Fazer uma encomenda",
      message: "Olá! Gostaria de encomendar um jogo ou item específico com a equipe da Game Zero.",
      popular: false,
    },
  ];

  return (
    <section id="atendimento" className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-12 md:py-20 max-w-7xl mx-auto">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-3 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Sua Próxima Jogada
        </span>
        <h2 className="text-center text-foreground font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.025em] leading-tight">
          Como podemos te ajudar hoje?
        </h2>
        <p className="max-w-2xl text-muted-foreground text-sm sm:text-base font-normal leading-relaxed">
          Escolha o tipo de atendimento que você precisa. Todo processo é conduzido com transparência e conversa direta no WhatsApp.
        </p>
      </div>

      {/* 3 Cards Matching Pricing Layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-stretch">
        {services.map((svc) => (
          <div
            key={svc.id}
            className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300 relative ${
              svc.popular
                ? "bg-gradient-to-b from-white/10 to-white/[0.03] border-white/30 shadow-2xl scale-[1.02] md:-translate-y-2"
                : "bg-card/40 border-white/10 hover:border-white/20"
            }`}
          >
            {svc.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                Recomendado
              </div>
            )}

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="text-xl sm:text-2xl font-display font-semibold tracking-[-0.025em] text-white">{svc.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-silver">
                  {svc.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted mb-6 leading-relaxed">
                {svc.description}
              </p>

              <div className="space-y-3 border-t border-line pt-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-silver block">
                  O que está incluído:
                </span>
                {svc.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-silver">
                    <Check className="h-4 w-4 text-white shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-line">
              <a
                href={createWhatsAppUrl(svc.message)}
                target="_blank"
                rel="noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md ${
                  svc.popular
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-surface text-white hover:bg-white/15 border border-white/15"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                <span>{svc.buttonText}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
