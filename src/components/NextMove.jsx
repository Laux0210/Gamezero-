import { useState } from "react";
import { CONTACT, createWhatsAppUrl } from "../config/contact";
import { Icon } from "./Icons";

const routes = [
  {
    id: "trocar",
    icon: "refresh",
    label: "Trocar ou fazer upgrade",
    title: "Seu usado pode abrir espaço para a próxima geração.",
    text: "Envie fotos, estado de conservação e itens inclusos. A equipe explica os critérios da avaliação antes de você decidir.",
    action: "Quero avaliar meu usado",
    message: "Olá! Vim pelo site da Game Zero e gostaria de avaliar um console ou jogo para troca.",
  },
  {
    id: "encomendar",
    icon: "package",
    label: "Encomendar um item",
    title: "Procurando algo específico? A busca começa pela versão certa.",
    text: "Informe plataforma, edição e preferência. A loja confirma disponibilidade, prazo e condições antes de qualquer reserva.",
    action: "Quero fazer uma encomenda",
    message: "Olá! Vim pelo site da Game Zero e gostaria de encomendar um item específico.",
  },
  {
    id: "setup",
    icon: "headset",
    label: "Montar ou melhorar setup",
    title: "Cada peça precisa fazer sentido para o seu jeito de jogar.",
    text: "Conte como você joga e o que já usa. A orientação considera compatibilidade, objetivo e o próximo upgrade realmente útil.",
    action: "Quero orientação para meu setup",
    message: "Olá! Vim pelo site da Game Zero e gostaria de orientação para montar ou melhorar meu setup.",
  },
  {
    id: "resolver",
    icon: "message",
    label: "Tirar uma dúvida",
    title: "Fale com quem vive games todos os dias.",
    text: "Dúvidas sobre consoles, jogos, acessórios, envio ou retirada são respondidas diretamente pelos canais oficiais da loja.",
    action: "Falar com a equipe",
    message: "Olá! Vim pelo site da Game Zero e gostaria de tirar uma dúvida.",
  },
];

const proof = [
  ["13 anos", "atendendo apaixonados por games"],
  ["Canal oficial", "WhatsApp (51) 99615-9863"],
  ["Loja real", "bastidores e novidades no Instagram"],
];

export function NextMove() {
  const [activeId, setActiveId] = useState(routes[0].id);
  const activeRoute = routes.find((route) => route.id === activeId) ?? routes[0];

  function handleTabKeyDown(event, currentIndex) {
    const keyOffsets = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let nextIndex = currentIndex;

    if (event.key in keyOffsets) {
      nextIndex = (currentIndex + keyOffsets[event.key] + routes.length) % routes.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = routes.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextRoute = routes[nextIndex];
    setActiveId(nextRoute.id);
    document.getElementById(`move-tab-${nextRoute.id}`)?.focus();
  }

  return (
    <section id="especialidades" className="next-move section-shell">
      <div className="proof-rail" aria-label="Informações oficiais da Game Zero">
        {proof.map(([value, label]) => (
          <div className="proof-item" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="next-move-heading">
        <h2>Qual é a sua próxima jogada?</h2>
        <p>Escolha por onde começar. A Game Zero conduz o restante com orientação clara e atendimento humano.</p>
      </div>

      <div className="move-console">
        <div className="move-tabs" role="tablist" aria-label="Escolha sua necessidade">
          {routes.map((route) => {
            const isActive = activeId === route.id;

            return (
              <button
                className="move-tab"
                id={`move-tab-${route.id}`}
                key={route.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`move-panel-${route.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(route.id)}
                onKeyDown={(event) => handleTabKeyDown(event, routes.indexOf(route))}
              >
                <Icon name={route.icon} className="h-5 w-5" />
                <span>{route.label}</span>
              </button>
            );
          })}
        </div>

        <div
          className="move-panel"
          id={`move-panel-${activeRoute.id}`}
          role="tabpanel"
          aria-labelledby={`move-tab-${activeRoute.id}`}
          key={activeRoute.id}
        >
          <span className="move-panel-status" aria-hidden="true">ROTA ATIVA</span>
          <h3>{activeRoute.title}</h3>
          <p>{activeRoute.text}</p>
          <a
            className="button button-signal min-h-13"
            href={createWhatsAppUrl(activeRoute.message)}
            target="_blank"
            rel="noreferrer"
          >
            {activeRoute.action}
            <Icon name="arrow" className="h-5 w-5" />
          </a>
        </div>

        <aside className="move-hours" aria-label="Horários de atendimento">
          <span>ATENDIMENTO</span>
          <strong>Seg–sex</strong>
          <p>{CONTACT.hours.weekdays}</p>
          <strong>Sábado</strong>
          <p>{CONTACT.hours.saturday}</p>
        </aside>
      </div>
    </section>
  );
}
