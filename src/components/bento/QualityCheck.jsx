import { CheckCircle2, ShieldCheck, Box } from "lucide-react";

export default function QualityCheck() {
  const steps = [
    { label: "Inspeção visual e integridade física", ok: true },
    { label: "Teste de leitor óptico e conexões", ok: true },
    { label: "Higienização e embalagem protegida", ok: true },
    { label: "Garantia documentada da loja", ok: true },
  ];

  return (
    <div className="w-full h-full p-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-[320px] p-3.5 rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm space-y-2">
        <div className="flex items-center justify-between text-xs border-b border-line pb-1.5">
          <span className="text-white font-medium flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-white" /> Protocolo Game Zero
          </span>
          <span className="text-[10px] text-white font-bold bg-white/10 px-2 py-0.5 rounded">100% REVISADO</span>
        </div>

        <div className="space-y-1.5 pt-1">
          {steps.map((st, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px] text-silver">
              <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
              <span>{st.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-2 pt-2 border-t border-line flex items-center justify-between text-[10px] text-muted">
          <span className="flex items-center gap-1">
            <Box className="h-3 w-3" /> Retirada ou envio seguro
          </span>
          <span className="text-silver">Suporte direto</span>
        </div>
      </div>
    </div>
  );
}
