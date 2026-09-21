import { Icon } from "./Icons";

const reasons = [
  ["Atendimento por gamers", "Conversa prática, sem enrolação técnica e com repertório real de quem joga."],
  ["Transparência em cada avaliação", "Você entende os critérios, as condições e o valor antes de decidir."],
  ["Originalidade e garantia", "Compromisso com procedência e garantia documentada em cada negociação."],
];

export function WhyUs() {
  return (
    <section className="section-shell bg-ink">
      <div className="relative overflow-hidden border border-line bg-white px-6 py-10 text-black sm:px-10 lg:px-14 lg:py-16">
        <div className="slash-mark" aria-hidden="true" />
        <div className="relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-zinc-600">POR QUE A GAME ZER0?</p>
            <h2 className="mt-5 max-w-md font-display text-5xl font-black leading-[0.88] tracking-[-0.04em] sm:text-6xl">
              Menos dúvida. Mais jogo.
            </h2>
          </div>
          <ul className="divide-y divide-zinc-300 border-y border-zinc-300">
            {reasons.map(([title, text]) => (
              <li className="grid gap-4 py-6 sm:grid-cols-[auto_1fr]" key={title}>
                <span className="flex h-9 w-9 items-center justify-center border border-black">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-1 max-w-xl text-sm leading-6 text-zinc-600">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
