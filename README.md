# Inteligência de mercado | Grupo Iter

Portal que reúne os painéis (dashboards) e a newsletter "De olho no mercado".
Site estático, publicado pelo GitHub Pages.

## Como atualizar

Quase tudo se faz no arquivo **`config.js`**. Não precisa mexer em HTML.

### Publicar uma nova edição da newsletter
1. Suba o PDF na pasta `newsletter/` (exemplo: `newsletter/2026-10.pdf`).
2. No `config.js`, no bloco `NEWSLETTER`, preencha `ultima` com título, data e arquivo.
3. Copie a edição que saiu de `ultima` para a lista `anteriores`.

Enquanto `arquivo` estiver vazio, o banner mostra "A primeira edição sai em breve".

### Adicionar um painel
No `config.js`, dentro de `PARQUES`, copie um bloco `{ titulo, descricao, link }`
na lista `paineis` do parque certo e troque os textos.

### Painéis gerais (abrangentes)
O bloco **Geral** fica no topo da lista de painéis e é para dashboards que não são
de um parque específico. Para publicar um, preencha um bloco `{ titulo, descricao, link }`
dentro de `paineis` no bloco `id: "geral"`. Enquanto a lista estiver vazia, a página
mostra "Os painéis deste bloco serão publicados em breve". Esse bloco não tem foto
(deixe `foto` vazio): a capa usa a marca do Grupo Iter.

### Adicionar um parque
Copie um bloco inteiro de parque no `config.js`, troque `id`, `nome`, `local` e
`foto` (coloque a imagem em `assets/img/`) e preencha os painéis.

## Estrutura

- `index.html`: página única do portal
- `config.js`: conteúdo (painéis e newsletter)
- `app.js`: monta a página a partir do config (não precisa editar)
- `estilo.css`: visual, com as cores e a fonte do brandbook do Grupo Iter
- `assets/`: logos, fotos e fontes
- `newsletter/`: PDFs das edições
- `caracol.html` e `bondinho.html`: só redirecionam para o `index.html`, para os links antigos continuarem funcionando

## Para testar no computador

Abra um terminal na pasta e rode `python3 -m http.server 8000`, depois acesse
`http://localhost:8000`. (Abrir o `index.html` com duplo clique faz as fontes
não carregarem; no GitHub Pages isso não acontece.)
