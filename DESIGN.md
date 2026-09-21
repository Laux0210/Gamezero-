---
name: "GAME ZER0"
description: "Sistema institucional gamer escuro, técnico e humano, orientado à próxima ação."
colors:
  ink: "#08080a"
  panel: "#111116"
  surface: "#191920"
  card: "#101015"
  line: "#2d2e3b"
  muted: "#a7a8b3"
  silver: "#e2e8f0"
  white: "#ffffff"
  black: "#000000"
  signal: "#b8ff2c"
  signal-ink: "#101600"
  step: "#757789"
  whatsapp: "#25d366"
  whatsapp-hover: "#42e77e"
typography:
  display:
    fontFamily: '"Barlow Condensed", system-ui, sans-serif'
    fontSize: "clamp(3.5rem, 7.4vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"Barlow Condensed", system-ui, sans-serif'
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Barlow Condensed", system-ui, sans-serif'
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Barlow", system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: '"Barlow", system-ui, sans-serif'
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  square: "0px"
  pill: "999px"
spacing:
  shell-inline-mobile: "1.25rem"
  shell-inline-tablet: "2rem"
  shell-inline-desktop: "3rem"
  shell-block-mobile: "6rem"
  shell-block-tablet: "7rem"
  shell-block-desktop: "8rem"
components:
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 1.4rem"
    height: "3.25rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 1.4rem"
    height: "3.25rem"
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 1.4rem"
    height: "3.25rem"
  route-tab:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.square}"
    padding: "1rem"
    height: "7.5rem"
  route-tab-active:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.square}"
    padding: "1rem"
    height: "7.5rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    height: "2.75rem"
  proof-item:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "1.25rem 0"
  faq-item:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "1.25rem 0"
  community-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
  whatsapp-action:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#06180c"
    rounded: "{rounded.square}"
    padding: "0 0.8rem"
    height: "3.25rem"
---

# Design System: GAME ZER0

## Overview

**Creative North Star: "Central de Próxima Jogada"**

A GAME ZER0 apresenta um universo institucional gamer escuro, preciso e adulto. Preto profundo e grafites foscos formam o campo; branco e prata sustentam leitura e hierarquia; linhas técnicas organizam a informação; o verde-limão aparece como sinal operacional raro, nunca como decoração dominante. A fotografia real da loja e do acervo ancora a interface em evidência concreta.

A experiência alterna grandes chamadas condensadas com blocos compactos e objetivos. O hero abre o mundo da marca; prova, processo, comunidade e canais oficiais conduzem a uma conversa humana. A Central de Próxima Jogada é o componente assinatura desta landing e não uma composição obrigatória para toda nova tela.

**Key Characteristics:**

- Contraste alto sobre preto e grafite, com profundidade construída por camadas tonais e linhas.
- Tipografia condensada, robusta e curta para impacto; Barlow regular para explicação clara.
- Geometria quadrada, compacta e técnica, sem cartões arredondados genéricos.
- Verde-limão reservado para seleção, status e ação contextual; verde do WhatsApp reservado ao canal.
- Fotografias oficiais da loja e do acervo usadas como prova, com crédito e origem preservados.

## Colors

A paleta é quase monocromática e usa cor somente quando ela comunica estado, canal ou próximo passo.

### Primary

- **Verde Sinal** (`signal`): identifica rota ativa e CTA contextual dentro da Central de Próxima Jogada.
- **Tinta do Sinal** (`signal-ink`): mantém contraste sobre o verde de estado.

### Secondary

- **Verde WhatsApp** (`whatsapp`): pertence exclusivamente ao atalho do canal oficial; seu tom mais claro (`whatsapp-hover`) comunica hover.

### Neutral

- **Preto Base** (`ink`): fundo estrutural da página e do hero.
- **Grafite de Painel** (`panel`): diferencia seções e consoles sem recorrer a sombra.
- **Grafite de Interação** (`surface`): estado tonal de superfícies interativas.
- **Grafite de Cartão** (`card`): fallback escuro por trás de fotografia.
- **Linha Técnica** (`line`): bordas, divisores e estrutura do grid.
- **Cinza Informativo** (`muted`): descrições, navegação inativa e metadados.
- **Prata Legível** (`silver`): texto secundário que precisa de presença maior.
- **Branco de Contraste** (`white`) e **Preto de Inversão** (`black`): títulos, foco e bloco editorial invertido.
- **Cinza de Etapa** (`step`): numeração do processo em repouso.

**The Signal, Not Surface Rule.** O verde-limão indica decisão ou estado operacional; não preenche seções inteiras nem substitui a hierarquia tipográfica.

**The Channel Color Rule.** O verde do WhatsApp não é cor geral da marca: ele identifica somente o acesso ao canal oficial.

## Typography

**Display Font:** Barlow Condensed, com fallback `system-ui, sans-serif`.
**Body Font:** Barlow, com fallback `system-ui, sans-serif`.

**Character:** A Barlow Condensed concentra energia gamer e autoridade em pouco espaço. A Barlow regular desacelera a leitura de explicações, horários e critérios sem romper o mesmo DNA grotesco.

### Hierarchy

- **Display** (`display`): título do hero, curto, central e de máxima presença.
- **Headline** (`headline`): títulos de seção; cresce responsivamente até a escala editorial grande do desktop.
- **Title** (`title`): títulos de rota e mensagens de decisão dentro dos módulos.
- **Body** (`body`): descrições e conteúdo explicativo, normalmente limitado a cerca de 36–40rem.
- **Label** (`label`): status, horários e pequenas categorias em caixa alta e espaçamento aberto.

**The Condensed Hierarchy Rule.** Barlow Condensed conduz títulos, números e links de alto impacto; parágrafos permanecem em Barlow para legibilidade.

**The Short Headline Rule.** A escala grande depende de frases curtas e diretas; não comprima parágrafos inteiros no estilo display.

## Layout

O conteúdo usa um contêiner central de até 1440px. A margem interna horizontal progride de mobile para tablet e desktop pelos tokens `shell-inline-*`; o respiro vertical usa a progressão `shell-block-*`. Os breakpoints implementados são 640px e 1024px.

O mobile é a origem do layout: pilhas verticais, tabs em duas colunas e CTAs de largura disponível. A partir de 640px, prova e comunidade ganham grids; em 1024px, a Central de Próxima Jogada assume três áreas — rotas, painel ativo e horário — enquanto processo, prova editorial e rodapé formam composições assimétricas. Seções são conectadas por bordas contínuas, não por cartões flutuantes soltos.

O primeiro viewport preserva o hero e seu foco central. Em seguida, a faixa de prova e as quatro rotas convertem autoridade em escolha. Essa sequência pertence a esta landing; novas superfícies devem reutilizar os princípios espaciais sem copiar obrigatoriamente a mesma ordem.

## Elevation & Depth

O sistema é plano por padrão. Profundidade vem de grafites sobre preto, divisores de 1px, vinheta no hero, gradiente sobre fotografias e uma malha técnica muito sutil. Sombras não elevam cartões: a única sombra persistente pertence ao atalho flutuante do WhatsApp, enquanto o pulso do hero é um sinal animado.

### Shadow Vocabulary

- **Atalho flutuante:** sombra densa sob o botão fixo do WhatsApp para separá-lo do conteúdo durante a rolagem.
- **Pulso de disponibilidade:** anel efêmero no pequeno indicador do hero; nunca aplicado a contêineres.

**The Flat-by-Default Rule.** Superfícies em repouso são separadas por tom e borda. Sombra é exceção funcional, não acabamento universal.

## Shapes

A linguagem formal é ortogonal: botões, painéis, cartões, fotos, tabs, ícones e campos de navegação usam cantos retos (`square`). Bordas finas desenham a estrutura e podem continuar entre itens adjacentes. O raio `pill` aparece apenas em sinais puntuais — pulso e marcadores — e não em contêineres ou CTAs.

**The Square Hardware Rule.** Componentes devem parecer módulos de hardware: retos, encaixados e precisos. Evite pílulas e cartões excessivamente suaves.

## Components

### Buttons

- **Shape:** retangular, sem arredondamento, com borda fina e altura de toque confortável.
- **Light:** CTA principal do hero e do header; fundo branco, texto preto e resposta de pressão por escala.
- **Signal:** ação contextual da rota ativa; usa o verde-limão e volta a branco no hover.
- **Outline:** ação secundária; fundo transparente, linha técnica e reforço de contraste no hover.
- **Focus:** contorno branco externo. O estado ativo reduz a escala discretamente; movimento é removido quando o usuário prefere menos animação.

### Navigation

Links desktop usam texto pequeno e neutro, ficando brancos no hover. O header permanece fixo sobre uma camada preta translúcida com blur. No mobile, o menu abre como pilha com divisores e encerra em CTA de WhatsApp.

### Central de Próxima Jogada

Componente assinatura desta landing. Quatro tabs quadradas apresentam intenções reais; apenas a seleção ativa recebe o verde-limão. O painel associado troca título, explicação e CTA, e o bloco lateral mantém horários oficiais visíveis. Setas, Home e End participam da navegação por teclado; foco é sempre explícito.

### Proof Rail

Três fatos oficiais formam uma faixa modular ligada por linhas. O valor usa Barlow Condensed; a explicação usa Barlow em cinza. No mobile, os itens empilham; em telas maiores, ocupam três colunas.

### Community Cards

Fotografias oficiais ocupam integralmente molduras quadradas. Um gradiente escuro inferior protege o título e a seta. Hover amplia a imagem de forma contida; foco usa o verde sinal. Cada imagem mantém alt text, link para a publicação e proveniência registrada.

### FAQ

Itens nativos `details/summary` formam uma lista por divisores. A pergunta é grande e condensada; o símbolo de adição gira quando aberto. O foco é interno, branco e suficientemente visível.

### WhatsApp Quick Action

Atalho fixo no canto inferior direito, respeitando safe area. Usa exclusivamente as cores oficiais do canal, permanece quadrado e mostra rótulo textual a partir de telas maiores.

## Do's and Don'ts

### Do:

- **Do** use preto e grafite como campo dominante, com branco para hierarquia e linhas finas para estrutura.
- **Do** reserve o verde-limão para seleção, status e ação contextual.
- **Do** use Barlow Condensed em títulos curtos e Barlow em explicações e metadados.
- **Do** mantenha cantos retos, alvos de toque confortáveis, foco visível e redução de movimento.
- **Do** use somente fotografia real autorizada, com origem e vínculo para a publicação preservados.

### Don't:

- **Don't** transforme o verde-limão em fundo decorativo amplo ou o verde do WhatsApp em cor geral da marca.
- **Don't** arredonde cartões e botões para aproximar o sistema de uma interface SaaS genérica.
- **Don't** substitua linhas e camadas tonais por sombras difusas em todos os componentes.
- **Don't** promova a Central de Próxima Jogada a template obrigatório fora desta landing.
- **Don't** invente estoque, preços, depoimentos ou imagens genéricas para preencher a composição.
