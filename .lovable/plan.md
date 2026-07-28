# Bluestone Consultoria — Brand & UI Guide

Documento único, pronto para colar em outro projeto/mockup. Cobre identidade, tokens, tipografia, componentes, copy, CTAs e integrações.

---

## 1. Essência de marca

- **Posicionamento:** Consultoria estratégica em incentivos fiscais de ICMS no Espírito Santo e logística B2B.
- **Percepção-alvo:** McKinsey/BCG — executivo, sério, premium, corporativo.
- **Tom de voz:** Executivo, direto, orientado a resultado financeiro. Foco em "redução de até 90% da carga de ICMS", eficiência tributária, ganho logístico.
- **Regras de UI:** TODOS os botões/CTAs principais abrem o **Modal de Diagnóstico** (5 perguntas + nome + telefone). Nunca usar CTA que leve direto ao WhatsApp, exceto botões explicitamente rotulados "Fale com um especialista / Fale com a Bluestone" e o botão flutuante.

---

## 2. Paleta de cores (HSL — colar em `index.css`)

```css
:root {
  --background: 210 20% 98%;
  --foreground: 213 32% 12%;

  --card: 0 0% 100%;
  --card-foreground: 213 32% 12%;
  --popover: 0 0% 100%;
  --popover-foreground: 213 32% 12%;

  --primary: 213 65% 20%;              /* Navy Bluestone */
  --primary-foreground: 210 40% 98%;

  --secondary: 210 25% 93%;
  --secondary-foreground: 213 32% 12%;
  --muted: 210 20% 95%;
  --muted-foreground: 213 12% 48%;

  --accent: 207 90% 54%;               /* Azul destaque */
  --accent-foreground: 0 0% 100%;

  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;

  --border: 214 20% 88%;
  --input: 214 20% 88%;
  --ring: 213 65% 20%;
  --radius: 0.5rem;

  /* Tokens Bluestone */
  --navy: 213 65% 20%;
  --navy-light: 213 45% 30%;
  --steel: 210 15% 55%;
  --ice: 207 40% 96%;
  --gold: 38 80% 55%;
  --gold-light: 38 90% 65%;

  --gradient-hero: linear-gradient(135deg, hsl(213 65% 12%) 0%, hsl(213 65% 20%) 50%, hsl(207 50% 30%) 100%);
  --gradient-accent: linear-gradient(135deg, hsl(207 90% 54%) 0%, hsl(213 65% 20%) 100%);
  --gradient-gold: linear-gradient(135deg, hsl(38 80% 55%) 0%, hsl(38 90% 65%) 100%);

  --shadow-card: 0 4px 24px -4px hsl(213 65% 20% / 0.08);
  --shadow-elevated: 0 12px 40px -8px hsl(213 65% 20% / 0.15);

  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}
```

**Uso semântico:**
- `navy` (primary) → fundos hero, headers dark, seção Incentivos, botões primários.
- `gold` → destaques, CTA barras intermediárias, palavras-chave no H1, contornos de botões secundários.
- `ice` / `muted` → fundos de seções claras alternadas.
- `accent` (azul) → labels de categoria acima dos títulos, hover states.
- **Verde `#25D366`** → APENAS no botão flutuante do WhatsApp. Nunca em outros CTAs.

---

## 3. Tipografia

- **Headings:** Space Grotesk 300–700
- **Body:** DM Sans
- Import Google Fonts:
  ```
  https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap
  ```
- Escala:
  - H1 hero: `text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`
  - H2 seção: `text-3xl md:text-4xl font-bold` (CTA hero `md:text-5xl`)
  - Eyebrow (label acima do título): `text-sm font-semibold uppercase tracking-widest text-accent` (ou `text-gold` em fundos dark)
  - Body: `text-base` / `text-lg` com `text-muted-foreground`
  - Micro copy: `text-sm text-muted-foreground`

---

## 4. Tailwind config — extensões obrigatórias

```ts
fontFamily: { heading: ['Space Grotesk','sans-serif'], body: ['DM Sans','sans-serif'] }
colors: { navy: {DEFAULT, light}, steel, ice, gold: {DEFAULT, light}, ... tokens semânticos padrão shadcn }
keyframes/animation: 'fade-up' (0.6s), 'fade-in' (0.8s)
```

Utilitários custom (em `@layer utilities`):
- `.bg-gradient-hero`, `.bg-gradient-accent`, `.bg-gradient-gold`
- `.text-gradient-accent` (background-clip: text)
- `.shadow-card`, `.shadow-elevated`

---

## 5. Layout & espaçamento

- Container: `container mx-auto px-4 lg:px-8`, max 1400px.
- Seções: `py-24 lg:py-32`, alternando fundos: `bg-background` → `bg-muted` → `bg-gradient-hero` (dark) → repeat.
- Grid de cards: `gap-6/8`, `items-stretch` + `h-full` nos cards para altura uniforme.
- Border radius padrão: `rounded-lg` (0.5rem); cards grandes `rounded-2xl`.
- Sombras: `shadow-card` no repouso, `shadow-elevated` no hover.

---

## 6. Componentes-padrão

### Header
- Fixo, transparente sobre hero; ao rolar (`scrollY > 50`) vira `bg-card/95 backdrop-blur-md shadow-card`.
- Logo `w-8 h-8` + wordmark "Bluestone" em `font-heading font-bold`.
- Nav desktop: links `text-sm font-medium` + CTA gold "Diagnóstico Gratuito".
- Mobile: menu hambúrguer com mesmos itens + CTA gold full-width.

### Botões
- **Primário (gold):** `bg-gradient-gold text-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 active:scale-[0.97]`.
- **Secundário (outline gold sobre dark):** `border-2 border-gold text-gold hover:bg-gold hover:text-foreground`.
- **Sobre fundo dourado (CtaBar):** `bg-primary text-primary-foreground` sólido navy.
- Ícones ao lado: `lucide-react` (ArrowRight, MessageCircle, tamanho 18–20).

### Cards
- `bg-card rounded-2xl shadow-card border border-border p-7 hover:shadow-elevated transition-shadow`.
- Ícone/imagem no topo; título `font-heading font-bold`; body `text-muted-foreground leading-relaxed`.

### CtaBar (barra intermediária)
- Fundo `bg-gradient-gold`, texto `text-foreground`, botão navy sólido. Usar entre seções para conversão.

### Modal de Diagnóstico
- Sempre acionado pelos CTAs primários. Campos obrigatórios: Nome, Telefone (máscara BR), Alíquota Compra, Alíquota Venda, Substituição Tributária, PF/PJ, Faturamento. Botão submit `id="btn-especialista"`.
- Após submit: mensagem inline de sucesso "Recebemos suas respostas…" (não redirecionar).

### Botão flutuante WhatsApp
- Único elemento verde (`#25D366`), circular `w-14 h-14`, `fixed bottom-6 right-6 z-50`, spring in delay 2s.

---

## 7. Animação (Framer Motion)

Padrão em toda seção:
```tsx
initial={{ opacity: 0, y: 20-30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.1 * i, duration: 0.6-0.7 }}
```
Hero usa `animate` (não `whileInView`) com delays escalonados 0.3/0.5/0.7/0.9s.

---

## 8. Estrutura obrigatória da landing

Ordem fixa das seções:
1. Header (fixo)
2. Hero (imagem porto + overlay gradient-hero 85%)
3. SEO Intro (texto reforço de palavras-chave)
4. Problema (dores do público)
5. Solução (proposta de valor)
6. Benefícios (métricas)
7. **CtaBar** "Fale com a Bluestone"
8. Incentivos Fiscais (COMPETE-ES 1,14% + INVEST-ES 1,035%)
9. Como Funciona (metodologia 4 passos, cards `h-full`)
10. Autoridade (números + prova social)
11. Especialistas (2 cards centrados, foto 4:3, `max-w-3xl`)
12. **CtaBar** "Fale com um de nossos especialistas"
13. Por que Bluestone / Segmentos
14. Depoimentos
15. CTA Final (fundo `gradient-hero`)
16. Footer (dark navy, ícone WhatsApp circular)
17. Botão flutuante WhatsApp

---

## 9. Copy & mensagens fixas

- **H1 hero:** "Reduza o ICMS da sua empresa com [gold]incentivos fiscais[/gold] no Espírito Santo"
- **Proposta central:** "Redução de até 90% da carga de ICMS".
- **COMPETE-ES:** "exatamente 1,14% de ICMS nas vendas interestaduais".
- **INVEST-ES:** carga efetiva 1,035%.
- **CTA principal:** "Solicite seu Diagnóstico Gratuito".
- **CTA WhatsApp:** "Fale com um especialista" / "Fale com a Bluestone".
- **Mensagem WhatsApp (pré-preenchida):** `Vim do site da Bluestone. Gostaria de saber mais sobre os serviços de consultoria`
- **Número WhatsApp:** `5527992915203`

---

## 10. SEO & tracking

- `<html lang="pt-BR">`, canonical, OG + Twitter tags completas.
- Title < 60 chars com "ICMS" + "Espírito Santo" + "Bluestone".
- Meta description < 160 chars.
- `sitemap.xml`, `robots.txt`, favicon `/favicon.png`.
- Google Tag Manager `GTM-N8FSXLXN` (head + noscript body).
- Eventos: `dataLayer.push({event:'form_submit'})` no sucesso do modal; `whatsapp_click` disparado no listener global de `a[href*="wa.me"]`.

---

## 11. Integração EmailJS

- Service: `service_l58lt7h` · Template: `template_0bybmpi` · Public key: `_OGwBeDRRiCyReUMc`
- Destino: `bluestone.comercial@gmail.com`
- **Regra crítica:** `templateParams` deve conter EXATAMENTE 7 chaves: `nome`, `telefone`, `aliquota_compra`, `aliquota_venda`, `st`, `tipo`, `faturamento`. Qualquer chave extra → erro 400.

---

## 12. Stack técnica

- React 18 + Vite 5 + TypeScript 5
- Tailwind CSS v3 + shadcn/ui
- Framer Motion (animações)
- lucide-react (ícones)
- EmailJS (`@emailjs/browser`)
- Deploy Vercel com `NODE_VERSION=22`

---

## 13. Contato institucional (footer)

- Endereço: Vitória/ES
- Telefone/WhatsApp: +55 (27) 9 9291-5203
- E-mail: bluestone.comercial@gmail.com
- Domínio: bluestoneconsultoriaes.com.br

---

**Como usar no novo mockup:** cole a seção 2 no `index.css`, replique as extensões da seção 4 no `tailwind.config.ts`, importe as fontes da seção 3, e siga as regras de componentes (6), animação (7) e estrutura (8). Mantenha copy e CTAs conforme seções 9–11.
