/* PÍLULAS PARA PROVA · motor
   Usa do index.html: NAV, render, appbar, setHdr, start, BYID, esc, shuffle, toast, app.
   Cada pílula: gancho → ideia → mapa → gatilhos → pegadinhas → teste relâmpago (3) → selo. */
(function () {
  const P = window.PL_PILULAS || [];
  const KEY = 'exatamente-pilulas-v1';
  let db = { p: {} };
  try { const raw = localStorage.getItem(KEY); if (raw) db = JSON.parse(raw) || db; if (!db.p) db.p = {}; } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) {} };

  const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  const paras = s => String(s).split('\n').map(l => `<p>${md(l)}</p>`).join('');
  const num = p => p.extra ? '+' : String(p.n).padStart(2, '0');
  const byId = id => P.find(p => p.id === id);
  // questões da pílula = IDs fixos + busca automática no banco (temas + palavras)
  const QCACHE = {};
  function qsOf(p) {
    if (QCACHE[p.id]) return QCACHE[p.id];
    const ids = new Set((p.questoes || []).filter(id => BYID[id]));
    if (p.busca) {
      // só SOI e Integradora; na Integradora que informa o módulo, só as de SOI
      const doSOI = q => q.d === 'SOI' || (q.d === 'INT' && (!q.m || /SOI/.test(q.m)));
      const re = new RegExp(p.busca.re, 'i'), nao = p.busca.nao ? new RegExp(p.busca.nao, 'i') : null;
      const ts = new Set(p.busca.t), fora = new Set(p.busca.fora || []);
      Q.forEach(q => {
        if (!doSOI(q) || !ts.has(q.t) || fora.has(q.id)) return;
        const txt = q.s + ' ' + (q.o || []).map(o => o[1]).join(' ') + ' ' + (q.r || '');
        if (re.test(txt) && !(nao && nao.test(txt))) ids.add(q.id);
      });
    }
    return (QCACHE[p.id] = [...ids].map(id => BYID[id]));
  }
  const provasOf = p => new Set(qsOf(p).filter(q => !isMapes(q.d)).map(q => q.d + q.sem)).size;
  const ORDER = P.slice().sort((a, b) => (a.n || 99) - (b.n || 99));
  const idx = p => ORDER.indexOf(p);
  const MAIN = ORDER.filter(p => !p.extra), EXTRAS = ORDER.filter(p => p.extra);

  const IC = {
    pill: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 3.5a4.95 4.95 0 0 1 7 7l-7 7a4.95 4.95 0 0 1-7-7z"/><path d="M7 7l7 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  };
  const capsule = (p, n) => `<span class="pl-cap" style="--c:${p.cor}" aria-hidden="true"><i></i><b>${n}</b></span>`;

  /* ---------- estado do player ---------- */
  let st = null;
  function cardsOf(p) {
    const c = [{ k: 'gancho' }, { k: 'ideia' }];
    (p.mapa || []).forEach(b => c.push({ k: 'mapa', b }));
    c.push({ k: 'gatilhos' }, { k: 'pegadinhas' });
    p.relampago.forEach((r, i) => c.push({ k: 'rel', r, i }));
    c.push({ k: 'fim' });
    return c;
  }
  const optOrder = n => shuffle([...Array(n).keys()]);
  function newState(p) {
    return { id: p.id, p, cards: cardsOf(p), i: 0, gancho: null, gOrd: optOrder(p.gancho.o.length), peg: new Set(),
      rel: {}, rOrd: p.relampago.map(r => optOrder(r.o.length)), saved: false };
  }
  function reforcoState() {
    const tomadas = P.filter(p => db.p[p.id]);
    const pool = [];
    (tomadas.length ? tomadas : P).forEach(p => p.relampago.forEach(r => pool.push({ p, r })));
    const pick = shuffle(pool).slice(0, 5);
    const cards = pick.map((o, i) => ({ k: 'rel', r: o.r, i, from: o.p }));
    cards.push({ k: 'fimRef' });
    return { id: '_reforco', p: null, cards, i: 0, rel: {}, rOrd: pick.map(o => optOrder(o.r.o.length)), saved: false };
  }

  function open(id) {
    st = id === '_reforco' ? reforcoState() : newState(byId(id));
    NAV = { tab: 'pilulas', view: 'pilula', id };
    render(); scrollTo(0, 0);
  }
  function goHome() { st = null; NAV = { tab: 'pilulas', view: 'home' }; render(); scrollTo(0, 0); }
  function go(i) { st.i = Math.max(0, Math.min(st.cards.length - 1, i)); render(); scrollTo(0, 0); }

  /* ---------- home ---------- */
  function home() {
    appbar();
    const cur = MAIN.filter(p => db.p[p.id] && db.p[p.id].curado).length;
    const tomou = P.some(p => db.p[p.id]);
    const next = MAIN.find(p => !(db.p[p.id] && db.p[p.id].curado)) || MAIN[0];
    app.innerHTML = `
    <section class="card pl-hero">
      <div class="pl-hero-t"><span class="pl-badge">SOI IV</span><h1>Pílulas para prova</h1>
      <p class="muted">Os ${MAIN.length} assuntos de SOI IV em doses de 3 minutos. Tome, faça o teste relâmpago e saia curado.</p></div>
      <div class="pl-meter"><div><b class="num">${cur}</b><span>/${MAIN.length} curadas</span></div><span class="pl-mbar"><i style="width:${MAIN.length ? cur / MAIN.length * 100 : 0}%"></i></span></div>
      <div class="btns">
        <button class="btn primary" id="plNext">${IC.pill}${cur ? 'Próxima pílula' : 'Começar pela pílula 01'}</button>
        ${tomou ? `<button class="btn" id="plRef">${IC.bolt}Dose de reforço · 5</button>` : ''}
      </div>
    </section>
    <section class="sec">
      <div class="sec-h"><h2>As ${MAIN.length} pílulas</h2></div>
      <div class="pl-list">${MAIN.map(itemHTML).join('')}</div>
    </section>
    ${EXTRAS.length ? `<section class="sec"><div class="sec-h"><h2>Extras</h2><span class="hint">bônus de SOI</span></div><div class="pl-list">${EXTRAS.map(itemHTML).join('')}</div></section>` : ''}
    <div style="height:28px"></div>`;
    app.querySelectorAll('[data-pl]').forEach(b => b.onclick = () => open(b.dataset.pl));
    document.getElementById('plNext').onclick = () => open(next.id);
    const r = document.getElementById('plRef'); if (r) r.onclick = () => open('_reforco');
  }
  function itemHTML(p) {
    const s = db.p[p.id], n = qsOf(p).length, pv = provasOf(p);
    const tag = s && s.curado ? `<span class="pl-tag ok">${IC.check}Curado</span>` : s ? '<span class="pl-tag">Tomada</span>' : '<span class="pl-tag new">Nova</span>';
    const meta = n ? `<span class="num">${n} questões no banco${pv ? ` · ${pv} prova${pv > 1 ? 's' : ''}` : ''}</span> · 3 min` : '3 min';
    return `<button class="card pl-item" data-pl="${p.id}">${capsule(p, num(p))}
      <span class="pl-it"><b>${esc(p.titulo)}</b><span class="hint">${esc(p.sub)}</span>
      <span class="pl-meta">${meta}</span></span>${tag}</button>`;
  }

  /* ---------- blocos de conteúdo ---------- */
  function tabelaHTML(t) {
    const cmp = t.cols[0] === '';
    const cards = `<div class="pl-rows">${t.rows.map(r => `<div class="pl-row"><b class="pl-rt">${md(r[0])}</b>${r.slice(1).map((c, j) =>
      t.cols.length > 2 ? `<div class="pl-rc"><span>${md(t.cols[j + 1])}</span>${md(c)}</div>` : `<div class="pl-rc">${md(c)}</div>`).join('')}</div>`).join('')}</div>`;
    if (cmp) return `<div class="pl-narrow">${cards}</div><div class="pl-tw pl-wide"><table class="pl-tab"><thead><tr>${t.cols.map(c => `<th>${md(c)}</th>`).join('')}</tr></thead>
      <tbody>${t.rows.map(r => `<tr>${r.map((c, j) => j ? `<td>${md(c)}</td>` : `<th scope="row">${md(c)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    return cards;
  }
  function blocoHTML(b) {
    if (b.tabela) return `<h3 class="pl-bt">${md(b.tabela.titulo)}</h3>${tabelaHTML(b.tabela)}`;
    if (b.fluxo) return `<h3 class="pl-bt">${md(b.fluxo.titulo)}</h3><ol class="pl-flow">${b.fluxo.passos.map((s, i) =>
      `<li><span class="pl-fn">${i + 1}</span><span>${md(s)}</span></li>`).join(`<li class="pl-fa" aria-hidden="true">${IC.down}</li>`)}</ol>`;
    if (b.lista) return `<h3 class="pl-bt">${md(b.lista.titulo)}</h3><ul class="pl-ul">${b.lista.itens.map(s => `<li>${md(s)}</li>`).join('')}</ul>`;
    return '';
  }
  function optsHTML(o, ord, a, pick, key) {
    return `<div class="pl-opts">${ord.map(j => {
      let cls = '';
      if (pick != null) cls = j === a ? 'ok' : j === pick ? 'bad' : 'dim';
      return `<button class="pl-opt ${cls}" data-${key}="${j}" ${pick != null ? 'disabled' : ''}>${md(o[j])}</button>`;
    }).join('')}</div>`;
  }

  /* ---------- player ---------- */
  function player() {
    if (!st || st.id !== NAV.id) st = NAV.id === '_reforco' ? reforcoState() : newState(byId(NAV.id));
    const p = st.p, c = st.cards[st.i], n = st.cards.length;
    appbar({ back: 'Pílulas', onBack: goHome });
    const pi = p ? idx(p) : -1;
    const head = `<div class="pl-top" style="--c:${p ? p.cor : 'var(--acc)'}">
      <div class="pl-kick">${p ? capsule(p, num(p)) : `<span class="pl-cap" style="--c:var(--acc)"><i></i><b>${IC.bolt}</b></span>`}
      <div><span class="hint">${p ? (p.extra ? 'Pílula extra' : 'Pílula ' + num(p)) : 'Dose de reforço'}</span><b>${p ? esc(p.titulo) : '5 perguntas das pílulas que você já tomou'}</b></div></div>
      <div class="pl-prog" aria-label="Etapa ${st.i + 1} de ${n}">${st.cards.map((_, i) => `<i class="${i < st.i ? 'd' : i === st.i ? 'c' : ''}"></i>`).join('')}</div></div>`;
    let body = '', canNext = true, nextLabel = 'Continuar';

    if (c.k === 'gancho') {
      const g = p.gancho;
      body = `<span class="pl-lab">Antes de começar</span><h2>Você acerta?</h2><p class="pl-case">${md(g.caso)}</p><p class="pl-q">${md(g.p)}</p>
        ${optsHTML(g.o, st.gOrd, g.a, st.gancho, 'g')}
        ${st.gancho != null ? `<div class="pl-fb ${st.gancho === g.a ? 'ok' : 'neu'}">${st.gancho === g.a ? 'Boa! Agora entenda por quê.' : 'Tudo bem errar aqui: tentar antes faz o resto grudar. Em 3 minutos isso fica óbvio.'}</div>` : ''}`;
      nextLabel = st.gancho == null ? 'Pular' : 'Continuar';
    } else if (c.k === 'ideia') {
      body = `<span class="pl-lab">A ideia-mestra</span><div class="pl-big">${paras(p.ideia)}</div><p class="hint">Se lembrar só disto, você já acerta a maioria.</p>`;
    } else if (c.k === 'mapa') {
      body = `<span class="pl-lab">O mapa</span>${blocoHTML(c.b)}`;
    } else if (c.k === 'gatilhos') {
      body = `<span class="pl-lab">Gatilhos de prova</span><h2>Viu isto → pense nisto</h2>
        <div class="pl-trig">${p.gatilhos.map(([a, b]) => `<div class="pl-tg"><span>${md(a)}</span><i>${IC.arrow}</i><b>${md(b)}</b></div>`).join('')}</div>`;
    } else if (c.k === 'pegadinhas') {
      const all = p.pegadinhas.length, seen = st.peg.size;
      body = `<span class="pl-lab">Pegadinhas da banca</span><h2>Isto já caiu e é falso</h2><p class="hint">Toque em cada uma para ver a verdade. ${seen}/${all}</p>
        <div class="pl-pegs">${p.pegadinhas.map(([f, v], i) => {
          const on = st.peg.has(i);
          return `<button class="pl-peg ${on ? 'on' : ''}" data-peg="${i}" aria-expanded="${on}"><span class="pl-f">${md(f)}</span>${on ? `<span class="pl-v">${IC.check}${md(v)}</span>` : '<span class="pl-tap">Por que é falso?</span>'}</button>`;
        }).join('')}</div>`;
      if (seen < all) nextLabel = 'Continuar';
    } else if (c.k === 'rel') {
      const tot = st.cards.filter(x => x.k === 'rel').length, r = c.r, pick = st.rel[c.i];
      body = `<span class="pl-lab">${IC.bolt} Teste relâmpago · ${c.i + 1}/${tot}</span>${c.from ? `<span class="hint">${esc(c.from.titulo)}</span>` : ''}
        <p class="pl-q big">${md(r.p)}</p>${optsHTML(r.o, st.rOrd[c.i], r.a, pick, 'r')}
        ${pick != null ? `<div class="pl-fb ${pick === r.a ? 'ok' : 'bad'}"><b>${pick === r.a ? 'Certo.' : 'Não foi dessa vez.'}</b> ${md(r.x)}</div>` : ''}`;
      canNext = pick != null;
      nextLabel = st.i + 1 === n - 1 ? 'Ver resultado' : 'Próxima';
    } else if (c.k === 'fim') {
      body = fimHTML(p);
    } else if (c.k === 'fimRef') {
      body = fimRefHTML();
    }

    const last = st.i === n - 1;
    app.innerHTML = `${head}<section class="card pl-card ${c.k}" style="--c:${p ? p.cor : 'var(--acc)'}">${body}</section>
      ${last ? '' : `<div class="pl-nav">${st.i > 0 && c.k !== 'rel' ? `<button class="btn" id="plPrev">Voltar</button>` : ''}<button class="btn primary" id="plNextC" ${canNext ? '' : 'disabled'}>${nextLabel}</button></div>`}
      <div style="height:24px"></div>`;
    bind(c, p);
  }

  function score() { const rs = st.cards.filter(x => x.k === 'rel'); return { ok: rs.filter(x => st.rel[x.i] === x.r.a).length, n: rs.length }; }

  function fimHTML(p) {
    const s = score(), cured = s.ok === s.n;
    if (!st.saved) {
      const prev = db.p[p.id] || { vezes: 0, curado: false };
      db.p[p.id] = { vezes: prev.vezes + 1, curado: prev.curado || cured, ult: Date.now(), nota: s.ok };
      save(); st.saved = true;
    }
    const qn = qsOf(p).length, i = idx(p), nxt = ORDER[i + 1];
    return `${cured ? `<div class="pl-seal" style="--c:${p.cor}"><span>${IC.check}</span><b>Curado</b><small>${s.ok}/${s.n} no relâmpago</small></div>`
        : `<div class="pl-seal almost"><span class="num">${s.ok}/${s.n}</span><b>Quase lá</b><small>Mais uma dose e você cura</small></div>`}
      <div class="pl-bula"><span class="pl-lab">Bula · leve na cabeça</span><p>${md(p.bula)}</p></div>
      <div class="pl-acts">
        ${!cured ? `<button class="btn primary block" id="plRetry">${IC.bolt}Refazer o teste relâmpago</button>` : ''}
        ${qn ? `<button class="btn ${cured ? 'primary' : ''} block" id="plPractice">Treinar com as ${qn} questões do banco</button>` : ''}
        ${!cured ? `<button class="btn block" id="plRestart">Rever a pílula do início</button>` : ''}
        ${nxt ? `<button class="btn block" id="plGoNext">Próxima pílula: ${esc(nxt.titulo)}</button>` : ''}
        <button class="btn ghost block" id="plHome">Ver todas as pílulas</button>
      </div>`;
  }
  function fimRefHTML() {
    const rs = st.cards.filter(x => x.k === 'rel'), ok = rs.filter(x => st.rel[x.i] === x.r.a).length;
    const wrongP = [...new Set(rs.filter(x => st.rel[x.i] !== x.r.a).map(x => x.from))];
    return `<div class="pl-seal ${ok === rs.length ? '' : 'almost'}" style="--c:var(--ok)"><span class="num">${ok}/${rs.length}</span><b>${ok === rs.length ? 'Tudo firme' : 'Reforço feito'}</b><small>Dose de reforço</small></div>
      ${wrongP.length ? `<span class="pl-lab">Vale tomar de novo</span><div class="pl-list">${wrongP.map(p => `<button class="card pl-item" data-pl="${p.id}">${capsule(p, num(p))}<span class="pl-it"><b>${esc(p.titulo)}</b><span class="hint">${esc(p.sub)}</span></span></button>`).join('')}</div>` : ''}
      <div class="pl-acts"><button class="btn primary block" id="plAgain">${IC.bolt}Outra dose de reforço</button><button class="btn ghost block" id="plHome">Ver todas as pílulas</button></div>`;
  }

  function bind(c, p) {
    const $ = id => document.getElementById(id);
    if ($('plNextC')) $('plNextC').onclick = () => go(st.i + 1);
    if ($('plPrev')) $('plPrev').onclick = () => go(st.i - 1);
    app.querySelectorAll('[data-g]').forEach(b => b.onclick = () => { st.gancho = +b.dataset.g; render(); });
    app.querySelectorAll('[data-r]').forEach(b => b.onclick = () => { st.rel[c.i] = +b.dataset.r; render(); });
    app.querySelectorAll('[data-peg]').forEach(b => b.onclick = () => { const i = +b.dataset.peg; st.peg.has(i) ? st.peg.delete(i) : st.peg.add(i); render(); });
    app.querySelectorAll('[data-pl]').forEach(b => b.onclick = () => open(b.dataset.pl));
    if ($('plHome')) $('plHome').onclick = goHome;
    if ($('plAgain')) $('plAgain').onclick = () => open('_reforco');
    if ($('plRetry')) $('plRetry').onclick = () => { st.rel = {}; st.rOrd = p.relampago.map(r => optOrder(r.o.length)); st.saved = false; go(st.cards.findIndex(x => x.k === 'rel')); };
    if ($('plRestart')) $('plRestart').onclick = () => open(p.id);
    if ($('plGoNext')) $('plGoNext').onclick = () => open(ORDER[idx(p) + 1].id);
    if ($('plPractice')) $('plPractice').onclick = () => start(qsOf(p), { mode: 'treino', title: 'Pílula: ' + p.titulo });
  }

  window.PILULAS = {
    render() { if (NAV.view === 'pilula' && (NAV.id === '_reforco' || byId(NAV.id))) player(); else { NAV = { tab: 'pilulas', view: 'home' }; home(); } },
  };
})();
