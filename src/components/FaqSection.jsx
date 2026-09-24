const questions = [
  {
    question: "A Game Zero aceita meu console usado na troca?",
    answer: "Sim. A equipe avalia modelo, estado de conservação, funcionamento e acessórios. Depois explica o valor considerado e as possibilidades de upgrade sem compromisso.",
  },
  {
    question: "Os consoles são testados antes da venda?",
    answer: "Os itens passam por conferência de funcionamento e têm suas condições apresentadas com clareza antes da compra. Detalhes de garantia são confirmados no atendimento de cada produto.",
  },
  {
    question: "Posso pedir um jogo ou edição específica?",
    answer: "Pode. A Game Zero trabalha com busca sob encomenda para consoles, jogos, controles e acessórios. Envie a referência pelo WhatsApp para a equipe consultar disponibilidade.",
  },
  {
    question: "Vocês trabalham com gerações anteriores?",
    answer: "Sim. O acervo e a rede de busca incluem diferentes gerações de PlayStation, Xbox, Nintendo e portáteis, além de jogos e acessórios relacionados.",
  },
  {
    question: "Como funciona o atendimento depois da compra?",
    answer: "O mesmo canal humano permanece disponível para orientações, dúvidas de uso e acionamento da garantia aplicável ao item adquirido.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="faq-section chapter-shell" aria-labelledby="faq-title">
      <div className="faq-heading">
        <p className="eyebrow">Clareza também faz parte da experiência</p>
        <h2 id="faq-title">Antes de escolher, vale perguntar.</h2>
      </div>

      <div className="faq-list">
        {questions.map((item, index) => (
          <details key={item.question} name="gamezero-faq" open={index === 0}>
            <summary>
              <span>{item.question}</span>
              <i aria-hidden="true" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
