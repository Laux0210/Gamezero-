import { Search, Disc3, PackageCheck } from "lucide-react";

export default function CustomSearch() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-[320px] p-3.5 rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm space-y-2.5">
        <div className="relative">
          <input
            type="text"
            readOnly
            value="Silent Hill 2 / Zelda Ocarina / Mídia Física..."
            className="w-full bg-surface/80 border border-line rounded-lg py-2 pl-8 pr-3 text-xs text-silver outline-none"
          />
          <Search className="h-3.5 w-3.5 text-muted absolute left-2.5 top-2.5" />
        </div>

        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between p-2 rounded-lg border border-line bg-card/60 text-xs">
            <div className="flex items-center gap-2">
              <Disc3 className="h-3.5 w-3.5 text-white" />
              <span className="text-white font-medium text-[11px]">Busca da Versão Exata</span>
            </div>
            <span className="text-[10px] text-muted">Original / CIB</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg border border-line bg-card/60 text-xs">
            <div className="flex items-center gap-2">
              <PackageCheck className="h-3.5 w-3.5 text-white" />
              <span className="text-white font-medium text-[11px]">Reserva Sob Demanda</span>
            </div>
            <span className="text-[10px] text-muted">Sem surpresa</span>
          </div>
        </div>

        <p className="text-[10px] text-muted text-center">
          Você informa o título e edição desejada, nós localizamos e avaliamos antes de você fechar.
        </p>
      </div>
    </div>
  );
}
