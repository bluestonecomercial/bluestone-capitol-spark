# Prompt para outra IA — Checklist de resposta em todas as interações de contato

## O que muda

Hoje o modal de diagnóstico (5 perguntas + nome + telefone) só abre a partir dos botões "Solicitar Diagnóstico Gratuito". Os links de WhatsApp abrem o `wa.me` diretamente.

A mudança: **toda** interação de contato passa a abrir o mesmo modal/checklist antes de qualquer redirecionamento. O comportamento do botão "Solicitar Diagnóstico Gratuito" permanece exatamente como está hoje.

Pontos de contato afetados:
- `CtaBar` — "Fale com a Bluestone" e "Fale com um de nossos especialistas"
- `CtaSection` — botão "Fale com um especialista" e link de telefone
- `HeroSection` — "Fale com um especialista"
- `Footer` — ícone circular de WhatsApp e telefone/e-mail clicáveis
- `WhatsAppButton` — botão flutuante verde

## Prompt (copiar e colar na outra IA)

```text
Contexto: landing page React 18 + Vite + TypeScript + Tailwind CSS v3 + shadcn/ui + Framer Motion da Bluestone Consultoria (consultoria de incentivos fiscais de ICMS no Espírito Santo). Já existe o componente src/components/DiagnosticModal.tsx: um modal premium em fundo navy com destaque dourado, contendo Nome completo, Telefone (máscara BR) e 5 perguntas obrigatórias de qualificação (alíquota de ICMS de compra, alíquota de venda, ST, PF/PJ, faturamento anual), envio via EmailJS e uma tela de sucesso inline. O estado do modal vive em src/pages/Index.tsx (diagnosticOpen + openDiagnostic) e é passado por props para as seções.

Tarefa: fazer com que o checklist/modal de diagnóstico apareça em TODAS as interações de contato com a empresa, e não apenas nos botões "Solicitar Diagnóstico Gratuito".

Regras obrigatórias:
1. O fluxo do botão "Solicitar Diagnóstico Gratuito" permanece exatamente igual ao de hoje — não alterar o comportamento dele.
2. Todos os outros CTAs de contato passam a abrir o mesmo DiagnosticModal em vez de navegar direto para o WhatsApp:
   - src/components/CtaBar.tsx — "Fale com a Bluestone" e "Fale com um de nossos especialistas"
   - src/components/CtaSection.tsx — "Fale com um especialista" e o link de telefone
   - src/components/HeroSection.tsx — "Fale com um especialista"
   - src/components/Footer.tsx — ícone circular de WhatsApp e contatos clicáveis
   - src/components/WhatsAppButton.tsx — botão flutuante verde
3. Converter esses <a href="https://wa.me/..."> em <button type="button" onClick={onDiagnosticOpen}> preservando 100% do estilo visual atual de cada um (CtaBar mantém o botão navy sólido sobre fundo dourado; CtaSection e HeroSection mantêm o outline dourado; o flutuante mantém o verde #25D366, o tamanho w-14 h-14, fixed bottom-6 right-6 z-50 e a animação spring com delay de 2s). Manter aria-label acessível em todos.
4. Propagar a prop onDiagnosticOpen: () => void a partir de src/pages/Index.tsx para CtaBar, CtaSection, HeroSection, Footer e WhatsAppButton, usando o openDiagnostic já existente. Não criar um segundo estado de modal nem uma segunda instância de DiagnosticModal — reutilizar a única instância já renderizada no final de Index.tsx.
5. Após o envio bem-sucedido do formulário, a tela de sucesso existente do modal deve exibir um checklist de próximos passos com checkmarks dourados (ícone CheckCircle2 do lucide-react, cor via token gold), animados em sequência com Framer Motion (initial opacity 0 / y 10, animate, delay escalonado de 0,1s), e abaixo dele um botão "Fale agora no WhatsApp" que abre https://wa.me/5527992915203 com a mensagem pré-preenchida "Vim do site da Bluestone. Gostaria de saber mais sobre os serviços de consultoria" em nova aba (target="_blank" rel="noopener noreferrer"). Itens do checklist:
   - "Recebemos suas respostas com sucesso"
   - "Nosso especialista analisará sua operação"
   - "Você receberá sua planilha de pré-viabilidade personalizada"
   - "Retorno em até 24 horas úteis"
   Manter o botão "Fechar" já existente.
6. Não alterar a integração EmailJS: templateParams deve continuar com exatamente as chaves nome, telefone, icms_compra, icms_venda, st, tipo_cliente, faturamento — qualquer chave extra causa erro 400. Manter o dataLayer.push({event:'form_submit'}) e o id="btn-especialista" no botão de envio.
7. Design system: usar somente tokens semânticos do index.css (navy/primary, gold, ice, muted, foreground). Nunca hardcodar text-white, bg-black ou cores hex — exceto o verde #25D366 que é permitido apenas no botão flutuante. Tipografia: Space Grotesk nos títulos (font-heading), DM Sans no corpo (font-body). Tom de voz executivo, estilo McKinsey, focado em ganho financeiro e redução de até 90% da carga de ICMS.
8. Rodar o typecheck ao final e garantir zero erros de TypeScript nas props novas.
```

## Detalhes técnicos

- Nenhuma dependência nova; nenhuma mudança de backend.
- Arquivos tocados: `Index.tsx`, `CtaBar.tsx`, `CtaSection.tsx`, `HeroSection.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`, `DiagnosticModal.tsx`.
- O WhatsApp deixa de ser um caminho de saída direto e passa a ser o passo final após a qualificação — todo lead é capturado por e-mail antes do redirecionamento.
