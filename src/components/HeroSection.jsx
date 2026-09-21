import React from "react";
import { CONTACT } from "../config/contact";
import { Icon } from "./Icons";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="flex flex-col items-center text-center relative mx-auto rounded-3xl overflow-hidden mt-2 md:mt-4 mb-0 px-4 w-full max-w-[1360px] pb-10 sm:pb-12 md:pb-16"
    >
      {/* Signature SVG Glow & Geometric Grid Background from Template */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 810"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip0_hero_gamezero)">
            <mask
              id="mask0_hero_gamezero"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="10"
              y="-1"
              width="1200"
              height="812"
            >
              <rect x="10" y="-0.85" width="1200" height="811.7" fill="url(#paint0_linear_gz)" />
            </mask>
            <g mask="url(#mask0_hero_gamezero)">
              {/* Dotted Grid Rectangles */}
              {[...Array(35)].map((_, i) => (
                <React.Fragment key={`row-${i}`}>
                  {[9.2, 45.2, 81.2, 117.2, 153.2, 189.2, 225.2, 261.2, 297.2, 333.2, 369.2, 405.2, 441.2, 477.2, 513.2, 549.2, 585.2, 621.2, 657.2, 693.2, 729.2, 765.2].map((y, j) => (
                    <rect
                      key={`rect-${i}-${j}`}
                      x={-20.0891 + i * 36}
                      y={y}
                      width="35.6"
                      height="35.6"
                      stroke="hsl(var(--foreground))"
                      strokeOpacity="0.08"
                      strokeWidth="0.4"
                      strokeDasharray="2 2"
                    />
                  ))}
                </React.Fragment>
              ))}

              {/* Accent illuminated squares */}
              <rect x="699.7" y="81" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.07" />
              <rect x="195.7" y="153" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.08" />
              <rect x="1023.7" y="153" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.08" />
              <rect x="123.7" y="225" width="36" height="36" fill="hsl(var(--primary))" fillOpacity="0.12" />
              <rect x="1095.7" y="225" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.08" />
              <rect x="951.7" y="297" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.07" />
              <rect x="231.7" y="333" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.06" />
              <rect x="519.7" y="405" width="36" height="36" fill="hsl(var(--primary))" fillOpacity="0.15" />
              <rect x="771.7" y="405" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.08" />
            </g>

            {/* Atmosphere blurred light gradients */}
            <g filter="url(#filter0_f_gz)">
              <path
                d="M1447.45 -87V-149H1770V1248H466.158V894C1008.11 894 1447.45 454.9 1447.45 -87Z"
                fill="url(#paint1_linear_gz)"
              />
            </g>

            <g filter="url(#filter1_f_gz)">
              <path
                d="M1383.45 -151V-213H1706V1184H402.158V830C944.11 830 1383.45 390.9 1383.45 -151Z"
                fill="url(#paint2_linear_gz)"
                fillOpacity="0.6"
              />
            </g>

            <g style={{ mixBlendMode: "overlay" }} filter="url(#filter3_f_gz)">
              <path
                d="M65.6 750H284C860.2 750 1327.3 283.1 1327.3 -293H1650V1104H65.6V750Z"
                fill="url(#paint4_radial_gz)"
                fillOpacity="0.45"
              />
            </g>
          </g>

          <rect
            x="0.5"
            y="0.5"
            width="1219"
            height="809"
            rx="23.5"
            stroke="hsl(var(--foreground))"
            strokeOpacity="0.08"
          />

          <defs>
            <filter id="filter0_f_gz" x="147" y="-468" width="1941" height="2035" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="159" result="effect1_foregroundBlur_gz" />
            </filter>
            <filter id="filter1_f_gz" x="-554" y="-1169" width="3216" height="3310" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="478" result="effect1_foregroundBlur_gz" />
            </filter>
            <filter id="filter3_f_gz" x="-253" y="-612" width="2222" height="2035" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="159" result="effect1_foregroundBlur_gz" />
            </filter>
            <linearGradient id="paint0_linear_gz" x1="35" y1="23" x2="903" y2="632" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--foreground))" stopOpacity="0" />
              <stop offset="1" stopColor="hsl(var(--muted-foreground))" />
            </linearGradient>
            <linearGradient id="paint1_linear_gz" x1="1118" y1="-149" x2="1118" y2="1248" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--foreground))" />
              <stop offset="0.58" stopColor="hsl(var(--primary-light))" />
              <stop offset="1" stopColor="hsl(var(--primary))" />
            </linearGradient>
            <linearGradient id="paint2_linear_gz" x1="1054" y1="-213" x2="1054" y2="1184" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--foreground))" />
              <stop offset="0.58" stopColor="hsl(var(--primary-light))" />
              <stop offset="1" stopColor="hsl(var(--primary))" />
            </linearGradient>
            <radialGradient id="paint4_radial_gz" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(989 557) rotate(48) scale(466 471)">
              <stop stopColor="hsl(var(--foreground))" />
              <stop offset="0.16" stopColor="hsl(var(--primary-light))" />
              <stop offset="1" stopColor="hsl(var(--primary))" />
            </radialGradient>
            <clipPath id="clip0_hero_gamezero">
              <rect width="1220" height="810" rx="24" fill="hsl(var(--foreground))" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Central Hero Typography and Action */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl mt-20 sm:mt-24 md:mt-28 mb-2 px-2">
        {/* Story Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-xs font-semibold text-silver mb-6">
          <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulse" />
          <span>13 anos de atendimento gamer • De PS1 a PS5</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.025em] text-white text-balance">
          O ponto zero da sua <br className="hidden sm:inline" />
          experiência gamer.
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-muted max-w-xl leading-relaxed text-pretty">
          Consoles, jogos, setups e upgrades com atendimento próximo, avaliação transparente e experiência de quem realmente vive o universo gamer.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16171a] hover:bg-[#22242a] text-white border border-white/15 hover:border-white/25 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm active:scale-[0.98]"
          >
            <span>Falar com nossa equipe</span>
            <ArrowUpRight className="h-4 w-4 text-zinc-400" />
          </a>
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.98]"
          >
            <Icon name="instagram" className="h-4 w-4 text-zinc-400" />
            <span>@lojagamezero</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-white" /> Atendimento especializado
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-white" /> Procedência e condições claras
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-white" /> Avaliação justa em upgrades
          </span>
        </div>
      </div>
    </section>
  );
}
