# Nordcasa

Site da Nordcasa — casas com estrutura em madeira (wood frame) e acabamento exterior em capoto, ao estilo norte-americano, em Portugal.

## Ficheiros

- `index.html` — página única
- `style.css` — estilos
- `main.js` — menu e formulário de contacto
- `favicon.svg` — ícone
- `robots.txt`

## Por configurar

- Email que recebe os pedidos de contacto: variável `CONTACT_EMAIL` em `main.js` (enquanto estiver vazia, o formulário avisa que ainda não está configurado).

## Segurança

Site estático, sem scripts nem fontes de terceiros e sem recolha de dados. A política de segurança (CSP) está definida no `index.html`.

## Fotografias

As fotos da página inicial vêm do [Unsplash](https://unsplash.com) (licença livre, uso comercial permitido) e são ilustrativas. Estão carregadas a partir de `images.unsplash.com`, único domínio externo permitido na CSP. Para trocar por fotos próprias, guardar os ficheiros neste repositório, alterar os `src` em `index.html` e remover `https://images.unsplash.com` da CSP.
