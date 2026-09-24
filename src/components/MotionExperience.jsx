import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { createWhatsAppUrl } from "../config/contact";
import { getAssetUrl } from "../utils/assets";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const manifesto = "Não existe console ultrapassado quando existe uma boa história esperando para continuar.";

const collections = [
  {
    id: "playstation",
    title: "PlayStation",
    range: "Do clássico ao atual",
    copy: "Consoles, controles, jogos e acessórios para quem começou no PS2 ou já está mirando o PS5.",
    image: getAssetUrl("/instagram/playstation-wall.jpg"),
  },
  {
    id: "xbox",
    title: "Xbox",
    range: "Potência e retrocompatibilidade",
    copy: "Modelos e jogos para construir uma biblioteca que atravessa gerações sem perder ritmo.",
    image: "https://picsum.photos/seed/gamezero-xbox-console/1600/1000",
  },
  {
    id: "nintendo",
    title: "Nintendo",
    range: "Jogar de outro jeito",
    copy: "Portáteis, consoles e títulos que colocam descoberta, coleção e diversão no centro.",
    image: "https://picsum.photos/seed/gamezero-nintendo-play/1600/1000",
  },
];

const journey = [
  {
    number: "01",
    title: "Conte o que você quer jogar.",
    copy: "A conversa começa pela sua rotina, orçamento e referências, não pelo produto mais caro da prateleira.",
    detail: "Objetivo, perfil e orçamento",
  },
  {
    number: "02",
    title: "Compare com informação real.",
    copy: "Explicamos estado, diferenças entre modelos, acessórios e possibilidades de troca de forma direta.",
    detail: "Opções com critérios claros",
  },
  {
    number: "03",
    title: "Saia pronto para jogar.",
    copy: "Você decide com segurança e continua com um canal humano para dúvidas, suporte e próximos upgrades.",
    detail: "Atendimento que permanece",
  },
];

export function MotionExperience() {
  const root = useRef(null);
  const [activeCollection, setActiveCollection] = useState(collections[0].id);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const words = gsap.utils.toArray(".manifesto-word");
      const cards = gsap.utils.toArray(".journey-card");

      if (prefersReducedMotion) {
        gsap.set([...words, ...cards], { clearProps: "all" });
        return undefined;
      }

      gsap.set(words, { opacity: 0.12 });
      gsap.to(words, {
        opacity: 1,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".manifesto-copy",
          start: "top 78%",
          end: "bottom 38%",
          scrub: true,
        },
      });

      const media = gsap.matchMedia();
      media.add("(min-width: 900px)", () => {
        cards.forEach((card, index) => {
          if (index === 0) return;

          gsap.fromTo(
            card,
            { y: 140, scale: 0.94 },
            {
              y: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                end: "top 48%",
                scrub: 1,
              },
            },
          );
        });
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      <section className="manifesto chapter-shell" aria-label="Manifesto Game Zero">
        <p className="manifesto-copy">
          {manifesto.split(" ").map((word, index) => (
            <span className="manifesto-word" key={`${word}-${index}`}>
              {word}{" "}
            </span>
          ))}
        </p>
      </section>

      <section id="geracoes" className="collection-section chapter-shell" aria-labelledby="collection-title">
        <div className="section-intro">
          <p className="eyebrow">Um acervo sem fronteira de geração</p>
          <h2 id="collection-title">Escolha sua forma de jogar.</h2>
        </div>

        <div className="collection-accordion">
          {collections.map((collection) => {
            const isActive = activeCollection === collection.id;

            return (
              <article
                key={collection.id}
                className={`collection-panel group ${isActive ? "collection-panel--active" : ""}`}
                onMouseEnter={() => setActiveCollection(collection.id)}
                onFocus={() => setActiveCollection(collection.id)}
              >
                <img
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                  src={collection.image}
                  alt=""
                />
                <div className="collection-panel__shade" aria-hidden="true" />
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveCollection(collection.id)}
                >
                  <span className="collection-panel__range">{collection.range}</span>
                  <span className="collection-panel__title">{collection.title}</span>
                  <span className="collection-panel__copy">{collection.copy}</span>
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section id="jornada" className="journey-section chapter-shell" aria-labelledby="journey-title">
        <div className="journey-layout">
          <div className="journey-heading">
            <p className="eyebrow">Simples do primeiro contato ao primeiro play</p>
            <h2 id="journey-title">Uma boa compra começa por uma boa conversa.</h2>
            <a
              className="text-link"
              href={createWhatsAppUrl("Olá! Quero conversar com a equipe da Game Zero sobre meu próximo console.")}
              target="_blank"
              rel="noreferrer"
            >
              Começar agora <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="journey-stack">
            {journey.map((step, index) => (
              <article
                className="journey-card"
                key={step.number}
                style={{ "--stack-offset": `${index * 20}px` }}
              >
                <span className="journey-card__number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
                <span className="journey-card__detail">{step.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
