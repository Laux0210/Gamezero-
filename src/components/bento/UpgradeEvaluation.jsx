import { ShieldCheck, Check, ArrowRight } from "lucide-react";

export default function UpgradeEvaluation() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-center items-center select-none">
      <div className="w-full max-w-[320px] rounded-xl border border-white/15 bg-black/60 backdrop-blur-md p-3.5 shadow-xl">
        <div className="flex items-center justify-between border-b border-line pb-2.5 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-mono text-silver font-semibold">AVALIAÇÃO_UPGRADE</span>
          </div>
          <span className="text-[10px] uppercase font-bold text-white bg-white/10 px-2 py-0.5 rounded">
            Transparência
          </span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-surface/60 border border-line">
            <span className="text-muted text-[11px]">Console avaliado:</span>
            <span className="text-white font-medium">PlayStation 4 Pro 1TB</span>
          </div>
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center gap-2 text-[11px] text-silver">
              <Check className="h-3.5 w-3.5 text-white shrink-0" />
              <span>Estado estético e lacres verificados</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-silver">
              <Check className="h-3.5 w-3.5 text-white shrink-0" />
              <span>Controle original e cabos testados</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-silver">
              <Check className="h-3.5 w-3.5 text-white shrink-0" />
              <span>Abatimento direto no próximo console</span>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-line flex items-center justify-between">
          <span className="text-[11px] text-muted">Destino:</span>
          <span className="text-xs font-semibold text-white inline-flex items-center gap-1">
            Upgrade PS5 <ArrowRight className="h-3 w-3 text-white" />
          </span>
        </div>
      </div>
    </div>
  );
}
