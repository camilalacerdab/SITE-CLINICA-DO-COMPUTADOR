# Clínica do Computador — Site Institucional

Site institucional desenvolvido para a Clínica do Computador, empresa especializada em assistência técnica de computadores e notebooks, com unidades em Salvador e Lauro de Freitas (BA).

O projeto foi desenvolvido com foco em apresentar os serviços da empresa, suas unidades, informações institucionais e formas de contato, utilizando uma interface responsiva e adaptada para diferentes dispositivos.

🔗 **Demo:** [clinicadocomputador.net/teste](https://www.clinicadocomputador.net/teste/)

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis/custom properties para o sistema de cores, Grid e Flexbox para o layout, media queries para responsividade)
- JavaScript puro (sem frameworks ou bibliotecas)

## Funcionalidades

- **Header fixo** durante a rolagem da página
- **Mapa interativo com abas**, alternando entre as duas unidades (Salvador e Lauro de Freitas) via Google Maps embed
- **Linha do tempo animada** com contador numérico (anos de atuação, clientes atendidos, atendimentos realizados), ativado via `IntersectionObserver` quando a seção entra na tela
- **Carrossel de avaliações** com navegação por setas
- **Botão flutuante do WhatsApp**, fixo na tela, com link direto para conversa
- **Seções expansíveis** de serviços usando o elemento nativo de HTML "sanfona" (details e summary), sem necessidade de JavaScript
- **Design 100% responsivo**, testado em três breakpoints (desktop, tablet e mobile)

## Destaque técnico

O contador da seção "Sobre Nós" só começa a animar quando o usuário rola até ela — implementado com a API `IntersectionObserver`, que evita gastar processamento animando algo que ainda não está visível na tela.

## Autora

Camila Lacerda Barbosa — estudante de Ciência da Computação, em transição para desenvolvimento de software.
[LinkedIn](https://linkedin.com/in/camilalacerdab) · [GitHub](https://github.com/camilalacerdab)
