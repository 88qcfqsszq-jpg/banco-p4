/* OSCE · apostilas interativas de estações clínicas (caso → voz alta → resposta → resolução)
   Usa do index.html: NAV, render, appbar, setHdr, esc, I (ícones). Dados em osce-dados.js (window.OSCE_DATA). */
(function () {
  const D = window.OSCE_DATA || { estacoes: [] };
  const E = D.estacoes;
  const KEY = 'exatamente-osce-v1';
  let P = {};
  try { P = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { P = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) {} };
  const st = { area: 'Adulto', busca: '', modo: 'ler', rev: {} };
  const byId = id => E.find(e => e.id === id);
  const seen = e => Math.min((P[e.id] || []).length, e.blocos.length);
  const pct = list => { let t = 0, v = 0; list.forEach(e => { t += e.blocos.length; v += seen(e); }); return t ? Math.round(100 * v / t) : 0; };
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const AREAS = ['Adulto', 'Pediatria'];
  const temas = area => { const m = new Map(); E.filter(e => e.area === area).forEach(e => { if (!m.has(e.tema)) m.set(e.tema, []); m.get(e.tema).push(e); }); return [...m].map(([nome, est]) => ({ nome, est })); };
  const grupo = e => E.filter(x => x.area === e.area && x.tema === e.tema);
  const IC = {
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>'
  };
  const go = (view, extra) => { NAV = Object.assign({ tab: 'osce', view }, extra || {}); render(); scrollTo(0, 0); };

  /* ---------- home ---------- */
  function home() {
    appbar();
    const b = norm(st.busca.trim());
    const total = E.reduce((a, e) => a + e.blocos.length, 0), done = E.reduce((a, e) => a + seen(e), 0);
    let h = `<section class="card osc-hero"><span class="osc-badge">OSCE IV</span><h1>Estações clínicas</h1>
      <p class="muted">${E.length} estações em blocos: leia o caso, responda em voz alta, confira e entenda a resolução.</p>
      <div class="osc-meter"><b class="num">${done}/${total}</b><span>blocos estudados</span></div>
      <span class="osc-mbar"><i style="width:${total ? Math.round(100 * done / total) : 0}%"></i></span></section>`;
    h += `<div class="osc-seg" role="group" aria-label="Área">${AREAS.map(a => `<button data-a="${a}" aria-pressed="${st.area === a}">${a}<span class="n num">${E.filter(e => e.area === a).length}</span></button>`).join('')}</div>`;
    h += `<div class="search osc-search">${IC.search}<input id="oscQ" type="search" placeholder="Buscar tema ou estação (ex.: hepatite)" value="${esc(st.busca)}"></div>`;
    if (b) {
      const r = E.filter(e => norm(e.titulo + ' ' + e.tema + ' ' + e.caso).includes(b));
      h += `<div class="sec"><div class="sec-h"><h2>Resultados</h2><span class="muted small num">${r.length}</span></div>${r.length ? `<div class="card osc-list">${r.map(rowEst).join('')}</div>` : '<p class="muted">Nada encontrado.</p>'}</div>`;
    } else {
      const last = byId(P.__last);
      if (last && seen(last) < last.blocos.length) h += `<button class="card osc-cont" data-open="${last.id}"><small>Continue de onde parou</small><h3>${esc(last.titulo)}</h3><span class="osc-mbar"><i style="width:${Math.round(100 * seen(last) / last.blocos.length)}%"></i></span></button>`;
      h += `<div class="sec"><div class="sec-h"><h2>Apostilas · ${st.area}</h2><span class="muted small num">${temas(st.area).length}</span></div><div class="osc-grid">` +
        temas(st.area).map(t => { const p = pct(t.est); return `<button class="card osc-ap" data-t="${esc(t.nome)}"><span class="osc-aph"><h3>${esc(t.nome)}</h3>${IC.chev}</span><span class="muted small num">${t.est.length} estaç${t.est.length > 1 ? 'ões' : 'ão'} · ${p}%</span><span class="osc-mbar"><i style="width:${p}%"></i></span></button>`; }).join('') + `</div></div>`;
    }
    app.innerHTML = h;
    app.querySelectorAll('[data-a]').forEach(x => x.onclick = () => { st.area = x.dataset.a; home(); });
    app.querySelectorAll('[data-t]').forEach(x => x.onclick = () => go('apostila', { area: st.area, tema: x.dataset.t }));
    bindOpen();
    const q = document.getElementById('oscQ');
    q.oninput = () => { st.busca = q.value; const pos = q.selectionStart; home(); const n = document.getElementById('oscQ'); n.focus(); try { n.setSelectionRange(pos, pos); } catch (e) {} };
  }
  const rowEst = e => { const ok = seen(e) >= e.blocos.length; return `<button class="trow osc-row" data-open="${e.id}"><span class="nm"><span class="osc-dot ${ok ? 'ok' : ''}">${ok ? IC.check : e.blocos.length}</span>${esc(e.titulo)}</span><span class="pct num">${seen(e)}/${e.blocos.length}</span><span class="chev">${IC.chev}</span><span class="meta">${esc(e.area)} · ${esc(e.tema)}</span></button>`; };
  const bindOpen = () => app.querySelectorAll('[data-open]').forEach(x => x.onclick = () => { st.modo = 'ler'; st.rev = {}; go('estacao', { id: x.dataset.open }); });

  /* ---------- apostila ---------- */
  function apostila() {
    const area = NAV.area || st.area, tema = NAV.tema;
    const l = temas(area).find(t => t.nome === tema);
    if (!l) return go('home');
    appbar({ back: 'OSCE', onBack: () => go('home') });
    app.innerHTML = `<section class="card osc-hero"><span class="osc-badge">${esc(area)}</span><h1>${esc(tema)}</h1><p class="muted num">${l.est.length} estaç${l.est.length > 1 ? 'ões' : 'ão'} · ${pct(l.est)}% estudado</p></section>
      <div class="sec"><div class="card osc-list">${l.est.map(rowEst).join('')}</div></div>`;
    bindOpen();
  }

  /* ---------- estação ---------- */
  function estacao() {
    const e = byId(NAV.id);
    if (!e) return go('home');
    P.__last = e.id; save();
    const g = grupo(e), gi = g.indexOf(e);
    appbar({ back: 'Apostila', onBack: () => { stopMic(); go('apostila', { area: e.area, tema: e.tema }); } });
    let h = `<div class="osc-pager"><button data-nav="-1" aria-label="Estação anterior" ${gi === 0 ? 'disabled' : ''}>${IC.left}</button><span class="num">${gi + 1} / ${g.length}</span><button data-nav="1" aria-label="Próxima estação" ${gi === g.length - 1 ? 'disabled' : ''}>${IC.chev}</button></div>
      <h1 class="osc-title">${esc(e.titulo)}</h1>
      <div class="osc-caso"><b>Caso clínico</b>${esc(e.caso)}</div>`;
    e.blocos.forEach((b, k) => {
      h += `<section class="card osc-bloco" data-b="${k}"><h3><span class="osc-n num">${k + 1}</span>${esc(b.t)}</h3>`;
      if (b.ctx) h += `<p class="osc-ctx">${esc(b.ctx)}</p>`;
      if (b.tab) h += `<div class="osc-tbw"><table class="osc-tb"><tr>${b.tab.h.map(x => `<th>${esc(x)}</th>`).join('')}</tr>${b.tab.l.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</table></div>`;
      if (b.img) h += `<figure class="osc-fig"><img src="${esc(b.img.s)}" alt="${esc(b.img.c)}" loading="lazy"><figcaption>${esc(b.img.c)}</figcaption></figure>`;
      h += `<p class="osc-q"><b>O examinador pergunta:</b> ${esc(b.q)}</p><p class="osc-hint muted small">Responda em voz alta, depois confira.</p><div class="osc-heard small" hidden></div>
        <div class="osc-ans"><b class="osc-lab">O que responder</b><ul>${b.r.map(x => `<li>${esc(x)}</li>`).join('')}</ul><button class="btn primary osc-rev">Mostrar resposta</button></div>
        <div class="osc-exp"><b class="osc-lab">Entenda a resolução</b><p>${esc(b.e)}</p></div></section>`;
    });
    h += `<div class="btns osc-end"><button class="btn" data-nav="-1" ${gi === 0 ? 'disabled' : ''}>‹ Anterior</button><button class="btn primary" data-nav="1">${gi === g.length - 1 ? 'Concluir' : 'Próxima ›'}</button></div>
      <div class="osc-mic" id="oscMic" hidden>${IC.mic}Responda em voz alta</div>
      <nav class="osc-dock" aria-label="Modo de estudo"><div class="wrap">${[['ler', 'Leia o caso'], ['voz', 'Responda em voz alta'], ['resp', 'Mostrar resposta'], ['ent', 'Entenda a resolução']].map(([m, t]) => `<button data-m="${m}">${t}</button>`).join('')}</div></nav>`;
    app.innerHTML = h;
    app.querySelectorAll('[data-nav]').forEach(x => x.onclick = () => {
      stopMic(); const i = gi + (+x.dataset.nav);
      st.modo = 'ler'; st.rev = {};
      if (i < 0 || i >= g.length) go('apostila', { area: e.area, tema: e.tema }); else go('estacao', { id: g[i].id });
    });
    app.querySelectorAll('[data-m]').forEach(x => x.onclick = () => { st.modo = x.dataset.m; modo(e); });
    app.querySelectorAll('.osc-rev').forEach(x => x.onclick = () => { const k = +x.closest('.osc-bloco').dataset.b; st.rev[k] = 1; mark(e, k); modo(e); });
    modo(e);
  }
  function mark(e, k) { const a = P[e.id] || []; if (!a.includes(k)) { a.push(k); P[e.id] = a; save(); } }
  function modo(e) {
    document.querySelectorAll('.osc-dock [data-m]').forEach(b => b.setAttribute('aria-current', b.dataset.m === st.modo ? 'page' : 'false'));
    const mostra = st.modo === 'resp' || st.modo === 'ent', ent = st.modo === 'ent';
    document.getElementById('oscMic').hidden = st.modo !== 'voz';
    if (st.modo === 'voz') startMic(); else stopMic();
    document.querySelectorAll('.osc-bloco').forEach(el => {
      const k = +el.dataset.b, rev = mostra || st.rev[k];
      el.querySelector('.osc-ans').classList.toggle('hide', !rev);
      el.querySelector('.osc-exp').hidden = !ent;
      if (mostra) mark(e, k);
    });
  }

  /* ---------- voz (opcional; só se o navegador tiver reconhecimento de fala) ---------- */
  let rec = null;
  function startMic() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR || rec) return;
    try {
      rec = new SR(); rec.lang = 'pt-BR'; rec.continuous = true; rec.interimResults = true;
      rec.onresult = ev => {
        let t = ''; for (let i = ev.resultIndex; i < ev.results.length; i++) t += ev.results[i][0].transcript;
        const all = [...document.querySelectorAll('.osc-heard')]; let alvo = all[0];
        all.forEach(x => { const r = x.getBoundingClientRect(); if (r.top < innerHeight * .7 && r.bottom > 0) alvo = x; });
        if (alvo) { alvo.hidden = false; alvo.textContent = 'Você disse: ' + t; }
      };
      rec.onend = () => { rec = null; if (st.modo === 'voz' && NAV.tab === 'osce') setTimeout(startMic, 300); };
      rec.start();
    } catch (e) { rec = null; }
  }
  function stopMic() { if (rec) { const r = rec; rec = null; r.onend = null; try { r.stop(); } catch (e) {} } }

  window.OSCE = {
    render() {
      stopMic();
      if (NAV.view === 'estacao') estacao();
      else if (NAV.view === 'apostila') apostila();
      else { NAV = { tab: 'osce', view: 'home' }; home(); }
    }
  };
})();
