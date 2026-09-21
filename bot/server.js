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

const SESSIONS_FILE = path.join(__dirname, "sessions.json");

// Carrega sessões salvas para não reenviar menu após reinicializações
function loadSessions() {
  try {
    if (fs.existsSync(SESSIONS_FILE)) {
      const raw = fs.readFileSync(SESSIONS_FILE, "utf-8");
      return new Map(Object.entries(JSON.parse(raw)));
    }
  } catch (err) {
    console.error("Erro ao carregar sessions.json:", err.message);
  }
  return new Map();
}

function saveSessions(sessions) {
  try {
    const obj = Object.fromEntries(sessions);
    fs.writeFileSync(SESSIONS_FILE, JSON.stringify(obj, null, 2), "utf-8");
  } catch (err) {
    console.error("Erro ao salvar sessions.json:", err.message);
  }
}

const userSessions = loadSessions();

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
      const from = msg.key.remoteJid;
      if (!from || from.endsWith("@g.us") || from === "status@broadcast") continue;

      // Se a mensagem foi enviada pelo próprio atendente (pelo celular ou WhatsApp Web oficial):
      if (msg.key.fromMe) {
        // O atendente humano falou! Marca a conversa como assumida por humano para o bot não intrometer
        const session = userSessions.get(from) || { hasReceivedMenu: true, transferredToHuman: true };
        session.transferredToHuman = true;
        userSessions.set(from, session);
        saveSessions(userSessions);
        continue;
      }

      if (!msg.message) continue;

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
      const session = userSessions.get(from) || {
        hasReceivedMenu: false,
        transferredToHuman: false,
        lastMsgTime: 0,
        state: null,
      };

      if (now - (session.lastMsgTime || 0) < 2000) {
        continue;
      }
      session.lastMsgTime = now;

      console.log(`📩 Mensagem recebida de [${from.split("@")[0]}]: "${text}"`);

      // 1. O cliente solicitou explicitamente o menu novamente?
      const isRequestingMenu = [
        "menu",
        "#menu",
        "opcoes",
        "opções",
        "inicio",
        "início",
        "voltar",
        "ajuda",
      ].includes(lower);

      if (isRequestingMenu) {
        session.hasReceivedMenu = true;
        session.transferredToHuman = false;
        session.state = null;
        userSessions.set(from, session);
        saveSessions(userSessions);

        await sock.sendPresenceUpdate("composing", from);
        await new Promise((r) => setTimeout(r, 600));
        await sock.sendMessage(from, { text: MENU_TEXT });
        console.log(`📤 Menu enviado para [${from.split("@")[0]}] por solicitação.`);
        continue;
      }

      // 2. Se a conversa já foi transferida para humano, o bot permanece em silêncio
      if (session.transferredToHuman) {
        console.log(`ℹ️ [${from.split("@")[0]}] em atendimento humano. Bot em silêncio.`);
        continue;
      }

      // 3. Se o usuário está mandando fotos ou descrição para avaliação de troca
      if (session.state === "aguardando_dados_troca" && (msg.message.imageMessage || text.length > 5)) {
        session.state = null;
        session.transferredToHuman = true; // Passa para a equipe humana avaliar
        userSessions.set(from, session);
        saveSessions(userSessions);

        await sock.sendPresenceUpdate("composing", from);
        await sock.sendMessage(from, {
          text: `📸 *Fotos e dados recebidos!* Nossa equipe de bancada da GAME ZER0 avaliará o seu console e responderá aqui em instantes. 🎮`,
        });
        continue;
      }

      // 4. Seleção numérica das opções do menu
      if (text === "1" || lower === "1" || lower === "um") {
        await sock.sendPresenceUpdate("composing", from);
        await sock.sendMessage(from, { text: RESPONSES.consoles });
        session.hasReceivedMenu = true;
        userSessions.set(from, session);
        saveSessions(userSessions);
        continue;
      }

      if (text === "2" || lower === "2" || lower === "dois") {
        session.state = "aguardando_dados_troca";
        session.hasReceivedMenu = true;
        userSessions.set(from, session);
        saveSessions(userSessions);
        await sock.sendPresenceUpdate("composing", from);
        await sock.sendMessage(from, { text: RESPONSES.troca });
        continue;
      }

      if (text === "3" || lower === "3" || lower === "tres" || lower === "três") {
        await sock.sendPresenceUpdate("composing", from);
        await sock.sendMessage(from, { text: RESPONSES.encomendas });
        session.hasReceivedMenu = true;
        userSessions.set(from, session);
        saveSessions(userSessions);
        continue;
      }

      if (text === "4" || lower === "4" || lower === "quatro") {
        await sock.sendPresenceUpdate("composing", from);
        await sock.sendMessage(from, { text: RESPONSES.horarios });
        session.hasReceivedMenu = true;
        userSessions.set(from, session);
        saveSessions(userSessions);
        continue;
      }

      if (text === "5" || lower === "5" || lower === "cinco" || lower.includes("humano") || lower.includes("atendente")) {
        session.transferredToHuman = true;
        session.hasReceivedMenu = true;
        userSessions.set(from, session);
        saveSessions(userSessions);
        await sock.sendPresenceUpdate("composing", from);
        await sock.sendMessage(from, { text: RESPONSES.humano });
        continue;
      }

      // 5. Se o cliente NUNCA recebeu o menu (primeira interação):
      // Envia o menu APENAS UMA VEZ
      if (!session.hasReceivedMenu) {
        session.hasReceivedMenu = true;
        userSessions.set(from, session);
        saveSessions(userSessions);

        await sock.sendPresenceUpdate("composing", from);
        await new Promise((r) => setTimeout(r, 800));
        await sock.sendMessage(from, { text: MENU_TEXT });
        console.log(`📤 Primeiro contato: Menu enviado para [${from.split("@")[0]}].`);
        continue;
      }

      // 6. O cliente JÁ recebeu o menu anteriormente e mandou texto livre:
      // NÃO reenvia o menu! Avisa que a equipe responderá e transfere para atendimento humano
      if (!session.transferredToHuman) {
        session.transferredToHuman = true;
        userSessions.set(from, session);
        saveSessions(userSessions);

        await sock.sendPresenceUpdate("composing", from);
        await sock.sendMessage(from, {
          text: `Mensagem recebida! Nossa equipe responderá sua mensagem em breve. 🚀\n\n_(Para ver o menu de opções a qualquer momento, digite *menu*)_`,
        });
      }
    }
  });
}

startBot().catch((err) => {
  console.error("Erro fatal ao iniciar bot:", err);
});
