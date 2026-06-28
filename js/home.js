/* home.js — renderiza lista de CURSOS na página inicial */
(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  const grid = document.getElementById("courses-grid");
  (AP.COURSES || []).forEach((c, i) => {
    const card = document.createElement("a");
    card.href = c.locked ? "#" : c.href;
    card.className = "module-card" + (c.locked ? " locked" : "");
    card.innerHTML = `
      <span class="tag">Curso ${i + 1}</span>
      <h3>${c.locked ? "🔒 " : ""}${c.title}</h3>
      <p>${c.desc}</p>
      <span class="module-cta">${c.locked ? "Bloqueado" : "Acessar curso →"}</span>
    `;
    if (c.locked) card.addEventListener("click", (e) => e.preventDefault());
    grid.appendChild(card);
  });
})();