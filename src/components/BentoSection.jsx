import UpgradeEvaluation from "./bento/UpgradeEvaluation";
import MultiGenTimeline from "./bento/MultiGenTimeline";
import DirectConnect from "./bento/DirectConnect";
import CustomSearch from "./bento/CustomSearch";
import SetupConsulting from "./bento/SetupConsulting";
import QualityCheck from "./bento/QualityCheck";

const BentoCard = ({ title, description, Component }) => (
  <div className="overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-start items-start relative group">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    />
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1">
        <h3 className="self-stretch text-foreground text-lg font-semibold tracking-[-0.025em] leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
    <div className="self-stretch h-64 md:h-72 relative -mt-0.5 z-10">
      <Component />
    </div>
  </div>
);

export function BentoSection() {
  const cards = [
    {
      title: "Avaliação transparente em upgrades.",
      description: "Entenda cada critério antes de fechar a troca do seu console usado.",
      Component: UpgradeEvaluation,
    },
    {
      title: "Cobertura multigeração autêntica.",
      description: "Do clássico PlayStation 1 ao PS5, portáteis Sony, Xbox e Nintendo.",
      Component: MultiGenTimeline,
    },
    {
      title: "Atendimento direto com quem joga.",
      description: "Sem chatbots genéricos. Conversa humana rápida via WhatsApp e Direct.",
      Component: DirectConnect,
    },
    {
      title: "Busca de edições e encomendas.",
      description: "Procurando um jogo específico ou edição rara? A gente localiza para você.",
      Component: CustomSearch,
    },
    {
      title: "Consultoria para o seu setup.",
      description: "Orientação prática em controles, cabos de alta taxa, áudio e periféricos.",
      Component: SetupConsulting,
    },
    {
      title: "Procedência e testes rigorosos.",
      description: "Garantia documentada da loja e checagem completa antes de cada entrega.",
      Component: QualityCheck,
    },
  ];

  return (
    <section id="como-funciona" className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent max-w-7xl mx-auto">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        {/* Glow backdrop */}
        <div className="w-[500px] h-[800px] absolute top-[200px] left-[50px] origin-top-left rotate-[-30deg] bg-white/[0.04] blur-[130px] pointer-events-none z-0" />

        <div className="self-stretch py-8 md:py-12 flex flex-col justify-center items-center gap-2 z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Diferenciais GAME ZER0
          </span>
          <h2 className="w-full max-w-[700px] text-foreground font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.025em] leading-tight md:leading-[1.1]">
            Mais jogo. Menos enrolação.
          </h2>
          <p className="w-full max-w-[620px] text-muted-foreground text-base md:text-lg font-normal leading-relaxed mt-2">
            13 anos atendendo apaixonados por games com orientação antes da venda, procedência verificada e respeito pelo seu bolso.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
