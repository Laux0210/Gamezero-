import { CONTACT } from "../config/contact";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export function CtaSection() {
  return (
    <section className="w-full pt-16 md:pt-32 pb-16 md:pb-24 px-5 relative flex flex-col justify-center items-center overflow-visible">
      {/* Signature SVG Radiant Lighting Effect from Template */}
      <div className="absolute inset-0 top-[-90px] pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1388 825"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <mask
            id="mask0_cta_gz"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="269"
            y="27"
            width="850"
            height="493"
          >
            <rect x="269.2" y="27.4" width="849.6" height="492.3" fill="url(#paint0_linear_cta_gz)" />
          </mask>
          <g mask="url(#mask0_cta_gz)">
            <g filter="url(#filter0_f_cta_gz)">
              <ellipse
                cx="694"
                cy="-93"
                rx="670"
                ry="355"
                fill="url(#paint1_radial_cta_gz)"
                fillOpacity="0.8"
              />
            </g>
            <ellipse cx="694" cy="-91.5" rx="670" ry="355" fill="url(#paint2_linear_cta_gz)" />
            <ellipse cx="694" cy="-93" rx="670" ry="355" fill="url(#paint3_linear_cta_gz)" />
          </g>
          <defs>
            <filter
              id="filter0_f_cta_gz"
              x="-234"
              y="-706"
              width="1856"
              height="1226"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="129" result="effect1_foregroundBlur_cta_gz" />
            </filter>
            <linearGradient id="paint0_linear_cta_gz" x1="1119" y1="274" x2="269" y2="274" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--background))" stopOpacity="0" />
              <stop offset="0.2" stopColor="hsl(var(--background))" stopOpacity="0.8" />
              <stop offset="0.8" stopColor="hsl(var(--background))" stopOpacity="0.8" />
              <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_cta_gz"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(683 246) rotate(-3.8) scale(469 248)"
            >
              <stop offset="0.13" stopColor="hsl(var(--primary-dark))" />
              <stop offset="0.24" stopColor="hsl(var(--primary))" />
              <stop offset="0.35" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="paint2_linear_cta_gz" x1="694" y1="-446" x2="694" y2="263" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="paint3_linear_cta_gz" x1="694" y1="-448" x2="694" y2="262" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--background))" />
              <stop offset="1" stopColor="hsl(var(--background))" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col justify-start items-center gap-7 max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Atendimento Direto
        </span>
        <h2 className="text-foreground font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-[1.1] tracking-[-0.025em]">
          Pronto para a sua <br />
          próxima jogada?
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed max-w-xl">
          Fale agora com nossa equipe no WhatsApp oficial. Atendimento de quem entende de verdade do que você precisa.
        </p>

        <div className="pt-2">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#16171a] hover:bg-[#22242a] text-white border border-white/15 hover:border-white/25 rounded-xl text-sm font-medium transition-all duration-200 shadow-md active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4 text-zinc-400" />
            <span>Falar com a equipe no WhatsApp</span>
            <ArrowUpRight className="h-4 w-4 text-zinc-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
