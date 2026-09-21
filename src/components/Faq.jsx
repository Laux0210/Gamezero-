import { SectionHeading } from "./SectionHeading";

const questions = [
  ["Como funciona a avaliação para troca?", "Você envia fotos, informações de uso e os itens inclusos. A equipe analisa o estado, confirma os critérios e apresenta uma proposta clara antes de qualquer decisão."],
  ["Como faço uma encomenda de um item específico?", "Chame no WhatsApp ou Instagram com o nome, versão e plataforma do item. Verificamos disponibilidade, prazo e condições antes de confirmar a reserva."],
  ["Quais regiões são atendidas para entrega ou envio?", "A disponibilidade varia conforme o destino e o item. Informe seu CEP no atendimento para receber as opções de envio ou retirada aplicáveis."],
  ["Como acionar a garantia da loja?", "Entre em contato pelo mesmo canal da compra com o comprovante e uma descrição do ocorrido. A equipe confirma a cobertura e o prazo aplicáveis ao item e orienta os próximos passos."],
];

export function Faq() {
  return (
    <section className="deferred-section section-shell bg-ink">
      <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <SectionHeading title="Dúvidas que vale resolver antes." />
        <div className="border-t border-line">
          {questions.map(([question, answer]) => (
            <details className="faq-item group border-b border-line" key={question}>
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 font-display text-2xl font-normal leading-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:gap-6 sm:text-3xl">
                {question}
                <span className="faq-plus shrink-0" aria-hidden="true" />
              </summary>
              <p className="max-w-[65ch] pb-7 pr-10 text-base leading-7 text-muted">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
