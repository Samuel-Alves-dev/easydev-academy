/* =========================================================
   aula.js — renderiza o conteúdo da aula.
   O questionário fica em página separada (questionario.html),
   acessada pelo botão ao final da aula.
   ========================================================= */
(function () {
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug") || "aula-01";
  const lesson = AP.MODULE1_LESSONS.find(l => l.slug === slug);
  const container = document.getElementById("lesson-content");

  if (!lesson) {
    container.innerHTML = "<h1>Aula não encontrada</h1>";
    return;
  }

  document.title = `${lesson.title} | EasyDev Academy`;
  document.getElementById("crumb-current").textContent = lesson.title;

  // Render lateral (idempotente — ver modulo1.js)
  AP_UTIL.renderLessonList("lesson-list", slug);

  const idx = AP.MODULE1_LESSONS.findIndex(l => l.slug === slug);
  const prev = AP.MODULE1_LESSONS[idx - 1];
  const next = AP.MODULE1_LESSONS[idx + 1];

  container.innerHTML = `
    <h1>${lesson.title}</h1>
    <p class="lesson-meta">Aula ${lesson.id} de ${AP.MODULE1_LESSONS.length} — Módulo 1</p>
    <p class="lesson-lead">${lesson.intro}</p>

    ${renderVideos(lesson.videos)}

    ${lesson.body}

    <div class="cta-quiz">
      <h2>Questionário desta aula</h2>
      <p>Responda algumas perguntas para fixar o conteúdo. Você verá a explicação de cada resposta.</p>
      <a class="btn btn-primary" href="../../pages/modulo1/questionario.html?slug=${lesson.slug}">Iniciar questionário →</a>
    </div>

    <div class="lesson-nav">
      ${prev ? `<a class="btn btn-ghost" href="?slug=${prev.slug}">← ${prev.title}</a>` : `<span></span>`}
      ${next ? `<a class="btn btn-ghost" href="?slug=${next.slug}">${next.title} →</a>`
             : `<a class="btn btn-ghost" href="../../pages/modulo1/projeto-final.html">Projeto Final →</a>`}
    </div>
  `;

  /* Renderiza N vídeos da aula (Shorts ou longos).
     Se não houver vídeo cadastrado, exibe mensagem padrão.
     Função local — replicável para qualquer módulo futuro. */
  function renderVideos(videos) {
    const list = Array.isArray(videos) ? videos.filter(v => v && (v.url || v.title)) : [];
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
        ${list.map((v, i) => `
          <article class="video-item">
            <h3>Vídeo ${i + 1} — ${v.title || "Sem título"}</h3>
            ${v.url
              ? `<div class="video-frame"><iframe src="${v.url}" title="${v.title || 'Vídeo'}" frameborder="0" allowfullscreen loading="lazy"></iframe></div>`
              : `<div class="video-placeholder"><span class="video-icon">▶</span><p>Em breve.</p></div>`}
          </article>
        `).join("")}
      </section>`;
  }
})();