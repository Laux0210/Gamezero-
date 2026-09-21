import { CONTACT } from "../config/contact";
import { Sparkles, ShieldCheck } from "lucide-react";
import { getAssetUrl } from "../utils/assets";

export function LargeQuote() {
  return (
    <section className="w-full px-5 overflow-hidden flex justify-center items-center my-6 md:my-12">
      <div className="max-w-5xl w-full mx-auto px-4 py-12 md:py-16 lg:py-20 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-md flex flex-col items-center text-center gap-8 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5 text-white" />
          <span>Compromisso Game Zero</span>
        </div>

        <blockquote className="max-w-4xl text-foreground font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-[1.15] tracking-[-0.025em] text-balance">
          “Orientar antes de vender, respeitar cada geração e tratar todo gamer com transparência em cada troca.”
        </blockquote>

        <div className="flex items-center justify-center gap-4 pt-2">
          <div className="h-12 w-12 rounded-full border border-white/15 bg-black flex items-center justify-center overflow-hidden">
            <img
              src={getAssetUrl("/instagram/game-zero-logo.jpg")}
              alt="Logo Game Zero"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="text-foreground text-base font-semibold leading-tight flex items-center gap-1.5">
              <span>GAME ZER0</span>
              <ShieldCheck className="h-4 w-4 text-white" />
            </div>
            <div className="text-muted-foreground text-xs font-medium">
              13 anos no mercado • {CONTACT.instagramHandle}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
