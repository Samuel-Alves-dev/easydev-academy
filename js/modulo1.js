/* =========================================================
   modulo1.js — utilitários compartilhados pelo Módulo 1.
   * Progresso em localStorage
   * Render IDEMPOTENTE da lista lateral (corrige bug de
     duplicação quando a página chamava o render duas vezes)
   ========================================================= */

function getProgress() {
  try { return JSON.parse(localStorage.getItem("ap_progress_m1") || "{}"); }
  catch { return {}; }
}
function setProgress(p) { localStorage.setItem("ap_progress_m1", JSON.stringify(p)); }
function markDone(key) {
  const p = getProgress(); p[key] = true; setProgress(p);
}

/**
 * Renderiza a lista lateral de aulas.
 * IMPORTANTE: limpa o conteúdo do <ol> antes de popular,
 * garantindo que múltiplas chamadas não dupliquem os itens.
 */
function renderLessonList(targetId, currentSlug) {
  const ol = document.getElementById(targetId);
  if (!ol) return;
  ol.innerHTML = ""; // <- evita duplicação
  const progress = getProgress();
  AP.MODULE1_LESSONS.forEach(l => {
    const li = document.createElement("li");
    const isActive = currentSlug === l.slug;
    const done = progress[l.slug] ? " ✓" : "";
    li.innerHTML = `<a class="${isActive ? "active" : ""}" href="../../pages/modulo1/aula.html?slug=${l.slug}">
      <span class="num">${l.id}</span>${l.title}${done}</a>`;
    ol.appendChild(li);
  });
}

// Auto-render apenas em páginas que NÃO controlam a lista manualmente.
// Páginas que chamam renderLessonList() por conta própria (ex.: aula.html)
// devem marcar o <ol> com data-manual="true" para evitar render duplicado.
(function () {
  const list = document.getElementById("lesson-list");
  if (list && list.dataset.manual !== "true") {
    renderLessonList("lesson-list");
  }
  const summary = document.getElementById("lesson-summary");
  if (summary) {
    summary.innerHTML = "";
    AP.MODULE1_LESSONS.forEach(l => {
      const li = document.createElement("li");
      li.textContent = l.title;
      summary.appendChild(li);
    });
  }
})();

window.AP_UTIL = { getProgress, setProgress, markDone, renderLessonList };