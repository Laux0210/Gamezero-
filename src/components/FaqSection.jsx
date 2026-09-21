import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CONTACT } from "../config/contact";

const faqData = [
  {
    question: "Como funciona a avaliação para troca?",
    answer:
      "Você envia fotos, informações de uso e os itens inclusos pelo WhatsApp. Nossa equipe avalia o estado estético e operacional, confirma os critérios de avaliação e apresenta uma proposta clara de abatimento no console que você deseja antes de qualquer decisão.",
  },
  {
    question: "Como faço uma encomenda de um item específico?",
    answer:
      "Chame no WhatsApp ou Direct do Instagram informando o nome, versão (mídia física, edição de colecionador, etc.) e a plataforma desejada. Verificamos a disponibilidade, integridade da peça, prazo e condições antes de qualquer confirmação.",
  },
  {
    question: "Quais regiões são atendidas para entrega ou envio?",
    answer:
      "A disponibilidade varia conforme o destino e o item. Informe seu CEP diretamente no atendimento para receber as opções de envio seguro com rastreamento ou orientações para retirada direta na loja física.",
  },
  {
    question: "Como acionar a garantia da loja?",
    answer:
      "Basta entrar em contato pelo WhatsApp com o comprovante do atendimento e uma breve descrição ou vídeo do ocorrido. Nossa equipe confirma a cobertura e o prazo aplicáveis ao item e orienta os próximos passos com rapidez.",
  },
  {
    question: "Vocês atendem consoles de gerações anteriores (PS1 a PS3, Vita)?",
    answer:
      "Sim! A GAME ZER0 tem 13 anos de atuação e temos grande carinho por todas as gerações: PlayStation 1, 2, 3, PS4, PS5, PS Vita, consoles Xbox e Nintendo, além de jogos, cabos e controles originais revisados.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="w-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-xl overflow-hidden transition-colors cursor-pointer"
      onClick={onToggle}
    >
      <div className="w-full px-5 py-4 flex justify-between items-center gap-4 text-left">
        <h3 className="flex-1 text-foreground text-sm sm:text-base font-medium leading-snug">
          {question}
        </h3>
        <div className="shrink-0">
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
              isOpen ? "rotate-180 text-white" : "rotate-0"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-1 border-t border-line/40">
          <p className="text-muted-foreground text-xs sm:text-sm font-normal leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const toggleItem = (index) => {
    const next = new Set(openItems);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    setOpenItems(next);
  };

  return (
    <section id="faq" className="w-full py-12 md:py-20 px-5 relative flex flex-col items-center max-w-4xl mx-auto">
      <div className="w-[300px] h-[400px] absolute top-[100px] left-1/2 -translate-x-1/2 bg-white/[0.04] blur-[100px] pointer-events-none z-0" />

      <div className="text-center mb-10 relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-2">
          Perguntas Frequentes
        </span>
        <h2 className="text-foreground font-display text-4xl sm:text-5xl font-semibold tracking-[-0.025em] leading-tight">
          Dúvidas que vale resolver antes.
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
          Tudo o que você precisa saber sobre o processo de atendimento da GAME ZER0.
        </p>
      </div>

      <div className="w-full flex flex-col gap-3 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
}
