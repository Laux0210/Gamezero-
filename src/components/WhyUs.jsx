import { Icon } from "./Icons";

const reasons = [
  ["Atendimento por gamers", "Conversa prática, sem enrolação técnica e com repertório real de quem joga."],
  ["Transparência em cada avaliação", "Você entende os critérios, as condições e o valor antes de decidir."],
  ["Procedência e condições claras", "Origem, estado e condições aplicáveis são informados antes de cada negociação."],
];

export function WhyUs() {
  return (
    <section className="deferred-section section-shell bg-ink">
      <div className="why-panel relative overflow-hidden border border-line px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-16">
        <div className="slash-mark" aria-hidden="true" />
        <div className="relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <h2 className="max-w-md font-display text-5xl font-normal leading-[0.98] tracking-[-0.025em] text-balance sm:text-6xl lg:text-7xl">
              Menos dúvida. Mais jogo.
            </h2>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {reasons.map(([title, text]) => (
              <li className="grid gap-4 py-6 sm:grid-cols-[auto_1fr]" key={title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-silver">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-3xl font-normal">{title}</h3>
                  <p className="mt-2 max-w-[65ch] text-base leading-7 text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
