/* =========================================================
   data-modulos.js — Registro de TODOS os módulos placeholder.
   Replica a estrutura do Módulo 1 para os demais módulos
   dos cursos de Portugol e Python.
   Para preencher o conteúdo real de um módulo, basta editar
   as `lessons`, `quizzes` e `finalQuiz` do módulo desejado.
   ========================================================= */

const PLACEHOLDER_BODY = `
  <h2>Conteúdo em desenvolvimento</h2>
  <p>Esta aula será preenchida futuramente.</p>
`;

function _placeholderQuestion() {
  return {
    q: "Questão Placeholder",
    options: ["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D"],
    answer: 0,
    explanation: "Conteúdo em desenvolvimento. Esta explicação será preenchida futuramente.",
  };
}

function _placeholderBank() {
  // Banco mínimo replicando a estrutura usada no Módulo 1.
  return Array.from({ length: 4 }, _placeholderQuestion);
}

function _makePlaceholderModule(opts) {
  const lessons = [1, 2, 3].map((i) => ({
    id: i,
    slug: `aula-0${i}`,
    title: `Aula ${i}`,
    intro: "Conteúdo em desenvolvimento. Esta aula será preenchida futuramente.",
    videos: [],
    body: PLACEHOLDER_BODY,
  }));
  const quizzes = {};
  lessons.forEach((l) => (quizzes[l.slug] = _placeholderBank()));
  return {
    ...opts,
    lessons,
    quizzes,
    finalQuiz: _placeholderBank(),
  };
}

const PLACEHOLDER_MODULES = {
  // -------- Curso de Portugol Studio --------
  "portugol-m2": _makePlaceholderModule({
    courseTitle: "Curso de Portugol Studio",
    courseCrumb: "Portugol Studio",
    courseHref: "../../../pages/curso-portugol/index.html",
    base: "/pages/curso-portugol/modulo-2",
    number: 2,
    title: "Estruturas de Controle",
    desc: "Condicionais e laços de repetição.",
    storageKey: "ap_progress_portugol_m2",
  }),
  "portugol-m3": _makePlaceholderModule({
    courseTitle: "Curso de Portugol Studio",
    courseCrumb: "Portugol Studio",
    courseHref: "../../../pages/curso-portugol/index.html",
    base: "/pages/curso-portugol/modulo-3",
    number: 3,
    title: "Estruturas de Dados",
    desc: "Vetores, matrizes e coleções.",
    storageKey: "ap_progress_portugol_m3",
  }),
  "portugol-m4": _makePlaceholderModule({
    courseTitle: "Curso de Portugol Studio",
    courseCrumb: "Portugol Studio",
    courseHref: "../../../pages/curso-portugol/index.html",
    base: "/pages/curso-portugol/modulo-4",
    number: 4,
    title: "Funções e Modularização",
    desc: "Reuso de código e organização.",
    storageKey: "ap_progress_portugol_m4",
  }),
  "portugol-m5": _makePlaceholderModule({
    courseTitle: "Curso de Portugol Studio",
    courseCrumb: "Portugol Studio",
    courseHref: "../../../pages/curso-portugol/index.html",
    base: "/pages/curso-portugol/modulo-5",
    number: 5,
    title: "Projetos Práticos",
    desc: "Aplicando o que aprendeu.",
    storageKey: "ap_progress_portugol_m5",
  }),
  "portugol-m6": _makePlaceholderModule({
    courseTitle: "Curso de Portugol Studio",
    courseCrumb: "Portugol Studio",
    courseHref: "../../../pages/curso-portugol/index.html",
    base: "/pages/curso-portugol/modulo-6",
    number: 6,
    title: "Recursos Avançados do Portugol",
    desc: "Bibliotecas e recursos avançados.",
    storageKey: "ap_progress_portugol_m6",
  }),

  // -------- Curso de Python --------
  "python-m1": _makePlaceholderModule({
    courseTitle: "Curso de Python",
    courseCrumb: "Python",
    courseHref: "../../../pages/curso-python/index.html",
    base: "/pages/curso-python/modulo-1",
    number: 1,
    title: "Conversão Portugol ao Python",
    desc: "Equivalências entre Portugol e Python.",
    storageKey: "ap_progress_python_m1",
  }),
  "python-m2": _makePlaceholderModule({
    courseTitle: "Curso de Python",
    courseCrumb: "Python",
    courseHref: "../../../pages/curso-python/index.html",
    base: "/pages/curso-python/modulo-2",
    number: 2,
    title: "Fundamentos do Python",
    desc: "Sintaxe e primeiros programas.",
    storageKey: "ap_progress_python_m2",
  }),
  "python-m3": _makePlaceholderModule({
    courseTitle: "Curso de Python",
    courseCrumb: "Python",
    courseHref: "../../../pages/curso-python/index.html",
    base: "/pages/curso-python/modulo-3",
    number: 3,
    title: "Estruturas de Controle",
    desc: "Condicionais e laços em Python.",
    storageKey: "ap_progress_python_m3",
  }),
  "python-m4": _makePlaceholderModule({
    courseTitle: "Curso de Python",
    courseCrumb: "Python",
    courseHref: "../../../pages/curso-python/index.html",
    base: "/pages/curso-python/modulo-4",
    number: 4,
    title: "Estruturas de Dados",
    desc: "Listas, tuplas, dicionários e conjuntos.",
    storageKey: "ap_progress_python_m4",
  }),
  "python-m5": _makePlaceholderModule({
    courseTitle: "Curso de Python",
    courseCrumb: "Python",
    courseHref: "../../../pages/curso-python/index.html",
    base: "/pages/curso-python/modulo-5",
    number: 5,
    title: "Funções",
    desc: "Funções, módulos e pacotes.",
    storageKey: "ap_progress_python_m5",
  }),
  "python-m6": _makePlaceholderModule({
    courseTitle: "Curso de Python",
    courseCrumb: "Python",
    courseHref: "../../../pages/curso-python/index.html",
    base: "/pages/curso-python/modulo-6",
    number: 6,
    title: "Projetos Práticos",
    desc: "Aplicando Python em projetos.",
    storageKey: "ap_progress_python_m6",
  }),
};

window.AP = window.AP || {};
window.AP.PLACEHOLDER_MODULES = PLACEHOLDER_MODULES;
