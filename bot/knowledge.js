export const BOT_CONFIG = {
  storeName: "GAME ZER0",
  phone: "+55 51 9204-2236",
  hours: {
    weekdays: "09:30 às 18:30",
    saturday: "09:30 às 14:00",
    sunday: "Fechado (Atendimento assíncrono)",
  },
  instagram: "@gamezero.poa",
  website: "https://gamezero.com.br",
};

export const MENU_TEXT = `🎮 *GAME ZER0 — ATENDIMENTO OFICIAL*
_Mais de 13 anos conectando gerações de gamers._

Como posso te ajudar hoje? Digite o *número* da opção desejada:

1️⃣ *Consoles & Acervo Disponível* (PS1 ao PS5, Xbox, Nintendo)
2️⃣ *Avaliação para Troca / Upgrade* (Traga seu usado)
3️⃣ *Encomendas & Jogos Raros* (Mídias físicas e itens especiais)
4️⃣ *Horários & Como Funciona* (Endereço e atendimento)
5️⃣ *Falar com um Especialista Humano*

_Ou envie sua dúvida diretamente em texto que nossa equipe responderá!_`;

export const RESPONSES = {
  consoles: `🎮 *CONSOLES & ACERVO — GAME ZER0*

Trabalhamos com consoles revisados, higienizados e testados em bancada:
• *PlayStation:* PS1, PS2, PS3, PS4 (Fat/Slim/Pro) e PS5
• *Portáteis:* PS Vita, PSP, Nintendo Switch, 3DS e DS
• *Xbox:* Clássico, Xbox 360, Xbox One e Xbox Series S/X
• *Nintendo:* Switch (V1, V2, OLED), Wii, Wii U e Retrô

Todos os consoles acompanham garantia de funcionamento e procedência.
👉 *Qual console específico você está procurando hoje?* Digite o modelo para verificarmos a disponibilidade no estoque!`,

  troca: `🔄 *AVALIAÇÃO PARA TROCA & UPGRADE*

Quer dar o seu console usado como entrada em um novo? Nós avaliamos com transparência e justiça!

📋 *Como funciona o checklist de avaliação:*
1. Envie aqui *fotos nítidas* do seu console (frente, traseira e conexões).
2. Informe se acompanha *caixa original, cabos e controles originais*.
3. Diga se já foi aberto para manutenção ou limpeza.
4. Qual console você deseja pegar na troca?

_Pode mandar as fotos e detalhes diretamente aqui nesta conversa!_ 📸`,

  encomendas: `⚡ *ENCOMENDAS & ITENS ESPECIAIS*

Procura uma edição de colecionador, console raro ou mídia física clássica?
Nossa equipe possui uma rede ampla de busca de itens com procedência comprovada.

👉 *Qual jogo, acessório ou console específico você gostaria de encomendar?* Envie o nome e a plataforma que consultamos para você!`,

  horarios: `📍 *HORÁRIOS & ATENDIMENTO*

🕒 *Horário de Funcionamento:*
• Segunda a Sexta: ${BOT_CONFIG.hours.weekdays}
• Sábados: ${BOT_CONFIG.hours.saturday}
• Domingos e Feriados: Fechado

📱 *Canais Oficiais:*
• WhatsApp: ${BOT_CONFIG.phone}
• Instagram: ${BOT_CONFIG.instagram}

Um atendente da nossa equipe responderá sua mensagem detalhadamente em breve!`,

  humano: `👤 *ATENDIMENTO HUMANO GAME ZER0*

Sua solicitação foi encaminhada para a nossa equipe de especialistas! 

Enquanto você aguarda, já pode deixar escrita a sua dúvida, o que você procura ou o modelo do seu console para agilizar o atendimento. Responderemos em instantes! 🚀`,
};
