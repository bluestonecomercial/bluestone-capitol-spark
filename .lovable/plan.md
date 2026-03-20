

## Plano: Formulário de Diagnóstico com Questionário Interativo

### Visão Geral
Criar um modal/dialog de diagnóstico que abre ao clicar em qualquer botão CTA ("Diagnóstico Gratuito", "Solicite seu Diagnóstico Gratuito", "Solicitar Diagnóstico Gratuito"). O formulário apresenta perguntas de forma visual e atrativa com opções de seleção, e ao final redireciona para o WhatsApp com as respostas pré-preenchidas na mensagem.

### Componente: `DiagnosticModal.tsx`

- Modal fullscreen ou Dialog com design premium (fundo escuro navy, detalhes dourados)
- **Header chamativo**: "Responda 5 perguntas rápidas e receba uma planilha de pré-viabilidade personalizada do nosso especialista"
- **5 perguntas em cards de seleção** (radio buttons estilizados como cards clicáveis):

1. **Qual a alíquota de ICMS do Estado que mais compram?** — 7% | 12% | 18% | Outra (campo livre)
2. **Qual a alíquota de ICMS na venda para estes Estados?** — 7% | 12% | 18% | Outra (campo livre)
3. **Tem ST (Substituição Tributária)?** — Sim | Não
4. **Vende para PF ou PJ?** — PJ | PF
5. **Faturamento anual:** — Menor que R$10MM | Entre R$10MM e R$20MM | Maior que R$20MM

- Botão final: "Falar com Especialista" → redireciona para `wa.me/5527992915203` com mensagem formatada contendo as respostas
- Validação: todas as perguntas obrigatórias antes de enviar

### Alterações nos CTAs existentes

Atualizar 4 pontos para abrir o modal em vez de navegar:
- **HeroSection.tsx**: botão "Solicite seu Diagnóstico Gratuito" (href="#cta" → onClick abre modal)
- **CtaSection.tsx**: botão "Solicitar Diagnóstico Gratuito" (href wa.me → onClick abre modal)
- **Header.tsx**: botão "Diagnóstico Gratuito" desktop (href="#cta" → onClick)
- **Header.tsx**: botão "Diagnóstico Gratuito" mobile (href="#cta" → onClick)

### UX/Design
- Usa o componente Dialog do shadcn/ui já disponível no projeto
- Layout: perguntas empilhadas com cards de opção clicáveis (highlight dourado na seleção)
- Opção "Outra" exibe input de texto ao selecionar
- Responsivo: funciona bem em mobile
- Animação suave de entrada (framer-motion)

### Fluxo de redirecionamento WhatsApp
Ao submeter, monta URL:
```
https://wa.me/5527992915203?text=Olá! Gostaria de receber minha planilha de pré-viabilidade personalizada.%0A%0A📊 Respostas:%0A- ICMS Compra: 12%%0A- ICMS Venda: 18%%0A- ST: Sim%0A- Vende para: PJ%0A- Faturamento: Entre R$10MM e R$20MM
```

### Arquivos
- **Criar**: `src/components/DiagnosticModal.tsx`
- **Editar**: `src/components/HeroSection.tsx`, `src/components/CtaSection.tsx`, `src/components/Header.tsx`

### Seção técnica
- Estado do modal gerenciado via React context ou prop drilling simples (state no Index.tsx passado como prop)
- Formulário com useState para cada resposta
- Validação client-side com feedback visual
- encodeURIComponent para a mensagem do WhatsApp

