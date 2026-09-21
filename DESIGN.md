---
name: "GAME ZER0"
description: "Sistema institucional gamer escuro, técnico e humano, orientado à próxima ação."
colors:
  ink: "#000000"
  panel: "#080808"
  surface: "#141414"
  card: "#0b0b0b"
  line: "#252525"
  muted: "#a1a4a5"
  silver: "#d6d6d6"
  white: "#f0f0f0"
  black: "#000000"
  signal: "#f0f0f0"
  signal-ink: "#090909"
  step: "#686868"
  whatsapp: "#25d366"
  whatsapp-hover: "#42e77e"
typography:
  display:
    fontFamily: '"Instrument Serif", Georgia, serif'
    fontSize: "clamp(3.7rem, 7.2vw, 5.9rem)"
    fontWeight: 400
    lineHeight: 0.91
    letterSpacing: "-0.032em"
  headline:
    fontFamily: '"Instrument Serif", Georgia, serif'
    fontSize: "clamp(3.5rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Instrument Serif", Georgia, serif'
    fontSize: "clamp(2.75rem, 5vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Inter", system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  small:
    fontFamily: '"Inter", system-ui, sans-serif'
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  compact-title:
    fontFamily: '"Instrument Serif", Georgia, serif'
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "normal"
  label:
    fontFamily: '"Inter", system-ui, sans-serif'
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  control: "14px"
  panel: "24px"
  pill: "999px"
spacing:
  shell-inline-mobile: "1.25rem"
  shell-inline-tablet: "2rem"
  shell-inline-desktop: "3rem"
  shell-block-mobile: "5rem"
  shell-block-tablet: "7rem"
  shell-block-desktop: "8rem"
components:
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 1.4rem"
    height: "3.25rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 1.4rem"
    height: "3.25rem"
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 1.4rem"
    height: "3.25rem"
  route-tab:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "0px"
    padding: "1rem"
    height: "7.5rem"
  route-tab-active:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    rounded: "0px"
    padding: "1rem"
    height: "7.5rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "0px"
    height: "2.75rem"
  proof-item:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "0px"
    padding: "1.25rem 0"
  faq-item:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "0px"
    padding: "1.25rem 0"
  community-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.white}"
    rounded: "{rounded.panel}"
  whatsapp-action:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#06180c"
    rounded: "{rounded.control}"
    padding: "0 0.8rem"
    height: "3.25rem"
---

# Design System: GAME ZER0

## Overview

**Creative North Star: "Central de Próxima Jogada"**

A GAME ZER0 apresenta um universo institucional gamer escuro, editorial e adulto. Preto absoluto e grafites neutros formam o campo; branco suave e cinzas frios sustentam leitura e hierarquia; superfícies arredondadas de baixo contraste evocam hardware premium. A fotografia real da loja e do acervo ancora a interface em evidência concreta.

A experiência alterna grandes chamadas condensadas com blocos compactos e objetivos. O hero abre o mundo da marca; prova, processo, comunidade e canais oficiais conduzem a uma conversa humana. A Central de Próxima Jogada é o componente assinatura desta landing e não uma composição obrigatória para toda nova tela.

**Key Characteristics:**

- Contraste alto sobre preto verdadeiro, com profundidade construída por brilho radial, camadas tonais e bordas quase invisíveis.
- Instrument Serif dá presença editorial aos títulos; Inter mantém navegação e explicações precisas.
- Controles com raio contido e painéis de 24px remetem a hardware premium sem cair em cartões SaaS genéricos.
- Branco suave identifica seleção e ação principal; verde do WhatsApp continua reservado exclusivamente ao canal.
- Fotografias oficiais da loja e do acervo usadas como prova, com crédito e origem preservados.

## Colors

A paleta é quase monocromática e usa cor somente quando ela comunica estado, canal ou próximo passo.

### Primary

- **Branco Sinal** (`signal`): identifica rota ativa e CTA contextual dentro da Central de Próxima Jogada.
- **Tinta do Sinal** (`signal-ink`): mantém contraste sobre a superfície clara de estado.

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

**The Signal, Not Surface Rule.** O branco suave indica decisão ou estado operacional; não preenche seções inteiras nem substitui a hierarquia tipográfica.

**The Channel Color Rule.** O verde do WhatsApp não é cor geral da marca: ele identifica somente o acesso ao canal oficial.

## Typography

**Display Font:** Instrument Serif, com fallback `Georgia, serif`.
**Body Font:** Inter, com fallback `system-ui, sans-serif`.

**Character:** A Instrument Serif introduz sofisticação editorial e faz o contraste com o hardware monocromático. A Inter mantém explicações, horários e controles claros e contemporâneos.

### Hierarchy

- **Display** (`display`): título do hero, curto e de máxima presença, ocupando a coluna editorial esquerda no desktop.
- **Headline** (`headline`): títulos de seção; cresce responsivamente até a escala editorial grande do desktop.
- **Title** (`title`): títulos de rota e mensagens de decisão dentro dos módulos.
- **Body** (`body`): descrições e conteúdo explicativo, normalmente limitado a cerca de 36–40rem.
- **Small** (`small`): navegação, provas curtas e metadados legíveis que pedem menos ênfase sem cair abaixo de 14px.
- **Compact Title** (`compact-title`): títulos internos de cards, rotas, perguntas e links editoriais.
- **Label** (`label`): status, horários e pequenas categorias em caixa alta e espaçamento aberto.

**The Editorial Hierarchy Rule.** Instrument Serif conduz títulos e mensagens de decisão; parágrafos e controles permanecem em Inter para legibilidade.

**The Short Headline Rule.** A escala grande depende de frases curtas e diretas; não comprima parágrafos inteiros no estilo display.

## Layout

O conteúdo usa um contêiner central de até 1280px. A margem interna horizontal progride de mobile para tablet e desktop pelos tokens `shell-inline-*`; o respiro vertical usa a progressão `shell-block-*`. Os breakpoints implementados são 640px e 1024px.

O mobile é a origem do layout: pilhas verticais, tabs em duas colunas e CTAs de largura disponível. A partir de 640px, prova e comunidade ganham grids; em 1024px, o hero assume duas colunas — chamada editorial à esquerda e fotografia real com selo de 13 anos à direita — e a Central de Próxima Jogada assume três áreas: rotas, painel ativo e horário. Processo, prova editorial e rodapé formam composições assimétricas. Seções são conectadas por bordas contínuas, não por cartões flutuantes soltos.

O primeiro viewport preserva o hero e o equilíbrio entre mensagem e evidência fotográfica. Em seguida, a faixa de gerações atendidas e as quatro rotas convertem autoridade em escolha. Essa sequência pertence a esta landing; novas superfícies devem reutilizar os princípios espaciais sem copiar obrigatoriamente a mesma ordem.

## Elevation & Depth

O sistema é plano por padrão. Profundidade vem de grafites sobre preto, divisores de 1px, vinheta no hero, gradiente sobre fotografias e uma malha técnica muito sutil. Sombras persistentes são reservadas a elementos que precisam se separar do fundo: o atalho flutuante do WhatsApp, a fotografia principal e o selo de 13 anos. O pulso do hero é um sinal animado.

### Shadow Vocabulary

- **Atalho flutuante:** sombra densa sob o botão fixo do WhatsApp para separá-lo do conteúdo durante a rolagem.
- **Evidência do hero:** sombra profunda e neutra na fotografia principal e no selo de 13 anos para preservar leitura sobre o preto.
- **Pulso de disponibilidade:** anel efêmero no pequeno indicador do hero; nunca aplicado a contêineres.

**The Flat-by-Default Rule.** Superfícies em repouso são separadas por tom e borda. Sombra é exceção funcional, não acabamento universal.

## Shapes

A linguagem formal alterna controles arredondados de 14px e painéis de 24px. Bordas finas desenham a estrutura interna; o raio `pill` aparece apenas em sinais compactos, como o indicador do hero e legendas fotográficas.

**The Premium Hardware Rule.** Componentes devem parecer superfícies de hardware premium: precisos, escuros e discretamente arredondados. Evite sombras macias genéricas e raios aplicados sem hierarquia.

## Components

### Buttons

- **Shape:** retangular com raio de 14px, borda luminosa discreta e altura de toque confortável.
- **Light:** CTA principal do hero e do header; fundo branco, texto preto e resposta de pressão por escala.
- **Signal:** ação contextual da rota ativa; usa branco suave com texto preto.
- **Outline:** ação secundária; fundo transparente, linha técnica e reforço de contraste no hover.
- **Focus:** contorno branco externo. O estado ativo reduz a escala discretamente; movimento é removido quando o usuário prefere menos animação.

### Navigation

Links desktop usam texto pequeno e neutro, ficando brancos no hover. O header permanece fixo sobre uma camada preta translúcida com blur. No mobile, o menu abre como pilha com divisores e encerra em CTA de WhatsApp.

### Central de Próxima Jogada

Componente assinatura desta landing. Quatro tabs encaixadas apresentam intenções reais; apenas a seleção ativa recebe a superfície branca. O painel associado troca título, explicação e CTA, e o bloco lateral mantém horários oficiais visíveis. Setas, Home e End participam da navegação por teclado; foco é sempre explícito.

### Proof Rail

Três fatos oficiais formam uma faixa modular ligada por linhas. Valor e explicação usam Inter em pesos distintos. No mobile, os itens empilham; em telas maiores, ocupam três colunas.

### Community Cards

Fotografias oficiais ocupam integralmente molduras quadradas. Um gradiente escuro inferior protege o título e a seta. Hover amplia a imagem de forma contida; foco usa o verde sinal. Cada imagem mantém alt text, link para a publicação e proveniência registrada.

### FAQ

Itens nativos `details/summary` formam uma lista por divisores. A pergunta é grande e condensada; o símbolo de adição gira quando aberto. O foco é interno, branco e suficientemente visível.

### WhatsApp Quick Action

Atalho fixo no canto inferior direito, respeitando safe area. Usa exclusivamente as cores oficiais do canal, permanece quadrado e mostra rótulo textual a partir de telas maiores.

## Do's and Don'ts

### Do:

- **Do** use preto e grafite como campo dominante, com branco para hierarquia e linhas finas para estrutura.
- **Do** reserve superfícies brancas para seleção e ação principal; o restante permanece em preto e grafite.
- **Do** use Instrument Serif em títulos curtos e Inter em explicações, navegação e metadados.
- **Do** mantenha raios hierárquicos, alvos de toque confortáveis, foco visível e redução de movimento.
- **Do** use somente fotografia real autorizada, com origem e vínculo para a publicação preservados.

### Don't:

- **Don't** transforme o verde do WhatsApp em cor geral da marca.
- **Don't** use o mesmo raio em todos os elementos nem transforme cada conteúdo em um cartão SaaS.
- **Don't** substitua linhas e camadas tonais por sombras difusas em todos os componentes.
- **Don't** promova a Central de Próxima Jogada a template obrigatório fora desta landing.
- **Don't** invente estoque, preços, depoimentos ou imagens genéricas para preencher a composição.
