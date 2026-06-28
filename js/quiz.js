/* =========================================================
   quiz.js — Fluxo de questionário "uma pergunta por vez".
   Funciona tanto para questionários de aula quanto para o
   questionário final, controlado pelos parâmetros da URL:
     ?slug=aula-01   → quiz daquela aula
     ?type=final     → questionário final do módulo
   ========================================================= */
(function () {
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const type = params.get("type");

  /* -------- Utilitários reutilizáveis (para todos os módulos) -------- */
  // Embaralhamento Fisher-Yates
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // Sorteia N itens distintos de um array
  function pickRandom(arr, n) {
    return shuffle(arr).slice(0, Math.min(n, arr.length));
  }
  // Embaralha as alternativas mantendo o índice correto da resposta
  function shuffleOptions(question) {
    const indexes = shuffle(question.options.map((_, i) => i));
    return {
      ...question,
      options: indexes.map((i) => question.options[i]),
      answer: indexes.indexOf(question.answer),
    };
  }
  // Prepara um questionário: sorteia N perguntas e embaralha as alternativas
  function prepareQuiz(bank, n) {
    return pickRandom(bank, n).map(shuffleOptions);
  }

  const CFG = (window.AP && AP.QUIZ_CONFIG) || { perLesson: 5, final: 20, passingPct: 60 };

  // Define perguntas, título e navegação de saída
  let questions = [];
  let title = "";
  let subtitle = "";
  let backHref = "../../pages/modulo1/index.html";
  let backLabel = "Módulo 1";
  let nextHref = "../../pages/modulo1/index.html";
  let nextLabel = "Voltar ao módulo";
  let progressKey = "";

  if (type === "final") {
    questions = prepareQuiz(AP.FINAL_QUIZ, CFG.final);
    title = "Questionário Final — Módulo 1";
    subtitle = `Avalie tudo o que você aprendeu — ${questions.length} perguntas sorteadas de um banco maior.`;
    backHref = "../../pages/modulo1/projeto-final.html";
    backLabel = "Projeto Final";
    nextHref = "../../pages/modulo1/desafio.html";
    nextLabel = "Ir ao Desafio de Código";
    progressKey = "questionario-final";
    document.title = "Questionário Final | EasyDev Academy";
  } else {
    const lesson = AP.MODULE1_LESSONS.find((l) => l.slug === slug);
    if (!lesson) {
      document.getElementById("quiz-root").innerHTML = "<h1>Questionário não encontrado</h1>";
      return;
    }
    const bank = AP.MODULE1_QUIZZES[slug] || [];
    questions = prepareQuiz(bank, CFG.perLesson);
    title = `Questionário — ${lesson.title}`;
    subtitle = `Aula ${lesson.id} — ${questions.length} perguntas sorteadas (de ${bank.length} disponíveis).`;
    const idx = AP.MODULE1_LESSONS.findIndex((l) => l.slug === slug);
    const next = AP.MODULE1_LESSONS[idx + 1];
    backHref = `../../pages/modulo1/aula.html?slug=${lesson.slug}`;
    backLabel = "Voltar à aula";
    if (next) {
      nextHref = `../../pages/modulo1/aula.html?slug=${next.slug}`;
      nextLabel = `Ir para a próxima aula: ${next.title}`;
    } else {
      nextHref = `../../pages/modulo1/projeto-final.html`;
      nextLabel = "Ir ao Projeto Final";
    }
    progressKey = `quiz-${slug}`;
    document.title = `${lesson.title} — Questionário | EasyDev Academy`;
  }

  // Estado
  let current = 0; // índice da pergunta atual
  let correctCount = 0; // total de acertos
  let answered = false; // já confirmou a resposta atual?
  let selected = null; // índice da alternativa selecionada (antes de confirmar)

  const root = document.getElementById("quiz-root");

  function renderQuestion() {
    answered = false;
    selected = null;
    const q = questions[current];
    const total = questions.length;
    const progressPct = (current / total) * 100;

    root.innerHTML = `
      <header class="quiz-header">
        <h1>${title}</h1>
        <p class="lesson-meta">${subtitle}</p>
        <div class="quiz-progress"><span style="width:${progressPct}%"></span></div>
        <p class="quiz-step">Pergunta ${current + 1} de ${total}</p>
      </header>

      <div class="quiz-card">
        <p class="q-text">${q.q}</p>
        <div class="options" id="opts">
          ${q.options
            .map(
              (opt, j) => `
            <button type="button" class="option" data-i="${j}">
              <span class="opt-letter">${String.fromCharCode(65 + j)}</span>
              <span>${opt}</span>
            </button>
          `,
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

    // Liga eventos nos botões de opção (apenas seleção visual)
    document.querySelectorAll("#opts .option").forEach((btn) => {
      btn.addEventListener("click", () => selectOption(Number(btn.dataset.i)));
    });
    document.getElementById("confirm-btn").addEventListener("click", confirmAnswer);
    document.getElementById("next-btn").addEventListener("click", advance);
  }

  function selectOption(chosen) {
    if (answered) return;
    selected = chosen;
    // Marca visualmente apenas a alternativa escolhida (sem corrigir)
    document.querySelectorAll("#opts .option").forEach((el, i) => {
      el.classList.toggle("selected", i === chosen);
    });
    document.getElementById("confirm-btn").disabled = false;
  }

  function confirmAnswer() {
    if (answered) return;
    if (selected === null) return;
    answered = true;
    const q = questions[current];
    const chosen = selected;
    const isCorrect = chosen === q.answer;
    if (isCorrect) correctCount++;

    // Marca correta/incorreta em todas as opções
    document.querySelectorAll("#opts .option").forEach((el, i) => {
      el.disabled = true;
      el.classList.remove("selected");
      if (i === q.answer) el.classList.add("correct");
      else if (i === chosen) el.classList.add("wrong");
    });

    const fb = document.getElementById("feedback");
    fb.classList.remove("hidden", "ok", "no");
    fb.classList.add(isCorrect ? "ok" : "no");
    fb.innerHTML = `
      <p class="fb-title">${isCorrect ? "✓ Resposta correta!" : "✗ Resposta incorreta."}</p>
      <p><strong>Resposta certa:</strong> ${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}</p>
      <p class="fb-explain"><strong>Por quê:</strong> ${q.explanation || ""}</p>
    `;

    // Esconde "Confirmar" e mostra "Próxima Pergunta"
    document.getElementById("confirm-btn").style.display = "none";
    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "";
    nextBtn.disabled = false;
    if (current === questions.length - 1) {
      nextBtn.textContent = "Ver resultado →";
    }
  }

  function advance() {
    if (!answered) return;
    if (current < questions.length - 1) {
      current++;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      renderResult();
    }
  }

  function renderResult() {
    const total = questions.length;
    const errors = total - correctCount;
    const pct = Math.round((correctCount / total) * 100);

    let level, msg;
    if (pct >= 80) {
      level = "excelente";
      msg = "Excelente desempenho! Você dominou o conteúdo.";
    } else if (pct >= 60) {
      level = "bom";
      msg = "Bom desempenho! Vale revisar os pontos que errou.";
    } else {
      level = "revisar";
      msg = "Você precisa revisar o conteúdo antes de seguir adiante.";
    }

    // Marca como concluído se aproveitamento >= passingPct (config)
    if (pct >= CFG.passingPct && progressKey) AP_UTIL.markDone(progressKey.replace("quiz-", ""));

    root.innerHTML = `
      <header class="quiz-header">
        <h1>Resultado</h1>
        <p class="lesson-meta">${title}</p>
      </header>

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
      </div>
    `;
    document.getElementById("retry").addEventListener("click", () => {
      // Re-sorteia perguntas e embaralha alternativas para nova tentativa
      if (type === "final") {
        questions = prepareQuiz(AP.FINAL_QUIZ, CFG.final);
      } else {
        questions = prepareQuiz(AP.MODULE1_QUIZZES[slug] || [], CFG.perLesson);
      }
      current = 0;
      correctCount = 0;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (!questions.length) {
    root.innerHTML = "<h1>Questionário ainda não disponível</h1>";
    return;
  }
  renderQuestion();
})();
