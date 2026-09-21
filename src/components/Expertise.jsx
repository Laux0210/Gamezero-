import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const specialties = [
  {
    icon: "console",
    title: "Consoles e próxima geração",
    text: "Assessoria para escolher, configurar e aproveitar PS5, Xbox Series e Nintendo Switch.",
  },
  {
    icon: "refresh",
    title: "Trocas e upgrades",
    text: "Avaliação transparente para renovar seus consoles e jogos usados com segurança.",
  },
  {
    icon: "headset",
    title: "Acessórios e setups",
    text: "Controles, headsets, periféricos e peças selecionados para o seu jeito de jogar.",
  },
  {
    icon: "package",
    title: "Encomendas exclusivas",
    text: "Busca e reserva de edições especiais e lançamentos difíceis de encontrar.",
  },
];

export function Expertise() {
  return (
    <section id="especialidades" className="section-shell bg-ink">
      <SectionHeading
        kicker="ESPECIALIDADES"
        title="Tudo começa com a escolha certa."
        description="Não empurramos produto. Entendemos o que você procura e ajudamos a encontrar a solução que realmente faz sentido para o seu momento gamer."
      />
      <div className="mt-14 grid border-l border-t border-line md:grid-cols-2 xl:grid-cols-4">
        {specialties.map((item, index) => (
          <article className="expertise-card" key={item.title}>
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center border border-line bg-panel text-white">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <span className="font-display text-3xl font-bold text-line" aria-hidden="true">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-12 font-display text-3xl font-bold leading-none text-white">{item.title}</h3>
            <p className="mt-5 text-sm leading-6 text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
