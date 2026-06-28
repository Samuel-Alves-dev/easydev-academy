/* =========================================================
   modulo.js — Engine genérica para módulos placeholder.
   Replica a estrutura/comportamento do Módulo 1, dirigida
   por atributos do <body>:
     data-mod="<chave em AP.PLACEHOLDER_MODULES>"
     data-page="index|aula|quiz|quiz-final|projeto|desafio"
   ========================================================= */
(function () {
  const body = document.body;
  const modKey = body.dataset.mod;
  const page = body.dataset.page;
  if (!modKey || !page) return;

  const mod = (window.AP && AP.PLACEHOLDER_MODULES && AP.PLACEHOLDER_MODULES[modKey]) || null;
  const root = document.getElementById("page-root");
  const crumbs = document.getElementById("crumbs");
  if (!mod || !root) return;

  /* -------- Tela padrão "Módulo em Desenvolvimento" --------
     Todos os módulos placeholder devem exibir esta tela em vez
     de qualquer conteúdo (aulas, quizzes, projetos, etc.).
     A estrutura interna é preservada para futuras atualizações. */
  document.title = `Módulo em Desenvolvimento | EasyDev Academy`;
  if (crumbs) {
    crumbs.innerHTML =
      `<a href="../../../index.html">Início</a> &gt; ` +
      `<a href="${mod.courseHref}">${mod.courseCrumb}</a> &gt; ` +
      `<strong>Módulo ${mod.number}</strong>`;
  }
  root.className = "container";
  root.style.padding = "48px 0 80px";
  root.style.maxWidth = "720px";
  root.style.textAlign = "center";
  root.innerHTML = `
    <div style="font-size:64px;line-height:1;margin-bottom:16px">🚧</div>
    <h1>Módulo em Desenvolvimento</h1>
    <p class="lesson-meta" style="margin:16px auto;max-width:560px">
      Este módulo ainda não foi criado e será disponibilizado em uma atualização
      futura da EasyDev Academy.
    </p>
    <p class="lesson-meta" style="margin:0 auto 24px;max-width:560px">
      Continue estudando os conteúdos já disponíveis e acompanhe as próximas atualizações.
    </p>
    <p style="margin-top:24px">
      <button id="back-btn" class="btn btn-primary">← Voltar</button>
    </p>
  `;
  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (history.length > 1) history.back();
      else location.href = mod.courseHref;
    });
  }
  return;

  /* -------- Progresso (uma chave por módulo) -------- */
  const SK = mod.storageKey;
  function getProgress() {
    try { return JSON.parse(localStorage.getItem(SK) || "{}"); } catch { return {}; }
  }
  function setProgress(p) { localStorage.setItem(SK, JSON.stringify(p)); }
  function markDone(k) { const p = getProgress(); p[k] = true; setProgress(p); }
  window.AP_MOD = { mod, getProgress, setProgress, markDone };

  /* -------- Breadcrumbs -------- */
  function setCrumbs(extra) {
    crumbs.innerHTML =
      `<a href="../../../index.html">Início</a> &gt; ` +
      `<a href="${mod.courseHref}">${mod.courseCrumb}</a> &gt; ` +
      (extra
        ? `<a href="${mod.base}/index.html">Módulo ${mod.number}</a> &gt; <strong>${extra}</strong>`
        : `<strong>Módulo ${mod.number} — ${mod.title}</strong>`);
  }

  /* -------- Sidebar (lista de aulas) -------- */
  function renderLessonList(targetId, currentSlug) {
    const ol = document.getElementById(targetId);
    if (!ol) return;
    ol.innerHTML = "";
    const prog = getProgress();
    mod.lessons.forEach((l) => {
      const li = document.createElement("li");
      const active = currentSlug === l.slug;
      const done = prog[l.slug] ? " ✓" : "";
      li.innerHTML = `<a class="${active ? "active" : ""}" href="${mod.base}/aula.html?slug=${l.slug}">
        <span class="num">${l.id}</span>${l.title}${done}</a>`;
      ol.appendChild(li);
    });
  }

  /* ===================== ROUTER ===================== */
  document.title = `Módulo ${mod.number} — ${mod.title} | EasyDev Academy`;
  if (page === "index") return renderIndex();
  if (page === "aula") return renderAula();
  if (page === "quiz") return renderQuiz("lesson");
  if (page === "quiz-final") return renderQuiz("final");
  if (page === "projeto") return renderManual("projeto-final", "Projeto Final");
  if (page === "desafio") return renderManual("desafio", "Desafio de Código");

  /* ===================== INDEX ===================== */
  function renderIndex() {
    setCrumbs(null);
    const mainEl = root;
    mainEl.className = "container layout";
    mainEl.innerHTML = `
      <aside class="sidebar">
        <h4>Aulas do Módulo ${mod.number}</h4>
        <ol id="lesson-list"></ol>
        <h4 style="margin-top:20px">Avaliações</h4>
        <ol>
          <li><a href="${mod.base}/projeto-final.html"><span class="num">P</span>Projeto Final</a></li>
          <li><a href="${mod.base}/questionario-final.html"><span class="num">Q</span>Questionário Final</a></li>
          <li><a href="${mod.base}/desafio.html"><span class="num">D</span>Desafio de Código</a></li>
        </ol>
      </aside>
      <section class="content">
        <h1>Módulo ${mod.number} — ${mod.title}</h1>
        <p class="lesson-meta">${mod.desc}</p>
        <div class="callout">
          <strong>Como funciona:</strong> percorra as aulas em ordem, responda os questionários ao final de cada uma,
          depois faça o projeto, o questionário final e o desafio de código.
        </div>
        <h2>O que você vai aprender</h2>
        <ul id="lesson-summary"></ul>
        <p style="margin-top:24px">
          <a class="btn btn-primary" href="${mod.base}/aula.html?slug=${mod.lessons[0].slug}">Começar pela Aula 1</a>
        </p>
      </section>
    `;
    renderLessonList("lesson-list");
    const summary = document.getElementById("lesson-summary");
    mod.lessons.forEach((l) => {
      const li = document.createElement("li");
      li.textContent = l.title;
      summary.appendChild(li);
    });
  }

  /* ===================== AULA ===================== */
  function renderAula() {
    const params = new URLSearchParams(location.search);
    const slug = params.get("slug") || mod.lessons[0].slug;
    const lesson = mod.lessons.find((l) => l.slug === slug);

    root.className = "container layout";
    root.innerHTML = `
      <aside class="sidebar">
        <h4>Aulas do Módulo ${mod.number}</h4>
        <ol id="lesson-list"></ol>
      </aside>
      <section class="content" id="lesson-content"></section>
    `;
    renderLessonList("lesson-list", slug);

    const container = document.getElementById("lesson-content");
    if (!lesson) {
      setCrumbs("Aula");
      container.innerHTML = "<h1>Aula não encontrada</h1>";
      return;
    }
    setCrumbs(lesson.title);
    document.title = `${lesson.title} | EasyDev Academy`;

    const idx = mod.lessons.findIndex((l) => l.slug === slug);
    const prev = mod.lessons[idx - 1];
    const next = mod.lessons[idx + 1];

    container.innerHTML = `
      <h1>${lesson.title}</h1>
      <p class="lesson-meta">Aula ${lesson.id} de ${mod.lessons.length} — Módulo ${mod.number}</p>
      <p class="lesson-lead">${lesson.intro}</p>
      ${renderVideos(lesson.videos)}
      ${lesson.body}
      <div class="cta-quiz">
        <h2>Questionário desta aula</h2>
        <p>Responda algumas perguntas para fixar o conteúdo.</p>
        <a class="btn btn-primary" href="${mod.base}/questionario.html?slug=${lesson.slug}">Iniciar questionário →</a>
      </div>
      <div class="lesson-nav">
        ${prev ? `<a class="btn btn-ghost" href="?slug=${prev.slug}">← ${prev.title}</a>` : `<span></span>`}
        ${next
          ? `<a class="btn btn-ghost" href="?slug=${next.slug}">${next.title} →</a>`
          : `<a class="btn btn-ghost" href="${mod.base}/projeto-final.html">Projeto Final →</a>`}
      </div>
    `;
  }

  function renderVideos(videos) {
    const list = Array.isArray(videos) ? videos.filter((v) => v && (v.url || v.title)) : [];
    if (list.length === 0) {
      return `
        <section class="video-block" aria-label="Vídeos da aula">
          <h2>Vídeos da Aula</h2>
          <div class="video-placeholder">
            <span class="video-icon">▶</span>
            <p>Vídeos desta aula serão disponibilizados em breve.</p>
          </div>
        </section>`;
    }
    return `
      <section class="video-block" aria-label="Vídeos da aula">
        <h2>Vídeos da Aula</h2>
        ${list
          .map(
            (v, i) => `
          <article class="video-item">
            <h3>Vídeo ${i + 1} — ${v.title || "Sem título"}</h3>
            ${v.url
              ? `<div class="video-frame"><iframe src="${v.url}" title="${v.title || "Vídeo"}" frameborder="0" allowfullscreen loading="lazy"></iframe></div>`
              : `<div class="video-placeholder"><span class="video-icon">▶</span><p>Em breve.</p></div>`}
          </article>`,
          )
          .join("")}
      </section>`;
  }

  /* ===================== QUIZ ===================== */
  function renderQuiz(kind) {
    const CFG = (window.AP && AP.QUIZ_CONFIG) || { perLesson: 5, final: 20, passingPct: 60 };

    function shuffle(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    function pickRandom(arr, n) { return shuffle(arr).slice(0, Math.min(n, arr.length)); }
    function shuffleOptions(q) {
      const idx = shuffle(q.options.map((_, i) => i));
      return { ...q, options: idx.map((i) => q.options[i]), answer: idx.indexOf(q.answer) };
    }
    function prepareQuiz(bank, n) { return pickRandom(bank, n).map(shuffleOptions); }

    const params = new URLSearchParams(location.search);
    const slug = params.get("slug");
    let questions, title, subtitle, backHref, backLabel, nextHref, nextLabel, doneKey;

    if (kind === "final") {
      questions = prepareQuiz(mod.finalQuiz, CFG.final);
      title = `Questionário Final — Módulo ${mod.number}`;
      subtitle = `Avalie tudo o que você aprendeu — ${questions.length} perguntas.`;
      backHref = `${mod.base}/projeto-final.html`;
      backLabel = "Projeto Final";
      nextHref = `${mod.base}/desafio.html`;
      nextLabel = "Ir ao Desafio de Código";
      doneKey = "questionario-final";
      document.title = `Questionário Final | EasyDev Academy`;
    } else {
      const lesson = mod.lessons.find((l) => l.slug === slug);
      if (!lesson) {
        root.className = "container";
        root.style.padding = "32px 0 80px";
        root.innerHTML = "<h1>Questionário não encontrado</h1>";
        return;
      }
      const bank = mod.quizzes[slug] || [];
      questions = prepareQuiz(bank, CFG.perLesson);
      title = `Questionário — ${lesson.title}`;
      subtitle = `Aula ${lesson.id} — ${questions.length} perguntas sorteadas (de ${bank.length} disponíveis).`;
      const idx = mod.lessons.findIndex((l) => l.slug === slug);
      const nxt = mod.lessons[idx + 1];
      backHref = `${mod.base}/aula.html?slug=${lesson.slug}`;
      backLabel = "Voltar à aula";
      if (nxt) { nextHref = `${mod.base}/aula.html?slug=${nxt.slug}`; nextLabel = `Próxima aula: ${nxt.title}`; }
      else { nextHref = `${mod.base}/projeto-final.html`; nextLabel = "Ir ao Projeto Final"; }
      doneKey = slug;
      document.title = `${lesson.title} — Questionário | EasyDev Academy`;
    }
    setCrumbs(kind === "final" ? "Questionário Final" : "Questionário");

    root.className = "container";
    root.style.padding = "32px 0 80px";
    root.style.maxWidth = "820px";
    root.innerHTML = `<div id="quiz-root"></div>`;
    const qroot = document.getElementById("quiz-root");

    let current = 0, correctCount = 0, answered = false, selected = null;

    function renderQuestion() {
      answered = false; selected = null;
      const q = questions[current];
      const total = questions.length;
      const pct = (current / total) * 100;
      qroot.innerHTML = `
        <header class="quiz-header">
          <h1>${title}</h1>
          <p class="lesson-meta">${subtitle}</p>
          <div class="quiz-progress"><span style="width:${pct}%"></span></div>
          <p class="quiz-step">Pergunta ${current + 1} de ${total}</p>
        </header>
        <div class="quiz-card">
          <p class="q-text">${q.q}</p>
          <div class="options" id="opts">
            ${q.options
              .map(
                (opt, j) => `
              <button type="button" class="option" data-i="${j}">
                <span class="opt-letter">${String.fromCharCode(65 + j)}</span><span>${opt}</span>
              </button>`,
              )
              .join("")}
          </div>
          <div id="feedback" class="feedback hidden"></div>
          <div class="quiz-actions">
            <a class="btn btn-ghost" href="${backHref}">← ${backLabel}</a>
            <button id="confirm-btn" class="btn btn-primary" disabled>Confirmar Resposta</button>
            <button id="next-btn" class="btn btn-primary" style="display:none">Próxima Pergunta →</button>
          </div>
        </div>
      `;
      document.querySelectorAll("#opts .option").forEach((btn) => {
        btn.addEventListener("click", () => selectOption(Number(btn.dataset.i)));
      });
      document.getElementById("confirm-btn").addEventListener("click", confirmAnswer);
      document.getElementById("next-btn").addEventListener("click", advance);
    }
    function selectOption(c) {
      if (answered) return;
      selected = c;
      document.querySelectorAll("#opts .option").forEach((el, i) =>
        el.classList.toggle("selected", i === c),
      );
      document.getElementById("confirm-btn").disabled = false;
    }
    function confirmAnswer() {
      if (answered || selected === null) return;
      answered = true;
      const q = questions[current];
      const isCorrect = selected === q.answer;
      if (isCorrect) correctCount++;
      document.querySelectorAll("#opts .option").forEach((el, i) => {
        el.disabled = true; el.classList.remove("selected");
        if (i === q.answer) el.classList.add("correct");
        else if (i === selected) el.classList.add("wrong");
      });
      const fb = document.getElementById("feedback");
      fb.classList.remove("hidden", "ok", "no");
      fb.classList.add(isCorrect ? "ok" : "no");
      fb.innerHTML = `
        <p class="fb-title">${isCorrect ? "✓ Resposta correta!" : "✗ Resposta incorreta."}</p>
        <p><strong>Resposta certa:</strong> ${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}</p>
        <p class="fb-explain"><strong>Por quê:</strong> ${q.explanation || ""}</p>`;
      document.getElementById("confirm-btn").style.display = "none";
      const nb = document.getElementById("next-btn");
      nb.style.display = ""; nb.disabled = false;
      if (current === questions.length - 1) nb.textContent = "Ver resultado →";
    }
    function advance() {
      if (!answered) return;
      if (current < questions.length - 1) {
        current++; renderQuestion();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else renderResult();
    }
    function renderResult() {
      const total = questions.length;
      const errors = total - correctCount;
      const pct = Math.round((correctCount / total) * 100);
      let level, msg;
      if (pct >= 80) { level = "excelente"; msg = "Excelente desempenho!"; }
      else if (pct >= 60) { level = "bom"; msg = "Bom desempenho!"; }
      else { level = "revisar"; msg = "Você precisa revisar o conteúdo antes de seguir."; }
      if (pct >= CFG.passingPct) markDone(doneKey);
      qroot.innerHTML = `
        <header class="quiz-header"><h1>Resultado</h1><p class="lesson-meta">${title}</p></header>
        <div class="quiz-card result-card level-${level}">
          <div class="result-score">${pct}%</div>
          <p class="result-msg">${msg}</p>
          <ul class="result-stats">
            <li><strong>${correctCount}</strong> acertos</li>
            <li><strong>${errors}</strong> erros</li>
            <li><strong>${total}</strong> perguntas</li>
          </ul>
          <div class="quiz-actions">
            <button class="btn btn-ghost" id="retry">Refazer questionário</button>
            <a class="btn btn-primary" href="${nextHref}">${nextLabel} →</a>
          </div>
        </div>`;
      document.getElementById("retry").addEventListener("click", () => {
        questions = kind === "final"
          ? prepareQuiz(mod.finalQuiz, CFG.final)
          : prepareQuiz(mod.quizzes[slug] || [], CFG.perLesson);
        current = 0; correctCount = 0; renderQuestion();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
    if (!questions.length) {
      qroot.innerHTML = "<h1>Questionário ainda não disponível</h1>";
      return;
    }
    renderQuestion();
  }

  /* ===================== PROJETO / DESAFIO ===================== */
  function renderManual(key, label) {
    setCrumbs(label);
    document.title = `${label} — Módulo ${mod.number} | EasyDev Academy`;
    root.className = "container";
    root.style.padding = "32px 0 80px";
    root.style.maxWidth = "820px";
    root.innerHTML = `
      <h1>${label}</h1>
      <p class="lesson-meta">Módulo ${mod.number} — ${mod.title}</p>
      <div class="callout">
        <strong>Conteúdo em desenvolvimento.</strong>
        Este ${label.toLowerCase()} será preenchido futuramente.
      </div>
      <div class="lesson-nav">
        <a class="btn btn-ghost" href="${mod.base}/index.html">← Voltar ao módulo</a>
        <a class="btn btn-primary" href="./pages/progresso.html">Ver meu progresso →</a>
      </div>
      <section id="complete-section" style="margin-top:32px;text-align:center">
        <button id="mark-complete-btn" class="btn btn-primary">Marcar como Concluído</button>
        <p id="complete-status" class="hidden" style="margin-top:12px;color:#16a34a;font-weight:600">✅ ${label} Concluído</p>
      </section>
    `;
    const btn = document.getElementById("mark-complete-btn");
    const status = document.getElementById("complete-status");
    function refresh() {
      const done = !!getProgress()[key];
      btn.style.display = done ? "none" : "";
      status.classList.toggle("hidden", !done);
    }
    btn.addEventListener("click", () => {
      if (!confirm("Tem certeza que deseja marcar esta atividade como concluída?")) return;
      markDone(key); refresh();
    });
    refresh();
  }
})();
