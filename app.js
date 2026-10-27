/* Monta a página a partir do config.js. Não precisa editar este arquivo. */

(function () {
  var SETA = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>';

  function el(tag, classe, texto) {
    var n = document.createElement(tag);
    if (classe) n.className = classe;
    if (texto) n.textContent = texto;
    return n;
  }

  /* ---------- Painéis por parque ---------- */
  function montarParque(parque) {
    var secao = el('section', 'parque parque--' + (parque.cor || 'teal'));
    secao.id = parque.id;
    secao.setAttribute('aria-labelledby', parque.id + '-titulo');

    var capa = el('header', 'parque__capa');
    var img = el('img');
    if (parque.foto) {
      img.src = parque.foto;
      img.alt = parque.fotoAlt || '';
      img.loading = 'lazy';
      if (parque.fotoPosicao) img.style.objectPosition = parque.fotoPosicao;
    } else {
      /* Sem foto (ex.: bloco "Geral"): capa com a marca do Grupo Iter */
      capa.classList.add('parque__capa--marca');
      img.src = 'assets/img/symbol-white.png';
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');
    }
    capa.appendChild(img);

    var titulo = el('div', 'parque__titulo');
    var h2 = el('h2', null, parque.nome);
    h2.id = parque.id + '-titulo';
    titulo.appendChild(h2);
    if (parque.local) titulo.appendChild(el('p', null, parque.local));
    secao.appendChild(capa);
    secao.appendChild(titulo);

    var lista = el('ul', 'painel-lista');
    var paineis = parque.paineis || [];
    if (!paineis.length) {
      var vazio = el('li', 'painel-vazio', 'Os painéis deste bloco serão publicados em breve.');
      lista.appendChild(vazio);
    }
    paineis.forEach(function (p) {
      var li = el('li');
      var a = el('a', 'painel');
      a.href = p.link;

      var texto = el('div');
      texto.appendChild(el('h3', 'painel__titulo', p.titulo));
      if (p.descricao) texto.appendChild(el('p', 'painel__desc', p.descricao));
      if (p.atualizado) texto.appendChild(el('p', 'painel__data', p.atualizado));
      a.appendChild(texto);

      var seta = el('span', 'painel__seta');
      seta.innerHTML = SETA;
      a.appendChild(seta);

      li.appendChild(a);
      lista.appendChild(li);
    });
    secao.appendChild(lista);
    return secao;
  }

  var areaPaineis = document.getElementById('paineis');
  PARQUES.forEach(function (parque) {
    areaPaineis.appendChild(montarParque(parque));
  });

  /* ---------- Newsletter ---------- */
  function ehExterno(url) { return /^https?:\/\//i.test(url); }

  function montarNewsletter() {
    var ult = NEWSLETTER.ultima || {};
    var card = el('div', 'newsletter');

    var foto = el('div', 'newsletter__foto');
    var img = el('img');
    img.src = 'assets/img/newsletter.jpg';
    img.alt = 'Pessoa de costas, com as mãos na cintura, olhando a cidade e o Pão de Açúcar ao fundo';
    foto.appendChild(img);
    card.appendChild(foto);

    var corpo = el('div', 'newsletter__corpo');
    corpo.appendChild(el('p', 'newsletter__rotulo', 'Newsletter'));
    corpo.appendChild(el('h2', null, NEWSLETTER.nome));
    corpo.appendChild(el('p', 'newsletter__texto', 'Nossa newsletter com o que vale acompanhar no mercado.'));

    if (ult.arquivo) {
      if (ult.titulo || ult.data) {
        var ed = el('p', 'newsletter__edicao');
        if (ult.titulo) ed.appendChild(el('strong', null, ult.titulo));
        if (ult.data) ed.appendChild(el('span', null, ult.data));
        corpo.appendChild(ed);
      }
      var btn = el('a', 'botao');
      btn.href = ult.arquivo;
      btn.target = '_blank';
      btn.rel = 'noopener';
      btn.appendChild(document.createTextNode('Ler a última edição'));
      var s = el('span');
      s.innerHTML = SETA;
      s.style.display = 'inline-flex';
      btn.appendChild(s);
      corpo.appendChild(btn);
    } else {
      corpo.appendChild(el('p', 'newsletter__breve', 'A primeira edição sai em breve. Volte aqui para ler.'));
    }

    var ant = NEWSLETTER.anteriores || [];
    if (ant.length) {
      var bloco = el('div', 'newsletter__anteriores');
      bloco.appendChild(el('h3', null, 'Edições anteriores'));
      var ul = el('ul');
      ant.forEach(function (e) {
        var li = el('li');
        var a = el('a');
        a.href = e.arquivo;
        if (ehExterno(e.arquivo) || /\.pdf$/i.test(e.arquivo)) { a.target = '_blank'; a.rel = 'noopener'; }
        a.appendChild(el('strong', null, e.titulo));
        if (e.data) a.appendChild(el('span', null, e.data));
        li.appendChild(a);
        ul.appendChild(li);
      });
      bloco.appendChild(ul);
      corpo.appendChild(bloco);
    }

    card.appendChild(corpo);
    return card;
  }

  document.getElementById('newsletter').appendChild(montarNewsletter());

  /* ---------- Rodapé ---------- */
  if (typeof CONTATO_EMAIL === 'string' && CONTATO_EMAIL) {
    var p = document.getElementById('rodape-texto');
    p.textContent = 'Tem uma sugestão de painel? Escreva para ';
    var a = el('a', null, CONTATO_EMAIL);
    a.href = 'mailto:' + CONTATO_EMAIL;
    p.appendChild(a);
    p.appendChild(document.createTextNode('.'));
  }
})();
