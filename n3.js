/* N3 da Galega · simulado da 3ª prova (N3), montado com questões das Integradoras antigas
   Usa do index.html: Q, BYID, NAV, F, S, app, start, render, appbar, setHdr, esc, shuffle, hist, statsOf, chip, I, toast.
   Assuntos conforme a lista da N3 (SOI, HAM Ped, HAM Adulto, IESC). Cada questão da Integradora foi ligada a um assunto. */
(function () {
  const MAP = {"AL":["2022.1-21","2022.2-11","2022.2-40","2023.1-06","2023.1-09","2023.2-25","2024.1-06","2024.1-21","2024.2-30","2025.2-12","2026.1-09"],"TO":["2022.1-13","2022.2-32","2023.1-24","2023.1-37","2023.2-09","2023.2-20","2023.2-26","2024.1-03","2024.1-11","2024.1-35","2024.2-26","2024.2-28","2024.2-29","2025.2-21","2025.2-22","2025.2-43"],"AB":["2022.1-27","2023.1-36","2023.2-08","2024.1-27","2024.2-01","2025.2-13","2025.2-36"],"MA":["2022.1-06","2022.1-09","2022.1-31","2023.1-46","2024.1-15","2024.1-18","2024.1-23","2024.2-49","2025.2-38"],"CO":["2021.1-40","2022.1-37","2022.1-40","2022.2-45","2023.1-19","2023.1-44","2023.2-02","2024.1-24","2024.2-27"],"UL":["2021.1-18","2022.1-04","2022.1-12","2022.1-38","2022.2-01","2022.2-10","2022.2-16","2022.2-21"],"SI":["2022.2-12","2022.2-33","2023.1-35","2023.1-38","2023.2-22","2023.2-34","2023.2-38","2023.2-39","2024.1-02","2024.1-31","2024.1-49","2024.2-24","2024.2-41","2026.1-08","2026.1-19"],"PU":["2021.1-26","2021.1-39","2021.1-44","2022.2-27","2023.1-01","2023.1-49","2023.2-13","2024.2-20","2025.2-34"],"DG":["2021.1-08","2022.1-26","2022.1-43","2022.2-13","2022.2-15","2022.2-34","2022.2-38","2023.1-02","2023.1-15","2023.1-16","2023.1-23","2023.1-42","2023.2-12","2023.2-17","2023.2-32","2024.1-25","2024.2-18","2024.2-40","2025.2-06","2025.2-20","2025.2-50","2026.1-34","2026.1-50"],"G23":["2022.1-10","2022.1-15","2022.1-41","2022.2-07","2022.2-08","2022.2-46","2023.1-03","2023.1-22","2023.1-30","2024.1-19","2024.1-47","2024.2-32","2024.2-34","2024.2-47","2025.2-24"],"AR":["2021.1-46","2021.1-47","2021.1-49","2022.1-44","2022.2-19","2022.2-43","2023.1-33","2023.2-31","2023.2-40","2023.2-49","2024.1-38","2024.2-16","2025.2-35","2025.2-40"],"RE":["2021.1-48","2022.1-46","2025.2-30"],"PE":["2022.1-45","2022.1-49","2023.1-13","2023.2-24","2024.1-05","2024.1-10","2024.2-10","2024.2-23","2024.2-42","2024.2-44","2025.2-11"]};
  const ASSUNTOS = {
    AL:  { n: 'Aleitamento, puericultura e pega', d: 'SOI + HAM Ped' },
    TO:  { n: 'Infecções congênitas (TORCH)', d: 'SOI' },
    AB:  { n: 'Aborto', d: 'SOI' },
    MA:  { n: 'Patologias e nódulos mamários', d: 'SOI + HAM Adulto' },
    CO:  { n: 'ISTs: corrimentos', d: 'SOI' },
    UL:  { n: 'ISTs: úlceras genitais', d: 'SOI' },
    SI:  { n: 'Adolescência: sigilo e gravidez', d: 'HAM Ped' },
    PU:  { n: 'Puberdade, Tanner, genitália e amenorreia primária', d: 'HAM Ped' },
    DG:  { n: 'Diagnóstico da gravidez, 1ª consulta e Caderneta', d: 'HAM Adulto' },
    G23: { n: 'Gestante no 2º e 3º trimestres', d: 'HAM Adulto' },
    AR:  { n: 'Pré-natal de alto risco na APS', d: 'IESC' },
    RE:  { n: 'Rede de apoio à gestante e Rede Alyne', d: 'IESC' },
    PE:  { n: 'Puerpério', d: 'IESC' }
  };
  const GRUPOS = [
    { id: 'SOI',  n: 'SOI',        sub: 'Semanas 15.1 a 17.2', c: '#f2b233', i: '🧬', a: ['AL', 'TO', 'AB', 'MA', 'CO', 'UL'] },
    { id: 'HAMP', n: 'HAM Ped',    sub: 'Semanas 15 a 17',     c: '#38c28c', i: '👶', a: ['SI', 'PU'] },
    { id: 'HAMA', n: 'HAM Adulto', sub: 'Semanas 15 a 17',     c: '#4f9cf0', i: '🩺', a: ['DG', 'G23'] },
    { id: 'IESC', n: 'IESC',       sub: 'Semanas 15 a 17',     c: '#26b3c2', i: '🏘️', a: ['AR', 'RE', 'PE'] }
  ];
  const CODE = {};           // id da questão -> código do assunto
  const LIST = {};           // código -> questões
  Object.keys(MAP).forEach(c => { LIST[c] = []; MAP[c].forEach(k => { const q = BYID['INT-' + k]; if (q && !q.dup) { CODE[q.id] = c; LIST[c].push(q); } }); });
  const ALL = Object.values(LIST).reduce((a, l) => a.concat(l), []);
  const ORDER = Object.keys(ASSUNTOS);
  const st = { sel: new Set(ORDER), count: 40, mode: 'prova', status: 'all' };
  const COUNTS = [20, 30, 40, 50];

  function pool() {
    const out = [];
    st.sel.forEach(c => (LIST[c] || []).forEach(q => {
      if (st.mode === 'prova' && q.k !== 'mc') return;
      const h = hist(q);
      if (st.status === 'new' && h) return;
      if (st.status === 'wrong' && !(h && h.last === false)) return;
      out.push(q);
    }));
    return out;
  }
  // sorteio equilibrado: reveza entre os assuntos marcados para todos aparecerem
  function pick(p, n) {
    if (!n || n >= p.length) return shuffle(p);
    const b = {};
    p.forEach(q => (b[CODE[q.id]] = b[CODE[q.id]] || []).push(q));
    Object.keys(b).forEach(c => (b[c] = shuffle(b[c])));
    const out = [];
    while (out.length < n) {
      const ks = shuffle(Object.keys(b).filter(c => b[c].length));
      if (!ks.length) break;
      for (const c of ks) { if (out.length >= n) break; out.push(b[c].pop()); }
    }
    return shuffle(out);
  }
  function cta() {
    const s = statsOf(ALL);
    return `<button class="card n3-cta" id="n3Go"><span class="n3-ic">N3</span><span class="tx"><b>N3 da Galega</b><small>Simulado da 3ª prova · ${ALL.length} questões das Integradoras nos assuntos da N3${s.done ? ' · ' + s.done + ' feitas' : ''}</small></span>${I.chev}</button>`;
  }
  function open() { NAV = { tab: 'build', view: 'n3' }; render(); scrollTo(0, 0); }

  function view() {
    appbar({ back: 'Simulado', onBack: () => { NAV = { tab: 'build', view: 'home' }; render(); scrollTo(0, 0); } });
    const p = pool(), n = st.count && st.count < p.length ? st.count : p.length, s = statsOf(ALL);
    const pct = s.done ? Math.round(s.g / s.done * 100) : 0;
    const dock = `<div class="dock2 card"><div class="cnt"><b class="num">${p.length}</b><div class="hint">questões disponíveis</div></div><button class="btn primary" data-n3go ${p.length ? '' : 'disabled'}>${I.play}Começar ${n}</button></div>`;
    app.innerHTML = `
    <section class="card n3-hero"><span class="n3-badge">N3</span><h1>N3 da Galega</h1>
      <p class="muted">Simulado da terceira prova, com questões das Integradoras antigas só nos assuntos da N3.</p>
      <div class="n3-meter"><span><b class="num">${ALL.length}</b> questões</span><span><b class="num">${s.done}</b> feitas</span><span><b class="num">${s.done ? pct + '%' : '—'}</b> de acerto</span></div>
    </section>
    <section class="sec" style="margin-top:14px">
    <div class="dock2 card sticky"><div class="cnt"><b class="num">${p.length}</b><div class="hint">questões disponíveis</div></div><button class="btn primary" data-n3go ${p.length ? '' : 'disabled'}>${I.play}Começar ${n}</button></div>
    <div class="card"><div class="chead"><span class="stp">1</span><div class="ttl"><h3>Assuntos da N3</h3><span class="sub">${st.sel.size} de ${ORDER.length} marcados</span></div><button class="linkbtn" id="n3All">${st.sel.size === ORDER.length ? 'Nenhum' : 'Todos'}</button></div></div>
    ${GRUPOS.map(g => `<div class="card"><div class="chead" style="--c:${g.c}"><span class="ico" aria-hidden="true">${g.i}</span><div class="ttl"><h3>${g.n}</h3><span class="sub">${g.sub}</span></div><button class="linkbtn" data-n3g="${g.id}">${g.a.every(c => st.sel.has(c)) ? 'Desmarcar' : 'Marcar'}</button></div>
      <div class="cbody"><div class="chips">${g.a.map(c => chip('data-n3', c, st.sel.has(c), ASSUNTOS[c].n, LIST[c].length)).join('')}</div>${g.a.some(c => /\+/.test(ASSUNTOS[c].d)) ? `<p class="hint" style="margin:0">Aleitamento e mamas também caem no HAM; juntei tudo no mesmo assunto.</p>` : ''}</div></div>`).join('')}
    <div class="card"><div class="chead"><span class="stp">2</span><div class="ttl"><h3>Opções</h3><span class="sub">Formato, quantidade e situação</span></div></div><div class="cbody">
      <span class="label">Formato</span>
      <div class="seg" id="n3Mode"><button data-v="prova" aria-pressed="${st.mode === 'prova'}">Prova</button><button data-v="treino" aria-pressed="${st.mode === 'treino'}">Treino</button></div>
      <p class="hint" style="margin:-4px 0 0">${st.mode === 'prova' ? 'Cronômetro e correção só no final. Só questões objetivas.' : 'Correção e comentário depois de cada questão. Inclui as abertas.'}</p>
      <span class="label">Quantidade de questões</span>
      <div class="selrow"><select id="n3Cnt" aria-label="Quantidade">${COUNTS.map(c => `<option value="${c}" ${st.count === c ? 'selected' : ''}>${c} questões</option>`).join('')}<option value="0" ${st.count === 0 ? 'selected' : ''}>Todas (${p.length})</option></select></div>
      <p class="hint" style="margin:-4px 0 0">Sorteia de forma equilibrada entre os assuntos marcados, para todos aparecerem.</p>
      <span class="label">Situação</span>
      <div class="seg" id="n3Stat">${[['all', 'Todas'], ['new', 'Não feitas'], ['wrong', 'Errei']].map(([k, l]) => `<button data-v="${k}" aria-pressed="${st.status === k}">${l}</button>`).join('')}</div>
    </div></div>
    </section>
    ${dock}`;
    const re = () => { const y = scrollY; view(); scrollTo(0, y); };
    app.querySelectorAll('[data-n3]').forEach(b => b.onclick = () => { const c = b.dataset.n3; st.sel.has(c) ? st.sel.delete(c) : st.sel.add(c); re(); });
    app.querySelectorAll('[data-n3g]').forEach(b => b.onclick = () => { const g = GRUPOS.find(x => x.id === b.dataset.n3g), all = g.a.every(c => st.sel.has(c)); g.a.forEach(c => all ? st.sel.delete(c) : st.sel.add(c)); re(); });
    document.getElementById('n3All').onclick = () => { st.sel = st.sel.size === ORDER.length ? new Set() : new Set(ORDER); re(); };
    app.querySelectorAll('#n3Mode button').forEach(b => b.onclick = () => { st.mode = b.dataset.v; re(); });
    app.querySelectorAll('#n3Stat button').forEach(b => b.onclick = () => { st.status = b.dataset.v; re(); });
    document.getElementById('n3Cnt').onchange = e => { st.count = +e.target.value; re(); };
    app.querySelectorAll('[data-n3go]').forEach(b => b.onclick = () => { const l = pick(pool(), st.count); if (!l.length) { toast('Nenhuma questão com esses filtros'); return; } start(l, { mode: st.mode, title: 'N3 da Galega', n3: true }); });
  }

  window.N3 = { render: view, cta, open, code: q => CODE[q.id], label: c => (ASSUNTOS[c] || {}).n || c, total: ALL.length };
})();
