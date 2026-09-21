import { Headphones, Gamepad, Tv, Cable } from "lucide-react";

export default function SetupConsulting() {
  const items = [
    { name: "Controles & Docks", icon: Gamepad, status: "Compatível" },
    { name: "Áudio & Headset", icon: Headphones, status: "Otimizado" },
    { name: "Cabos HDMI 2.1 & Energia", icon: Cable, status: "Alta Taxa" },
    { name: "Posicionamento & Monitor", icon: Tv, status: "Ajustado" },
  ];

  return (
    <div className="w-full h-full p-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-[320px] p-3 rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm space-y-2">
        <div className="flex items-center justify-between text-[11px] text-silver border-b border-line pb-1.5">
          <span>Orientação de Hardware</span>
          <span className="text-white font-mono text-[10px] font-semibold">CONSULTORIA</span>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {items.map((it) => {
            const IconC = it.icon;
            return (
              <div key={it.name} className="p-2 rounded-lg border border-line bg-card/60 flex items-center gap-2">
                <IconC className="h-3.5 w-3.5 text-silver shrink-0" />
                <div className="min-w-0">
                  <span className="block text-[10px] font-medium text-white truncate">{it.name}</span>
                  <span className="block text-[9px] text-silver">{it.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-[10px] text-muted text-center pt-1">
          Cada periférico sugerido tem propósito real para o seu estilo de gameplay.
        </p>
      </div>
    </div>
  );
}
