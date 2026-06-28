/* curso.js — renderiza a lista de módulos de um curso.
   O <script> deve declarar data-course="<id>" (ex.: "portugol", "python"). */
(function () {
  const scriptEl = document.currentScript;
  const courseId = scriptEl && scriptEl.dataset.course;
  const course = (AP.COURSES || []).find((c) => c.id === courseId);
  if (!course) return;

  const desc = document.getElementById("course-desc");
  if (desc) desc.textContent = course.desc;

  const grid = document.getElementById("course-modules");
  if (!grid) return;

  course.modules.forEach((m) => {
    const card = document.createElement("a");
    const clickable = m.available && !course.locked;
    card.href = clickable ? m.href : (course.locked ? "#" : m.href);
    card.className = "module-card" + (m.available ? "" : " locked");
    card.innerHTML = `
      <span class="tag">Módulo ${m.id}</span>
      <h3>${m.title}</h3>
      <p>${m.desc}</p>
      <span class="module-cta">${
        course.locked ? "Bloqueado" : m.available ? "Acessar →" : "Em breve"
      }</span>
    `;
    if (course.locked) {
      card.addEventListener("click", (e) => e.preventDefault());
    } else if (!m.available) {
      // Permite navegar para a página de placeholder do módulo.
    }
    grid.appendChild(card);
  });
})();