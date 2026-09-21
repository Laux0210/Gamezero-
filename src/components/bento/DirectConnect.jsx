import { MessageSquare, PhoneCall, ArrowUpRight } from "lucide-react";
import { CONTACT } from "../../config/contact";
import { Icon } from "../Icons";

export default function DirectConnect() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-[320px] p-3.5 rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm space-y-2.5">
        <div className="flex items-center justify-between text-xs border-b border-line pb-2">
          <span className="text-silver font-medium">Canais Oficiais</span>
          <span className="text-white text-[11px] font-mono font-semibold">RESPOSTA_HUMANA</span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between p-2 rounded-lg border border-white/20 bg-white/5">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-white text-black">
                <MessageSquare className="h-3.5 w-3.5" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-white">WhatsApp Oficial</span>
                <span className="block text-[10px] text-muted">{CONTACT.whatsappLabel}</span>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white font-bold">Ativo</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg border border-line bg-surface/30">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-white/10 text-white">
                <Icon name="instagram" className="h-3.5 w-3.5" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-white">Instagram Direct</span>
                <span className="block text-[10px] text-muted">{CONTACT.instagramHandle}</span>
              </div>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
          </div>
        </div>

        <p className="text-[10px] text-muted text-center">
          Seg a Sex {CONTACT.hours.weekdays} • Sáb {CONTACT.hours.saturday}
        </p>
      </div>
    </div>
  );
}
