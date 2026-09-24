# GAME ZER0 — Brandsite & Atendimento Inteligente

> Consoles, jogos e upgrades escolhidos com critério e atendimento humano há mais de 13 anos. Porto Alegre, RS.

---

## 🎮 Visão Geral

Website oficial da **GAME ZER0**, projetado com estética cinematográfica, arquitetura de alta conversão (AIDA), animações avançadas via GSAP (ScrollTrigger) e integração completa com canal de atendimento via WhatsApp e bot automatizado Baileys.

---

## ⚡ Tecnologias

- **Frontend:** [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações:** [GSAP 3](https://gsap.com/) (`@gsap/react`, `ScrollTrigger`)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Qualidade & Linting:** [ESLint 9](https://eslint.org/)
- **Bot / Automação:** Node.js com [@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys) e Express

---

## 📁 Estrutura do Projeto

```
BRANDSITE GAMEZERO/
├── .codex/                 # Configurações do ambiente Codex
├── bot/                    # Servidor do Bot WhatsApp (Baileys + Express)
│   ├── server.js
│   └── package.json
├── public/                 # Ativos estáticos e fotografias da marca
│   └── instagram/
├── src/                    # Código-fonte da aplicação React
│   ├── components/         # Componentes modulares da interface
│   │   ├── BrandMark.jsx           # Logo e identidade visual
│   │   ├── CtaSection.jsx          # Seção final de chamada para ação
│   │   ├── ExperienceBento.jsx     # Bento grid com diferenciais da loja
│   │   ├── FaqSection.jsx          # Perguntas frequentes interativas
│   │   ├── FooterSection.jsx       # Rodapé completo com links e horários
│   │   ├── GenerationMarquee.jsx   # Marquee contínuo de plataformas atendidas
│   │   ├── Header.jsx              # Navbar fixa com navegação suave e menu mobile
│   │   ├── HeroSection.jsx         # Seção Hero com tipografia editorial e CTA
│   │   ├── Icons.jsx               # Ícones vetoriais customizados
│   │   ├── MotionExperience.jsx    # Linha do tempo e jornada com GSAP ScrollTrigger
│   │   └── WhatsAppChatWidget.jsx  # Widget flutuante de chat e triagem
│   ├── config/             # Configurações de contato, horário e links
│   ├── utils/              # Funções utilitárias (caminhos de assets para GitHub Pages)
│   ├── App.jsx             # Shell principal da aplicação
│   ├── main.jsx            # Entry point React
│   └── styles.css          # Design system, tokens e animações
├── dist/                   # Build de produção (gerado pelo Vite)
├── iniciar-site.bat        # Script para rodar o site localmente no Windows
├── iniciar-bot.bat         # Script para iniciar o bot do WhatsApp no Windows
└── vite.config.js          # Configurações do Vite (base relativa para GitHub Pages)
```

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18+ recomendada)
- `npm`

### Instalação
```bash
npm install
```

### Desenvolvimento
Inicie o servidor de desenvolvimento Vite:
```bash
npm run dev
```
Ou dê dois cliques no arquivo `iniciar-site.bat`.

### Build de Produção
Gera os arquivos otimizados na pasta `dist/`:
```bash
npm run build
```

### Verificação de Código (Lint)
```bash
npm run lint
```

### Deploy no GitHub Pages
Realiza o build e publica diretamente na branch `gh-pages`:
```bash
npm run deploy
```

---

## 🤖 Bot de Atendimento WhatsApp

Para rodar o bot de triagem WhatsApp localmente:
```bash
cd bot
npm install
npm start
```
Ou dê dois cliques no arquivo `iniciar-bot.bat`.

---

## 📄 Licença

Propriedade de GAME ZER0. Todos os direitos reservados.