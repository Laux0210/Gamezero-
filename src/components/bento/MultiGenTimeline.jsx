export default function MultiGenTimeline() {
  const gens = [
    { year: "1994", tag: "PS1", label: "Clássicos 32-bit" },
    { year: "2000", tag: "PS2", label: "Geração de ouro" },
    { year: "2006", tag: "PS3", label: "Mídia Bluray / HD" },
    { year: "2013", tag: "PS4", label: "Era dos consagrados" },
    { year: "2020+", tag: "PS5", label: "4K 120Hz & SSD" },
  ];

  return (
    <div className="w-full h-full p-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-[320px] p-3 rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm space-y-2">
        <div className="flex items-center justify-between text-[11px] text-muted border-b border-line pb-1.5">
          <span>Linha do Tempo Sony</span>
          <span className="text-white font-mono text-[10px]">13 ANOS DE HISTÓRIA</span>
        </div>
        <div className="grid grid-cols-5 gap-1.5 pt-1">
          {gens.map((g, idx) => (
            <div
              key={g.tag}
              className={`p-2 rounded-lg border text-center transition-all ${
                idx === 4
                  ? "border-white/40 bg-white/15 text-white"
                  : "border-line bg-surface/40 text-silver"
              }`}
            >
              <span className="block font-mono text-[9px] text-muted">{g.year}</span>
              <strong className="block font-display font-semibold tracking-[-0.025em] text-sm leading-tight text-white">{g.tag}</strong>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-muted text-center pt-1">
          De cartuchos e fitas ao streaming e consoles de última geração.
        </p>
      </div>
    </div>
  );
}
