/* APG · treino de domínio e discussão oral (ler → explicar em voz alta → por quê ×3 → tutor → relâmpago → caso → fala)
   Usa do index.html: NAV, render, appbar, setHdr, esc. Dados em apg/apg-dados-*.js (window.APG_DATA). */
(function () {
  const D = window.APG_DATA || { casos: [] };
  const KEY = 'exatamente-apg-v1';
  let P = {};
  try { P = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { P = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) {} };
  const pc = id => (P[id] = P[id] || { mods: {}, tutor: 0, rel: 0, casos: {}, dias: {} });
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>');
  const byId = id => D.casos.find(c => c.id === id);
  const rnd = a => a[Math.floor(Math.random() * a.length)];
  const IC = {
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>'
  };
  const go = (view, extra) => { NAV = Object.assign({ tab: 'apg', view }, extra || {}); render(); scrollTo(0, 0); };
  const hoje = () => new Date().toISOString().slice(0, 10);
  const tick = id => { const p = pc(id); p.dias[hoje()] = (p.dias[hoje()] || 0) + 1; save(); };
  const streak = id => { const d = pc(id).dias; let n = 0, t = new Date(); if (!d[hoje()]) t.setDate(t.getDate() - 1); while (d[t.toISOString().slice(0, 10)]) { n++; t.setDate(t.getDate() - 1); } return n; };
  const modPct = (c, m) => { const s = pc(c.id).mods[m.id] || {}; return ['ler', 'exp', 'pq'].filter(k => s[k]).length; };
  const totalPct = c => { const t = c.modulos.length * 3; let v = 0; c.modulos.forEach(m => v += modPct(c, m)); return Math.round(100 * v / t); };

  /* ---------- voz ---------- */
  let rec = null, heard = '', onHeard = null, tmr = null;
  const SRok = () => !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  function startMic(cb) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return false;
    stopMic(); heard = ''; onHeard = cb;
    let base = '';
    const open = () => {
      try {
        const r = rec = new SR(); r.lang = 'pt-BR'; r.continuous = true; r.interimResults = true;
        r.onresult = ev => { let t = ''; for (let i = 0; i < ev.results.length; i++) t += ev.results[i][0].transcript + ' '; heard = (base + ' ' + t).trim(); if (onHeard) onHeard(heard); };
        r.onend = () => { if (rec === r) { base = heard; setTimeout(() => { if (rec === r) open(); }, 250); } };
        r.onerror = () => {};
        r.start();
      } catch (e) { rec = null; }
    };
    open(); return true;
  }
  function stopMic() { if (rec) { const r = rec; rec = null; r.onend = null; try { r.stop(); } catch (e) {} } clearInterval(tmr); }
  const mmss = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  function timer(el, limit, fim) {
    let s = 0; clearInterval(tmr);
    tmr = setInterval(() => { s++; if (el.isConnected) el.textContent = mmss(s) + (limit ? ' / ' + mmss(limit) : ''); else clearInterval(tmr); if (limit && s >= limit) { clearInterval(tmr); fim && fim(); } }, 1000);
    el.textContent = '0:00' + (limit ? ' / ' + mmss(limit) : '');
  }
  const cover = (pts, text) => { const t = norm(text || ''); return pts.map(p => p.kw.some(k => t.includes(norm(k)))); };

  /* ---------- home ---------- */
  function home() {
    appbar();
    let h = `<section class="card apg-hero"><span class="apg-badge">APG</span><h1>Domine e discuta</h1>
      <p class="muted">Aprender é <b>explicar em voz alta</b>. Escolha o caso e siga a jornada: ler, explicar, perguntar “por quê”, ser sabatinado e narrar.</p></section>`;
    h += D.casos.map(c => `<button class="card apg-case" data-c="${c.id}" style="--cc:${c.cor}"><span class="apg-ci">🧬</span><span class="apg-cb"><b>${esc(c.titulo)}</b><small>${esc(c.sub)}</small>
      <span class="apg-bar"><i style="width:${totalPct(c)}%"></i></span><em class="num">${totalPct(c)}% da jornada${streak(c.id) ? ' · 🔥 ' + streak(c.id) + ' dia' + (streak(c.id) > 1 ? 's' : '') : ''}</em></span></button>`).join('');
    h += `<p class="muted small apg-foot">Mais casos (como HPV) entram aqui com o mesmo motor. Usa o microfone do navegador: no iPhone, permita o acesso quando o Safari pedir.</p>`;
    app.innerHTML = h;
    app.querySelectorAll('[data-c]').forEach(b => b.onclick = () => go('caso', { c: b.dataset.c }));
  }

  /* ---------- caso ---------- */
  function caso() {
    const c = byId(NAV.c); if (!c) return go('home');
    appbar({ back: 'APG', onBack: () => go('home') });
    const p = pc(c.id);
    let h = `<section class="card apg-hero" style="--cc:${c.cor}"><span class="apg-badge">${esc(c.titulo)}</span><h1>Sua jornada</h1>
      <div class="apg-meter"><b class="num">${totalPct(c)}%</b><span>concluída${streak(c.id) ? ' · 🔥 ' + streak(c.id) + ' dias seguidos' : ''}</span></div>
      <span class="apg-bar"><i style="width:${totalPct(c)}%"></i></span>
      <p class="muted small">Ritmo sugerido: 1 módulo por dia. Em cada um: <b>ler 5 min → explicar em voz alta → por quê ×3</b>.</p></section>`;
    h += `<div class="sec"><div class="sec-h"><h2>Módulos</h2></div><div class="apg-mods">` + c.modulos.map(m => {
      const n = modPct(c, m); return `<button class="card apg-mod" data-m="${m.id}"><span class="apg-mi">${m.ic}</span><span class="apg-mb"><b>${m.n}. ${esc(m.t)}</b><small>${esc(m.obj)}</small></span>
        <span class="apg-dots">${[0, 1, 2].map(i => `<i class="${i < n ? 'on' : ''}"></i>`).join('')}</span></button>`;
    }).join('') + `</div></div>`;
    h += `<div class="sec"><div class="sec-h"><h2>Treinos rápidos</h2></div><div class="apg-grid">
      <button class="card apg-tile" data-v="tutor"><span>🎓</span><b>Tutor</b><small>Perguntas do roteiro com “e por quê?”</small><em class="num">${p.tutor} respondidas</em></button>
      <button class="card apg-tile" data-v="rel"><span>⏱️</span><b>Relâmpago</b><small>Fale 1 minuto sobre um tema</small><em class="num">${p.rel} treinos</em></button>
      <button class="card apg-tile" data-v="casos"><span>🩺</span><b>Caso clínico</b><small>Narre o raciocínio passo a passo</small><em class="num">${Object.keys(p.casos).length}/${c.casos.length} feitos</em></button>
      <button class="card apg-tile" data-v="fala"><span>🎤</span><b>Fala em público</b><small>Âncoras e técnicas para a APG</small></button></div></div>`;
    app.innerHTML = h;
    app.querySelectorAll('[data-m]').forEach(b => b.onclick = () => go('mod', { c: c.id, m: b.dataset.m, passo: 0 }));
    app.querySelectorAll('[data-v]').forEach(b => b.onclick = () => go(b.dataset.v, { c: c.id }));
  }

  /* ---------- módulo: ler → explicar → por quê ---------- */
  function mod() {
    const c = byId(NAV.c), m = c.modulos.find(x => x.id === NAV.m); if (!m) return go('caso', { c: c.id });
    appbar({ back: c.titulo, onBack: () => go('caso', { c: c.id }) });
    const passo = NAV.passo || 0, s = (pc(c.id).mods[m.id] = pc(c.id).mods[m.id] || {});
    const nomes = ['1 · Ler', '2 · Explicar', '3 · Por quê'];
    let h = `<section class="card apg-hero"><span class="apg-badge">${m.ic} Módulo ${m.n}</span><h1>${esc(m.t)}</h1></section>
      <div class="apg-steps">${nomes.map((n, i) => `<button data-p="${i}" aria-pressed="${passo === i}" class="${[s.ler, s.exp, s.pq][i] ? 'ok' : ''}">${n}</button>`).join('')}</div>`;
    if (passo === 0) {
      h += `<p class="muted small">Leia um cartão por vez, devagar. Para cada um, tente <b>dizer a ideia com suas palavras</b> antes de passar ao próximo.</p>`;
      h += m.ler.map((x, i) => `<article class="card apg-read"><b>${i + 1}. ${esc(x.t)}</b><p>${fmt(x.d)}</p></article>`).join('');
      h += `<button class="btn primary block" id="nx">${s.ler ? 'Ir para explicar' : 'Li tudo, agora vou explicar'}</button>`;
    } else if (passo === 1) h += explicar(m, s);
    else h += porques(m, s);
    app.innerHTML = h;
    app.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { stopMic(); go('mod', { c: c.id, m: m.id, passo: +b.dataset.p }); });
    const nx = document.getElementById('nx');
    if (nx) nx.onclick = () => { s.ler = true; save(); tick(c.id); go('mod', { c: c.id, m: m.id, passo: 1 }); };
    if (passo === 1) bindExplicar(c, m, s);
    if (passo === 2) bindPorques(c, m, s);
  }

  function explicar(m, s) {
    const e = m.explique;
    return `<section class="card apg-q"><small class="apg-k">Explique em voz alta</small><h2>${esc(e.p)}</h2><p class="muted">💡 ${esc(e.dica)}</p>
      <p class="muted small">Feche os cartões. Fale como se estivesse na APG, em pé, por cerca de 1 a 2 minutos.</p>
      <div class="apg-rec"><button class="btn primary" id="rc">${IC.mic}<span>Começar a falar</span></button><span class="apg-time num" id="tm">0:00</span></div>
      <div class="apg-heard" id="hd" hidden></div>
      <div id="chk" hidden></div></section>`;
  }
  function bindExplicar(c, m, s) {
    const e = m.explique, rc = document.getElementById('rc'), tm = document.getElementById('tm'), hd = document.getElementById('hd'), chk = document.getElementById('chk');
    let on = false;
    const finish = () => {
      on = false; const txt = heard; stopMic(); rc.querySelector('span').textContent = 'Falar de novo'; rc.innerHTML = IC.mic + '<span>Falar de novo</span>'; rc.classList.add('ghost');
      const auto = cover(e.pts, txt);
      chk.hidden = false;
      chk.innerHTML = `<h3>Confira o que você cobriu</h3><p class="muted small">${SRok() ? 'Marcamos automaticamente pelo que o microfone entendeu. Ajuste com honestidade: o que importa é você ter dito.' : 'Seu navegador não transcreve: marque o que você disse.'}</p>
        <div class="apg-pts">${e.pts.map((p, i) => `<label class="apg-pt"><input type="checkbox" data-i="${i}" ${auto[i] ? 'checked' : ''}><span>${esc(p.t)}</span></label>`).join('')}</div>
        <div class="apg-score" id="sc"></div>
        <details class="apg-model"><summary>Ver resposta-modelo para comparar</summary><p>${fmt(e.modelo)}</p></details>
        <button class="btn primary block" id="ok">Salvar e continuar</button>`;
      const upd = () => { const n = chk.querySelectorAll('input:checked').length; document.getElementById('sc').innerHTML = `<b class="num">${n}/${e.pts.length}</b> pontos` + (n >= e.pts.length - 1 ? ' · 🎯 dominado' : n >= Math.ceil(e.pts.length / 2) ? ' · quase lá, repita' : ' · releia e fale de novo'); return n; };
      chk.querySelectorAll('input').forEach(i => i.onchange = upd); upd();
      document.getElementById('ok').onclick = () => { const n = upd(); s.expN = n; if (n >= e.pts.length - 1) s.exp = true; save(); tick(c.id); go('mod', { c: c.id, m: m.id, passo: s.exp ? 2 : 1 }); };
      chk.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    rc.onclick = () => {
      if (!on) {
        on = true; rc.innerHTML = IC.stop + '<span>Terminei</span>'; rc.classList.remove('ghost'); chk.hidden = true;
        timer(tm, 0);
        if (SRok()) { hd.hidden = false; hd.textContent = 'Ouvindo…'; startMic(t => { hd.textContent = 'Você disse: ' + t; }); } else { hd.hidden = false; hd.textContent = 'Fale em voz alta (sem transcrição neste navegador).'; }
      } else finish();
    };
  }

  function porques(m, s) {
    const q = m.porques;
    return `<section class="card apg-q"><small class="apg-k">Por quê ×3</small><h2>${esc(q.ini)}</h2>
      <p class="muted small">Cada resposta gera outra pergunta. <b>Diga em voz alta</b> antes de revelar. Se você consegue aprofundar 3 vezes, dominou.</p>
      <div id="pqs"></div><button class="btn primary block" id="rv">Já falei, revelar o 1º nível</button></section>`;
  }
  function bindPorques(c, m, s) {
    const q = m.porques, box = document.getElementById('pqs'), btn = document.getElementById('rv'); let i = 0;
    const show = () => {
      const n = q.niveis[i];
      box.insertAdjacentHTML('beforeend', `<div class="apg-lvl"><div class="apg-lq">${i + 1}. ${esc(n.q)}</div><div class="apg-la">${fmt(n.a)}</div></div>`);
      i++;
      if (i < q.niveis.length) btn.textContent = `Já falei, revelar o ${i + 1}º nível`;
      else { btn.textContent = 'Concluir módulo'; btn.onclick = () => { s.pq = true; save(); tick(c.id); go('caso', { c: c.id }); }; }
    };
    btn.onclick = show;
  }

  /* ---------- tutor ---------- */
  function tutor() {
    const c = byId(NAV.c); appbar({ back: c.titulo, onBack: () => go('caso', { c: c.id }) });
    const used = NAV.used || [], pool = c.tutor.filter((_, i) => !used.includes(i));
    const idx = NAV.i != null ? NAV.i : c.tutor.indexOf(rnd(pool.length ? pool : c.tutor));
    const t = c.tutor[idx], seg = rnd(t.seg);
    app.innerHTML = `<section class="card apg-hero"><span class="apg-badge">🎓 Tutor</span><h1>Sabatina</h1><p class="muted small">O tutor pergunta e depois aprofunda. Responda em voz alta, como na APG.</p></section>
      <section class="card apg-q"><small class="apg-k">Pergunta</small><h2>${esc(t.q)}</h2>
      <div class="apg-rec"><button class="btn primary" id="rc">${IC.mic}<span>Responder</span></button><span class="apg-time num" id="tm">0:00</span></div>
      <div class="apg-heard" id="hd" hidden></div>
      <div id="rs" hidden><details class="apg-model" open><summary>Resposta de referência</summary><p>${fmt(t.a)}</p></details>
        <div class="apg-fu"><small class="apg-k">O tutor insiste</small><h3>${esc(seg.q)}</h3><p class="muted small">Responda em voz alta de novo e depois confira.</p><button class="btn" id="sg">Ver resposta</button><p class="apg-ans" id="sa" hidden>${fmt(seg.a)}</p></div>
        <p class="muted small">Como foi?</p><div class="apg-row"><button class="btn" data-r="0">Travei</button><button class="btn" data-r="1">Parcial</button><button class="btn primary" data-r="2">Dominei</button></div></div></section>`;
    const rc = document.getElementById('rc'), tm = document.getElementById('tm'), hd = document.getElementById('hd'), rs = document.getElementById('rs'); let on = false;
    rc.onclick = () => {
      if (!on) { on = true; rc.innerHTML = IC.stop + '<span>Terminei</span>'; timer(tm, 0); hd.hidden = false; hd.textContent = SRok() ? 'Ouvindo…' : 'Fale em voz alta.'; if (SRok()) startMic(x => hd.textContent = 'Você disse: ' + x); }
      else { on = false; stopMic(); rc.innerHTML = IC.mic + '<span>Responder</span>'; rs.hidden = false; rs.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    };
    document.getElementById('sg').onclick = () => { document.getElementById('sa').hidden = false; document.getElementById('sg').hidden = true; };
    app.querySelectorAll('[data-r]').forEach(b => b.onclick = () => { const p = pc(c.id); p.tutor++; save(); tick(c.id); const u = used.concat(idx); go('tutor', { c: c.id, used: u.length >= c.tutor.length ? [] : u }); });
  }

  /* ---------- relâmpago ---------- */
  function rel() {
    const c = byId(NAV.c); appbar({ back: c.titulo, onBack: () => go('caso', { c: c.id }) });
    const t = NAV.t != null ? c.relampago[NAV.t] : null, ti = NAV.t != null ? NAV.t : c.relampago.indexOf(rnd(c.relampago));
    const tt = c.relampago[ti];
    app.innerHTML = `<section class="card apg-hero"><span class="apg-badge">⏱️ Relâmpago</span><h1>1 minuto</h1><p class="muted small">Tema sorteado. Fale por 60 segundos, com começo, meio e fim. Sem ler.</p></section>
      <section class="card apg-q apg-center"><small class="apg-k">Seu tema</small><h2 class="apg-big">${esc(tt.t)}</h2>
      <div class="apg-clock num" id="tm">0:00 / 1:00</div>
      <div class="apg-rec"><button class="btn primary" id="rc">${IC.mic}<span>Começar</span></button></div>
      <div class="apg-heard" id="hd" hidden></div>
      <div id="rs" hidden><h3>Você cobriu?</h3><div class="apg-pts">${tt.pts.map(p => `<label class="apg-pt"><input type="checkbox"><span>${esc(p)}</span></label>`).join('')}</div>
        <div class="apg-row"><button class="btn" id="again">Outro tema</button><button class="btn primary" id="done">Concluir</button></div></div></section>`;
    const rc = document.getElementById('rc'), tm = document.getElementById('tm'), hd = document.getElementById('hd'), rs = document.getElementById('rs'); let on = false;
    const end = () => { on = false; stopMic(); rs.hidden = false; rc.hidden = true; rs.scrollIntoView({ behavior: 'smooth', block: 'center' }); };
    rc.onclick = () => { if (!on) { on = true; rc.innerHTML = IC.stop + '<span>Terminei</span>'; timer(tm, 60, end); hd.hidden = false; hd.textContent = SRok() ? 'Ouvindo…' : 'Fale em voz alta.'; if (SRok()) startMic(x => hd.textContent = 'Você disse: ' + x); } else end(); };
    document.getElementById('again').onclick = () => { pc(c.id).rel++; save(); tick(c.id); go('rel', { c: c.id }); };
    document.getElementById('done').onclick = () => { pc(c.id).rel++; save(); tick(c.id); go('caso', { c: c.id }); };
  }

  /* ---------- casos clínicos ---------- */
  function casos() {
    const c = byId(NAV.c); appbar({ back: c.titulo, onBack: () => go('caso', { c: c.id }) });
    if (NAV.k == null) {
      app.innerHTML = `<section class="card apg-hero"><span class="apg-badge">🩺 Caso clínico</span><h1>Narre o raciocínio</h1><p class="muted small">Leia o caso e, a cada pergunta, responda em voz alta antes de revelar.</p></section>` +
        c.casos.map((x, i) => `<button class="card apg-mod" data-k="${i}"><span class="apg-mi">🩺</span><span class="apg-mb"><b>${esc(x.t)}</b><small>${x.passos.length} passos</small></span><span class="apg-dots"><i class="${pc(c.id).casos[i] ? 'on' : ''}"></i></span></button>`).join('');
      app.querySelectorAll('[data-k]').forEach(b => b.onclick = () => go('casos', { c: c.id, k: +b.dataset.k, s: 0 }));
      return;
    }
    const x = c.casos[NAV.k], s = NAV.s || 0, ps = x.passos;
    let h = `<section class="card apg-hero"><span class="apg-badge">🩺 Caso</span><h1>${esc(x.t)}</h1><p class="apg-hist">${esc(x.hist)}</p></section>`;
    h += ps.slice(0, s).map(p => `<article class="card apg-read"><small class="apg-k">${esc(p.p)}</small><p>${fmt(p.a)}</p><p class="muted small"><b>Por quê:</b> ${fmt(p.pq)}</p></article>`).join('');
    if (s < ps.length) {
      h += `<section class="card apg-q"><small class="apg-k">Passo ${s + 1} de ${ps.length}</small><h2>${esc(ps[s].p)}</h2>
        <div class="apg-rec"><button class="btn primary" id="rc">${IC.mic}<span>Responder</span></button><span class="apg-time num" id="tm">0:00</span></div>
        <div class="apg-heard" id="hd" hidden></div>
        <div id="rs" hidden><p class="apg-ans">${fmt(ps[s].a)}</p><p class="muted small"><b>Por quê:</b> ${fmt(ps[s].pq)}</p><button class="btn primary block" id="nx">${s + 1 < ps.length ? 'Próximo passo' : 'Concluir caso'}</button></div></section>`;
    }
    app.innerHTML = h;
    const rc = document.getElementById('rc'); if (!rc) return;
    const tm = document.getElementById('tm'), hd = document.getElementById('hd'), rs = document.getElementById('rs'); let on = false;
    rc.onclick = () => { if (!on) { on = true; rc.innerHTML = IC.stop + '<span>Terminei</span>'; timer(tm, 0); hd.hidden = false; hd.textContent = SRok() ? 'Ouvindo…' : 'Fale em voz alta.'; if (SRok()) startMic(t => hd.textContent = 'Você disse: ' + t); } else { on = false; stopMic(); rc.hidden = true; rs.hidden = false; rs.scrollIntoView({ behavior: 'smooth', block: 'center' }); } };
    document.getElementById('nx').onclick = () => { if (s + 1 < ps.length) go('casos', { c: c.id, k: NAV.k, s: s + 1 }); else { pc(c.id).casos[NAV.k] = true; save(); tick(c.id); go('casos', { c: c.id }); } };
  }

  /* ---------- fala em público ---------- */
  function fala() {
    const c = byId(NAV.c); appbar({ back: c.titulo, onBack: () => go('caso', { c: c.id }) });
    app.innerHTML = `<section class="card apg-hero"><span class="apg-badge">🎤 Fala</span><h1>Para a APG</h1><p class="muted small">Seis mensagens-âncora: se você as domina, sustenta a discussão inteira.</p></section>
      <section class="card apg-q"><small class="apg-k">Âncoras do caso</small><ol class="apg-anc">${c.ancoras.map(a => `<li>${fmt(a)}</li>`).join('')}</ol>
      <button class="btn primary block" id="rcA">${IC.mic}<span>Recitar as 6 sem olhar (1 min)</span></button><div class="apg-time num" id="tm">0:00</div><div class="apg-heard" id="hd" hidden></div></section>` +
      c.fala.map(x => `<article class="card apg-read"><b>${esc(x.t)}</b><p>${fmt(x.d)}</p></article>`).join('');
    const rc = document.getElementById('rcA'), tm = document.getElementById('tm'), hd = document.getElementById('hd'); let on = false;
    rc.onclick = () => { if (!on) { on = true; document.querySelector('.apg-anc').classList.add('hide'); rc.innerHTML = IC.stop + '<span>Terminei</span>'; timer(tm, 0); hd.hidden = false; hd.textContent = SRok() ? 'Ouvindo…' : 'Fale em voz alta.'; if (SRok()) startMic(x => hd.textContent = 'Você disse: ' + x); } else { on = false; stopMic(); document.querySelector('.apg-anc').classList.remove('hide'); rc.innerHTML = IC.mic + '<span>Recitar de novo</span>'; tick(c.id); } };
  }

  window.APG = {
    render() {
      stopMic();
      const v = NAV.view;
      if (v === 'caso') caso(); else if (v === 'mod') mod(); else if (v === 'tutor') tutor(); else if (v === 'rel') rel(); else if (v === 'casos') casos(); else if (v === 'fala') fala();
      else { NAV = { tab: 'apg', view: 'home' }; home(); }
    }
  };
})();
