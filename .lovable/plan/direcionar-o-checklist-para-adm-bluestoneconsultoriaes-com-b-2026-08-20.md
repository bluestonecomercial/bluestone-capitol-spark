# Direcionar o checklist para adm@bluestoneconsultoriaes.com.br

O destinatário do checklist não está no código do site — ele é definido dentro do template do EmailJS (`template_0bybmpi`). Por isso a mudança é feita no painel do EmailJS, sem alteração de código.

## Passo a passo no EmailJS

1. Acesse dash.emailjs.com e faça login na conta da Bluestone.
2. Menu **Email Templates** > abra o template `template_0bybmpi`.
3. Na aba **Settings** (ou no topo do editor), campo **To Email**: substitua o endereço atual por
   `adm@bluestoneconsultoriaes.com.br`
4. Opcional (recomendado): em **Reply To**, use `{{email}}` se o template já tiver esse campo, ou deixe o padrão.
5. Clique em **Save**.
6. Use **Test It** para enviar um envio de teste e confirmar que chega na nova caixa.

Observação: se quiser manter uma cópia no e-mail antigo, adicione o segundo endereço no campo **BCC** do mesmo template.

## Validação

Após salvar, preencher o formulário no site (Solicitar Diagnóstico) e confirmar o recebimento em `adm@bluestoneconsultoriaes.com.br`.

## Nota técnica

O payload enviado pelo site continua com exatamente os mesmos campos (nome, telefone e as respostas do checklist). Incluir uma variável de destinatário no código exigiria editar o campo **To** do template para `{{to_email}}` e ampliar o payload — não é necessário nesta abordagem e evita risco de erro 400 no envio.

## Se preferir mais segurança depois

Opcionalmente, em um segundo momento, os leads podem ser gravados também em banco (Lovable Cloud), garantindo que nenhuma resposta se perca caso o e-mail falhe.
