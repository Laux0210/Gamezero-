import { createWhatsAppUrl } from "../config/contact";

const platforms = [
  {
    code: "PS2",
    name: "PlayStation 2",
    label: "PS2",
    icon: (
      <svg viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-7 text-silver">
        <path d="M13 7h22a7 7 0 0 1 6.5 9.6l-2.2 6.8a3 3 0 0 1-2.9 2h-2.8a3 3 0 0 1-2.8-2l-1.2-3.8a4 4 0 0 0-7.2 0l-1.2 3.8a3 3 0 0 1-2.8 2H16a3 3 0 0 1-2.9-2L11 16.6A7 7 0 0 1 13 7Z" />
        <path d="M12 11v3.5m-1.7-1.7h3.5m20-1.8h.01m3 1.8h.01m-3 1.8h.01m-3-1.8h.01" />
        <circle cx="19" cy="18" r="2.5" />
        <circle cx="29" cy="18" r="2.5" />
      </svg>
    ),
  },
  {
    code: "PS3",
    name: "PlayStation 3",
    label: "PS3",
    icon: (
      <svg viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-7 text-silver">
        <path d="M13 7h22a7 7 0 0 1 6.5 9.6l-2.2 6.8a3 3 0 0 1-2.9 2h-2.8a3 3 0 0 1-2.8-2l-1.2-3.8a4 4 0 0 0-7.2 0l-1.2 3.8a3 3 0 0 1-2.8 2H16a3 3 0 0 1-2.9-2L11 16.6A7 7 0 0 1 13 7Z" />
        <path d="M12 11v3m-1.5-1.5h3m21-1.5h.01m2.5 1.5h.01m-2.5 1.5h.01m-2.5-1.5h.01" />
        <circle cx="19" cy="18" r="2.5" />
        <circle cx="29" cy="18" r="2.5" />
        <circle cx="24" cy="13" r="1.2" />
      </svg>
    ),
  },
  {
    code: "PS4",
    name: "PlayStation 4",
    label: "PS4",
    icon: (
      <svg viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-7 text-silver">
        <path d="M14 7h20a6.5 6.5 0 0 1 6.3 8.3l-2.6 8.3a3 3 0 0 1-2.9 2.1h-2.3a3 3 0 0 1-2.8-2.1L28.5 19a4 4 0 0 0-7 0l-1.2 4.6a3 3 0 0 1-2.8 2.1H15a3 3 0 0 1-2.9-2.1l-2.6-8.3A6.5 6.5 0 0 1 14 7Z" />
        <rect x="21" y="9" width="6" height="5" rx="1" />
        <path d="M13 12v3m-1.5-1.5h3m21-1.5h.01m2.5 1.5h.01m-2.5 1.5h.01m-2.5-1.5h.01" />
        <circle cx="18" cy="19" r="2.8" />
        <circle cx="30" cy="19" r="2.8" />
      </svg>
    ),
  },
  {
    code: "PS5",
    name: "PlayStation 5",
    label: "PS5",
    icon: (
      <svg viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-7 text-silver">
        <path d="M15 6h18a6 6 0 0 1 5.9 7.3l-2.3 9.8a3 3 0 0 1-3 2.3h-2.5a3 3 0 0 1-2.9-2.2l-1.2-4.5a4 4 0 0 0-7.8 0l-1.2 4.5a3 3 0 0 1-2.9 2.2H12a3 3 0 0 1-3-2.3L6.7 13.3A6 6 0 0 1 15 6Z" />
        <rect x="20.5" y="8.5" width="7" height="5.5" rx="1.5" />
        <circle cx="18" cy="18.5" r="2.8" />
        <circle cx="30" cy="18.5" r="2.8" />
        <path d="M12.5 11.5v3m-1.5-1.5h3m21.5-1.5h.01m2.5 1.5h.01m-2.5 1.5h.01m-2.5-1.5h.01" />
      </svg>
    ),
  },
  {
    code: "XB0X",
    name: "Xbox",
    label: "XB0X",
    icon: (
      <svg viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-7 text-silver">
        <path d="M13 7h22a7 7 0 0 1 6.6 9.4l-2.4 7a3 3 0 0 1-2.9 2h-2.5a3 3 0 0 1-2.8-2l-1.3-4.2a4 4 0 0 0-7.4 0L19 23.4a3 3 0 0 1-2.8 2h-2.5a3 3 0 0 1-2.9-2l-2.4-7A7 7 0 0 1 13 7Z" />
        <circle cx="24" cy="11.5" r="2" />
        <circle cx="16" cy="13.5" r="2.5" />
        <circle cx="31" cy="18" r="2.5" />
        <path d="M17 19.5v2m-1-1h2" />
        <path d="M30 11.5h.01m2 1.5h.01m-2 1.5h.01m-2-1.5h.01" />
      </svg>
    ),
  },
  {
    code: "NINTEND0",
    name: "Nintendo",
    label: "NINTEND0",
    icon: (
      <svg viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-7 text-silver">
        <rect x="7" y="7" width="34" height="18" rx="4" />
        <line x1="14" y1="7" x2="14" y2="25" />
        <line x1="34" y1="7" x2="34" y2="25" />
        <path d="M10.5 12v3m-1.5-1.5h3" />
        <circle cx="10.5" cy="19.5" r="1.5" />
        <circle cx="37.5" cy="12.5" r="1.5" />
        <path d="M37.5 18v2m-1-1h2" />
      </svg>
    ),
  },
];

export function PlatformsProof() {
  return (
    <section id="geracoes" className="w-full pt-2 md:pt-4 pb-8 md:pb-12 px-5 max-w-7xl mx-auto">
      {/* Top Contextual Heading and Phrase */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 block mb-2">
            MÚLTIPLAS GERAÇÕES • CONSOLES E ACERVO
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-white">
            Do clássico ao lançamento. <br className="hidden sm:inline" />
            A conversa começa pela sua plataforma favorita.
          </h2>
        </div>
        <div className="md:text-right">
          <p className="text-sm sm:text-base text-silver/80 font-normal max-w-sm">
            Clica em qualquer uma e pergunta direto no WhatsApp com quem realmente entende do assunto.
          </p>
        </div>
      </div>

      {/* Grid of Square Cards matching Image 2 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {platforms.map((p) => (
          <a
            key={p.code}
            href={createWhatsAppUrl(`Olá! Vim pelo site da Game Zero e gostaria de atendimento para ${p.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col items-center justify-center aspect-[1/0.95] sm:aspect-square p-4 rounded-2xl border border-white/10 bg-[#121214]/70 hover:bg-[#18191d] hover:border-white/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-white/[0.04] active:scale-[0.96]"
            title={`Atendimento para ${p.name}`}
          >
            <div className="mb-3 flex items-center justify-center opacity-75 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-1 transition-all duration-300">
              {p.icon}
            </div>
            <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400 group-hover:text-white group-hover:tracking-[0.24em] transition-all duration-300">
              {p.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
