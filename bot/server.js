import makeWASocket, {
  DisconnectReason,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
} from "@whiskeysockets/baileys";
import qrcode from "qrcode-terminal";
import pino from "pino";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { MENU_TEXT, RESPONSES, BOT_CONFIG } from "./knowledge.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Armazena contexto básico das conversas (Cooldown e último estado)
const userSessions = new Map();

function updateQrHtml(qrString) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(qrString)}`;
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>GAME ZER0 — Conectar WhatsApp Bot</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #090a0c; color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
    .card { background: #14161a; border: 1px solid rgba(255,255,255,0.12); border-radius: 24px; padding: 36px 28px; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); max-width: 420px; width: 100%; }
    .badge { display: inline-block; background: rgba(34,197,94,0.15); color: #22c55e; border: 1px solid rgba(34,197,94,0.3); font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; }
    h1 { font-size: 22px; font-weight: 700; margin-bottom: 8px; color: #fff; }
    p.sub { font-size: 13px; color: #a1a1aa; line-height: 1.5; margin-bottom: 24px; }
    .qr-box { background: #fff; padding: 16px; border-radius: 16px; display: inline-block; box-shadow: 0 10px 25px rgba(0,0,0,0.3); margin-bottom: 24px; }
    .qr-box img { display: block; width: 280px; height: 280px; }
    .steps { text-align: left; background: #0e1013; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 16px; font-size: 12px; color: #d4d4d8; line-height: 1.8; }
    .steps strong { color: #fff; }
    .footer { margin-top: 20px; font-size: 11px; color: #71717a; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">GAME ZER0 • Setup Bot</div>
    <h1>Conectar WhatsApp</h1>
    <p class="sub">Escaneie o QR Code abaixo para ativar as respostas automáticas no número <strong>${BOT_CONFIG.phone}</strong>.</p>
    <div class="qr-box">
      <img src="${qrUrl}" alt="QR Code WhatsApp" />
    </div>
    <div class="steps">
      <div>1. Abra o WhatsApp no seu smartphone.</div>
      <div>2. Toque em <strong>Configurações</strong> (ou 3 pontinhos).</div>
      <div>3. Selecione <strong>Aparelhos conectados > Conectar aparelho</strong>.</div>
      <div>4. Aponte a câmera para este QR Code.</div>
    </div>
    <div class="footer">GAME ZER0 — Atendimento Inteligente Multi-Geração</div>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(__dirname, "qr.html"), html, "utf-8");
}

function updateConnectedHtml() {
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>GAME ZER0 — WhatsApp Conectado</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #090a0c; color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
    .card { background: #14161a; border: 1px solid rgba(34,197,94,0.3); border-radius: 24px; padding: 40px 32px; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); max-width: 420px; width: 100%; }
    .icon { font-size: 48px; margin-bottom: 16px; }
    h1 { font-size: 24px; font-weight: 700; color: #22c55e; margin-bottom: 12px; }
    p { font-size: 14px; color: #a1a1aa; line-height: 1.6; }
    .tag { margin-top: 24px; display: inline-block; background: #1b2026; padding: 8px 16px; border-radius: 12px; font-size: 13px; color: #fff; border: 1px solid rgba(255,255,255,0.1); }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">✅</div>
    <h1>Bot Conectado!</h1>
    <p>O assistente virtual da <strong>GAME ZER0</strong> está ativo e respondendo aos clientes automaticamente.</p>
    <div class="tag">Número ativo: <strong>${BOT_CONFIG.phone}</strong></div>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(__dirname, "qr.html"), html, "utf-8");
}

async function startBot() {
  console.log("\n=======================================================");
  console.log("       🎮 INICIANDO WHATSAPP BOT — GAME ZER0         ");
  console.log("=======================================================\n");

  const authDir = path.join(__dirname, "auth_info_baileys");
  const { state, saveCreds } = await useMultiFileAuthState(authDir);
  const { version, isLatest } = await fetchLatestBaileysVersion();

  console.log(`Versão Baileys: ${version.join(".")} (Mais recente: ${isLatest})`);

  const sock = makeWASocket({
    version,
    auth: state,
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    browser: ["GAME ZER0 Assistant", "Chrome", "1.0.0"],
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log("\n📱 QR CODE GERADO NO TERMINAL E EM ARQUIVO HTML:\n");
      qrcode.generate(qr, { small: true });
      updateQrHtml(qr);
      console.log(`\nNúmero configurado: ${BOT_CONFIG.phone}`);
      console.log(`Você também pode abrir o QR Code no navegador em: file:///${path.join(__dirname, "qr.html").replace(/\\/g, "/")}`);
      console.log("Abra o WhatsApp > Aparelhos Conectados > Conectar um aparelho.\n");
    }

    if (connection === "close") {
      const statusCode = lastDisconnect?.error?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;
      console.log(`⚠️ Conexão encerrada (código: ${statusCode}). Reconectar: ${shouldReconnect}`);

      if (shouldReconnect) {
        setTimeout(startBot, 3000);
      } else {
        console.log("❌ Desconectado permanentemente (logout). Exclua a pasta auth_info_baileys para novo pareamento.");
      }
    } else if (connection === "open") {
      updateConnectedHtml();
      console.log("\n✅ CONEXÃO ESTABELECIDA COM SUCESSO!");
      console.log(`🎉 Bot oficial da GAME ZER0 ativo e pronto no número ${BOT_CONFIG.phone}`);
      console.log("Aguardando mensagens de clientes...\n");
    }
  });

  sock.ev.on("messages.upsert", async ({ messages, type }) => {
    if (type !== "notify") return;

    for (const msg of messages) {
      // Ignorar mensagens enviadas pelo próprio bot ou de status/grupos
      if (!msg.message || msg.key.fromMe) continue;
      const from = msg.key.remoteJid;
      if (!from || from.endsWith("@g.us") || from === "status@broadcast") continue;

      // Extrair texto da mensagem
      const messageContent =
        msg.message.conversation ||
        msg.message.extendedTextMessage?.text ||
        msg.message.imageMessage?.caption ||
        "";

      const text = messageContent.trim();
      const lower = text.toLowerCase();

      // Cooldown de 2 segundos para evitar loops
      const now = Date.now();
      const session = userSessions.get(from) || { lastMsgTime: 0, state: null };
      if (now - session.lastMsgTime < 2000) {
        continue;
      }
      session.lastMsgTime = now;
      userSessions.set(from, session);

      console.log(`📩 Mensagem recebida de [${from.split("@")[0]}]: "${text}"`);

      // Se o usuário está mandando fotos ou descrição para avaliação de troca
      if (session.state === "aguardando_dados_troca" && (msg.message.imageMessage || text.length > 5)) {
        session.state = null;
        userSessions.set(from, session);
        await sock.sendMessage(from, {
          text: `📸 *Recebido!* Nossa equipe de bancada da GAME ZER0 recebeu suas informações e avaliará seu console com base no estado e fotos enviadas. Responderemos em breve! 🎮`,
        });
        continue;
      }

      // Roteamento de comandos e opções
      if (text === "1" || lower.includes("consoles") || lower.includes("acervo") || lower.includes("estoque")) {
        await sock.sendMessage(from, { text: RESPONSES.consoles });
      } else if (text === "2" || lower.includes("troca") || lower.includes("upgrade") || lower.includes("avaliar")) {
        session.state = "aguardando_dados_troca";
        userSessions.set(from, session);
        await sock.sendMessage(from, { text: RESPONSES.troca });
      } else if (text === "3" || lower.includes("encomenda") || lower.includes("raro") || lower.includes("jogo")) {
        await sock.sendMessage(from, { text: RESPONSES.encomendas });
      } else if (text === "4" || lower.includes("horario") || lower.includes("endereco") || lower.includes("onde")) {
        await sock.sendMessage(from, { text: RESPONSES.horarios });
      } else if (text === "5" || lower.includes("humano") || lower.includes("atendente") || lower.includes("especialista")) {
        await sock.sendMessage(from, { text: RESPONSES.humano });
      } else {
        // Envia o menu principal interativo
        await sock.sendMessage(from, { text: MENU_TEXT });
      }
    }
  });
}

startBot().catch((err) => {
  console.error("Erro fatal ao iniciar bot:", err);
});
