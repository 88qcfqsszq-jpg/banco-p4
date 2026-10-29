/* PATHMED V10 · aprender → investigar → demonstrar domínio.
   Vanilla JS, integrado ao Exatamente. Estado próprio e versionado em localStorage.
   O legado "pathmed-v2" é lido para migração, mas nunca apagado. */
(() => {
  "use strict";
  const root = document.getElementById("app");
  const KEY = "pathmed-v10",
    LEGACY = "pathmed-v2",
    IMGDIR = "pathmed/imagens/";
  const TIPO = {
    texto: "Leitura",
    abas: "Compare",
    explorar: "Explore a lâmina",
    exame: "Qual exame pedir?",
    laudo: "Interprete o laudo",
    sequencia: "Passo a passo",
    tabela: "Quadro da apostila",
    checar: "Confira",
    resumo: "Para levar",
  };
  const CNAME = () =>
    window.PM_COMPETENCIAS || {
      visual: "Reconhecimento visual",
      conceitual: "Conhecimento conceitual",
      fisiopatologia: "Fisiopatologia",
      diferencial: "Diagnóstico diferencial",
      clinica: "Aplicação clínica",
    };
  // Áreas: cada missão tem area = 'anat' (padrão), 'img' ou 'lab'. O motor é o mesmo; mudam rótulos e cor.
  const AREAS = {
    anat: { nome: "Anatomopatologia", curto: "Anatomo", lab: "Laboratório de lâminas", desc: "Teoria da apostila, lâminas para explorar, comparações e perguntas de conferência.", expl: "Explore a lâmina", mic: "MICROSCOPIA", micH: "Lâmina sem marcações", micCap: "Amplie e examine antes de responder.", aval: "Lâmina para avaliação", invDesc: "evidências, hipótese, microscopia, diferencial, decisão e debriefing" },
    img: { nome: "Imagem", curto: "Imagem", lab: "Laboratório de imagem", desc: "Teoria da apostila, exames de imagem para explorar, escolha do exame certo e perguntas de conferência.", expl: "Explore a imagem", mic: "LEITURA DA IMAGEM", micH: "Exame sem marcações", micCap: "Amplie e examine antes de responder.", aval: "Imagem para avaliação", invDesc: "evidências, hipótese, leitura da imagem, diferencial, decisão e debriefing" },
    lab: { nome: "Laboratório", curto: "Laboratório", lab: "Laboratório de exames", desc: "Teoria da apostila, laudos para interpretar, quadros e perguntas de conferência.", expl: "Explore a figura", mic: "RESULTADOS", micH: "Laudo do paciente", micCap: "", aval: "Figura para avaliação", invDesc: "evidências, hipótese, leitura do laudo, diferencial, decisão e debriefing" },
  };
  const areaOf = (m) => (m && AREAS[m.area] ? m.area : "anat");
  const AR = () => AREAS[areaOf(M)];
  const tipo = (t) => (t === "explorar" ? AR().expl : TIPO[t]);
  let curArea = "anat";
  try { curArea = localStorage.getItem("pathmed-area") || "anat"; } catch (e) {}
  let active = false,
    view = "mapa",
    M = null,
    step = 0,
    showList = false,
    ui = {};
  const now = () => Date.now();
  let db = loadDB();

  const MS = () => window.PM_MISSOES || [];
  const CASES = () => window.PM_CASES || {};
  const h = (s) =>
    typeof esc === "function"
      ? esc(s)
      : String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const md = (s) =>
    h(s || "")
      .replace(/\*\*\*(.+?)\*\*\*/g, "<b><i>$1</i></b>")
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\*(.+?)\*/g, "<i>$1</i>");
  // "bank:arquivo.jpg" = imagem do banco de questões (window.IMG, em dados.js); senão, pathmed/imagens/<nome>.jpg
  const isBank = (n) => String(n || "").startsWith("bank:");
  const src = (n) => (isBank(n) ? (window.IMG || {})[n.slice(5)] || "" : IMGDIR + n + ".jpg");
  const IMGFAIL = `this.onerror=null;this.closest('figure').classList.add('pm-noimg')`;
  // limiares das faixas de domínio (ver competenceStats)
  const MIN_OBS = 4,
    OK_RATIO = 0.75,
    MID_RATIO = 0.5;

  function emptyDB() {
    return { version: 10, createdAt: now(), missions: {}, xp: 0, awards: {}, history: [] };
  }
  function emptyMission() {
    return {
      learn: { step: 0, seen: [], found: {}, complete: false, checks: {} },
      investigation: { current: null, runs: [] },
      mastery: { first: null, attempts: [] },
      reviews: {},
    };
  }
  function loadDB() {
    let x = null;
    try {
      x = JSON.parse(localStorage.getItem(KEY) || "null");
    } catch (e) {}
    if (x && x.version === 10) {
      x.missions = x.missions || {};
      x.awards = x.awards || {};
      x.history = x.history || [];
      x.xp = +x.xp || 0;
      return x;
    }
    const n = emptyDB();
    let old = null;
    try {
      old = JSON.parse(localStorage.getItem(LEGACY) || "null");
    } catch (e) {}
    if (old && typeof old === "object") {
      Object.keys(old).forEach((id) => {
        const o = old[id] || {},
          m = emptyMission();
        m.learn.step = +o.step || 0;
        m.learn.seen = Array.isArray(o.seen) ? o.seen.slice() : [];
        m.learn.found = o.found && typeof o.found === "object" ? o.found : {};
        m.learn.complete = !!o.done;
        n.missions[id] = m;
      });
      n.migratedFrom = "pathmed-v2";
      n.migratedAt = now();
    }
    try {
      localStorage.setItem(KEY, JSON.stringify(n));
    } catch (e) {}
    return n;
  }
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(db));
    } catch (e) {}
  }
  function ms(id) {
    if (!db.missions[id]) db.missions[id] = emptyMission();
    const s = db.missions[id];
    s.learn = s.learn || emptyMission().learn;
    s.investigation = s.investigation || emptyMission().investigation;
    s.mastery = s.mastery || emptyMission().mastery;
    s.reviews = s.reviews || {};
    return s;
  }
  function award(key, xp, label) {
    if (db.awards[key]) return false;
    db.awards[key] = { at: now(), label: label || key, xp };
    db.xp = (db.xp || 0) + xp;
    save();
    return true;
  }
  function level() {
    return Math.floor((db.xp || 0) / 150) + 1;
  }
  function addHistory(type, mission, detail) {
    db.history.unshift({ at: now(), type, mission, detail });
    db.history = db.history.slice(0, 60);
    save();
  }

  const IC = {
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>',
    flask:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-9V3"/><path d="M7 15h10"/></svg>',
    target:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3M21 12h-3M12 21v-3M3 12h3"/></svg>',
  };

  /* ---------- navegação ---------- */
  function begin() {
    active = true;
    window.PATHMED_ACTIVE = true;
    view = "mapa";
    M = null;
    ui = {};
    document.getElementById("tabbar").hidden = true;
    document.getElementById("appbar").hidden = false;
    draw();
    window.scrollTo(0, 0);
  }
  function end() {
    active = false;
    window.PATHMED_ACTIVE = false;
    document.getElementById("appbar").hidden = false;
    window.PATHMED_RETURN();
  }
  function toMap() {
    view = "mapa";
    M = null;
    ui = {};
    draw();
    window.scrollTo(0, 0);
  }
  function openHub(id) {
    M = MS().find((m) => m.id === id);
    if (!M) return;
    curArea = areaOf(M);
    view = "hub";
    ui = {};
    draw();
    window.scrollTo(0, 0);
  }
  function openLearn(id, at) {
    M = MS().find((m) => m.id === id);
    if (!M) return;
    const s = ms(id).learn;
    step = at != null ? at : Math.min(s.step || 0, M.etapas.length - 1);
    view = "learn";
    ui = {};
    showList = false;
    draw();
    window.scrollTo(0, 0);
  }
  function go(i) {
    step = Math.max(0, Math.min(i, M.etapas.length - 1));
    ui = {};
    showList = false;
    draw();
    window.scrollTo(0, 0);
  }
  function openInvestigation(id, newRun = false) {
    M = MS().find((m) => m.id === id);
    if (!M || !CASES()[id]) return;
    const s = ms(id).investigation;
    if (newRun || !s.current || s.current.complete) {
      s.current = newInvestigationRun(id);
      save();
    }
    view = "investigation";
    ui = {};
    draw();
    window.scrollTo(0, 0);
  }
  function openMastery(id, retake = false) {
    M = MS().find((m) => m.id === id);
    if (!M || !CASES()[id]) return;
    view = "mastery";
    ui = { retake, answers: {} };
    draw();
    window.scrollTo(0, 0);
  }
  function zoomImg(name, cap) {
    const url = isBank(name) ? name.slice(5) : new URL(src(name), location.href).href;
    if (typeof openViewer === "function") {
      openViewer(url, null);
      const l = document.getElementById("vlabel");
      if (l) l.textContent = cap || "Figura da apostila";
    } else window.open(url, "_blank");
  }
  function practice() {
    const ids = (M.questoes || []).filter((id) => typeof BYID !== "undefined" && BYID[id]);
    if (!ids.length || typeof start !== "function") return;
    const list = ids.map((id) => BYID[id]);
    active = false;
    window.PATHMED_ACTIVE = false;
    window.PATHMED_AFTER = M.id;
    start(list, { mode: "treino", title: "PATHMED " + M.num + " · questões" });
  }

  function bar(back, label, right = "PATHMED") {
    const bi = document.getElementById("appbarIn");
    bi.innerHTML = `<button class="backbtn" id="pmBack">${IC.back}${h(label)}</button><span class="sp"></span><span class="pm-barttl">${h(right)}</span>`;
    document.getElementById("pmBack").onclick = back;
  }
  function draw() {
    if (!active) return;
    if (view === "mapa") {
      bar(end, "Exatamente");
      root.innerHTML = mapHTML();
      bindMap();
      return;
    }
    if (view === "hub") {
      bar(toMap, "Missões", "Missão " + M.num);
      root.innerHTML = hubHTML();
      bindHub();
      return;
    }
    if (view === "learn") {
      drawLearn();
      return;
    }
    if (view === "investigation") {
      bar(() => openHub(M.id), "Missão " + M.num, "Investigar");
      root.innerHTML = investigationHTML();
      bindInvestigation();
      return;
    }
    if (view === "mastery") {
      bar(() => openHub(M.id), "Missão " + M.num, "Domínio");
      root.innerHTML = masteryHTML();
      bindMastery();
      return;
    }
  }

  /* ---------- painel e métricas ---------- */
  function studyProgress(m) {
    const s = ms(m.id).learn;
    return Math.round((new Set(s.seen || []).size / Math.max(1, m.etapas.length)) * 100);
  }
  function observations(id) {
    const s = ms(id),
      out = [];
    const r = (s.investigation.runs || []).find((x) => x.complete);
    if (r) (r.records || []).forEach((x) => (x.competencies || []).forEach((c) => out.push({ c, value: x.value, source: "investigação" })));
    const f = s.mastery.first;
    if (f) (f.results || []).forEach((x) => (x.competencies || []).forEach((c) => out.push({ c, value: x.correct ? 1 : 0, source: "domínio" })));
    return out;
  }
  // Domínio por competência. Só entram primeiras respostas (1ª investigação concluída + 1ª tentativa da avaliação).
  // Faixas, não porcentagem: com poucas observações o resultado é "evidência insuficiente".
  function competenceStats(id) {
    const obs = observations(id),
      o = {};
    Object.keys(CNAME()).forEach((c) => {
      const a = obs.filter((x) => x.c === c),
        n = a.length,
        sum = a.reduce((z, x) => z + x.value, 0),
        ok = a.filter((x) => x.value === 1).length,
        hinted = a.filter((x) => x.value > 0 && x.value < 1).length,
        r = n ? sum / n : 0;
      let band, label;
      if (!n) (band = "none"), (label = "Sem avaliação");
      else if (n < MIN_OBS) (band = "few"), (label = "Evidência insuficiente");
      else if (r >= OK_RATIO) (band = "ok"), (label = "Demonstrado");
      else if (r >= MID_RATIO) (band = "mid"), (label = "Em desenvolvimento");
      else (band = "low"), (label = "A reforçar");
      o[c] = { n, ok, hinted, ratio: r, band, label };
    });
    return o;
  }
  function metricBar(label, val, sub) {
    return `<div class="pm-metric"><div><b>${h(label)}</b><span>${h(sub || "")}</span></div><strong>${val == null ? "—" : val + "%"}</strong><i><em style="width:${val || 0}%"></em></i></div>`;
  }
  function domainSummary(id) {
    const st = Object.values(competenceStats(id)),
      total = st.length,
      evaluated = st.filter((x) => x.n).length,
      shown = st.filter((x) => x.band === "ok").length;
    return { total, evaluated, shown, text: !evaluated ? "Ainda sem avaliação" : `${shown} de ${total} competências demonstradas` };
  }
  function bandDots(id) {
    const st = competenceStats(id);
    return `<span class="pm-bands" aria-hidden="true">${Object.keys(CNAME())
      .map((c) => `<i class="b-${st[c].band}" title="${h(CNAME()[c])}: ${h(st[c].label)}"></i>`)
      .join("")}</span>`;
  }
  function compRows(id) {
    const st = competenceStats(id);
    return Object.entries(st)
      .map(
        ([c, x]) =>
          `<div class="pm-comprow b-${x.band}"><span><b>${h(CNAME()[c])}</b><small>${x.n ? `${x.ok} de ${x.n} certas na primeira resposta${x.hinted ? ` · ${x.hinted} com pista` : ""}` : "nenhuma atividade avaliativa ainda"}</small></span><em>${h(x.label)}</em></div>`,
      )
      .join("");
  }
  // primeira etapa do laboratório que treina cada competência
  const COMP_STEP = { visual: ["explorar"], conceitual: ["tabela", "abas"], fisiopatologia: ["sequencia"], diferencial: ["tabela", "checar"], clinica: ["checar", "abas"] };
  function stepFor(m, comp) {
    const want = COMP_STEP[comp] || ["texto"];
    for (const t of want) {
      const i = m.etapas.findIndex((e) => e.t === t);
      if (i >= 0) return i;
    }
    return 0;
  }
  // Recomendação por regras fixas (não é IA): ordem aprender → investigar → avaliar; depois, a competência mais fraca.
  function recommendation(m) {
    const s = ms(m.id),
      p = studyProgress(m);
    const firstRun = (s.investigation.runs || []).find((x) => x.complete);
    if (p < 100 && !firstRun) return { kind: "learn", title: "Continuar o laboratório", text: `${p}% do conteúdo explorado. Termine antes de investigar o caso.` };
    if (!firstRun) return { kind: "inv", title: "Fazer a investigação", text: "Aplique o conteúdo em um caso real da prova, sem o diagnóstico revelado." };
    if (!s.mastery.first) return { kind: "mastery", title: "Demonstrar domínio", text: "Avaliação sem pistas. A primeira tentativa fica registrada." };
    const st = competenceStats(m.id);
    const weak = Object.entries(st)
      .filter(([, x]) => x.n && x.band !== "ok")
      .sort((a, b) => a[1].ratio - b[1].ratio)[0];
    if (weak) {
      const [c, x] = weak,
        at = stepFor(m, c),
        e = m.etapas[at];
      return { kind: "learn", at, title: "Reforçar " + CNAME()[c].toLowerCase(), text: `${x.ok} de ${x.n} certas nessa competência. Sugestão: rever “${e.titulo}” (apostila p. ${e.p || "?"}).` };
    }
    const nx = MS()[MS().findIndex((x) => x.id === m.id) + 1];
    if (nx) return { kind: "next", id: nx.id, title: "Próxima missão: " + nx.num, text: "Todas as competências avaliadas nesta missão estão como demonstradas." };
    return { kind: "learn", at: 0, title: "Missão concluída", text: "Volte ao laboratório quando quiser revisar." };
  }
  function runRec(r, m) {
    if (r.kind === "learn") openLearn(m.id, r.at);
    else if (r.kind === "inv") openInvestigation(m.id);
    else if (r.kind === "mastery") openMastery(m.id);
    else if (r.kind === "next") openHub(r.id);
  }
  function mapHTML() {
    const awards = Object.values(db.awards || {}).sort((a, b) => (b.at || 0) - (a.at || 0));
    const nextLvl = level() * 150;
    return `<div class="pm-shell">
  <header class="pm-hero pm-hero-v10"><div class="pm-kicker">Estudo guiado · Anatomopatologia, Imagem e Laboratório</div><h1>PATHMED</h1><p><b>Aprender → investigar → demonstrar domínio.</b> “Estudo” mostra o que você já percorreu. “Domínio” só muda com respostas de primeira tentativa no caso e na avaliação.</p>
  <div class="pm-profile"><span>Nível <b>${level()}</b></span><span><b>${db.xp || 0}</b> / ${nextLvl} XP</span><span><b>${Object.keys(db.awards || {}).length}</b> conquistas</span></div></header>
  <div class="pm-tabs pm-areatabs" role="tablist">${Object.entries(AREAS)
    .filter(([k]) => MS().some((m) => areaOf(m) === k))
    .map(([k, a]) => `<button role="tab" data-area="${k}" aria-selected="${k === curArea}">${h(a.curto)} <small>${MS().filter((m) => areaOf(m) === k).length}</small></button>`)
    .join("")}</div>
  <div class="pm-missions">${MS()
    .filter((m) => areaOf(m) === curArea)
    .map((m) => {
      const p = studyProgress(m),
        d = domainSummary(m.id),
        rec = recommendation(m);
      return `<button class="card pm-mcard pm-v10card" data-m="${m.id}"><span class="pm-mnum">${h(m.num)}</span><span class="pm-mbody"><span class="pm-mt">${h(m.titulo)}</span><span class="pm-ms">${h(m.sub)}</span><span class="pm-dual"><span>Estudo <b>${p}%</b><i><em style="width:${p}%"></em></i></span><span>Domínio <b>${h(d.evaluated ? d.shown + "/" + d.total : "—")}</b>${bandDots(m.id)}</span></span><small class="pm-rec">Próximo: ${h(rec.title)}</small></span><span class="pm-mgo">Abrir</span></button>`;
    })
    .join("")}</div>
  ${(window.PM_PROXIMAS || []).length ? `<div class="pm-next"><div class="pm-lbl">Próximas missões</div><ul>${window.PM_PROXIMAS.map((t) => `<li>${h(t)}</li>`).join("")}</ul></div>` : ""}
  ${
    awards.length
      ? `<details class="card pm-history"><summary>Conquistas (${awards.length})</summary>${awards
          .slice(0, 20)
          .map((a) => `<p><b>${h(a.label)}</b> <small>+${a.xp || 0} XP · ${new Date(a.at).toLocaleDateString("pt-BR")}</small></p>`)
          .join("")}</details>`
      : ""
  }
  ${
    db.history.length
      ? `<details class="card pm-history"><summary>Histórico</summary>${db.history
          .slice(0, 15)
          .map((x) => `<p><b>${h(x.type)}</b> · Missão ${h(x.mission)}${x.detail ? " · " + h(x.detail) : ""} <small>${new Date(x.at).toLocaleDateString("pt-BR")}</small></p>`)
          .join("")}</details>`
      : ""
  }
  </div>`;
  }
  function bindMap() {
    root.querySelectorAll("[data-m]").forEach((b) => (b.onclick = () => openHub(b.dataset.m)));
    root.querySelectorAll("[data-area]").forEach(
      (b) =>
        (b.onclick = () => {
          curArea = b.dataset.area;
          try { localStorage.setItem("pathmed-area", curArea); } catch (e) {}
          draw();
        }),
    );
  }

  function hubHTML() {
    const s = ms(M.id),
      p = studyProgress(M),
      d = domainSummary(M.id),
      rec = recommendation(M),
      cfg = CASES()[M.id] && CASES()[M.id].investigation,
      runs = (s.investigation.runs || []).filter((x) => x.complete),
      inProg = s.investigation.current && !s.investigation.current.complete;
    const runList = runs.length
      ? `<details class="card pm-history"><summary>Investigações resolvidas (${runs.length})</summary>${runs
          .map(
            (r, i) =>
              `<p><b>${i === 0 ? "1ª (conta para domínio)" : i + 1 + "ª (treino)"}</b> · ${new Date(r.completedAt || r.startedAt).toLocaleDateString("pt-BR")}<br><small>Hipótese inicial: ${h(cfg.hypothesis.options[r.hypothesis] || "—")}${r.hypothesis === cfg.hypothesis.correct ? " ✓" : " ✗"} · Conclusão: ${h(cfg.final.options[r.finalAnswer] || "—")}${r.finalAnswer === cfg.final.correct ? " ✓" : " ✗"}</small></p>`,
          )
          .join("")}</details>`
      : "";
    return `<div class="pm-shell">
  <header class="pm-missionhero"><div class="pm-kicker">${h(AR().nome)} · Missão ${h(M.num)} · apostila p. ${h(M.pags)}</div><h1>${h(M.titulo)}</h1><p>${h(M.sub)}</p></header>
  <section class="pm-two-metrics">${metricBar("Estudo", p, "do laboratório explorado")}<div class="pm-metric pm-metric-d"><div><b>Domínio demonstrado</b><span>${h(d.text)}</span></div><strong>${d.evaluated ? d.shown + "/" + d.total : "—"}</strong>${bandDots(M.id)}</div></section>
  <section class="card pm-recommend"><small>PRÓXIMO PASSO SUGERIDO</small><h3>${h(rec.title)}</h3><p>${h(rec.text)}</p><button class="btn primary" id="pmRec">Ir</button></section>
  <div class="pm-pathgrid">
    <button class="card pm-path" id="pmLearn"><span class="pm-pathicon">${IC.book}</span><span><small>1 · APRENDER</small><b>${h(AR().lab)}</b><p>${h(AR().desc)} Errar aqui não conta.</p><em>${p}% estudado</em></span></button>
    <button class="card pm-path" id="pmInv"><span class="pm-pathicon">${IC.flask}</span><span><small>2 · INVESTIGAR</small><b>Caso clínico</b><p>Um caso da prova em 7 etapas: ${h(AR().invDesc)}.</p><em>${inProg ? "Em andamento · etapa " + (s.investigation.current.stage + 1) + " de 7" : runs.length ? runs.length + " concluída(s)" : "Ainda não feita"}</em></span></button>
    <button class="card pm-path" id="pmMaster"><span class="pm-pathicon">${IC.target}</span><span><small>3 · DEMONSTRAR</small><b>Avaliação</b><p>6 questões sem pistas e sem gabarito antes do envio. A primeira tentativa fica registrada.</p><em>${s.mastery.first ? "Primeira tentativa: " + s.mastery.first.results.filter((x) => x.correct).length + " de " + s.mastery.first.results.length : "Ainda não feita"}</em></span></button>
  </div>
  <section class="card pm-comp"><div class="pm-sectiontitle">Competências</div>${compRows(M.id)}<p class="pm-note">Faixas calculadas só com primeiras respostas. Com menos de ${MIN_OBS} respostas, a competência fica como <b>evidência insuficiente</b>. “Demonstrado” = ${Math.round(OK_RATIO * 100)}% ou mais de acerto, e acerto com pista vale menos. É uma regra fixa, não uma medida validada.</p></section>
  ${linksHTML(M)}
  ${runList}
  </div>`;
  }
  // mesmo tema nas outras áreas
  function linksHTML(m) {
    const ls = (m.ligados || []).map((id) => MS().find((x) => x.id === id)).filter(Boolean);
    if (!ls.length) return "";
    return `<section class="card pm-links"><div class="pm-sectiontitle">O mesmo tema nas outras áreas</div>${ls
      .map((x) => `<button class="pm-linkrow" data-link="${x.id}"><span class="pm-areatag a-${areaOf(x)}">${h(AREAS[areaOf(x)].curto)}</span><span><b>${h(x.titulo)}</b><small>Missão ${h(x.num)}</small></span></button>`)
      .join("")}</section>`;
  }
  function bindLinks() {
    root.querySelectorAll("[data-link]").forEach((b) => (b.onclick = () => openHub(b.dataset.link)));
  }
  function bindHub() {
    bindLinks();
    document.getElementById("pmLearn").onclick = () => openLearn(M.id);
    document.getElementById("pmInv").onclick = () => openInvestigation(M.id);
    document.getElementById("pmMaster").onclick = () => openMastery(M.id);
    const r = recommendation(M);
    document.getElementById("pmRec").onclick = () => runRec(r, M);
  }

  /* ---------- ambiente A: aprender ---------- */
  function learnState() {
    return ms(M.id).learn;
  }
  function markSeen() {
    const s = learnState();
    if (!s.seen.includes(step)) s.seen.push(step);
    s.step = step;
    const allSeen = new Set(s.seen).size === M.etapas.length;
    if (allSeen && !s.complete) {
      s.complete = true;
      award("learn-" + M.id, 20, "Laboratório concluído · " + M.num);
      addHistory("Aprendizado concluído", M.num, M.titulo);
    }
    save();
  }
  function drawLearn() {
    const n = M.etapas.length;
    bar(() => openHub(M.id), "Missão " + M.num, `Aprender · ${step + 1}/${n}`);
    markSeen();
    root.innerHTML = learnHTML();
    bindLearn();
  }
  function figHTML(name, cap) {
    return `<figure class="pm-fig"><button class="pm-img" data-zoom="${h(name)}" data-cap="${h(cap || "")}" aria-label="Ampliar figura"><img src="${src(name)}" alt="${h(cap || "Figura")}" onerror="${IMGFAIL}"><span class="pm-imgfail">Imagem indisponível</span><span class="pm-zoom">${IC.zoom}Ampliar</span></button>${cap ? `<figcaption>${h(cap)}</figcaption>` : ""}</figure>`;
  }
  function learnHTML() {
    const e = M.etapas[step],
      n = M.etapas.length,
      s = learnState();
    const list = showList
      ? `<nav class="card pm-steps" aria-label="Etapas">${M.etapas.map((x, i) => `<button data-go="${i}" class="${i === step ? "cur" : ""}"><span class="pm-sdot ${s.seen.includes(i) ? "seen" : ""}">${s.seen.includes(i) && i !== step ? IC.check : i + 1}</span><span><small>${h(tipo(x.t))}</small>${h(x.titulo)}</span></button>`).join("")}</nav>`
      : "";
    const dots = `<div class="pm-track">${M.etapas.map((x, i) => `<i class="${i < step ? "past" : i === step ? "cur" : ""}"></i>`).join("")}</div>`;
    let body = "";
    if (e.t === "texto") body = textoHTML(e);
    else if (e.t === "abas") body = abasHTML(e);
    else if (e.t === "explorar") body = explorarHTML(e);
    else if (e.t === "sequencia") body = seqHTML(e);
    else if (e.t === "tabela") body = tabelaHTML(e);
    else if (e.t === "checar") body = checarHTML(e);
    else if (e.t === "resumo") body = resumoHTML(e);
    else if (e.t === "exame") body = exameHTML(e);
    else if (e.t === "laudo") body = laudoHTML(e);
    return `<div class="pm-shell"><div class="pm-learn-tools"><button class="pm-stepsbtn" id="pmList">${IC.list}<span>${step + 1}/${n}</span></button><span class="sp"></span><small>Estudo ${studyProgress(M)}%</small></div>${list}<div class="pm-mhead"><span class="pm-kicker">Missão ${h(M.num)} · ${h(M.titulo)}</span>${dots}</div><article class="card pm-step pm-t-${e.t}"><div class="pm-type"><span>${h(tipo(e.t))}</span>${e.p ? `<span class="pm-src">${IC.book}Apostila p. ${h(e.p)}</span>` : ""}</div><h2>${h(e.titulo)}</h2>${body}</article><div class="pm-nav"><button class="btn" id="pmPrev" ${step === 0 ? "disabled" : ""}>Anterior</button>${step === n - 1 ? `<button class="btn primary" id="pmDone">Voltar ao painel da missão</button>` : `<button class="btn primary" id="pmNext">Continuar</button>`}</div></div>`;
  }
  function textoHTML(e) {
    return `${e.img ? figHTML(e.img, e.leg) : ""}<div class="pm-prose">${e.corpo.map((p) => `<p>${md(p)}</p>`).join("")}</div>${e.destaque ? `<div class="pm-key">${md(e.destaque)}</div>` : ""}`;
  }
  function abasHTML(e) {
    const a = ui.tab || 0,
      t = e.abas[a];
    ui.tabsSeen = ui.tabsSeen || new Set();
    ui.tabsSeen.add(a);
    const imgs = t.imgs || (t.img ? [t.img] : []);
    return `${e.intro ? `<p class="pm-intro">${md(e.intro)}</p>` : ""}<div class="pm-tabs" role="tablist">${e.abas.map((x, i) => `<button role="tab" aria-selected="${i === a}" data-tab="${i}">${h(x.rot)}</button>`).join("")}</div><div class="pm-tabpane">${imgs.length > 1 ? `<div class="pm-figs2">${imgs.map((im) => figHTML(im, "")).join("")}</div>${t.leg ? `<p class="pm-cap">${h(t.leg)}</p>` : ""}` : imgs.length ? figHTML(imgs[0], t.leg) : ""}<ul class="pm-bul">${t.itens.map((x) => `<li>${md(x)}</li>`).join("")}</ul>${t.regra ? `<div class="pm-rule">${md(t.regra)}</div>` : ""}</div>${e.abas.length > 1 ? `<p class="pm-hintline">${ui.tabsSeen.size < e.abas.length ? `Abas vistas: ${ui.tabsSeen.size} de ${e.abas.length}` : "Você viu todas as abas."}</p>` : ""}`;
  }
  function explorarHTML(e) {
    const s = learnState(),
      f = new Set(s.found[step] || []),
      cur = ui.pt,
      showAnn = !!ui.ann;
    const marks = showAnn
      ? ""
      : e.pts
          .map(
            (p, i) =>
              `<button class="pm-mark ${f.has(i) ? "found" : ""} ${cur === i ? "cur" : ""}" style="left:${p.x}%;top:${p.y}%" data-pt="${i}">${i + 1}</button>`,
          )
          .join("");
    const img = showAnn ? e.ann : e.img;
    const info = cur != null ? `<div class="pm-reveal"><b>${h(e.pts[cur].nome)}</b><p>${md(e.pts[cur].txt)}</p></div>` : "";
    return `${e.intro ? `<p class="pm-intro">${md(e.intro)}</p>` : ""}<figure class="pm-fig"><div class="pm-stage"><img src="${src(img)}" alt="Lâmina para explorar" onerror="${IMGFAIL}"><span class="pm-imgfail">Imagem indisponível</span>${marks}</div><div class="pm-figbar">${e.ann ? `<button class="pm-chip" id="pmAnn">${showAnn ? "Voltar aos marcadores" : "Ver marcação da apostila"}</button>` : ""}<button class="pm-chip" data-zoom="${h(img)}" data-cap="${h(e.titulo)}">${IC.zoom}Ampliar</button></div></figure>${info}<div class="pm-found"><span>${f.size}/${e.pts.length} estruturas descobertas</span>${f.size < e.pts.length ? `<button class="linkbtn" id="pmAll">Revelar todas</button>` : "<b>Exploração completa</b>"}</div>${e.destaque ? `<div class="pm-key">${md(e.destaque)}</div>` : ""}`;
  }
  function seqHTML(e) {
    const k = ui.k ?? 1,
      n = e.passos.length;
    return `${e.intro ? `<p class="pm-intro">${md(e.intro)}</p>` : ""}<ol class="pm-seq">${e.passos
      .slice(0, k)
      .map((p, i) => `<li class="${i === k - 1 ? "new" : ""}"><span class="pm-sn">${i + 1}</span><div><b>${h(p.h)}</b><p>${md(p.txt)}</p></div></li>`)
      .join(
        "",
      )}</ol>${k < n ? `<div class="pm-seqbtns"><button class="btn block" id="pmMore">Próximo passo (${k + 1} de ${n})</button><button class="linkbtn" id="pmAllSeq">Mostrar tudo</button></div>` : `${e.nota ? `<div class="pm-key">${md(e.nota)}</div>` : ""}${e.img ? figHTML(e.img, "Figura da apostila: toque para ampliar.") : ""}`}`;
  }
  function tabelaHTML(e) {
    const two = e.cols.length === 2;
    return `${e.img ? figHTML(e.img, e.leg || "") : ""}<div class="pm-tab ${two ? "two" : "three"}">${two ? `<div class="pm-trow pm-thead">${e.cols.map((c, i) => `<span class="c${i}">${h(c)}</span>`).join("")}</div>` : ""}${e.linhas
      .map(
        (r) =>
          `<div class="pm-trow"><span class="pm-rl">${h(r[0])}</span>${r
            .slice(1)
            .map((v, i) => `<span class="c${i}">${two ? "" : `<em>${h(e.cols[i])}</em>`}<span class="pm-tv">${md(v)}</span></span>`)
            .join("")}</div>`,
      )
      .join("")}</div>${e.nota ? `<div class="pm-key">${md(e.nota)}</div>` : ""}`;
  }
  function checarHTML(e) {
    const tried = ui.tried || [],
      solved = ui.solved,
      last = tried[tried.length - 1];
    const ops = e.ops
      .map((o, i) => {
        const t = tried.includes(i),
          cls = solved ? (o.certa ? "ok" : t ? "no" : "dim") : t ? "no" : "";
        return `<button class="pm-op ${cls}" data-op="${i}" ${solved || t ? "disabled" : ""}><b>${String.fromCharCode(65 + i)}</b><span>${h(o.t)}</span></button>`;
      })
      .join("");
    let fb = "";
    if (solved) {
      const r = e.ops.find((o) => o.certa);
      fb = `<div class="pm-fb ok"><b>${tried.length > 1 ? "Isso, agora sim." : "Isso."}</b><p>${md(r.por)}</p></div>`;
    } else if (last != null) {
      fb = `<div class="pm-fb no"><b>Ainda não.</b><p>${md(e.ops[last].por)}</p><p class="pm-tip"><b>Pista:</b> ${md(e.dica)}</p></div>`;
    }
    return `<p class="pm-q">${md(e.perg)}</p><div class="pm-ops">${ops}</div>${fb}${!solved ? `<div class="pm-chkbar">${last == null ? `<button class="linkbtn" id="pmTip">Quero uma pista</button>` : ""}<button class="linkbtn" id="pmShow">Ver a resposta</button></div>${ui.tip && last == null ? `<p class="pm-tip pm-tipbox"><b>Pista:</b> ${md(e.dica)}</p>` : ""}` : ""}`;
  }
  function resumoHTML(e) {
    const qs = (M.questoes || []).filter((id) => typeof BYID !== "undefined" && BYID[id]),
      complete = learnState().complete,
      pct = studyProgress(M);
    return `<div class="pm-learn-done"><b>${complete ? "Laboratório de aprendizagem concluído" : "Resumo alcançado · " + pct + "% do laboratório explorado"}</b><p>${complete ? "Isso registra <b>estudo</b>, não domínio. Para demonstrar domínio, faça a investigação e a avaliação." : "Ainda há etapas não exploradas. O progresso só chega a 100% quando todas forem visitadas."}</p></div><ul class="pm-take">${e.itens.map((x) => `<li><span>${IC.check}</span><p>${md(x)}</p></li>`).join("")}</ul>${qs.length ? `<div class="pm-practice"><div><b>Banco do Exatamente</b><p>${qs.length} questões relacionadas podem ser usadas como treino adicional.</p></div><button class="btn block" id="pmPractice">Resolver ${qs.length} questões</button></div>` : ""}${linksHTML(M)}`;
  }
  /* Qual exame pedir? Vários cenários; para cada um, o aluno escolhe o exame e lê a justificativa. Pode tentar de novo. */
  function exameHTML(e) {
    const ci = ui.ci || 0,
      c = e.cenarios[ci],
      st = (ui.ex = ui.ex || {}),
      tried = st[ci] || [],
      solved = tried.includes(c.certa),
      last = tried[tried.length - 1];
    const ops = e.exames
      .map((x, i) => {
        const t = tried.includes(i),
          cls = solved ? (i === c.certa ? "ok" : t ? "no" : "dim") : t ? "no" : "";
        return `<button class="pm-op ${cls}" data-ex="${i}" ${solved || t ? "disabled" : ""}><b>${String.fromCharCode(65 + i)}</b><span>${h(x)}</span></button>`;
      })
      .join("");
    const fb =
      last == null
        ? ""
        : `<div class="pm-fb ${last === c.certa ? "ok" : "no"}"><b>${last === c.certa ? (tried.length > 1 ? "Isso, agora sim." : "Isso.") : "Não é o melhor exame aqui."}</b><p>${md(c.por[last] || "")}</p>${!solved ? `<p class="pm-again">Tente outra opção.</p>` : ""}</div>`;
    const dots = e.cenarios.map((_, i) => `<i class="${i === ci ? "cur" : (st[i] || []).includes(e.cenarios[i].certa) ? "past" : ""}"></i>`).join("");
    return `${e.intro ? `<p class="pm-intro">${md(e.intro)}</p>` : ""}<div class="pm-track pm-sctrack">${dots}</div><div class="pm-scen"><small>Cenário ${ci + 1} de ${e.cenarios.length}</small><p class="pm-q">${md(c.sit)}</p></div><div class="pm-ops">${ops}</div>${fb}${
      solved && ci < e.cenarios.length - 1 ? `<button class="btn block" id="pmNextSc">Próximo cenário</button>` : ""
    }${solved && ci === e.cenarios.length - 1 && e.regra ? `<div class="pm-key">${md(e.regra)}</div>` : ""}`;
  }
  /* Interprete o laudo: o aluno marca os valores alterados e confere. */
  function laudoTable(e, mode) {
    // mode: 'pick' (marcar), 'check' (mostrar acertos), 'show' (só leitura)
    const sel = ui.sel || new Set();
    return `<div class="pm-laudo">${e.paciente ? `<div class="pm-lhead">${md(e.paciente)}</div>` : ""}<div class="pm-lrow pm-lth"><span>Exame</span><span>Resultado</span><span>Referência</span></div>${e.linhas
      .map((l, i) => {
        const on = sel.has(i);
        let cls = "";
        if (mode === "check") cls = l.alt ? (on ? "hit" : "miss") : on ? "wrong" : "";
        if (mode === "pick" && on) cls = "on";
        const tag = mode === "check" ? (l.alt ? (on ? "✓ alterado" : "alterado: você não marcou") : on ? "normal: marcado sem precisar" : "") : "";
        return `<${mode === "pick" ? "button" : "div"} class="pm-lrow ${cls}" ${mode === "pick" ? `data-lr="${i}" aria-pressed="${on}"` : ""}><span>${h(l.ex)}</span><span class="pm-lval">${h(l.val)}${(mode !== "pick" && l.seta) ? ` <b>${h(l.seta)}</b>` : ""}</span><span class="pm-lref">${h(l.ref)}</span>${mode === "check" && (tag || l.nota) ? `<em class="pm-lnote">${tag ? `<b>${h(tag)}.</b> ` : ""}${md(l.nota || "")}</em>` : ""}</${mode === "pick" ? "button" : "div"}>`;
      })
      .join("")}</div>`;
  }
  function laudoHTML(e) {
    const done = !!ui.lchk;
    return `${e.intro ? `<p class="pm-intro">${md(e.intro)}</p>` : ""}${laudoTable(e, done ? "check" : "pick")}${
      done
        ? `${e.conclusao ? `<div class="pm-key">${md(e.conclusao)}</div>` : ""}<button class="linkbtn" id="pmLagain">Refazer</button>`
        : `<p class="pm-hintline">Toque nos resultados que você acha alterados${e.foco ? " " + h(e.foco) : ""}. Depois, confira.</p><button class="btn primary block" id="pmLchk">Conferir</button>`
    }`;
  }
  function bindLearn() {
    const e = M.etapas[step];
    document.getElementById("pmList").onclick = () => {
      showList = !showList;
      draw();
    };
    root.querySelectorAll("[data-go]").forEach((b) => (b.onclick = () => go(+b.dataset.go)));
    root.querySelectorAll("[data-zoom]").forEach((b) => (b.onclick = () => zoomImg(b.dataset.zoom, b.dataset.cap)));
    const pv = document.getElementById("pmPrev");
    if (pv) pv.onclick = () => go(step - 1);
    const nx = document.getElementById("pmNext");
    if (nx) nx.onclick = () => go(step + 1);
    const dn = document.getElementById("pmDone");
    if (dn) dn.onclick = () => openHub(M.id);
    if (e.t === "abas")
      root.querySelectorAll("[data-tab]").forEach(
        (b) =>
          (b.onclick = () => {
            ui.tab = +b.dataset.tab;
            redrawLearn();
          }),
      );
    if (e.t === "explorar") {
      root.querySelectorAll("[data-pt]").forEach(
        (b) =>
          (b.onclick = () => {
            const i = +b.dataset.pt,
              s = learnState(),
              f = new Set(s.found[step] || []);
            f.add(i);
            s.found[step] = [...f];
            save();
            ui.pt = i;
            redrawLearn();
          }),
      );
      const all = document.getElementById("pmAll");
      if (all)
        all.onclick = () => {
          const s = learnState();
          s.found[step] = e.pts.map((_, i) => i);
          save();
          ui.pt = ui.pt ?? 0;
          redrawLearn();
        };
      const an = document.getElementById("pmAnn");
      if (an)
        an.onclick = () => {
          ui.ann = !ui.ann;
          redrawLearn();
        };
    }
    if (e.t === "sequencia") {
      const m = document.getElementById("pmMore");
      if (m)
        m.onclick = () => {
          ui.k = (ui.k ?? 1) + 1;
          redrawLearn();
        };
      const a = document.getElementById("pmAllSeq");
      if (a)
        a.onclick = () => {
          ui.k = e.passos.length;
          redrawLearn();
        };
    }
    if (e.t === "checar") {
      root.querySelectorAll("[data-op]").forEach(
        (b) =>
          (b.onclick = () => {
            const i = +b.dataset.op,
              ls = learnState();
            ui.tried = [...(ui.tried || []), i];
            if (!ls.checks[step]) ls.checks[step] = { first: i, firstCorrect: !!e.ops[i].certa, attempts: 0, hint: false, revealed: false };
            ls.checks[step].attempts++;
            if (e.ops[i].certa) ui.solved = true;
            save();
            redrawLearn();
          }),
      );
      const t = document.getElementById("pmTip");
      if (t)
        t.onclick = () => {
          ui.tip = true;
          const ls = learnState();
          ls.checks[step] = ls.checks[step] || { first: null, firstCorrect: false, attempts: 0, hint: false, revealed: false };
          ls.checks[step].hint = true;
          save();
          redrawLearn();
        };
      const sh = document.getElementById("pmShow");
      if (sh)
        sh.onclick = () => {
          ui.solved = true;
          const ls = learnState();
          ls.checks[step] = ls.checks[step] || { first: null, firstCorrect: false, attempts: 0, hint: false, revealed: false };
          ls.checks[step].revealed = true;
          save();
          redrawLearn();
        };
    }
    if (e.t === "resumo") {
      const p = document.getElementById("pmPractice");
      if (p) p.onclick = practice;
      bindLinks();
    }
    if (e.t === "exame") {
      root.querySelectorAll("[data-ex]").forEach(
        (b) =>
          (b.onclick = () => {
            const ci = ui.ci || 0;
            ui.ex = ui.ex || {};
            ui.ex[ci] = [...(ui.ex[ci] || []), +b.dataset.ex];
            const ls = learnState(),
              k = step + "." + ci;
            if (!ls.checks[k]) ls.checks[k] = { first: +b.dataset.ex, firstCorrect: +b.dataset.ex === e.cenarios[ci].certa, attempts: 0, hint: false, revealed: false };
            ls.checks[k].attempts++;
            save();
            redrawLearn();
          }),
      );
      const n = document.getElementById("pmNextSc");
      if (n) n.onclick = () => { ui.ci = (ui.ci || 0) + 1; redrawLearn(); };
    }
    if (e.t === "laudo") {
      ui.sel = ui.sel || new Set();
      root.querySelectorAll("[data-lr]").forEach((b) => (b.onclick = () => { const i = +b.dataset.lr; ui.sel.has(i) ? ui.sel.delete(i) : ui.sel.add(i); redrawLearn(); }));
      const c = document.getElementById("pmLchk");
      if (c) c.onclick = () => {
        ui.lchk = true;
        const ls = learnState(), ok = e.linhas.every((l, i) => !!l.alt === ui.sel.has(i));
        if (!ls.checks[step]) ls.checks[step] = { first: [...ui.sel], firstCorrect: ok, attempts: 0, hint: false, revealed: false };
        ls.checks[step].attempts++;
        save();
        redrawLearn();
      };
      const a = document.getElementById("pmLagain");
      if (a) a.onclick = () => { ui.lchk = false; ui.sel = new Set(); redrawLearn(); };
    }
  }
  function redrawLearn() {
    const y = window.scrollY;
    root.innerHTML = learnHTML();
    bindLearn();
    window.scrollTo(0, y);
  }

  /* ---------- ambiente B: investigação ---------- */
  function newInvestigationRun(id) {
    return {
      id: "r" + now(),
      startedAt: now(),
      stage: 0,
      evidence: [],
      hypothesis: null,
      hints: [],
      records: [],
      diffAnswers: {},
      micAnswer: null,
      finalAnswer: null,
      keyAnswer: null,
      complete: false,
    };
  }
  function currentRun() {
    return ms(M.id).investigation.current;
  }
  function recordEval(run, key, answer, correct, competencies, hint = false) {
    if (run.records.some((x) => x.key === key)) return;
    run.records.push({ key, answer, correct, value: correct ? (hint ? 0.6 : 1) : 0, competencies: competencies || [], hint: !!hint, at: now() });
  }
  function invProgress(run) {
    return Math.round((run.stage / 6) * 100);
  }
  function investigationHTML() {
    const cfg = CASES()[M.id].investigation,
      run = currentRun();
    if (run.complete) return invDebriefHTML(cfg, run);
    const st = run.stage;
    let body = "";
    if (st === 0) body = invCaseHTML(cfg, run);
    else if (st === 1) body = invEvidenceHTML(cfg, run);
    else if (st === 2) body = invHypothesisHTML(cfg, run);
    else if (st === 3) body = invMicHTML(cfg, run);
    else if (st === 4) body = invDiffHTML(cfg, run);
    else if (st === 5) body = invFinalHTML(cfg, run);
    else body = invDebriefHTML(cfg, run);
    return `<div class="pm-shell"><header class="pm-invhead"><div class="pm-kicker">2 · Investigar · Missão ${h(M.num)}</div><h1>${h(cfg.title)}</h1><div class="pm-invtrack"><i><em style="width:${invProgress(run)}%"></em></i><span>Etapa ${st + 1} de 7</span></div></header>${body}${cfg.fonte ? `<p class="pm-note pm-fonte">${h(cfg.fonte)}</p>` : ""}</div>`;
  }
  function invCaseHTML(cfg) {
    const p = cfg.patient;
    return `<section class="card pm-case"><small>ETAPA 1 · RECEBIMENTO DO CASO</small><h2>${p.age ? `${h(p.age)} anos · ${h(p.sex)}` : "Paciente adulto"}</h2><h3>${h(p.complaint)}</h3><p>${h(p.history)}</p><div class="pm-rule">O diagnóstico está oculto. Você decide quais evidências abrir.</div><button class="btn primary block" id="invNext">Iniciar investigação</button></section>`;
  }
  function invEvidenceHTML(cfg, run) {
    return `<section class="card pm-case"><small>ETAPA 2 · COLETA DE EVIDÊNCIAS</small><h2>O que você quer investigar?</h2><p>Abra pelo menos duas fontes. Não precisa abrir todas: o debriefing comenta se a busca foi direcionada.</p><div class="pm-evidence">${cfg.evidence
      .map((e) => {
        const open = run.evidence.includes(e.id);
        return open
          ? `<div class="pm-evi open"><b>${h(e.label)}</b>${e.img ? figHTML(e.img, e.cap) : ""}<span>${md(e.text)}</span><small>${h(e.feedback)}</small></div>`
          : `<button class="pm-evi" data-evi="${e.id}"><b>${h(e.label)}</b><span>Toque para abrir</span></button>`;
      })
      .join("")}</div><button class="btn primary block" id="invNext" ${run.evidence.length < 2 ? "disabled" : ""}>Registrar hipótese</button></section>`;
  }
  function invHypothesisHTML(cfg, run) {
    return `<section class="card pm-case"><small>ETAPA 3 · HIPÓTESE INICIAL</small><h2>${h(cfg.hypothesis.prompt)}</h2><p>Registre sua hipótese <b>antes</b> da microscopia. Ela não é corrigida agora: no fim, o debriefing compara a hipótese com o diagnóstico.</p><div class="pm-ops">${cfg.hypothesis.options.map((o, i) => `<button class="pm-op ${run.hypothesis === i ? "sel" : ""}" data-hyp="${i}"><b>${String.fromCharCode(65 + i)}</b><span>${h(o)}</span></button>`).join("")}</div><button class="btn primary block" id="invNext" ${run.hypothesis == null ? "disabled" : ""}>Ir para a microscopia</button></section>`;
  }
  function optsFeedback(q, ans, correct) {
    if (ans == null) return "";
    const ok = ans === correct,
      ex = q.explain || [];
    return `<div class="pm-fb ${ok ? "ok" : "no"}"><b>${ok ? "Correto." : "Não é essa."}</b>${ex[ans] ? `<p>${md(ex[ans])}</p>` : ""}${!ok && ex[correct] ? `<p><b>Resposta: ${h(q.options[correct])}.</b> ${md(ex[correct])}</p>` : ""}</div>`;
  }
  function invMicHTML(cfg, run) {
    const q = cfg.microscopy,
      answered = run.micAnswer != null,
      hinted = run.hints.includes("mic");
    return `<section class="card pm-case"><small>ETAPA 4 · ${h(AR().mic)}</small><h2>${h(AR().micH)}</h2>${q.laudo ? laudoTable(q.laudo, "show") : figHTML(q.image, AR().micCap)}<p class="pm-q">${h(q.prompt)}</p><div class="pm-ops">${q.options.map((o, i) => `<button class="pm-op ${answered ? (i === q.correct ? "ok" : run.micAnswer === i ? "no" : "dim") : ""}" data-mic="${i}" ${answered ? "disabled" : ""}><b>${String.fromCharCode(65 + i)}</b><span>${h(o)}</span></button>`).join("")}</div>${
      !answered
        ? hinted
          ? `<p class="pm-tip pm-tipbox"><b>Pista:</b> ${md(q.hint)}</p>`
          : `<button class="linkbtn" id="invHint">Usar uma pista (acerto com pista conta menos)</button>`
        : optsFeedback(q, run.micAnswer, q.correct) + (hinted ? `<p class="pm-note">Você usou pista nesta etapa; isso fica registrado.</p>` : "")
    }<button class="btn primary block" id="invNext" ${!answered ? "disabled" : ""}>Diagnóstico diferencial</button></section>`;
  }
  function invDiffHTML(cfg, run) {
    return `<section class="card pm-case"><small>ETAPA 5 · DIAGNÓSTICO DIFERENCIAL</small><h2>Achados a favor, contra e o que falta</h2>${cfg.differential
      .map((q, qi) => {
        const ans = run.diffAnswers[qi],
          answered = ans != null;
        return `<div class="pm-dq"><p class="pm-q">${qi + 1}. ${h(q.prompt)}</p><div class="pm-ops">${q.options.map((o, i) => `<button class="pm-op ${answered ? (i === q.correct ? "ok" : ans === i ? "no" : "dim") : ""}" data-diff="${qi}:${i}" ${answered ? "disabled" : ""}><b>${String.fromCharCode(65 + i)}</b><span>${h(o)}</span></button>`).join("")}</div>${optsFeedback(q, ans, q.correct)}</div>`;
      })
      .join("")}<button class="btn primary block" id="invNext" ${Object.keys(run.diffAnswers).length < cfg.differential.length ? "disabled" : ""}>Fechar o diagnóstico</button></section>`;
  }
  function invFinalHTML(cfg, run) {
    const f = cfg.final;
    return `<section class="card pm-case"><small>ETAPA 6 · DECISÃO DIAGNÓSTICA</small><h2>${h(f.prompt)}</h2><div class="pm-ops">${f.options.map((o, i) => `<button class="pm-op ${run.finalAnswer === i ? "sel" : ""}" data-final="${i}"><b>${String.fromCharCode(65 + i)}</b><span>${h(o)}</span></button>`).join("")}</div><h3>${h(f.keyPrompt)}</h3><div class="pm-ops">${f.keyOptions.map((o, i) => `<button class="pm-op ${run.keyAnswer === i ? "sel" : ""}" data-key="${i}"><b>${String.fromCharCode(65 + i)}</b><span>${h(o)}</span></button>`).join("")}</div><div class="pm-rule">Sem pista nesta etapa. Você pode trocar a escolha até enviar; o que vale é o que for enviado.</div><button class="btn primary block" id="invFinish" ${run.finalAnswer == null || run.keyAnswer == null ? "disabled" : ""}>Enviar e abrir o debriefing</button></section>`;
  }
  const STAGE_NAME = { mic: "Etapa 4 (leitura)", diff0: "Diferencial 1", diff1: "Diferencial 2", diff2: "Diferencial 3", diff3: "Diferencial 4", final: "Diagnóstico final", key: "Achado-chave" };
  function invDebriefHTML(cfg, run) {
    const good = run.records.filter((x) => x.correct).length,
      total = run.records.length,
      rel = cfg.evidence.filter((e) => run.evidence.includes(e.id) && e.relevance === 2),
      low = cfg.evidence.filter((e) => run.evidence.includes(e.id) && e.relevance === 0),
      missed = cfg.evidence.filter((e) => !run.evidence.includes(e.id) && e.relevance === 2),
      hypOk = run.hypothesis === cfg.hypothesis.correct,
      finalOk = run.finalAnswer === cfg.final.correct,
      keyOk = run.keyAnswer === cfg.final.keyCorrect,
      first = (ms(M.id).investigation.runs || []).filter((x) => x.complete)[0],
      isFirst = !first || first.id === run.id;
    const errors = run.records.filter((x) => !x.correct);
    const rv = (cfg.debrief && cfg.debrief.revisar) || {};
    const toReview = [...new Set(errors.flatMap((x) => x.competencies || []))];
    const st = competenceStats(M.id);
    const weakest = Object.entries(st)
      .filter(([, x]) => x.n && x.band !== "ok")
      .sort((a, b) => a[1].ratio - b[1].ratio)[0];
    const nextAct = !ms(M.id).mastery.first
      ? "Fazer a avaliação da missão (3 · Demonstrar)."
      : weakest
        ? `Rever no laboratório: ${rv[weakest[0]] || CNAME()[weakest[0]]}.`
        : "Seguir para a próxima missão.";
    return `<section class="card pm-case pm-debrief"><small>ETAPA 7 · DEBRIEFING${isFirst ? "" : " · refeita (treino, não conta para domínio)"}</small><h2>${h(cfg.debrief.diagnosis)}</h2>
    <div class="pm-verdict ${finalOk && keyOk ? "ok" : "no"}"><b>${finalOk ? (keyOk ? "Diagnóstico e achado-chave corretos" : "Diagnóstico correto, achado-chave não") : "Diagnóstico final diferente do esperado"}</b><span>${good} de ${total} decisões corretas na primeira resposta${run.hints.length ? " · pista usada na microscopia" : ""}</span></div>
    <h3>Seu raciocínio</h3><ul class="pm-bul"><li>Hipótese inicial: <b>${h(cfg.hypothesis.options[run.hypothesis])}</b>. ${md((cfg.hypothesis.feedback || [])[run.hypothesis] || "")}</li><li>Conclusão enviada: <b>${h(cfg.final.options[run.finalAnswer])}</b>${finalOk ? " (correta)" : ""}.</li>${hypOk === finalOk ? "" : `<li>${hypOk ? "A hipótese inicial estava certa, mas a conclusão se afastou dela." : "Você mudou de hipótese durante o caso, a favor das evidências."}</li>`}<li>Achado-chave escolhido: <b>${h(cfg.final.keyOptions[run.keyAnswer])}</b>${keyOk ? " (correto)" : ` · o esperado era <b>${h(cfg.final.keyOptions[cfg.final.keyCorrect])}</b>`}.</li></ul>
    <h3>Evidências que sustentam o diagnóstico</h3><ul class="pm-bul">${cfg.debrief.evidence.map((x) => `<li>${md(x)}</li>`).join("")}</ul>
    <h3>Como foi a coleta</h3><p>Você abriu ${run.evidence.length} de ${cfg.evidence.length} fontes: ${rel.length} decisiva(s)${low.length ? `, ${low.length} de baixo rendimento (${low.map((e) => h(e.label)).join(", ")})` : ""}.${missed.length ? ` Ficou sem abrir: <b>${missed.map((e) => h(e.label)).join(", ")}</b>, ${missed.length > 1 ? "que eram decisivas" : "que era decisiva"}.` : " Nenhuma fonte decisiva ficou de fora."}</p>
    ${errors.length ? `<h3>O que errou e o que revisar</h3><ul class="pm-bul">${errors.map((x) => `<li><b>${h(STAGE_NAME[x.key] || x.key)}</b> (${(x.competencies || []).map((c) => h(CNAME()[c])).join(", ")})</li>`).join("")}</ul><ul class="pm-bul">${toReview.map((c) => `<li>Rever: ${h(rv[c] || CNAME()[c])}</li>`).join("")}</ul>` : '<div class="pm-key">Nenhum erro nas decisões avaliadas.</div>'}
    <h3>Histologia e clínica</h3><p>${md(cfg.debrief.clinic)}</p>
    <div class="pm-key"><b>Próxima atividade:</b> ${h(nextAct)}</div>
    <div class="pm-actions"><button class="btn" id="invAgain">Refazer o caso</button><button class="btn primary" id="invMaster">${ms(M.id).mastery.first ? "Voltar ao painel" : "Ir para a avaliação"}</button></div></section>`;
  }
  function finishInvestigation() {
    const cfg = CASES()[M.id].investigation,
      run = currentRun(),
      f = cfg.final;
    recordEval(run, "final", run.finalAnswer, run.finalAnswer === f.correct, f.competencies, false);
    recordEval(run, "key", run.keyAnswer, run.keyAnswer === f.keyCorrect, ["visual", "diferencial"], false);
    run.complete = true;
    run.stage = 6;
    run.completedAt = now();
    const runs = ms(M.id).investigation.runs,
      isFirst = !runs.some((x) => x.complete);
    runs.push(JSON.parse(JSON.stringify(run)));
    if (isFirst) {
      // XP só na primeira vez: 20 por concluir + 5 por decisão certa sem pista
      const good = run.records.filter((x) => x.value === 1).length;
      award("inv-" + M.id, 20 + 5 * good, "Primeira investigação concluída · " + M.num);
      if (run.finalAnswer === f.correct && run.keyAnswer === f.keyCorrect && !run.hints.length) award("inv-nohint-" + M.id, 25, "Diagnóstico sem pistas · " + M.num);
    }
    addHistory(isFirst ? "Investigação" : "Investigação refeita", M.num, (run.finalAnswer === f.correct ? "conclusão correta" : "conclusão incorreta") + " · " + cfg.debrief.diagnosis);
    checkGlobalAwards();
    save();
    ms(M.id).investigation.current = run;
  }
  // conquistas que dependem de várias missões
  function checkGlobalAwards() {
    let slides = 0;
    MS().forEach((m) => observations(m.id).forEach((o) => o.c === "visual" && o.value === 1 && slides++));
    if (slides >= 5) award("slides-5", 30, "Cinco lâminas reconhecidas na primeira resposta");
    MS().forEach((m) => {
      const d = domainSummary(m.id);
      if (d.shown === d.total) award("domain-" + m.id, 50, "Domínio demonstrado nas 5 competências · " + m.num);
    });
  }
  function bindInvestigation() {
    const cfg = CASES()[M.id].investigation,
      run = currentRun();
    root.querySelectorAll("[data-zoom]").forEach((b) => (b.onclick = () => zoomImg(b.dataset.zoom, b.dataset.cap)));
    if (run.complete) {
      document.getElementById("invAgain").onclick = () => openInvestigation(M.id, true);
      document.getElementById("invMaster").onclick = () => (ms(M.id).mastery.first ? openHub(M.id) : openMastery(M.id));
      return;
    }
    if (run.stage === 0)
      document.getElementById("invNext").onclick = () => {
        run.stage = 1;
        save();
        draw();
      };
    else if (run.stage === 1) {
      root.querySelectorAll("[data-evi]").forEach(
        (b) =>
          (b.onclick = () => {
            if (!run.evidence.includes(b.dataset.evi)) run.evidence.push(b.dataset.evi);
            save();
            draw();
          }),
      );
      document.getElementById("invNext").onclick = () => {
        run.stage = 2;
        save();
        draw();
      };
    } else if (run.stage === 2) {
      root.querySelectorAll("[data-hyp]").forEach(
        (b) =>
          (b.onclick = () => {
            run.hypothesis = +b.dataset.hyp;
            save();
            draw();
          }),
      );
      document.getElementById("invNext").onclick = () => {
        run.stage = 3;
        save();
        draw();
      };
    } else if (run.stage === 3) {
      const q = cfg.microscopy;
      root.querySelectorAll("[data-mic]").forEach(
        (b) =>
          (b.onclick = () => {
            const a = +b.dataset.mic;
            run.micAnswer = a;
            recordEval(run, "mic", a, a === q.correct, q.competencies, run.hints.includes("mic"));
            save();
            draw();
          }),
      );
      const hint = document.getElementById("invHint");
      if (hint)
        hint.onclick = () => {
          if (!run.hints.includes("mic")) run.hints.push("mic");
          save();
          draw();
        };
      document.getElementById("invNext").onclick = () => {
        run.stage = 4;
        save();
        draw();
      };
    } else if (run.stage === 4) {
      root.querySelectorAll("[data-diff]").forEach(
        (b) =>
          (b.onclick = () => {
            const [qi, ai] = b.dataset.diff.split(":").map(Number),
              q = cfg.differential[qi];
            if (run.diffAnswers[qi] != null) return;
            run.diffAnswers[qi] = ai;
            recordEval(run, "diff" + qi, ai, ai === q.correct, q.competencies, false);
            save();
            draw();
          }),
      );
      document.getElementById("invNext").onclick = () => {
        run.stage = 5;
        save();
        draw();
      };
    } else if (run.stage === 5) {
      root.querySelectorAll("[data-final]").forEach(
        (b) =>
          (b.onclick = () => {
            run.finalAnswer = +b.dataset.final;
            save();
            draw();
          }),
      );
      root.querySelectorAll("[data-key]").forEach(
        (b) =>
          (b.onclick = () => {
            run.keyAnswer = +b.dataset.key;
            save();
            draw();
          }),
      );
      document.getElementById("invFinish").onclick = () => {
        finishInvestigation();
        draw();
      };
    }
  }

  /* ---------- ambiente C: domínio ---------- */
  function masteryHTML() {
    const s = ms(M.id).mastery,
      qs = CASES()[M.id].mastery;
    if (ui.result) return masteryResultHTML(ui.result, !!ui.resultIsFirst);
    if (!ui.retake && s.first) return masteryResultHTML(s.first, true);
    return `<div class="pm-shell"><header class="pm-invhead"><div class="pm-kicker">3 · Demonstrar · Missão ${h(M.num)}</div><h1>${ui.retake && ms(M.id).mastery.first ? "Avaliação · treino" : "Avaliação"}</h1><p>${ui.retake && ms(M.id).mastery.first ? "Tentativa de treino: não altera seu domínio." : "Sem pistas e sem gabarito até o envio. A primeira tentativa é a que conta para domínio."}</p></header><div class="pm-masterlist">${qs.map((q, qi) => `<section class="card pm-masterq"><small>QUESTÃO ${qi + 1} · ${q.c.map((c) => h(CNAME()[c])).join(" + ")}</small>${q.image ? figHTML(q.image, AR().aval) : ""}${q.laudo ? laudoTable(q.laudo, "show") : ""}<h3>${h(q.q)}</h3><div class="pm-ops">${q.ops.map((o, i) => `<label class="pm-radio"><input type="radio" name="mq${qi}" value="${i}" ${ui.answers[qi] === i ? "checked" : ""}><span><b>${String.fromCharCode(65 + i)}</b>${h(o)}</span></label>`).join("")}</div></section>`).join("")}</div><button class="btn primary block pm-submit" id="pmSubmitMaster" ${Object.keys(ui.answers).length < qs.length ? "disabled" : ""}>Enviar avaliação</button></div>`;
  }
  function masteryResultHTML(attempt, isFirst) {
    const qs = CASES()[M.id].mastery,
      right = attempt.results.filter((x) => x.correct).length,
      s = ms(M.id).mastery,
      firstRight = s.first ? s.first.results.filter((x) => x.correct).length : null;
    const comps = [...new Set(attempt.results.filter((r) => !r.correct).flatMap((r) => r.competencies || []))];
    return `<div class="pm-shell"><section class="card pm-masterresult"><small>${isFirst ? "PRIMEIRA TENTATIVA · CONTA PARA DOMÍNIO" : "TENTATIVA DE TREINO · NÃO CONTA PARA DOMÍNIO"}</small><div class="pm-scorebig"><b>${right} de ${qs.length}</b><span>corretas</span></div><p>${isFirst ? "Este é o registro que entra nas competências. Você pode refazer para aprender; as novas tentativas não substituem esta." : `Sua primeira tentativa (${firstRight} de ${qs.length}) continua sendo a que conta.`}</p>${comps.length ? `<p class="pm-note">Erros envolveram: ${comps.map((c) => h(CNAME()[c])).join(", ")}.</p>` : ""}</section>${attempt.results
      .map((r, i) => {
        const q = qs.find((x) => x.id === r.id);
        if (!q) return "";
        return `<section class="card pm-answer ${r.correct ? "ok" : "no"}"><b>${i + 1}. ${r.correct ? "Correta" : "Incorreta"}</b> <small>${(q.c || []).map((c) => h(CNAME()[c])).join(" + ")}</small><p>${h(q.q)}</p><small>Sua resposta: ${h(q.ops[r.answer])}${r.correct ? "" : ` · Correta: <b>${h(q.ops[q.a])}</b>`}</small><p>${h(q.why)}</p></section>`;
      })
      .join("")}<section class="card pm-comp"><div class="pm-sectiontitle">Competências da missão</div>${compRows(M.id)}</section><div class="pm-actions"><button class="btn" id="pmRetake">Refazer para treinar</button><button class="btn primary" id="pmBackHub">Voltar ao painel</button></div></div>`;
  }
  function submitMastery() {
    const qs = CASES()[M.id].mastery,
      s = ms(M.id).mastery;
    const results = qs.map((q, i) => ({ id: q.id, answer: ui.answers[i], correct: ui.answers[i] === q.a, competencies: q.c }));
    const attempt = { at: now(), results },
      isFirst = !s.first;
    s.attempts.push(attempt);
    const right = results.filter((x) => x.correct).length;
    if (isFirst) {
      s.first = JSON.parse(JSON.stringify(attempt));
      // XP só na primeira tentativa: 10 por acerto
      award("mastery-" + M.id, 10 * right, "Avaliação feita · " + M.num + " · " + right + " de " + results.length);
      if (right === results.length) award("mastery-perfect-" + M.id, 30, "Avaliação sem erros na primeira tentativa · " + M.num);
    }
    addHistory(isFirst ? "Avaliação" : "Avaliação refeita (treino)", M.num, right + " de " + results.length + " corretas");
    checkGlobalAwards();
    save();
    ui = { result: attempt, resultIsFirst: isFirst };
  }
  function bindMastery() {
    const s = ms(M.id).mastery;
    if ((!ui.retake && s.first) || ui.result) {
      const a = ui.result || s.first;
      root.innerHTML = masteryResultHTML(a, ui.result ? !!ui.resultIsFirst : true);
      document.getElementById("pmRetake").onclick = () => openMastery(M.id, true);
      document.getElementById("pmBackHub").onclick = () => openHub(M.id);
      return;
    }
    const sub = document.getElementById("pmSubmitMaster");
    root.querySelectorAll(".pm-radio input").forEach(
      (inp) =>
        (inp.onchange = () => {
          const qi = +inp.name.slice(2);
          ui.answers[qi] = +inp.value;
          if (sub) sub.disabled = Object.keys(ui.answers).length < CASES()[M.id].mastery.length;
        }),
    );
    root.querySelectorAll("[data-zoom]").forEach((b) => (b.onclick = () => zoomImg(b.dataset.zoom, b.dataset.cap)));
    if (sub)
      sub.onclick = () => {
        submitMastery();
        draw();
      };
  }

  window.PATHMED = {
    begin() {
      const after = window.PATHMED_AFTER;
      window.PATHMED_AFTER = null;
      begin();
      if (after) openHub(after);
    },
    exit: end,
    isActive: () => active,
  };
})();
