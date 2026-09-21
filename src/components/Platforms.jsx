import { createWhatsAppUrl } from "../config/contact";
import { Icon } from "./Icons";

const platforms = [
  { code: "PS1", name: "PlayStation 1", note: "Jogos e clássicos que marcaram época" },
  {
    code: "PS2",
    name: "PlayStation 2",
    note: "Clássicos, jogos e acessórios",
  },
  { code: "PS3", name: "PlayStation 3", note: "Jogos, controles e suporte" },
  { code: "PS4", name: "PlayStation 4", note: "Trocas, upgrades e acervo" },
  {
    code: "PS5",
    name: "PlayStation 5",
    note: "Nova geração e acessórios",
  },
  { code: "PS VITA", name: "PlayStation Vita", note: "Portátil, jogos e acessórios" },
  { code: "XBOX", name: "Xbox", note: "Consoles, jogos e controles" },
  {
    code: "NINTENDO",
    name: "Nintendo",
    note: "Switch, portáteis e clássicos",
  },
];

export function Platforms() {
  return (
    <section id="geracoes" className="platforms-section border-b border-line">
      <div className="section-shell">
        <div className="platforms-intro">
          <h2>Do PS1 ao PS5. E muito além.</h2>
          <p>
            Do console que marcou sua infância ao próximo upgrade, a conversa começa pela plataforma certa.
          </p>
        </div>

        <div className="platform-grid" aria-label="Plataformas atendidas">
          {platforms.map((platform) => (
            <a
              className="platform-item"
              href={createWhatsAppUrl(`Olá! Vim pelo site da Game Zero e gostaria de atendimento para ${platform.name}.`)}
              target="_blank"
              rel="noreferrer"
              key={platform.code}
              aria-label={`Pedir atendimento para ${platform.name} no WhatsApp`}
            >
              <span className="platform-code">{platform.code}</span>
              <span className="platform-meta">
                <span>{platform.note}</span>
                <Icon name="arrow" className="h-5 w-5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
