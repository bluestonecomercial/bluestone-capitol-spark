# Onde as respostas do checklist estão hoje (e como registrar de verdade)

## Situação atual (verificada no código)

O formulário do Diagnóstico Express (`DiagnosticModal`) tem **um único destino**: um e-mail enviado pelo EmailJS
(serviço `service_l58lt7h`, template `template_0bybmpi`) para a caixa configurada nesse template.

Não existe banco de dados, backend ou planilha no projeto — nenhuma integração de Cloud/Supabase está presente.
Ou seja: **se o e-mail falhar, a resposta é perdida e ninguém percebe.**

Dois problemas encontrados no fluxo:

1. A tela de sucesso é exibida **antes** da resposta do EmailJS. Se o envio retornar erro (por exemplo o erro 400
   por chave extra no template), o cliente vê "Recebemos suas respostas" e o lead simplesmente desaparece —
   o erro só aparece no console do navegador.
2. Não há nenhum registro histórico dos leads: não é possível consultar quantos preencheram, quando, ou reenviar.

## O que propomos

### 1. Passar a gravar todo lead em banco (Lovable Cloud)

Criar uma tabela de leads no backend integrado, com: nome, telefone, as 5 respostas (ICMS compra, ICMS venda, ST,
PF/PJ, faturamento), data/hora, página de origem e status do e-mail (enviado / falhou).

A gravação acontece **primeiro**, antes do e-mail. Assim o lead nunca se perde, mesmo que o EmailJS falhe.
Inserção pública (qualquer visitante pode enviar o formulário), leitura bloqueada ao público — nenhum visitante
consegue listar os leads de outras pessoas.

### 2. Corrigir a ordem do sucesso

A tela de sucesso passa a ser exibida após a gravação. Se algo falhar de forma irrecuperável, mostramos uma
mensagem de erro com o WhatsApp como alternativa, em vez de um falso "recebemos".

### 3. Manter o e-mail exatamente como está

O envio ao EmailJS continua com os mesmos 7 campos (`nome`, `telefone`, `icms_compra`, `icms_venda`, `st`,
`tipo_cliente`, `faturamento`) — nenhuma chave extra, para não reintroduzir o erro 400. O e-mail passa a ser
o aviso, e o banco a fonte da verdade.

### 4. (Opcional) Painel de leads

Uma rota protegida `/leads` com login para o time comercial visualizar e exportar os leads em CSV.
Podemos deixar para uma segunda etapa.

## Detalhes técnicos

- Ativar Lovable Cloud e criar `public.leads` com GRANTs explícitos, RLS ativa, policy de `INSERT` para `anon`
  e `authenticated`, sem policy de `SELECT` público.
- `DiagnosticModal.handleSubmit` passa a ser `async`: insert no banco → `setSubmitted(true)` → `emailjs.send` →
  atualiza o status de e-mail no registro.
- Botão de envio com estado de carregamento para evitar duplo clique / duplicidade de leads.
- `dataLayer.push({ event: 'form_submit' })` permanece disparando no sucesso.
