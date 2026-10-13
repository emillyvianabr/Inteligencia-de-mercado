/* ==========================================================================
   Inteligência de mercado — conteúdo do portal

   Este é o único arquivo que você precisa editar no dia a dia.
   Tudo o que aparece na página (painéis e newsletter) vem daqui.
   Cuidado para não apagar vírgulas, aspas e chaves.
   ========================================================================== */


/* --------------------------------------------------------------------------
   NEWSLETTER "DE OLHO NO MERCADO" (banner na lateral)

   Para publicar uma nova edição:
   1. Coloque o arquivo (PDF) dentro da pasta "newsletter"
      Exemplo: newsletter/2026-10.pdf
   2. Preencha "ultima" abaixo com o título, a data e o caminho do arquivo
   3. Copie a edição que saiu de "ultima" para a lista "anteriores"

   Enquanto "arquivo" estiver vazio, o banner mostra "primeira edição em breve".
   O arquivo também pode ser um link completo (https://...).
   -------------------------------------------------------------------------- */
const NEWSLETTER = {
  nome: "De olho no mercado",

  ultima: {
    titulo: "",    // exemplo: "Edição de outubro"
    data: "",      // exemplo: "Outubro de 2026"
    arquivo: ""    // exemplo: "newsletter/2026-10.pdf"
  },

  anteriores: [
    // { titulo: "Edição de setembro", data: "Setembro de 2026", arquivo: "newsletter/2026-09.pdf" },
  ]
};


/* --------------------------------------------------------------------------
   PARQUES E PAINÉIS

   Para adicionar um painel: copie um bloco { titulo, descricao, link } dentro
   da lista "paineis" do parque certo e troque os textos.

   "atualizado" é opcional (exemplo: "Atualizado em 10/10/2026").
   Se não quiser mostrar, deixe vazio ou apague a linha.
   -------------------------------------------------------------------------- */
const PARQUES = [
  {
    id: "caracol",
    nome: "Parque do Caracol",
    local: "Canela, RS",
    foto: "assets/img/caracol.jpg",
    fotoAlt: "Cachoeira do Caracol cercada de mata na serra gaúcha",
    fotoPosicao: "50% 78%",   // enquadramento da foto (horizontal vertical)
    cor: "teal",
    paineis: [
      {
        titulo: "Tarifários",
        descricao: "Preços praticados pela concorrência",
        link: "https://emillyvianabr.github.io/tarifarios_caracol/",
        atualizado: ""
      },
      {
        titulo: "Monitor de Tarifas Aéreas",
        descricao: "Acompanhamento de tarifas aéreas de Porto Alegre",
        link: "https://emillyvianabr.github.io/monitor-tarifas/",
        atualizado: ""
      },
      {
        titulo: "Google Trends",
        descricao: "Tendências de busca",
        link: "https://emillyvianabr.github.io/caracol-google-trends/",
        atualizado: ""
      },
      {
        titulo: "Hotelaria em Gramado e Canela",
        descricao: "Panorama do setor hoteleiro na região de Gramado e Canela",
        link: "https://emillyvianabr.github.io/hotelaria_gramado/",
        atualizado: ""
      }
    ]
  },

  {
    id: "bondinho",
    nome: "Parque do Bondinho",
    local: "Rio de Janeiro, RJ",
    foto: "assets/img/bondinho.jpg",
    fotoAlt: "Bondinho do Pão de Açúcar sobre a mata, com a cidade ao fundo",
    fotoPosicao: "50% 35%",
    cor: "blue",
    paineis: [
      {
        titulo: "Google Trends",
        descricao: "Tendências de busca relacionadas ao parque",
        link: "https://emillyvianabr.github.io/bondinho-google-trends/",
        atualizado: ""
      },
      {
        titulo: "Análise de Comentários",
        descricao: "Avaliações e comentários de visitantes",
        link: "https://emillyvianabr.github.io/an-lise_de_coment-rios/",
        atualizado: ""
      }
    ]
  }
];


/* --------------------------------------------------------------------------
   CONTATO (opcional)
   Se preencher, aparece no rodapé um convite para enviar sugestões de painel.
   -------------------------------------------------------------------------- */
const CONTATO_EMAIL = "";   // exemplo: "inteligencia.mercado@empresa.com.br"
