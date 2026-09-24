import { useState, useRef, useEffect } from "react";
import { CONTACT, createWhatsAppUrl } from "../config/contact";
import { Icon } from "./Icons";
import { X, Send, ArrowUpRight, CheckCheck } from "lucide-react";
import { getAssetUrl } from "../utils/assets";

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "bot",
    time: "agora",
    text: "Fala, gamer! Bem-vindo à GAME ZER0. Atendemos de PS1 a PS5, Xbox e Nintendo há mais de 13 anos.",
  },
  {
    id: 2,
    sender: "bot",
    time: "agora",
    text: "Como podemos acelerar sua próxima jogada hoje?",
    options: [
      { id: "troca", label: "Avaliar meu console pra troca", reply: "Quero avaliar meu console usado para fazer upgrade." },
      { id: "consoles", label: "Ver consoles e acervo", reply: "Gostaria de saber quais consoles vocês têm disponíveis hoje." },
      { id: "setup", label: "Encomendas e jogos", reply: "Busco um console ou jogo específico sob encomenda." },
      { id: "horarios", label: "Horário e loja física", reply: "Qual o horário de funcionamento e endereço da loja?" },
      { id: "humano", label: "Falar com atendente humano", reply: "Gostaria de falar direto com um atendente no WhatsApp." },
    ],
  },
];

const BOT_RESPONSES = {
  troca: {
    text: "Perfeito! Aqui na Game Zero avaliamos seu console de forma justa e transparente. Levamos em consideração o estado estético, funcionamento de leitor, conexões e controles originais. Para passar sua avaliação personalizada, me conta qual o modelo do seu console no WhatsApp!",
    cta: "Enviar fotos e modelo no WhatsApp",
    waMessage: "Olá! Vim pelo site da Game Zero e gostaria de avaliar meu console para troca/upgrade.",
  },
  consoles: {
    text: "Trabalhamos com consoles clássicos e da geração atual: PlayStation 1 ao 5, PS Vita, Xbox (Clássico, 360, One, Series) e Nintendo (Switch, portáteis e clássicos). Todos higienizados e testados com garantia de procedência.",
    cta: "Consultar modelos em estoque",
    waMessage: "Olá! Gostaria de consultar o acervo e valores dos consoles disponíveis hoje na loja.",
  },
  setup: {
    text: "Trabalhamos com encomendas especiais de edições limitadas, jogos raros e acessórios oficiais. Diga o que procura que nossa equipe faz a busca com nossa rede de procedência.",
    cta: "Fazer pedido sob encomenda",
    waMessage: "Olá! Gostaria de fazer uma encomenda de console/jogo específico com a Game Zero.",
  },
  horarios: {
    text: `Atendemos de Segunda a Sexta das ${CONTACT.hours.weekdays}, e aos Sábados das ${CONTACT.hours.saturday}. Você pode conversar conosco a qualquer momento que responderemos assim que estivermos online!`,
    cta: "Chamar no WhatsApp",
    waMessage: "Olá! Gostaria de tirar dúvidas sobre o atendimento da loja Game Zero.",
  },
  humano: {
    text: "Claro! Nossa equipe de especialistas gamers está pronta pra te atender de forma próxima, sem robôs chatos.",
    cta: "Abrir conversa com atendente",
    waMessage: "Olá! Gostaria de atendimento humano personalizado com a equipe da Game Zero.",
  },
};

export function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setUnread(0);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const handleSelectOption = (opt) => {
    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: "user",
      time: "agora",
      text: opt.reply,
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const res = BOT_RESPONSES[opt.id] || BOT_RESPONSES.humano;
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        time: "agora",
        text: res.text,
        cta: res.cta,
        waMessage: res.waMessage,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const text = inputValue.trim();
    setInputValue("");

    const userMsg = {
      id: Date.now(),
      sender: "user",
      time: "agora",
      text: text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const lower = text.toLowerCase();
      let key = "humano";
      if (lower.includes("troca") || lower.includes("upgrade") || lower.includes("avaliar") || lower.includes("usado")) {
        key = "troca";
      } else if (lower.includes("console") || lower.includes("ps5") || lower.includes("ps4") || lower.includes("xbox") || lower.includes("nintendo") || lower.includes("estoque")) {
        key = "consoles";
      } else if (lower.includes("hora") || lower.includes("aberto") || lower.includes("onde") || lower.includes("endereco")) {
        key = "horarios";
      }

      const res = BOT_RESPONSES[key];
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        time: "agora",
        text: res.text,
        cta: res.cta,
        waMessage: `Olá! Vim pelo assistente do site com a dúvida: "${text}"`,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 900);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Floating Chat Window */}
      {isOpen && (
        <div
          className="mb-3 w-[calc(100vw-32px)] sm:w-[380px] max-h-[580px] h-[520px] rounded-2xl border border-white/15 bg-[#0e1013] text-foreground shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300"
          role="dialog"
          aria-label="Assistente Virtual GAME ZER0"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-[#14161a] border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={getAssetUrl("/instagram/game-zero-logo.jpg")}
                  alt="Game Zero"
                  className="w-10 h-10 rounded-xl object-cover border border-white/10"
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#22c55e] border-2 border-[#14161a]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm text-white">GAME ZER0 Bot</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-zinc-300">Oficial</span>
                </div>
                <p className="text-[11px] text-zinc-400">Resposta instantânea • +55 51 9204-2236</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs bg-[#0b0c0e]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 shadow-sm ${
                    m.sender === "user"
                      ? "bg-[#252830] text-white rounded-br-xs border border-white/10"
                      : "bg-[#16181d] text-zinc-200 rounded-bl-xs border border-white/10"
                  }`}
                >
                  <p className="leading-relaxed text-[13px]">{m.text}</p>

                  {/* Options Chips */}
                  {m.options && (
                    <div className="mt-3 flex flex-col gap-1.5">
                      {m.options.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectOption(opt)}
                          className="text-left px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-white font-medium text-xs transition-all flex items-center justify-between group active:scale-[0.98]"
                        >
                          <span>{opt.label}</span>
                          <ArrowUpRight className="h-3 w-3 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* CTA Direct to WhatsApp */}
                  {m.cta && (
                    <div className="mt-3 pt-2.5 border-t border-white/10">
                      <a
                        href={createWhatsAppUrl(m.waMessage)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 bg-[#1e2229] hover:bg-[#282d37] text-white border border-white/15 rounded-xl font-medium text-xs transition-all shadow-sm group active:scale-[0.98]"
                      >
                        <Icon name="whatsapp" className="h-3.5 w-3.5 text-whatsapp" />
                        <span>{m.cta}</span>
                        <ArrowUpRight className="h-3 w-3 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-zinc-500 mt-1 px-1 flex items-center gap-1">
                  {m.time}
                  {m.sender === "user" && <CheckCheck className="h-3 w-3 text-zinc-400" />}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-zinc-400 bg-[#16181d] border border-white/10 p-2.5 rounded-2xl rounded-bl-xs w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                <span className="text-[11px] ml-1 text-zinc-400">Digitando...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Bar */}
          <form
            onSubmit={handleSendMessage}
            className="p-2.5 bg-[#14161a] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua dúvida ou console..."
              className="flex-1 bg-[#0e1013] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 bg-[#1c2026] hover:bg-[#252b34] text-white disabled:opacity-40 disabled:hover:bg-[#1c2026] border border-white/15 rounded-xl transition-all shadow-sm active:scale-95"
              aria-label="Enviar mensagem"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Trigger Button Matching Dark Rounded-XL Style */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#16171a] hover:bg-[#22242a] text-white border border-white/15 hover:border-white/30 rounded-xl shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,255,255,0.06)] active:scale-[0.96] font-medium text-sm animate-float select-none cursor-pointer"
        aria-label="Abrir assistente virtual da Game Zero"
      >
        <div className="relative">
          <Icon name="whatsapp" className="h-5 w-5 text-whatsapp group-hover:scale-110 transition-transform duration-200" />
          {unread > 0 && !isOpen && (
            <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-[#22c55e] text-black text-[9px] font-bold flex items-center justify-center animate-pulse">
              1
            </span>
          )}
        </div>
        <span className="hidden sm:inline">
          {isOpen ? "Fechar Assistente" : "Chat WhatsApp"}
        </span>
      </button>
    </div>
  );
}
