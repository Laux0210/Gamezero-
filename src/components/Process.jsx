import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { icon: "message", title: "Você chama a gente", text: "Conte o que precisa pelo WhatsApp ou pelo Direct." },
  { icon: "search", title: "Consultoria sob medida", text: "Entendemos se você busca uma troca, novidade ou suporte." },
  { icon: "handshake", title: "Negociação clara e segura", text: "Alinhamos condições, garantia, envio seguro ou retirada." },
];

export function Process() {
  return (
    <section id="como-funciona" className="section-shell border-y border-line bg-panel">
      <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
        <SectionHeading
          kicker="COMO FUNCIONA"
          title="Direto ao ponto, do primeiro contato ao controle na mão."
        />
        <ol className="divide-y divide-line border-y border-line">
          {steps.map((step, index) => (
            <li className="group grid gap-5 py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-center" key={step.title}>
              <span className="font-display text-4xl font-black text-line transition-colors duration-300 group-hover:text-white motion-reduce:transition-none">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-display text-3xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </div>
              <span className="hidden h-11 w-11 items-center justify-center border border-line text-silver sm:flex">
                <Icon name={step.icon} className="h-5 w-5" />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
