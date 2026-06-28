/* =========================================================
   data.js — Conteúdo do curso (estático no MVP).

   ARQUITETURA REUTILIZÁVEL (preparada para futuros módulos):

   Aula:
     {
       id, slug, title, intro, body,
       videos: [ { title, url }, ... ]   // 0..N vídeos (Shorts ou longos)
     }

   Projeto Final do módulo:
     {
       projectVideo: { title, url }      // vídeo de resolução (opcional)
     }

   Questões (mesmo formato em todos os bancos):
     { q, options:[4], answer:index, explanation:"..." }

   Configuração de sorteio (usada por quiz.js):
     QUIZ_CONFIG = { perLesson: 5, final: 25 }
     Padrão: 10 questões cadastradas por aula → 5 sorteadas por tentativa.
   ========================================================= */

const MODULES = [
  { id: 1, title: "Fundamentos", desc: "Conceitos básicos de lógica, algoritmos e Portugol.", available: true },
  { id: 2, title: "Estruturas de Controle", desc: "Condicionais e laços de repetição.", available: false },
  { id: 3, title: "Estruturas de Dados", desc: "Vetores, matrizes e coleções.", available: false },
  { id: 4, title: "Funções e Modularização", desc: "Reuso de código e organização.", available: false },
  { id: 5, title: "Projetos Práticos", desc: "Aplicando o que aprendeu.", available: false },
  { id: 6, title: "Bibliotecas Básicas", desc: "Bibliotecas essenciais do Portugol.", available: false },
  { id: 7, title: "Bibliotecas Avançadas", desc: "Recursos avançados e gráficos.", available: false },
  { id: 8, title: "Projetos Finais Avançados", desc: "Projetos completos para portfólio.", available: false },
  {
    id: 9,
    title: "Conversão Portugol → Python",
    desc: "Equivalências entre Portugol e Python.",
    available: false,
    special: true,
  },
];

// Configuração global de sorteio dos questionários
const QUIZ_CONFIG = {
  perLesson: 5, // mostra 5 perguntas aleatórias de um banco de 10
  final: 20, // mostra 20 perguntas aleatórias do banco final
  passingPct: 60, // % mínimo para considerar concluído
};

// ---------------------------------------------------------
// Aulas do Módulo 1
// Cada aula possui um array `videos` (vazio por padrão).
// Para cadastrar vídeos, basta inserir objetos { title, url }.
// ---------------------------------------------------------
const MODULE1_LESSONS = [
  {
    id: 1,
    slug: "aula-01",
    title: "Introdução à Pseudolinguagem",
    intro:
      "Antes de programar de verdade, vamos entender o que é uma pseudolinguagem e por que o Portugol é a porta de entrada ideal para quem nunca programou.",
    videos: [{ title: "O que é Pseudolinguagem?", url: "https://youtube.com/embed/vkmwefrHqI4" }], // ex.: [{ title: "O que é uma pseudolinguagem?", url: "" }, { title: "Primeiros conceitos", url: "" }]
    body: `
      <h2>O que é uma pseudolinguagem?</h2>
<p>Uma <strong>pseudolinguagem</strong> é uma forma de escrever as instruções de um programa usando palavras que se parecem com o nosso idioma do dia a dia. Em vez de usar comandos em inglês ou símbolos difíceis, você escreve em português — de forma simples e direta.</p>
<p>Ela não roda como um aplicativo de verdade, mas serve para uma coisa muito importante: te ensinar a <em>pensar como um programador</em>.</p>
<div class="callout"><strong>Em uma frase:</strong> pseudolinguagem é programação em português, sem complicação.</div>

<h2>O que é o Portugol?</h2>
<p>O <strong>Portugol</strong> é uma pseudolinguagem criada especialmente para o ensino. Ele foi pensado para que iniciantes aprendam lógica de programação sem precisar lidar com inglês ou regras complicadas logo de início.</p>
<p>O <strong>Portugol Studio</strong> é um programa gratuito que executa o seu código e mostra o resultado na tela — exatamente como uma linguagem de verdade faria. Na próxima aula você vai instalá-lo e já colocar a mão na massa.</p>

<h2>Por que começar por aqui?</h2>
<ul>
  <li>Você foca na <strong>lógica</strong>, sem brigar com inglês ou sintaxe complicada.</li>
  <li>Os erros são mais fáceis de entender — as mensagens fazem sentido para quem está começando.</li>
  <li>Tudo o que você aprender aqui se aplica diretamente a Python, JavaScript, Java e muito mais.</li>
</ul>

<h2>Uma analogia do mundo real</h2>
<p>Imagine que você quer aprender a dirigir. Existe uma diferença enorme entre começar em um carro de passeio comum e aprender direto em um caminhão. O carro simples é o Portugol: seguro, acessível, feito para iniciantes. Depois que você pegar o jeito, migrar para uma linguagem mais avançada fica muito mais fácil — porque a lógica é a mesma.</p>

<h2>O que vem a seguir?</h2>
<p>Agora que você entendeu o que é pseudolinguagem e para que serve o Portugol, a próxima aula é a mais prática até aqui: você vai instalar o Portugol Studio no seu computador e deixar tudo pronto para começar a programar.</p>
    `,
  },
  {
    id: 2,
    slug: "aula-02",
    title: "Instalando o Portugol Studio",
    intro: "Vamos colocar o ambiente em funcionamento para você poder testar tudo o que aprender.",
    videos: [],
    body: `
      <h2>O que é o Portugol Studio?</h2>
<p>O <strong>Portugol Studio</strong> é o programa que você vai usar para escrever e executar seus códigos durante todo esse curso. Ele é gratuito, simples de instalar e funciona em Windows, Mac e Linux.</p>
<p>Pense nele como o seu <em>caderno de programação</em>: é onde você vai escrever, testar e corrigir seus programas.</p>

<h2>Como baixar</h2>
<ol>
  <li>Acesse o site oficial: <strong>portugol.dev</strong></li>
  <li>Clique no botão de download correspondente ao seu sistema operacional.</li>
  <li>Aguarde o download terminar.</li>
</ol>
<div class="callout"><strong>Dica:</strong> não sabe qual é o seu sistema operacional? Se o seu computador for comum, provavelmente é Windows. Se for um Mac da Apple, é macOS.</div>

<h2>Como instalar</h2>
<p>Após o download, abra o arquivo baixado e siga as instruções na tela. A instalação é parecida com qualquer outro programa — você só precisa clicar em "Avançar" algumas vezes até concluir.</p>

<h2>Conhecendo a tela principal</h2>
<p>Ao abrir o Portugol Studio pela primeira vez, você vai ver três áreas principais:</p>
<ul>
  <li><strong>Área de código:</strong> onde você vai escrever seus programas.</li>
  <li><strong>Console:</strong> onde os resultados aparecem quando você executa o programa.</li>
  <li><strong>Botão Executar:</strong> o botão que roda o seu código. Geralmente tem um ícone de triângulo, como um botão de play.</li>
</ul>

<h2>Seu primeiro teste</h2>
<p>Para confirmar que a instalação funcionou, abra o Portugol Studio, digite o código abaixo e clique em executar:</p>
<pre><code>programa {
  funcao inicio() {
    escreva("Portugol Studio instalado com sucesso!")
  }
}</code></pre>
<p>Se a mensagem aparecer no console, está tudo certo. Você está pronto para começar!</p>
<div class="callout"><strong>Não se preocupe ainda com o que esse código significa.</strong> Na próxima aula você vai entender a fundo como funciona a lógica por trás de qualquer programa.</div>

<h2>O que vem a seguir?</h2>
<p>Com o Portugol Studio instalado, a próxima aula vai te mostrar como os programadores pensam — o que é lógica de programação e por que ela é a habilidade mais importante de qualquer desenvolvedor.</p>
    `,
  },
  {
    id: 3,
    slug: "aula-03",
    title: "Lógica de Programação",
    intro: "Programar é, antes de tudo, organizar ideias em uma sequência clara.",
    videos: [{ title: "Lógica de Programação", url: "https://youtube.com/embed/zgxPhei2Udc" }],
    body: `
      <h2>O que é lógica de programação?</h2>
<p>Lógica de programação é a capacidade de <strong>organizar o pensamento em passos claros e ordenados</strong> para resolver um problema. É a habilidade mais importante de um programador — mais do que saber a sintaxe de qualquer linguagem.</p>
<p>Você já usa lógica no dia a dia sem perceber. Quando vai fazer um sanduíche, por exemplo, você segue uma sequência: pega o pão, coloca o recheio, fecha. Se inverter a ordem, o resultado vai ser diferente — e o mesmo acontece na programação.</p>

<h2>Por que a ordem importa?</h2>
<p>Um computador faz exatamente o que você mandar — nem mais, nem menos. Ele não adivinha suas intenções e não corrige seus erros. Por isso, a ordem e a clareza das instruções fazem toda a diferença.</p>
<div class="callout"><strong>Pense assim:</strong> o computador é o funcionário mais obediente do mundo. Ele faz tudo que você pede, mas só o que você pede — e exatamente como você pediu.</div>

<h2>Os três pilares da lógica de programação</h2>
<p>Toda solução em programação é construída com três estruturas básicas. Você vai aprender cada uma delas em detalhes nas próximas aulas, mas já é importante conhecê-las:</p>
<ul>
  <li><strong>Sequência:</strong> as instruções são executadas uma após a outra, em ordem. É o caso mais simples.</li>
  <li><strong>Decisão:</strong> o programa escolhe um caminho ou outro dependendo de uma condição. Exemplo: "se a nota for maior que 7, aprovado; caso contrário, reprovado."</li>
  <li><strong>Repetição:</strong> o programa repete um conjunto de instruções várias vezes. Exemplo: "some todos os números de 1 até 100."</li>
</ul>

<h2>Um exemplo do mundo real</h2>
<p>Imagine que você quer atravessar a rua. A sua lógica é:</p>
<ol>
  <li>Chegar na calçada.</li>
  <li>Olhar para os dois lados.</li>
  <li>Se não houver carros, atravessar. Se houver, esperar.</li>
  <li>Chegar do outro lado.</li>
</ol>
<p>Isso é lógica: uma sequência de passos com uma decisão no meio. Programar é exatamente isso — só que você escreve esses passos de um jeito que o computador entenda.</p>

<h2>O que vem a seguir?</h2>
<p>Agora que você entende o que é lógica de programação, a próxima aula vai formalizar esse conceito: você vai aprender o que é um <strong>algoritmo</strong> — que é justamente a forma de registrar esses passos de maneira organizada.</p>
    `,
  },
  {
    id: 4,
    slug: "aula-04",
    title: "Algoritmo",
    intro: "Algoritmo é uma receita lógica: passos finitos e bem definidos.",
    videos: [
      { title: "O que é Algoritmo?", url: "https://youtube.com/embed/d96hnaGZstI" },
      { title: "Lógica e Algoritmo na Prática", url: "https://youtube.com/embed/YL-75R7D4WE" },
    ],
    body: `
      <h2>O que é um algoritmo?</h2>
<p>Um <strong>algoritmo</strong> é uma sequência de passos organizados para resolver um problema ou realizar uma tarefa. Todo programa que existe — de um jogo a um aplicativo de banco — é, no fundo, um algoritmo.</p>
<p>A palavra pode parecer difícil, mas o conceito é simples: você já cria algoritmos todos os dias sem perceber.</p>
<div class="callout"><strong>Em uma frase:</strong> algoritmo é uma receita de bolo para o computador.</div>

<h2>Algoritmos no dia a dia</h2>
<p>Veja alguns exemplos de algoritmos que você já usa:</p>
<ul>
  <li><strong>Escovar os dentes:</strong> pegar a escova → colocar pasta → escovar → enxaguar → guardar.</li>
  <li><strong>Fazer um café:</strong> ferver a água → colocar o pó no coador → despejar a água → aguardar → servir.</li>
  <li><strong>Sacar dinheiro no caixa eletrônico:</strong> inserir o cartão → digitar a senha → escolher o valor → retirar o dinheiro → pegar o cartão.</li>
</ul>
<p>Todos esses exemplos têm algo em comum: uma <strong>ordem definida</strong>, e se você mudar essa ordem, o resultado muda ou o processo falha.</p>

<h2>As três características de um bom algoritmo</h2>
<ul>
  <li><strong>Claro:</strong> cada passo deve ser fácil de entender, sem ambiguidade.</li>
  <li><strong>Ordenado:</strong> os passos devem estar na sequência certa.</li>
  <li><strong>Com fim:</strong> o algoritmo deve terminar em algum momento — não pode ficar rodando para sempre.</li>
</ul>

<h2>Como um algoritmo vira um programa?</h2>
<p>Primeiro você pensa na solução em português mesmo — descrevendo os passos. Depois você traduz esses passos para uma linguagem que o computador entende, como o Portugol.</p>
<p>Por exemplo, o algoritmo para calcular a média de dois números seria:</p>
<ol>
  <li>Receber o primeiro número.</li>
  <li>Receber o segundo número.</li>
  <li>Somar os dois números.</li>
  <li>Dividir o resultado por 2.</li>
  <li>Mostrar o resultado na tela.</li>
</ol>
<p>Simples assim. Nas próximas aulas você vai aprender a escrever esse tipo de algoritmo diretamente em Portugol.</p>

<h2>O que vem a seguir?</h2>
<p>Agora que você sabe o que é um algoritmo, a próxima aula vai te ensinar a guardar informações dentro de um programa — esse conceito se chama <strong>variável</strong>, e é uma das peças mais importantes da programação.</p>
    `,
  },
  {
    id: 5,
    slug: "aula-05",
    title: "Variáveis",
    intro: "Variáveis são caixinhas com nome onde guardamos informações.",
    videos: [{ title: "O que são Variáveis?", url: "https://youtube.com/embed/2ELYyyGtVp8" }, { title: "Como declarar uma variável", url: "https://youtube.com/embed/3pHiPuAmPBo" }],
    body: `
      <h2>O que é uma variável?</h2>
<p>Uma <strong>variável</strong> é um espaço na memória do computador onde você guarda uma informação. Você dá um nome para esse espaço e pode guardar, ler e alterar o valor que está dentro dele a qualquer momento durante o programa.</p>
<div class="callout"><strong>Pense assim:</strong> uma variável é como uma caixinha com um rótulo. O rótulo é o nome da variável, e o que está dentro da caixinha é o valor dela.</div>

<h2>Por que precisamos de variáveis?</h2>
<p>Sem variáveis, um programa não consegue guardar nenhuma informação. Imagine um jogo que não salva sua pontuação, ou uma calculadora que esquece o número que você digitou. Variáveis são o que permite ao programa <strong>lembrar de coisas</strong>.</p>

<h2>Como criar uma variável no Portugol?</h2>
<p>No Portugol, você cria uma variável informando o tipo de dado e o nome que ela vai ter. Veja o exemplo:</p>
<pre><code>programa {
  funcao inicio() {
    inteiro idade
    idade = 16
    escreva("Minha idade é: ", idade)
  }
}</code></pre>
<p>O que acontece aqui:</p>
<ol>
  <li><code>inteiro idade</code> — cria uma variável chamada <code>idade</code> que vai guardar números inteiros.</li>
  <li><code>idade = 16</code> — coloca o valor 16 dentro dessa variável.</li>
  <li><code>escreva(..., idade)</code> — mostra o valor guardado na tela.</li>
</ol>

<h2>Regras para nomear variáveis</h2>
<ul>
  <li>O nome deve começar com uma letra, nunca com número.</li>
  <li>Não use espaços — se quiser separar palavras, use underline: <code>nome_do_aluno</code>.</li>
  <li>Evite acentos e caracteres especiais: prefira <code>materia</code> em vez de <code>matéria</code>.</li>
  <li>Use nomes que façam sentido: <code>idade</code> é melhor que <code>x</code>.</li>
</ul>
<div class="callout"><strong>Dica:</strong> um bom nome de variável conta uma história. Quem ler o seu código deve entender o que ela guarda sem precisar adivinhar.</div>

<h2>O que vem a seguir?</h2>
<p>Você aprendeu o que é uma variável e como criar uma. Mas variáveis guardam tipos diferentes de informação — número, texto, verdadeiro ou falso. A próxima aula vai explicar esses <strong>tipos de variáveis</strong> em detalhes.</p>
    `,
  },
  {
    id: 6,
    slug: "aula-06",
    title: "Tipos de Variáveis",
    intro: "Cada variável guarda um tipo de informação diferente.",
    videos: [{ title: "Variáveis e tipos de variável", url: "https://youtube.com/embed/2ELYyyGtVp8" }],
    body: `
      <h2>Por que existem tipos diferentes?</h2>
<p>Nem toda informação é igual. O número <strong>10</strong> é diferente do texto <strong>"10"</strong>. Com o número você pode fazer contas; com o texto, não. Por isso, o Portugol — assim como toda linguagem de programação — organiza as variáveis em <strong>tipos</strong>, para que o computador saiba como tratar cada informação.</p>

<h2>Os principais tipos no Portugol</h2>

<h3>inteiro</h3>
<p>Guarda números <strong>sem casas decimais</strong>: 1, 50, -3, 1000.</p>
<pre><code>inteiro quantidade
quantidade = 8</code></pre>
<p>Use para: idade, quantidade de itens, pontuação de jogo, número de alunos.</p>

<h3>real</h3>
<p>Guarda números <strong>com casas decimais</strong>: 3.14, 9.8, -0.5.</p>
<pre><code>real preco
preco = 29.90</code></pre>
<p>Use para: preços, notas, medidas, temperaturas.</p>

<h3>cadeia</h3>
<p>Guarda <strong>textos</strong>. O valor sempre vai entre aspas duplas.</p>
<pre><code>cadeia nome
nome = "Ana"</code></pre>
<p>Use para: nome, endereço, mensagens, qualquer coisa que seja texto.</p>

<h3>logico</h3>
<p>Guarda apenas dois valores possíveis: <strong>verdadeiro</strong> ou <strong>falso</strong>.</p>
<pre><code>logico aprovado
aprovado = verdadeiro</code></pre>
<p>Use para: verificar se algo é verdade ou mentira, ligar/desligar, sim/não.</p>

<h3>caracter</h3>
<p>Guarda um <strong>único caractere</strong>: uma letra, um símbolo ou um número. O valor vai entre aspas simples.</p>
<pre><code>caracter letra
letra = 'A'</code></pre>
<p>Use para: quando você precisar guardar apenas um caractere isolado, como uma opção de menu.</p>

<h2>Como escolher o tipo certo?</h2>
<p>Se pergunte: <em>o que eu vou guardar aqui?</em></p>
<ul>
  <li>Vai fazer conta com esse valor? Use <code>inteiro</code> ou <code>real</code>.</li>
  <li>É um texto ou nome? Use <code>cadeia</code>.</li>
  <li>É uma resposta de sim ou não? Use <code>logico</code>.</li>
  <li>É uma única letra ou símbolo? Use <code>caracter</code>.</li>
</ul>
<div class="callout"><strong>Erro comum:</strong> guardar um número em uma variável do tipo <code>cadeia</code>. O valor <code>"10"</code> é texto — você não consegue fazer <code>"10" + 5</code> para obter 15. Escolha sempre o tipo correto para o que você precisa fazer.</div>

<h2>O que vem a seguir?</h2>
<p>Agora que você sabe criar variáveis e escolher o tipo certo, a próxima aula vai te ensinar a <strong>receber informações do usuário</strong> e <strong>mostrar resultados na tela</strong> — os comandos de entrada e saída de dados.</p>
    `,
  },
  {
    id: 7,
    slug: "aula-07",
    title: "Entrada e Saída de Dados",
    intro: "Aprenda como o programa conversa com o usuário.",
    videos: [{ title: "O que é input e output?", url: "https://youtube.com/embed/UE758q6jkPA" }, { title: "Como usar leia() e escreva()", url: "https://youtube.com/embed/X04hjdJGYZA" }],
    body: `
      <h2>O que é entrada e saída de dados?</h2>
<p>Um programa útil precisa se comunicar com quem está usando. Ele precisa <strong>receber informações</strong> — como o nome do usuário ou um número para calcular — e <strong>mostrar resultados</strong> na tela. Esse processo é chamado de entrada e saída de dados.</p>
<ul>
  <li><strong>Entrada:</strong> o usuário fornece uma informação para o programa.</li>
  <li><strong>Saída:</strong> o programa mostra um resultado para o usuário.</li>
</ul>
<div class="callout"><strong>Analogia:</strong> pense em uma calculadora. Você digita os números (entrada), ela processa e mostra o resultado (saída). Todo programa funciona assim.</div>

<h2>Saída de dados — o comando escreva</h2>
<p>Você já conhece esse comando desde a primeira aula. O <code>escreva()</code> mostra informações na tela.</p>
<pre><code>programa {
  funcao inicio() {
    escreva("Bem-vindo ao sistema!")
  }
}</code></pre>
<p>Você também pode mostrar o valor de uma variável:</p>
<pre><code>programa {
  funcao inicio() {
    cadeia nome
    nome = "Carlos"
    escreva("Olá, ", nome)
  }
}</code></pre>

<h2>Entrada de dados — o comando leia</h2>
<p>O comando <code>leia()</code> faz o programa parar e esperar o usuário digitar uma informação. Esse valor é guardado em uma variável.</p>
<pre><code>programa {
  funcao inicio() {
    cadeia nome
    escreva("Qual é o seu nome? ")
    leia(nome)
    escreva("Olá, ", nome, "!")
  }
}</code></pre>
<p>O que acontece aqui:</p>
<ol>
  <li>O programa pergunta o nome do usuário.</li>
  <li>O usuário digita o nome e pressiona Enter.</li>
  <li>O programa guarda o nome na variável <code>nome</code>.</li>
  <li>O programa exibe uma saudação personalizada.</li>
</ol>

<h2>Juntando tudo — um exemplo completo</h2>
<pre><code>programa {
  funcao inicio() {
    cadeia nome
    inteiro idade
    escreva("Digite seu nome: ")
    leia(nome)
    escreva("Digite sua idade: ")
    leia(idade)
    escreva("Prazer, ", nome, "! Você tem ", idade, " anos.")
  }
}</code></pre>

<h2>Erros comuns</h2>
<ul>
  <li><strong>Usar leia sem declarar a variável antes:</strong> você precisa criar a variável antes de usá-la no <code>leia()</code>.</li>
  <li><strong>Guardar um número em uma variável do tipo cadeia:</strong> se você declarou <code>inteiro idade</code>, o usuário deve digitar apenas números.</li>
  <li><strong>Esquecer de perguntar antes de ler:</strong> sempre use um <code>escreva()</code> antes do <code>leia()</code> para o usuário saber o que digitar.</li>
</ul>

<h2>O que vem a seguir?</h2>
<p>Agora que o programa consegue receber e mostrar informações, a próxima aula vai te ensinar a fazer <strong>cálculos</strong> com esses dados usando os operadores matemáticos.</p>
    `,
  },
  {
    id: 8,
    slug: "aula-08",
    title: "Operadores Matemáticos",
    intro: "Operadores matemáticos são essenciais para realizar cálculos e resolver problemas.",
    videos: [],
    body: `
      <h2>Quando usar operadores matemáticos?</h2>
      <p>
      Os operadores matemáticos são utilizados para realizar cálculos dentro do programa.
      Eles podem ser usados para somar valores, calcular médias, descobrir descontos,
      calcular idade, verificar pontuações e muitas outras situações do dia a dia. Eles funcionam da mesma forma que na matemática, mas com algumas pequenas diferenças de símbolo.
      </p>
      <h2>Exemplos do mundo real</h2>
      <ul>
      <li>Calcular a média de um aluno.</li>
      <li>Calcular o troco de uma compra.</li>
      <li>Descobrir a idade de uma pessoa.</li>
      <li>Calcular a área de um terreno.</li>
      <li>Calcular descontos em produtos.</li>
      </ul>
      <h2>Aritméticos</h2>
      <table class="io">
        <thead><tr><th>Símbolo</th><th>Operação</th><th>Exemplo</th></tr></thead>
        <tbody>
          <tr><td><code>+</code></td><td>Soma</td><td><code>2 + 3 = 5</code></td></tr>
          <tr><td><code>-</code></td><td>Subtração</td><td><code>5 - 2 = 3</code></td></tr>
          <tr><td><code>*</code></td><td>Multiplicação</td><td><code>4 * 3 = 12</code></td></tr>
          <tr><td><code>/</code></td><td>Divisão</td><td><code>10 / 2 = 5</code></td></tr>
          <tr><td><code>%</code></td><td>Resto da divisão</td><td><code>10 % 3 = 1</code></td></tr>
        </tbody>
      </table>
      <h2>Entendendo o operador %</h2>
      <p>
      O operador <code>%</code> retorna o resto de uma divisão.
      Ele é muito utilizado para verificar se um número é par ou ímpar.
      </p>
      <pre><code>inteiro numero = 10
se (numero % 2 == 0)
{
  escreva("Número par")
}</code></pre> 
      <p>
      Como 10 dividido por 2 tem resto 0, o número é par.
      </p> 
      <p>
      O conceito de estruturas condicionais será explorado
      em mais detalhes nos próximos módulos 
      </p>
      <h2>Exemplo</h2>
      <pre><code>inteiro nota1 = 8
inteiro nota2 = 6

real media = (nota1 + nota2) / 2

escreva("Média: ", media)</code></pre>
      <h2>Ordem das operações</h2>
      <p>
      Assim como na matemática tradicional, o Portugol respeita a prioridade dos operadores.
      Multiplicação e divisão são executadas antes de soma e subtração.
      </p>
      <pre><code>inteiro resultado = 2 + 3 * 4
escreva(resultado)</code></pre>
      <p>
      Resultado: 14
      </p>
      <p>
      Primeiro o Portugol faz 3 * 4 = 12.
      Depois realiza 2 + 12 = 14.
      </p>
      <div class="callout"><strong>Dica:</strong> quando estiver em dúvida sobre a ordem, use parênteses. Eles deixam o código mais claro e garantem que o cálculo aconteça na ordem que você quer.</div>

<h2>O que vem a seguir?</h2>
<p>Você já sabe criar variáveis, receber dados do usuário e fazer cálculos. A próxima aula vai fechar o módulo ensinando <strong>boas práticas</strong> — os hábitos que fazem a diferença entre um código bagunçado e um código limpo e profissional.</p>
    `,
  },
  {
    id: 9,
    slug: "aula-09",
    title: "Boas Práticas Iniciais",
    intro: "Pequenos hábitos para escrever código mais limpo desde o início.",
    videos: [],
    body: `
      <h2>O que são boas práticas?</h2>
<p>Boas práticas são <strong>hábitos de escrita de código</strong> que tornam o seu programa mais fácil de ler, entender e corrigir — tanto para você quanto para outras pessoas. Elas não mudam o que o programa faz, mas fazem toda a diferença na qualidade do que você produz.</p>
<div class="callout"><strong>Pense assim:</strong> duas pessoas podem escrever uma redação com as mesmas ideias. Mas uma pode estar cheia de rasuras, sem parágrafos e com letras tortas, enquanto a outra é organizada, com margens e parágrafos claros. O conteúdo é o mesmo, mas a segunda é muito mais fácil de ler. Com código é igual.</div>

<h2>1. Use nomes que façam sentido</h2>
<p>Escolha nomes de variáveis que descrevam o que elas guardam. Evite nomes genéricos como <code>x</code>, <code>y</code> ou <code>a</code>.</p>
<pre><code>// Ruim
inteiro x
x = 18

// Bom
inteiro idade_do_aluno
idade_do_aluno = 18</code></pre>
<p>Quem ler o segundo código entende imediatamente o que está guardado ali. Quem ler o primeiro precisa adivinhar.</p>

<h2>2. Use indentação (recuo) corretamente</h2>
<p>Indentação é o espaço que você coloca antes de cada linha para mostrar que ela está dentro de um bloco. No Portugol Studio, use a tecla <strong>Tab</strong> para indentar.</p>
<pre><code>// Ruim — sem indentação
programa {
funcao inicio() {
cadeia nome
escreva("Digite seu nome: ")
leia(nome)
escreva("Olá, ", nome)
}
}

// Bom — com indentação
programa {
  funcao inicio() {
    cadeia nome
    escreva("Digite seu nome: ")
    leia(nome)
    escreva("Olá, ", nome)
  }
}</code></pre>
<div class="callout"><strong>Dica:</strong> o Portugol Studio indenta automaticamente em muitos casos. Se o seu código estiver desalinhado, verifique se você não apagou os espaços sem querer.</div>

<h2>3. Use comentários para explicar o código</h2>
<p>Comentários são textos dentro do código que o programa ignora completamente — eles existem só para quem está lendo. No Portugol, comentários começam com <code>//</code>.</p>
<pre><code>programa {
  funcao inicio() {
    real nota1, nota2, media

    // Recebe as duas notas do usuário
    escreva("Digite a primeira nota: ")
    leia(nota1)
    escreva("Digite a segunda nota: ")
    leia(nota2)

    // Calcula a média aritmética
    media = (nota1 + nota2) / 2.0

    escreva("Média final: ", media)
  }
}</code></pre>
<p>Use comentários para explicar <em>por que</em> você fez algo, não apenas <em>o que</em> está acontecendo.</p>

<h2>4. Evite repetição desnecessária</h2>
<p>Se você se pegar escrevendo a mesma coisa várias vezes, é sinal de que algo pode ser melhorado. Mais para frente no curso você vai aprender funções e laços de repetição — ferramentas feitas exatamente para isso. Por enquanto, fique atento a esse padrão.</p>

<h2>5. Teste sempre</h2>
<p>Após escrever cada parte do programa, execute e veja se o resultado é o esperado. Não espere terminar tudo para testar — encontrar um erro cedo é muito mais fácil do que procurar um erro escondido em 100 linhas de código.</p>

<h2>Por que isso importa agora?</h2>
<p>Pode parecer desnecessário se preocupar com isso no início, mas os hábitos que você forma agora vão te acompanhar por toda a sua vida como programador. É muito mais difícil corrigir um hábito ruim do que criar um bom desde o começo.</p>

<h2>Você concluiu o Módulo 1!</h2>
<p>Parabéns! Você passou por toda a base da programação: entendeu o que é lógica, o que são algoritmos, como criar e usar variáveis, como se comunicar com o usuário e como escrever um código limpo. No próximo módulo você vai aprender a dar <strong>inteligência</strong> ao seu programa — tomando decisões e repetindo ações com as estruturas de controle.</p>
    `,
  },
];

// Projeto Final do Módulo 1 (estrutura reutilizável para os outros módulos)
const MODULE1_PROJECT = {
  title: "Sistema de Cadastro de Aluno",
  projectVideo: { title: "", url: "" }, // vídeo de resolução completa (preencher futuramente)
};

// =========================================================
// BANCOS DE QUESTÕES — cada aula tem exatamente 10 questões.
// quiz.js sorteia 5 aleatórias por tentativa e embaralha as alternativas.
// =========================================================
const MODULE1_QUIZZES = {
  // ── AULA 01 — Introdução à Pseudolinguagem ──
  "aula-01": [
    {
      q: "O que é uma pseudolinguagem?",
      options: [
        "Uma linguagem de programação usada por profissionais avançados",
        "Uma forma de escrever instruções usando palavras próximas do nosso idioma",
        "Um programa que traduz código para o inglês automaticamente",
        "Um tipo de banco de dados usado em empresas",
      ],
      answer: 1,
      explanation:
        "Pseudolinguagem usa palavras do idioma natural para descrever instruções de um programa. O objetivo é facilitar o aprendizado da lógica, sem exigir conhecimento de inglês ou sintaxe complexa.",
    },
    {
      q: "Qual é o principal objetivo de uma pseudolinguagem?",
      options: [
        "Criar aplicativos prontos para publicar na internet",
        "Substituir permanentemente linguagens como Python e Java",
        "Ensinar o aluno a pensar como um programador, focando na lógica",
        "Traduzir programas escritos em inglês para o português",
      ],
      answer: 2,
      explanation:
        "O foco da pseudolinguagem é desenvolver o raciocínio lógico, não produzir software final. Tudo que você aprende aqui se transfere diretamente para qualquer linguagem de mercado.",
    },
    {
      q: "O que é o Portugol?",
      options: [
        "Um editor de texto para escrever documentos em português",
        "Uma linguagem de programação avançada usada por empresas",
        "Uma pseudolinguagem em português criada para o ensino de lógica",
        "Um sistema operacional desenvolvido no Brasil",
      ],
      answer: 2,
      explanation:
        "Portugol é uma pseudolinguagem em português, criada especificamente para ensinar lógica de programação. Ele não é usado no mercado profissional, mas é ideal para quem está começando.",
    },
    {
      q: "O que o Portugol Studio faz?",
      options: [
        "Ensina inglês para programadores iniciantes",
        "Executa o código Portugol e mostra o resultado na tela",
        "Converte código Portugol em Python automaticamente",
        "Cria sites usando o idioma português",
      ],
      answer: 1,
      explanation:
        "O Portugol Studio é o programa gratuito que executa o código escrito em Portugol e exibe o resultado no console, funcionando como uma linguagem real faria.",
    },
    {
      q: "Por que aprender Portugol antes de linguagens como Python ou JavaScript?",
      options: [
        "Porque Portugol é mais rápido e poderoso do que essas linguagens",
        "Porque Python e JavaScript estão sendo substituídos pelo Portugol",
        "Porque o Portugol permite focar na lógica sem se preocupar com inglês ou sintaxe complexa",
        "Porque o Portugol é obrigatório em todas as faculdades de tecnologia",
      ],
      answer: 2,
      explanation:
        "O Portugol remove as barreiras do inglês e da sintaxe difícil, permitindo que o iniciante aprenda a pensar logicamente. Depois disso, migrar para outra linguagem fica muito mais fácil.",
    },
    {
      q: "Qual afirmação sobre pseudolinguagem é verdadeira?",
      options: [
        "É executada da mesma forma que Python ou Java em qualquer computador",
        "Serve para criar jogos e aplicativos profissionais",
        "Usa palavras próximas do idioma natural para facilitar o aprendizado da lógica",
        "Só pode ser usada por pessoas que já sabem programar em outra linguagem",
      ],
      answer: 2,
      explanation:
        "Esse é o conceito central da aula: pseudolinguagem aproxima a programação do idioma natural para facilitar o aprendizado. Ela é uma ferramenta de ensino, não de desenvolvimento profissional.",
    },
    {
      q: "Qual é a diferença entre Portugol e Portugol Studio?",
      options: [
        "São a mesma coisa, apenas com nomes diferentes",
        "Portugol é a pseudolinguagem; Portugol Studio é o programa que a executa",
        "Portugol Studio é a linguagem; Portugol é o programa que a executa",
        "Portugol é pago; Portugol Studio é a versão gratuita",
      ],
      answer: 1,
      explanation:
        "Portugol é a linguagem em si, com seus comandos e regras. O Portugol Studio é o software que você instala no computador para escrever e executar o código Portugol.",
    },
    {
      q: "Na analogia da aula, o Portugol é comparado a um carro de aprendizado. O que essa analogia quer dizer?",
      options: [
        "Que programar é perigoso e precisa de muito cuidado",
        "Que o Portugol é lento e deve ser evitado por quem já sabe programar",
        "Que o Portugol é um ambiente seguro para aprender os fundamentos antes de partir para algo mais complexo",
        "Que o Portugol só funciona em computadores antigos",
      ],
      answer: 2,
      explanation:
        "A analogia mostra que o Portugol é simples e acessível, assim como um carro de aprendizado é ideal para quem está aprendendo a dirigir. Depois que você domina o básico, migrar para algo mais complexo fica muito mais fácil.",
    },
    {
      q: "O que acontece com o conhecimento adquirido no Portugol quando o aluno migra para outra linguagem?",
      options: [
        "O conhecimento se perde, porque cada linguagem funciona de forma completamente diferente",
        "Apenas os comandos são aproveitados, mas a lógica precisa ser reaprendida",
        "A lógica aprendida se aplica diretamente a linguagens como Python, JavaScript e Java",
        "O aluno precisará começar do zero em qualquer outra linguagem",
      ],
      answer: 2,
      explanation:
        "A lógica de programação é universal. Embora a sintaxe mude de linguagem para linguagem, o raciocínio de como resolver problemas permanece o mesmo.",
    },
    {
      q: "Por que os erros no Portugol são mais fáceis de entender para iniciantes?",
      options: [
        "Porque o Portugol ignora os erros e executa o programa mesmo assim",
        "Porque o Portugol foi criado por brasileiros e por isso nunca apresenta erros",
        "Porque as mensagens de erro são em português e fazem sentido para quem está começando",
        "Porque o Portugol corrige os erros automaticamente sem avisar o programador",
      ],
      answer: 2,
      explanation:
        "Por ser em português, o Portugol apresenta mensagens mais acessíveis para quem ainda está aprendendo. O Portugol não ignora nem corrige erros — ele os aponta para que o programador os resolva.",
    },
  ],

  // ── AULA 02 — Instalando o Portugol Studio ──
  "aula-02": [
    {
      q: "O Portugol Studio está disponível para quais sistemas operacionais?",
      options: ["Apenas Windows", "Apenas Windows e Mac", "Windows, Mac e Linux", "Apenas Linux"],
      answer: 2,
      explanation: "O Portugol Studio é multiplataforma: funciona em Windows, Mac e Linux, todos de forma gratuita.",
    },
    {
      q: "Onde você deve baixar o Portugol Studio?",
      options: [
        "Em qualquer site de downloads da internet",
        "No site oficial portugol.dev",
        "Na loja de aplicativos do celular",
        "No site da Microsoft",
      ],
      answer: 1,
      explanation:
        "O download deve ser feito sempre no site oficial portugol.dev, garantindo que você está instalando a versão correta e segura do programa.",
    },
    {
      q: "Qual é a função do console no Portugol Studio?",
      options: [
        "Onde você escreve o código do programa",
        "Onde os resultados aparecem quando o programa é executado",
        "Onde você salva os arquivos do projeto",
        "Onde você configura as preferências do programa",
      ],
      answer: 1,
      explanation:
        "O console é a área onde o resultado do programa aparece após a execução. É lá que você vai ver as mensagens do escreva() e interagir com o programa quando ele pede informações.",
    },
    {
      q: "Como você executa um programa no Portugol Studio?",
      options: [
        "Fechando e abrindo o programa novamente",
        "Salvando o arquivo em uma pasta específica",
        "Clicando no botão Executar, que tem um ícone de triângulo (play)",
        "Digitando o comando rodar() no final do código",
      ],
      answer: 2,
      explanation:
        "O botão Executar, identificado pelo ícone de triângulo (semelhante ao botão play de um vídeo), é o que inicia a execução do programa no Portugol Studio.",
    },
    {
      q: "Qual código você deve digitar para testar se o Portugol Studio foi instalado corretamente?",
      options: [
        'print("teste")',
        'escreva("teste")',
        'programa { funcao inicio() { escreva("Portugol Studio instalado com sucesso!") } }',
        'inicio { escreva("teste") }',
      ],
      answer: 2,
      explanation:
        "O programa mínimo válido em Portugol precisa da estrutura completa: o bloco programa { }, a funcao inicio() e o comando escreva() dentro dela. Sem essa estrutura, o programa não executa.",
    },
    {
      q: "O que significa ver a mensagem esperada no console após executar o programa de teste?",
      options: [
        "Que o programa tem erros que precisam ser corrigidos",
        "Que a instalação foi concluída com sucesso e o programa está funcionando",
        "Que você precisa reiniciar o computador antes de continuar",
        "Que o Portugol Studio precisa ser atualizado",
      ],
      answer: 1,
      explanation:
        "Se a mensagem aparece no console sem erros, significa que o Portugol Studio foi instalado corretamente e está pronto para ser usado.",
    },
    {
      q: "Qual das três áreas principais do Portugol Studio é onde você escreve o código?",
      options: ["O console", "O botão Executar", "A área de código", "O menu de configurações"],
      answer: 2,
      explanation:
        "A área de código é o editor onde você digita o programa. O console exibe os resultados e o botão Executar inicia a execução. Cada área tem um papel específico.",
    },
    {
      q: "Por que é importante baixar o Portugol Studio apenas do site oficial?",
      options: [
        "Porque em outros sites o programa é pago",
        "Porque o site oficial é o único que tem versão para Windows",
        "Para garantir que você está instalando a versão correta e segura",
        "Porque o site oficial tem uma versão exclusiva com mais recursos",
      ],
      answer: 2,
      explanation:
        "Baixar de fontes não oficiais pode resultar em versões desatualizadas, com erros ou até arquivos maliciosos. O site oficial garante a versão mais recente e confiável.",
    },
    {
      q: "Qual é o custo do Portugol Studio?",
      options: ["Pago mensalmente", "Pago uma única vez", "Totalmente gratuito", "Gratuito apenas por 30 dias"],
      answer: 2,
      explanation:
        "O Portugol Studio é 100% gratuito e de código aberto. Não há cobrança de nenhum tipo para baixar, instalar ou usar o programa.",
    },
    {
      q: "O que a aula recomenda fazer antes de aprender a escrever código de verdade?",
      options: [
        "Decorar todos os comandos do Portugol",
        "Instalar o Portugol Studio e executar o programa de teste para confirmar que funciona",
        "Assistir a todos os vídeos do curso antes de abrir o programa",
        "Criar uma conta no site do Portugol antes de instalar",
      ],
      answer: 1,
      explanation:
        "Antes de escrever qualquer programa real, o mais importante é confirmar que o ambiente está funcionando corretamente. O programa de teste serve exatamente para isso.",
    },
  ],

  // ── AULA 03 — Lógica de Programação ──
  "aula-03": [
    {
      q: "O que é lógica de programação?",
      options: [
        "A capacidade de digitar código rapidamente",
        "A habilidade de memorizar todos os comandos de uma linguagem",
        "A capacidade de organizar o pensamento em passos claros e ordenados para resolver um problema",
        "O conhecimento de inglês necessário para programar",
      ],
      answer: 2,
      explanation:
        "Lógica de programação é sobre pensar de forma organizada e estruturada. É a habilidade mais importante de um programador, mais até do que conhecer a sintaxe de uma linguagem.",
    },
    {
      q: "Por que a ordem das instruções importa em um programa?",
      options: [
        "Não importa, o computador reorganiza as instruções sozinho",
        "Porque o computador executa exatamente o que você manda, na ordem que você mandar",
        "Porque linguagens mais antigas exigiam uma ordem específica",
        "Apenas importa em linguagens como Python, não no Portugol",
      ],
      answer: 1,
      explanation:
        "O computador é obediente, mas não inteligente: ele executa as instruções exatamente como foram escritas, na ordem em que aparecem. Uma ordem errada gera um resultado errado ou um erro.",
    },
    {
      q: "Quais são os três pilares da lógica de programação apresentados na aula?",
      options: [
        "Variáveis, funções e classes",
        "Sequência, decisão e repetição",
        "Entrada, processamento e saída",
        "Algoritmo, código e execução",
      ],
      answer: 1,
      explanation:
        "Toda solução em programação é construída com três estruturas: sequência (passos em ordem), decisão (escolher um caminho) e repetição (repetir ações). Essas estruturas existem em todas as linguagens.",
    },
    {
      q: "O que é a estrutura de sequência?",
      options: [
        "O programa repete uma ação várias vezes",
        "O programa escolhe entre dois caminhos diferentes",
        "As instruções são executadas uma após a outra, em ordem",
        "O programa aguarda uma resposta do usuário",
      ],
      answer: 2,
      explanation:
        "Sequência é a estrutura mais simples: as instruções são executadas de cima para baixo, uma de cada vez, na ordem em que foram escritas.",
    },
    {
      q: "Qual exemplo da vida real melhor representa a estrutura de decisão?",
      options: [
        "Escovar os dentes seguindo sempre os mesmos passos",
        "Repetir a tabuada do 5 dez vezes",
        "Atravessar a rua apenas se não houver carros; caso contrário, esperar",
        "Listar todos os itens de uma compra em ordem",
      ],
      answer: 2,
      explanation:
        "A decisão envolve escolher um caminho com base em uma condição: se não houver carros, atravessa; se houver, espera. Esse 'se... caso contrário' é exatamente o que a estrutura de decisão representa.",
    },
    {
      q: "Qual exemplo da vida real melhor representa a estrutura de repetição?",
      options: [
        "Fazer um sanduíche seguindo os passos em ordem",
        "Escolher qual roupa usar dependendo do clima",
        "Somar todos os números de 1 até 100",
        "Ligar o computador e abrir um programa",
      ],
      answer: 2,
      explanation:
        "Repetição significa executar uma ação várias vezes. Somar de 1 até 100 exigiria repetir a soma 100 vezes — exatamente o que a estrutura de repetição resolve de forma automática.",
    },
    {
      q: "Por que a lógica de programação é considerada mais importante do que conhecer a sintaxe de uma linguagem?",
      options: [
        "Porque sintaxe não existe em linguagens modernas",
        "Porque a sintaxe é sempre igual em todas as linguagens",
        "Porque quem sabe pensar logicamente consegue aprender qualquer linguagem, mas o inverso não é verdade",
        "Porque lógica é mais fácil de aprender do que sintaxe",
      ],
      answer: 2,
      explanation:
        "A sintaxe muda de linguagem para linguagem, mas a lógica é universal. Quem aprende a pensar logicamente consegue resolver problemas em qualquer linguagem, pois sabe estruturar a solução antes de escrever o código.",
    },
    {
      q: "No exemplo do sanduíche apresentado na aula, o que acontece se você inverter a ordem dos passos?",
      options: [
        "Nada muda, o resultado é o mesmo",
        "O resultado ou processo será diferente do esperado",
        "O computador corrige a ordem automaticamente",
        "O programa apresenta um aviso mas continua normalmente",
      ],
      answer: 1,
      explanation:
        "Assim como na programação, a ordem dos passos importa. Se você tentar fechar o sanduíche antes de colocar o recheio, o resultado será diferente. O mesmo vale para instruções em um programa.",
    },
    {
      q: "Qual afirmação melhor descreve o computador do ponto de vista da lógica de programação?",
      options: [
        "O computador é inteligente e corrige os erros do programador",
        "O computador adivinha a intenção do programador quando o código está incompleto",
        "O computador faz exatamente o que você manda, nem mais nem menos",
        "O computador reorganiza as instruções para encontrar a solução mais eficiente",
      ],
      answer: 2,
      explanation:
        "O computador é extremamente obediente, mas não tem iniciativa. Ele executa exatamente o que foi programado, na ordem exata, sem interpretar intenções. Por isso a lógica precisa ser clara e precisa.",
    },
    {
      q: "Qual das opções abaixo é um exemplo de algoritmo do dia a dia?",
      options: [
        "Sentir fome",
        "Pensar em um número",
        "Sacar dinheiro no caixa eletrônico seguindo os passos: inserir cartão, digitar senha, escolher valor, retirar o dinheiro",
        "Gostar de uma música",
      ],
      answer: 2,
      explanation:
        "Um algoritmo é uma sequência de passos organizados para realizar uma tarefa. Sacar dinheiro no caixa tem passos definidos, em ordem certa, com início e fim — exatamente o que define um algoritmo.",
    },
  ],

  // ── AULA 04 — Algoritmo ──
  "aula-04": [
    {
      q: "O que é um algoritmo?",
      options: [
        "Um tipo de linguagem de programação avançada",
        "Uma sequência de passos organizados para resolver um problema ou realizar uma tarefa",
        "Um erro comum que acontece durante a execução de um programa",
        "O nome técnico para o código escrito em Portugol",
      ],
      answer: 1,
      explanation:
        "Um algoritmo é uma sequência de passos organizados com início, meio e fim, criada para resolver um problema específico. Todo programa de computador é, no fundo, um algoritmo.",
    },
    {
      q: "Qual das alternativas é um exemplo de algoritmo do dia a dia?",
      options: [
        "Sentir fome",
        "Pensar em uma solução",
        "Fazer um café: ferver a água, colocar o pó, despejar a água, aguardar, servir",
        "Comprar um computador",
      ],
      answer: 2,
      explanation:
        "Fazer café é um algoritmo: tem passos definidos, em uma ordem específica, com início e fim. Se você mudar a ordem dos passos, o resultado muda — exatamente como em um programa.",
    },
    {
      q: "Qual é a primeira característica de um bom algoritmo segundo a aula?",
      options: [
        "Deve ser escrito em inglês",
        "Deve ser o mais curto possível",
        "Deve ser claro, com cada passo fácil de entender e sem ambiguidade",
        "Deve usar o maior número possível de comandos",
      ],
      answer: 2,
      explanation:
        "Clareza é a primeira característica: cada passo deve ser compreensível, sem dupla interpretação. Um passo ambíguo pode levar o computador — ou outra pessoa — a entender algo diferente do que você quis dizer.",
    },
    {
      q: "Por que um algoritmo precisa ter um fim?",
      options: [
        "Para economizar memória do computador",
        "Porque é uma regra obrigatória do Portugol",
        "Porque um algoritmo que nunca termina não resolve o problema e trava o programa",
        "Para que o resultado apareça mais rápido na tela",
      ],
      answer: 2,
      explanation:
        "Um algoritmo que não tem fim fica em loop eterno, travando o programa sem nunca apresentar um resultado. Todo algoritmo deve ter uma condição de término clara.",
    },
    {
      q: "Qual é a ordem correta para criar um programa usando a abordagem ensinada na aula?",
      options: [
        "Escrever o código primeiro e depois pensar na solução",
        "Pensar na solução em português descrevendo os passos e depois traduzir para o Portugol",
        "Procurar um código pronto na internet e adaptá-lo",
        "Escrever o código e corrigir os erros até funcionar",
      ],
      answer: 1,
      explanation:
        "A abordagem correta é primeiro pensar na solução em linguagem natural, descrevendo os passos claramente. Só depois você traduz esses passos para uma linguagem como o Portugol. Isso evita erros de lógica antes mesmo de escrever uma linha de código.",
    },
    {
      q: "Segundo a aula, qual seria o algoritmo para calcular a média de dois números?",
      options: [
        "Receber dois números, multiplicá-los e mostrar o resultado",
        "Receber dois números, somá-los, dividir por 2 e mostrar o resultado",
        "Receber um número, dividir por 2 e mostrar o resultado",
        "Receber dois números, subtraí-los e mostrar o resultado",
      ],
      answer: 1,
      explanation:
        "A média de dois números é calculada somando-os e dividindo por 2. O algoritmo completo é: receber o primeiro número, receber o segundo, somá-los, dividir por 2 e mostrar o resultado.",
    },
    {
      q: "O que acontece se os passos de um algoritmo não estiverem na ordem correta?",
      options: [
        "O programa executa na ordem certa automaticamente",
        "Nada muda, o resultado é sempre o mesmo",
        "O resultado pode ser errado ou o programa pode falhar",
        "O Portugol avisa o erro antes de executar",
      ],
      answer: 2,
      explanation:
        "A ordem dos passos é essencial. Um algoritmo com passos fora de ordem produz resultados incorretos ou falha na execução, assim como uma receita com os ingredientes adicionados na ordem errada.",
    },
    {
      q: "Por que dizemos que todo programa de computador é um algoritmo?",
      options: [
        "Porque todo programa é escrito em inglês",
        "Porque todo programa tem passos organizados que resolvem um problema específico",
        "Porque todo programa usa as mesmas linguagens de programação",
        "Porque todo programa precisa de uma conexão com a internet",
      ],
      answer: 1,
      explanation:
        "Independente do tamanho ou complexidade, todo programa é uma sequência de passos organizados para resolver um problema — seja um jogo, um aplicativo de banco ou um simples cálculo.",
    },
    {
      q: "Qual das opções abaixo NÃO é uma característica de um bom algoritmo?",
      options: [
        "Ser claro e sem ambiguidade",
        "Ter os passos na ordem correta",
        "Ser escrito obrigatoriamente em inglês",
        "Ter um ponto de início e um ponto de fim",
      ],
      answer: 2,
      explanation:
        "Algoritmos podem ser escritos em qualquer idioma — inclusive em português. O que importa é que sejam claros, ordenados e com fim definido. O idioma é irrelevante para a qualidade do algoritmo.",
    },
    {
      q: "Qual é a analogia usada na aula para explicar o que é um algoritmo?",
      options: [
        "Um mapa de uma cidade",
        "Uma receita de bolo para o computador",
        "Um dicionário de termos técnicos",
        "Um manual de montagem de móveis",
      ],
      answer: 1,
      explanation:
        "A aula compara um algoritmo a uma receita de bolo: ambos têm ingredientes (dados de entrada), passos organizados (instruções) e um resultado esperado (saída). Assim como uma receita guia o cozinheiro, o algoritmo guia o computador.",
    },
  ],

  // ── AULA 05 — Variáveis ──
  "aula-05": [
    {
      q: "O que é uma variável em programação?",
      options: [
        "Um erro que acontece durante a execução do programa",
        "Um espaço na memória do computador onde você guarda uma informação",
        "Um tipo de comando para exibir mensagens na tela",
        "O nome dado ao resultado de um cálculo matemático",
      ],
      answer: 1,
      explanation:
        "Uma variável é um espaço reservado na memória do computador. Você dá um nome a esse espaço e pode guardar, ler e alterar o valor que está dentro dele a qualquer momento durante o programa.",
    },
    {
      q: "Qual analogia a aula usa para explicar uma variável?",
      options: [
        "Um livro com várias páginas",
        "Uma caixinha com um rótulo",
        "Um mapa com marcações",
        "Uma receita com ingredientes",
      ],
      answer: 1,
      explanation:
        "A variável é como uma caixinha: o rótulo é o nome da variável e o que está dentro é o valor. Você pode olhar o conteúdo, trocar o que está dentro ou usar o valor em um cálculo.",
    },
    {
      q: "O que o trecho 'inteiro idade' faz no Portugol?",
      options: [
        "Mostra o valor da variável idade na tela",
        "Cria uma variável chamada idade que guarda números inteiros",
        "Faz um cálculo com o número inteiro da variável",
        "Define que a variável idade não pode ser alterada",
      ],
      answer: 1,
      explanation:
        "Essa linha declara a variável: reserva um espaço na memória com o nome 'idade' e define que esse espaço vai guardar números inteiros. Sem essa declaração, o programa não sabe que a variável existe.",
    },
    {
      q: "O que acontece na linha 'idade = 16' após declarar a variável?",
      options: [
        "Cria uma nova variável chamada 16",
        "Compara o valor de idade com o número 16",
        "Coloca o valor 16 dentro da variável idade",
        "Mostra o número 16 na tela",
      ],
      answer: 2,
      explanation:
        "O sinal de igual em programação não significa 'igual' como na matemática — ele significa 'recebe'. A linha 'idade = 16' coloca o valor 16 dentro da variável idade.",
    },
    {
      q: "Por que variáveis são importantes em um programa?",
      options: [
        "Porque sem elas o programa fica mais lento",
        "Porque sem elas o programa não consegue guardar nenhuma informação",
        "Porque elas deixam o código mais colorido no editor",
        "Porque o Portugol obriga o uso de pelo menos uma variável",
      ],
      answer: 1,
      explanation:
        "Sem variáveis, um programa não consegue lembrar de nenhuma informação. Imagine uma calculadora que esquece o número que você digitou — é exatamente o que aconteceria sem variáveis.",
    },
    {
      q: "Qual dos nomes abaixo é um nome VÁLIDO para uma variável no Portugol?",
      options: ["1nome", "nome do aluno", "nome_do_aluno", "nome@aluno"],
      answer: 2,
      explanation:
        "O nome deve começar com letra, não pode ter espaços nem caracteres especiais como @. O underscore (_) é permitido e muito usado para separar palavras em nomes de variáveis.",
    },
    {
      q: "Por que a aula recomenda usar nomes significativos para as variáveis?",
      options: [
        "Porque o Portugol só aceita nomes longos",
        "Para que qualquer pessoa que ler o código entenda o que a variável guarda sem precisar adivinhar",
        "Porque nomes curtos como x causam erros de execução",
        "Para que o programa execute mais rápido",
      ],
      answer: 1,
      explanation:
        "Um bom nome de variável conta uma história. 'idade_do_aluno' é muito mais claro que 'x'. Código é lido por pessoas, então clareza é tão importante quanto funcionamento.",
    },
    {
      q: "O que o comando 'escreva(\"Minha idade é: \", idade)' faz?",
      options: [
        "Guarda o texto 'Minha idade é' na variável idade",
        "Cria uma nova variável com o texto e o número juntos",
        "Mostra o texto e o valor guardado na variável idade na tela",
        "Compara o texto com o valor da variável",
      ],
      answer: 2,
      explanation:
        "O escreva() pode receber vários valores separados por vírgula e os exibe todos na sequência. Nesse caso, mostra o texto fixo e logo em seguida o valor que está dentro da variável idade.",
    },
    {
      q: "É possível alterar o valor de uma variável depois de atribuí-lo?",
      options: [
        "Não, uma vez atribuído o valor não pode ser alterado",
        "Sim, você pode atribuir um novo valor a qualquer momento durante o programa",
        "Apenas se você criar uma nova variável com outro nome",
        "Apenas se o tipo da variável for cadeia",
      ],
      answer: 1,
      explanation:
        "Variável significa justamente que o valor pode variar. Você pode atribuir um valor, usar ele em um cálculo, e depois atribuir um novo valor à mesma variável. Isso é fundamental para que os programas funcionem dinamicamente.",
    },
    {
      q: "Qual das alternativas abaixo representa a criação e uso corretos de uma variável no Portugol?",
      options: [
        "escreva(inteiro pontuacao)",
        "inteiro pontuacao = leia()",
        "inteiro pontuacao \n pontuacao = 100 \n escreva(pontuacao)",
        "variavel pontuacao = 100",
      ],
      answer: 2,
      explanation:
        "O processo correto é: primeiro declarar a variável com seu tipo (inteiro pontuacao), depois atribuir um valor (pontuacao = 100) e então usar a variável (escreva(pontuacao)). Essa sequência é obrigatória.",
    },
  ],

  // ── AULA 06 — Tipos de Variáveis ──
  "aula-06": [
    {
      q: "Por que existem tipos diferentes de variáveis?",
      options: [
        "Para deixar o código mais colorido no editor",
        "Porque o computador precisa saber como tratar cada tipo de informação",
        "Para dificultar o aprendizado de iniciantes",
        "Porque cada tipo ocupa exatamente o mesmo espaço na memória",
      ],
      answer: 1,
      explanation:
        "O tipo define como o computador vai armazenar e tratar a informação. O número 10 e o texto '10' parecem iguais para nós, mas para o computador são coisas completamente diferentes: com um você faz contas, com o outro não.",
    },
    {
      q: "Qual tipo de variável você deve usar para guardar a idade de uma pessoa?",
      options: ["real", "cadeia", "inteiro", "logico"],
      answer: 2,
      explanation:
        "Idade é um número sem casas decimais (16, 25, 40), então o tipo correto é inteiro. Usar real seria desnecessário e usar cadeia impediria cálculos com esse valor.",
    },
    {
      q: "Qual tipo de variável você deve usar para guardar o preço de um produto?",
      options: ["inteiro", "real", "logico", "caracter"],
      answer: 1,
      explanation:
        "Preços geralmente têm casas decimais (29.90, 149.99), então o tipo correto é real. Se você usar inteiro, a parte decimal seria perdida.",
    },
    {
      q: "Qual tipo de variável você deve usar para guardar o nome de um aluno?",
      options: ["inteiro", "caracter", "logico", "cadeia"],
      answer: 3,
      explanation:
        "Nome é um texto com vários caracteres, então o tipo correto é cadeia. O tipo caracter guarda apenas um único caractere — seria insuficiente para um nome completo.",
    },
    {
      q: "Qual tipo de variável guarda apenas os valores verdadeiro ou falso?",
      options: ["inteiro", "cadeia", "logico", "real"],
      answer: 2,
      explanation:
        "O tipo logico guarda apenas dois estados possíveis: verdadeiro ou falso. É ideal para representar situações de sim/não, ligado/desligado, aprovado/reprovado.",
    },
    {
      q: "Qual é a diferença entre os tipos cadeia e caracter?",
      options: [
        "Não há diferença, são sinônimos no Portugol",
        "cadeia guarda textos completos; caracter guarda apenas um único caractere",
        "caracter guarda textos completos; cadeia guarda apenas um único caractere",
        "cadeia é para números; caracter é para letras",
      ],
      answer: 1,
      explanation:
        "cadeia guarda textos de qualquer tamanho, como 'Ana Maria'. caracter guarda um único símbolo, como a letra 'A' ou o número '5'. O valor do caracter vai entre aspas simples, e o da cadeia entre aspas duplas.",
    },
    {
      q: "O que acontece se você tentar guardar o texto '10' em uma variável inteiro e depois somar com 5?",
      options: [
        "O resultado será 15 normalmente",
        "Isso não é possível porque '10' como texto não pode ser guardado em uma variável inteiro",
        "O programa transforma automaticamente o texto em número",
        "O programa soma os caracteres e retorna 105",
      ],
      answer: 1,
      explanation:
        "Uma variável do tipo inteiro só aceita números, não texto. O valor '10' entre aspas é texto (cadeia), não um número. Tentar guardar texto em uma variável inteiro causará um erro.",
    },
    {
      q: "Como se declara corretamente uma variável do tipo cadeia no Portugol?",
      options: ["texto nome", "string nome", "cadeia nome", "char nome"],
      answer: 2,
      explanation:
        "No Portugol, o tipo para textos se chama cadeia. Outras linguagens usam string ou char, mas no Portugol o termo é cadeia, que é a palavra em português para 'sequência de caracteres'.",
    },
    {
      q: "Qual tipo de variável seria mais adequado para guardar se um aluno está matriculado ou não?",
      options: [
        "inteiro, usando 0 para não e 1 para sim",
        "cadeia, usando 'sim' ou 'nao'",
        "logico, usando verdadeiro ou falso",
        "caracter, usando 'S' ou 'N'",
      ],
      answer: 2,
      explanation:
        "Situações de sim/não são feitas para o tipo logico. Embora seja possível usar inteiro ou cadeia para isso, o logico é mais claro, mais semântico e é exatamente para isso que ele existe.",
    },
    {
      q: "Qual pergunta a aula sugere que você faça para escolher o tipo correto de variável?",
      options: [
        "Qual linguagem de programação estou usando?",
        "O que eu vou guardar aqui?",
        "Quantos caracteres esse valor vai ter?",
        "Esse valor vai ser exibido na tela?",
      ],
      answer: 1,
      explanation:
        "Perguntar 'o que eu vou guardar aqui?' é a forma mais direta de escolher o tipo certo. Se vai fazer conta: inteiro ou real. Se é texto: cadeia. Se é sim/não: logico. Se é um único símbolo: caracter.",
    },
  ],

  // ── AULA 07 — Entrada e Saída de Dados ──
  "aula-07": [
    {
      q: "O que significa 'entrada de dados' em um programa?",
      options: [
        "O programa mostra informações na tela para o usuário",
        "O usuário fornece uma informação para o programa",
        "O programa salva um arquivo no computador",
        "O programa conecta com a internet para buscar dados",
      ],
      answer: 1,
      explanation:
        "Entrada de dados é quando o usuário fornece uma informação ao programa — como digitar um nome ou um número. É o fluxo de fora para dentro: do usuário para o programa.",
    },
    {
      q: "O que significa 'saída de dados' em um programa?",
      options: [
        "O usuário digita uma informação",
        "O programa encerra a execução",
        "O programa mostra um resultado ou mensagem para o usuário",
        "O programa apaga os dados da memória",
      ],
      answer: 2,
      explanation:
        "Saída de dados é quando o programa exibe alguma informação para o usuário — um resultado, uma mensagem, um valor calculado. É o fluxo de dentro para fora: do programa para o usuário.",
    },
    {
      q: "Qual comando é usado para mostrar informações na tela no Portugol?",
      options: ["leia()", "mostrar()", "print()", "escreva()"],
      answer: 3,
      explanation:
        "O escreva() é o comando de saída do Portugol. Ele exibe o que estiver entre os parênteses no console — seja um texto fixo, o valor de uma variável ou os dois juntos.",
    },
    {
      q: "Qual comando é usado para receber uma informação digitada pelo usuário no Portugol?",
      options: ["escreva()", "leia()", "receber()", "entrada()"],
      answer: 1,
      explanation:
        "O leia() é o comando de entrada do Portugol. Quando o programa chega nessa linha, ele para e espera o usuário digitar algo. O valor digitado é guardado na variável indicada dentro dos parênteses.",
    },
    {
      q: "O que acontece quando o programa executa o comando leia(nome)?",
      options: [
        "O programa mostra o valor da variável nome na tela",
        "O programa cria uma nova variável chamada nome",
        "O programa para, espera o usuário digitar e guarda o valor na variável nome",
        "O programa busca o nome do usuário automaticamente no sistema",
      ],
      answer: 2,
      explanation:
        "O leia() pausa a execução do programa e aguarda o usuário digitar algo e pressionar Enter. O valor digitado é então guardado na variável especificada — nesse caso, nome.",
    },
    {
      q: "Por que a aula recomenda usar escreva() antes de cada leia()?",
      options: [
        "Porque o Portugol exige essa ordem obrigatoriamente",
        "Para que o usuário saiba o que o programa está pedindo para digitar",
        "Para que o valor seja guardado corretamente na variável",
        "Porque sem o escreva() o leia() não funciona",
      ],
      answer: 1,
      explanation:
        "Sem uma mensagem antes, o programa simplesmente trava esperando uma entrada e o usuário não sabe o que deve digitar. O escreva() antes do leia() é uma boa prática de comunicação com o usuário.",
    },
    {
      q: "Qual é o erro no código a seguir? \n cadeia nome \n leia(nome) \n escreva('Olá, ', nome)",
      options: [
        "A variável nome foi declarada com o tipo errado",
        "O escreva() está depois do leia(), o que é inválido",
        "Falta um escreva() antes do leia() para informar ao usuário o que digitar",
        "Não há nenhum erro, o código está correto",
      ],
      answer: 2,
      explanation:
        "O código funciona, mas tem um problema de usabilidade: o programa vai parar e esperar uma digitação sem avisar ao usuário o que ele deve digitar. Sempre use escreva() antes do leia() para orientar quem está usando o programa.",
    },
    {
      q: "Como o escreva() exibe o texto e o valor de uma variável juntos?",
      options: [
        "Usando um + entre o texto e a variável",
        "Separando o texto e a variável por vírgula dentro do escreva()",
        "Usando dois escreva() separados, um para cada parte",
        "Criando uma variável nova que junta o texto com o valor",
      ],
      answer: 1,
      explanation:
        "O escreva() aceita vários valores separados por vírgula e os exibe na sequência. Por exemplo: escreva('Olá, ', nome) vai mostrar o texto 'Olá, ' seguido do valor que está na variável nome.",
    },
    {
      q: "Qual é a analogia usada na aula para explicar entrada e saída de dados?",
      options: [
        "Um livro que você lê e depois escreve comentários",
        "Uma calculadora: você digita os números (entrada) e ela mostra o resultado (saída)",
        "Um telefone que recebe e faz ligações",
        "Um carro que você abastece e que produz movimento",
      ],
      answer: 1,
      explanation:
        "A calculadora é a analogia perfeita: você insere os números (entrada), ela processa e exibe o resultado (saída). Todo programa funciona nesse mesmo fluxo de entrada, processamento e saída.",
    },
    {
      q: "No exemplo completo da aula, qual é a ordem correta das operações?",
      options: [
        "leia o nome → escreva a pergunta → leia a idade → exiba o resultado",
        "escreva a pergunta do nome → leia o nome → escreva a pergunta da idade → leia a idade → exiba o resultado",
        "escreva tudo → leia tudo → exiba o resultado",
        "leia o nome e a idade juntos → exiba o resultado",
      ],
      answer: 1,
      explanation:
        "A ordem correta é sempre: mostrar o que o programa pede (escreva), receber a resposta (leia) — repetindo para cada informação — e por fim exibir o resultado. Cada pergunta deve ser feita e respondida antes de partir para a próxima.",
    },
  ],

  // ── AULA 08 — Operadores Matemáticos ──
  "aula-08": [
    {
      q: "Qual símbolo representa a multiplicação no Portugol?",
      options: ["x", "×", "*", "#"],
      answer: 2,
      explanation:
        "No Portugol — e na maioria das linguagens de programação — a multiplicação é representada pelo asterisco (*). O símbolo × da matemática não é reconhecido pelo programa.",
    },
    {
      q: "Qual símbolo representa a divisão no Portugol?",
      options: ["÷", ":", "\\", "/"],
      answer: 3,
      explanation:
        "A divisão é representada pela barra (/) no Portugol e em praticamente todas as linguagens de programação. O símbolo ÷ da matemática não é utilizado.",
    },
    {
      q: "O que é o operador módulo (%)?",
      options: [
        "O resultado da divisão entre dois números",
        "O resto que sobra de uma divisão inteira",
        "A porcentagem de um número",
        "A diferença entre dois números",
      ],
      answer: 1,
      explanation:
        "O módulo (%) retorna o resto da divisão inteira. Por exemplo, 10 % 3 = 1, porque 10 dividido por 3 dá 3 com resto 1. Ele não tem relação com porcentagem.",
    },
    {
      q: "Qual é o resultado de 10 % 2 no Portugol?",
      options: ["5", "2", "0", "1"],
      answer: 2,
      explanation:
        "10 dividido por 2 é exatamente 5, sem resto. Portanto, 10 % 2 = 0. Sempre que o módulo de um número for 0, isso significa que ele é divisível por aquele divisor — no caso, 10 é divisível por 2, logo é par.",
    },
    {
      q: "Por que a aula recomenda usar o tipo real ao fazer divisões que precisam de casas decimais?",
      options: [
        "Porque o tipo inteiro não aceita o operador /",
        "Porque dividir dois inteiros no Portugol descarta a parte decimal do resultado",
        "Porque o tipo real é mais rápido para cálculos",
        "Porque o Portugol exige o tipo real para qualquer operação matemática",
      ],
      answer: 1,
      explanation:
        "Quando você divide dois inteiros no Portugol, o resultado é truncado — a parte decimal é perdida. Para obter um resultado como 2.5, pelo menos um dos valores deve ser real, como em 10.0 / 4.0.",
    },
    {
      q: "Qual é a ordem de precedência dos operadores no Portugol?",
      options: [
        "Adição e subtração primeiro, depois multiplicação e divisão",
        "Todos os operadores têm a mesma prioridade",
        "Parênteses primeiro, depois multiplicação e divisão, depois adição e subtração",
        "Multiplicação e divisão primeiro, depois parênteses, depois adição e subtração",
      ],
      answer: 2,
      explanation:
        "A ordem segue a mesma da matemática: parênteses têm prioridade máxima, depois multiplicação e divisão, por último adição e subtração. Use parênteses quando estiver em dúvida para garantir a ordem correta.",
    },
    {
      q: "Qual é o resultado de 2 + 3 * 4 no Portugol?",
      options: ["20", "14", "24", "10"],
      answer: 1,
      explanation:
        "Pela ordem de precedência, a multiplicação é feita primeiro: 3 * 4 = 12. Depois a adição: 2 + 12 = 14. Se você quisesse que a adição fosse feita primeiro, precisaria usar parênteses: (2 + 3) * 4 = 20.",
    },
    {
      q: "Para que serve o operador módulo (%) na prática?",
      options: [
        "Para calcular porcentagens",
        "Para verificar se um número é par ou ímpar, entre outros usos",
        "Para arredondar um número para a casa decimal mais próxima",
        "Para converter um número real em inteiro",
      ],
      answer: 1,
      explanation:
        "O módulo tem vários usos práticos. O mais comum é verificar paridade: se numero % 2 = 0, o número é par; se = 1, é ímpar. Ele também é usado para criar ciclos, verificar divisibilidade e muito mais.",
    },
    {
      q: "No exemplo da aula, por que a média é calculada como (nota1 + nota2) / 2.0 e não nota1 + nota2 / 2?",
      options: [
        "Não há diferença entre as duas formas",
        "Porque sem os parênteses, só nota2 seria dividida por 2, dando um resultado errado",
        "Porque o Portugol exige parênteses em todos os cálculos",
        "Porque a variável media é do tipo inteiro",
      ],
      answer: 1,
      explanation:
        "Sem os parênteses, a divisão tem prioridade sobre a adição. O programa calcularia nota1 + (nota2 / 2), que é matematicamente errado para uma média. Os parênteses garantem que a soma acontece antes da divisão.",
    },
    {
      q: "Qual é a forma correta de calcular a média de duas notas no Portugol?",
      options: [
        "media = nota1 + nota2 / 2.0",
        "media = nota1, nota2 / 2.0",
        "media = (nota1 + nota2) / 2.0",
        "media = [nota1 + nota2] / 2.0",
      ],
      answer: 2,
      explanation:
        "Os parênteses são essenciais: eles garantem que nota1 e nota2 sejam somadas antes de dividir por 2. O .0 no divisor garante que o resultado seja um número real, preservando as casas decimais.",
    },
  ],

  // ── AULA 09 — Boas Práticas Iniciais ──
  "aula-09": [
    {
      q: "O que são boas práticas de programação?",
      options: [
        "Regras obrigatórias que, se descumpridas, causam erros no programa",
        "Hábitos de escrita de código que tornam o programa mais fácil de ler, entender e corrigir",
        "Técnicas avançadas usadas apenas por programadores profissionais",
        "Comandos especiais que aceleram a execução do programa",
      ],
      answer: 1,
      explanation:
        "Boas práticas não afetam o que o programa faz, mas afetam muito a qualidade de como ele é escrito. Um código com boas práticas é mais fácil de ler, corrigir e evoluir — tanto para você quanto para outras pessoas.",
    },
    {
      q: "Por que a aula recomenda usar nomes significativos para variáveis?",
      options: [
        "Porque o Portugol não aceita nomes curtos como x ou y",
        "Para que qualquer pessoa que ler o código entenda o que a variável guarda sem precisar adivinhar",
        "Porque nomes longos fazem o programa executar mais rápido",
        "Para evitar conflitos com os comandos do Portugol",
      ],
      answer: 1,
      explanation:
        "Código é lido por pessoas. Um nome como 'idade_do_aluno' comunica imediatamente o que a variável guarda. Um nome como 'x' obriga quem lê a descobrir o significado analisando o restante do código.",
    },
    {
      q: "O que é indentação?",
      options: [
        "Um tipo especial de comentário no código",
        "O espaço colocado antes das linhas para mostrar que elas pertencem a um bloco",
        "Um comando do Portugol para organizar as variáveis",
        "O processo de testar o programa várias vezes",
      ],
      answer: 1,
      explanation:
        "Indentação é o recuo visual que você aplica às linhas de código para mostrar que elas estão dentro de um bloco. No Portugol Studio, usa-se a tecla Tab. Um código sem indentação é muito mais difícil de ler e entender.",
    },
    {
      q: "Qual é a função de um comentário no código?",
      options: [
        "Executar uma ação especial quando o programa rodar",
        "Aumentar a velocidade de execução do programa",
        "Adicionar um texto explicativo que o programa ignora completamente, existindo apenas para quem lê o código",
        "Substituir uma variável por um valor fixo",
      ],
      answer: 2,
      explanation:
        "Comentários são completamente ignorados durante a execução. Eles existem para explicar o código para quem está lendo — inclusive para você mesmo no futuro, quando voltar a um código que escreveu há semanas.",
    },
    {
      q: "Como se escreve um comentário no Portugol?",
      options: ["/* comentário */", "# comentário", "<!-- comentário -->", "// comentário"],
      answer: 3,
      explanation:
        "No Portugol, comentários de linha são iniciados com //. Tudo que vier depois dessas duas barras na mesma linha é ignorado pelo programa. É o mesmo símbolo usado em linguagens como C, Java e JavaScript.",
    },
    {
      q: "Qual é a analogia usada na aula para explicar a diferença entre código com e sem boas práticas?",
      options: [
        "Um mapa organizado versus um mapa rasurado",
        "Uma redação com ideias claras versus uma cheia de rasuras, sem parágrafos e com letras tortas",
        "Uma casa arrumada versus uma casa bagunçada",
        "Um livro com índice versus um livro sem índice",
      ],
      answer: 1,
      explanation:
        "A aula compara dois códigos com o mesmo conteúdo a duas redações com as mesmas ideias: uma organizada com parágrafos e margens, outra cheia de rasuras. O conteúdo é igual, mas a segunda é muito mais difícil de ler.",
    },
    {
      q: "Qual é o melhor momento para testar o programa, segundo a aula?",
      options: [
        "Apenas ao final, quando o programa estiver completamente pronto",
        "Após cada parte escrita, para encontrar erros cedo",
        "Apenas quando um erro aparecer na tela",
        "Uma vez por dia, independente do andamento do código",
      ],
      answer: 1,
      explanation:
        "Encontrar um erro logo após ele ser criado é muito mais fácil do que procurá-lo em 100 linhas de código. Testar frequentemente é uma das práticas mais valiosas que um programador pode ter.",
    },
    {
      q: "O que a aula diz sobre o impacto dos hábitos formados no início do aprendizado?",
      options: [
        "Hábitos iniciais não importam porque você vai reescrever tudo quando souber mais",
        "Os hábitos que você forma agora vão te acompanhar por toda a vida como programador",
        "Hábitos só importam para programadores profissionais, não para iniciantes",
        "Boas práticas são importantes apenas em projetos grandes",
      ],
      answer: 1,
      explanation:
        "É muito mais difícil corrigir um hábito ruim consolidado do que criar um bom hábito desde o início. Por isso, boas práticas devem ser aprendidas e aplicadas desde a primeira linha de código.",
    },
    {
      q: "O que a aula sugere que você faça quando percebe que está repetindo o mesmo trecho de código várias vezes?",
      options: [
        "Continuar repetindo, pois é a forma mais segura de programar",
        "Apagar as repetições e deixar o código incompleto",
        "Ficar atento a esse padrão, pois repetição excessiva é sinal de que algo pode ser melhorado",
        "Copiar e colar o trecho o máximo de vezes possível para garantir que funcione",
      ],
      answer: 2,
      explanation:
        "Repetição excessiva no código é um sinal de que existe uma solução melhor. A aula indica que mais à frente você aprenderá funções e laços de repetição, que são as ferramentas criadas exatamente para eliminar essa redundância.",
    },
    {
      q: "Qual das opções abaixo representa um comentário bem escrito, seguindo a recomendação da aula?",
      options: [
        "// soma os dois numeros",
        "// aqui o programa faz uma coisa",
        "// calcula a media aritmetica das duas notas para verificar aprovacao",
        "// linha 5",
      ],
      answer: 2,
      explanation:
        "A aula recomenda comentar o 'porquê', não apenas o 'o quê'. O comentário da opção C explica o propósito da operação (calcular a média para verificar aprovação), o que é muito mais útil do que apenas descrever o que está acontecendo mecanicamente.",
    },
  ],
};

// =========================================================
// QUESTIONÁRIO FINAL — banco de 50 questões.
// quiz-engine.js sorteia 25 e embaralha alternativas.
// =========================================================
const FINAL_QUIZ = [
  {
    q: "O que é uma pseudolinguagem?",
    options: [
      "Uma linguagem usada por profissionais avançados",
      "Uma forma de escrever instruções usando palavras próximas do idioma natural",
      "Um programa que traduz código para o inglês",
      "Um tipo de banco de dados",
    ],
    answer: 1,
    explanation:
      "Pseudolinguagem usa palavras do idioma natural para descrever instruções de um programa, facilitando o aprendizado da lógica.",
  },
  {
    q: "O Portugol é classificado como:",
    options: ["Linguagem de máquina", "Pseudolinguagem em português", "Sistema operacional", "Editor de texto"],
    answer: 1,
    explanation: "Portugol é uma pseudolinguagem em português criada para o ensino de lógica de programação.",
  },
  {
    q: "Qual é o principal objetivo do Portugol?",
    options: [
      "Criar aplicativos profissionais",
      "Ensinar lógica de programação de forma acessível",
      "Substituir Python no mercado",
      "Desenvolver jogos 3D",
    ],
    answer: 1,
    explanation:
      "O Portugol existe para ensinar lógica. Tudo que você aprende nele se transfere para qualquer outra linguagem.",
  },
  {
    q: "O Portugol Studio é:",
    options: [
      "Uma linguagem de programação avançada",
      "Um site de cursos online",
      "O programa gratuito que executa código Portugol",
      "Um sistema operacional brasileiro",
    ],
    answer: 2,
    explanation: "O Portugol Studio é o software gratuito onde você escreve e executa seus programas em Portugol.",
  },
  {
    q: "Em qual função todo programa Portugol começa?",
    options: ["main()", "inicio()", "start()", "principal()"],
    answer: 1,
    explanation: "A funcao inicio() é o ponto de partida obrigatório de todo programa Portugol.",
  },
  {
    q: "Qual bloco envolve todo o código em um programa Portugol?",
    options: ["inicio { }", "funcao { }", "programa { }", "codigo { }"],
    answer: 2,
    explanation: "Todo código Portugol precisa estar dentro do bloco programa { }. Sem ele, o programa não é válido.",
  },
  {
    q: "Qual comando exibe uma mensagem na tela no Portugol?",
    options: ["print()", "mostrar()", "exibir()", "escreva()"],
    answer: 3,
    explanation: "O escreva() é o comando de saída do Portugol. Ele exibe textos, valores e variáveis no console.",
  },
  {
    q: "O Portugol Studio está disponível para quais sistemas operacionais?",
    options: ["Apenas Windows", "Apenas Windows e Mac", "Windows, Mac e Linux", "Apenas Linux"],
    answer: 2,
    explanation: "O Portugol Studio é multiplataforma e funciona em Windows, Mac e Linux, todos gratuitamente.",
  },
  {
    q: "Onde o Portugol Studio deve ser baixado?",
    options: [
      "Em qualquer site de downloads",
      "Na loja de aplicativos do celular",
      "No site oficial portugol.dev",
      "No site da Microsoft",
    ],
    answer: 2,
    explanation: "O download deve ser feito no site oficial portugol.dev para garantir a versão correta e segura.",
  },
  {
    q: "Qual área do Portugol Studio exibe os resultados do programa?",
    options: ["A área de código", "O console", "O menu de configurações", "A barra de ferramentas"],
    answer: 1,
    explanation:
      "O console é onde os resultados aparecem após a execução do programa. É lá que o escreva() exibe as mensagens.",
  },
  {
    q: "O que é lógica de programação?",
    options: [
      "A capacidade de digitar código rapidamente",
      "A habilidade de memorizar comandos de uma linguagem",
      "A capacidade de organizar o pensamento em passos claros para resolver um problema",
      "O conhecimento de inglês necessário para programar",
    ],
    answer: 2,
    explanation:
      "Lógica de programação é sobre pensar de forma organizada. É a habilidade mais importante de um programador.",
  },
  {
    q: "Por que a ordem das instruções importa em um programa?",
    options: [
      "Não importa, o computador reorganiza sozinho",
      "Porque o computador executa exatamente o que você manda, na ordem que você mandar",
      "Apenas importa em linguagens avançadas",
      "Porque o Portugol exige uma ordem específica por regra",
    ],
    answer: 1,
    explanation:
      "O computador é obediente mas não inteligente: executa as instruções na ordem exata em que foram escritas, sem interpretar intenções.",
  },
  {
    q: "Quais são os três pilares da lógica de programação?",
    options: [
      "Variáveis, funções e classes",
      "Sequência, decisão e repetição",
      "Entrada, processamento e saída",
      "Algoritmo, código e execução",
    ],
    answer: 1,
    explanation:
      "Toda solução em programação é construída com sequência (passos em ordem), decisão (escolher um caminho) e repetição (repetir ações).",
  },
  {
    q: "O que representa a estrutura de sequência?",
    options: [
      "O programa repete uma ação várias vezes",
      "O programa escolhe entre dois caminhos",
      "As instruções são executadas uma após a outra, em ordem",
      "O programa aguarda uma resposta do usuário",
    ],
    answer: 2,
    explanation:
      "Sequência é a estrutura mais simples: as instruções são executadas de cima para baixo, uma de cada vez, na ordem em que foram escritas.",
  },
  {
    q: "Qual exemplo do dia a dia representa melhor a estrutura de decisão?",
    options: [
      "Escovar os dentes seguindo sempre os mesmos passos",
      "Repetir a tabuada do 5 dez vezes",
      "Atravessar a rua apenas se não houver carros; caso contrário, esperar",
      "Listar os itens de uma compra em ordem",
    ],
    answer: 2,
    explanation:
      "Decisão envolve escolher um caminho com base em uma condição: se não houver carros, atravessa; se houver, espera.",
  },
  {
    q: "O que é um algoritmo?",
    options: [
      "Um tipo de linguagem de programação avançada",
      "Uma sequência de passos organizados para resolver um problema",
      "Um erro comum durante a execução de programas",
      "O nome técnico para o código escrito em Portugol",
    ],
    answer: 1,
    explanation:
      "Um algoritmo é uma sequência de passos organizados com início, meio e fim, criada para resolver um problema específico.",
  },
  {
    q: "Qual analogia a aula usa para explicar o que é um algoritmo?",
    options: [
      "Um mapa de uma cidade",
      "Uma receita de bolo para o computador",
      "Um dicionário de termos técnicos",
      "Um manual de montagem de móveis",
    ],
    answer: 1,
    explanation:
      "Assim como uma receita tem ingredientes e passos organizados, um algoritmo tem dados de entrada e instruções que levam a um resultado.",
  },
  {
    q: "Qual das opções NÃO é uma característica de um bom algoritmo?",
    options: [
      "Ser claro e sem ambiguidade",
      "Ter os passos na ordem correta",
      "Ser escrito obrigatoriamente em inglês",
      "Ter um ponto de início e um ponto de fim",
    ],
    answer: 2,
    explanation:
      "Algoritmos podem ser escritos em qualquer idioma. O que importa é que sejam claros, ordenados e com fim definido.",
  },
  {
    q: "O que é uma variável em programação?",
    options: [
      "Um erro que acontece durante a execução",
      "Um espaço na memória do computador onde se guarda uma informação",
      "Um comando para exibir mensagens na tela",
      "O resultado de um cálculo matemático",
    ],
    answer: 1,
    explanation:
      "Uma variável é um espaço reservado na memória com um nome. Você pode guardar, ler e alterar o valor que está nesse espaço.",
  },
  {
    q: "Qual analogia é usada para explicar uma variável?",
    options: [
      "Um livro com várias páginas",
      "Uma caixinha com um rótulo",
      "Um mapa com marcações",
      "Uma receita com ingredientes",
    ],
    answer: 1,
    explanation:
      "A variável é como uma caixinha: o rótulo é o nome e o que está dentro é o valor. Você pode ver o conteúdo, trocá-lo ou usá-lo em cálculos.",
  },
  {
    q: "O que o trecho 'inteiro idade' faz no Portugol?",
    options: [
      "Mostra o valor da variável idade na tela",
      "Cria uma variável chamada idade que guarda números inteiros",
      "Faz um cálculo com o número inteiro",
      "Define que a variável não pode ser alterada",
    ],
    answer: 1,
    explanation:
      "Essa linha declara a variável: reserva um espaço na memória com o nome 'idade' do tipo inteiro. Sem essa declaração, o programa não sabe que a variável existe.",
  },
  {
    q: "O que o sinal de igual (=) significa em programação?",
    options: [
      "Comparação entre dois valores",
      "O resultado de um cálculo",
      "Atribuição: coloca um valor dentro de uma variável",
      "Soma de dois valores",
    ],
    answer: 2,
    explanation:
      "Em programação, o = não significa 'igual' como na matemática. Ele significa 'recebe': idade = 16 coloca o valor 16 dentro da variável idade.",
  },
  {
    q: "Qual dos nomes abaixo é um nome VÁLIDO para uma variável no Portugol?",
    options: ["1nome", "nome do aluno", "nome_do_aluno", "nome@aluno"],
    answer: 2,
    explanation:
      "O nome deve começar com letra e não pode ter espaços nem caracteres especiais. O underscore (_) é permitido para separar palavras.",
  },
  {
    q: "Por que existem tipos diferentes de variáveis?",
    options: [
      "Para deixar o código mais colorido no editor",
      "Porque o computador precisa saber como tratar cada tipo de informação",
      "Para dificultar o aprendizado",
      "Porque cada tipo ocupa o mesmo espaço na memória",
    ],
    answer: 1,
    explanation:
      "O tipo define como o computador armazena e trata a informação. O número 10 e o texto '10' parecem iguais, mas com um você faz contas e com o outro não.",
  },
  {
    q: "Qual tipo de variável você deve usar para guardar a idade de uma pessoa?",
    options: ["real", "cadeia", "inteiro", "logico"],
    answer: 2,
    explanation:
      "Idade é um número sem casas decimais, então o tipo correto é inteiro. Usar cadeia impediria cálculos com esse valor.",
  },
  {
    q: "Qual tipo de variável você deve usar para guardar o preço de um produto?",
    options: ["inteiro", "real", "logico", "caracter"],
    answer: 1,
    explanation:
      "Preços geralmente têm casas decimais (29.90, 149.99), então o tipo correto é real. Com inteiro, a parte decimal seria perdida.",
  },
  {
    q: "Qual tipo de variável você deve usar para guardar o nome de um aluno?",
    options: ["inteiro", "caracter", "logico", "cadeia"],
    answer: 3,
    explanation:
      "Nome é um texto com vários caracteres, então o tipo correto é cadeia. O caracter guarda apenas um único caractere.",
  },
  {
    q: "Qual tipo de variável guarda apenas verdadeiro ou falso?",
    options: ["inteiro", "cadeia", "logico", "real"],
    answer: 2,
    explanation:
      "O tipo logico guarda apenas dois estados: verdadeiro ou falso. É ideal para situações de sim/não, ligado/desligado, aprovado/reprovado.",
  },
  {
    q: "Qual é a diferença entre os tipos cadeia e caracter?",
    options: [
      "São sinônimos no Portugol",
      "cadeia guarda textos completos; caracter guarda apenas um único caractere",
      "caracter guarda textos; cadeia guarda um único caractere",
      "cadeia é para números; caracter é para letras",
    ],
    answer: 1,
    explanation:
      "cadeia guarda textos de qualquer tamanho, como 'Ana Maria'. caracter guarda um único símbolo, como a letra 'A'. O valor do caracter vai entre aspas simples.",
  },
  {
    q: "O que significa 'entrada de dados' em um programa?",
    options: [
      "O programa mostra informações na tela",
      "O usuário fornece uma informação para o programa",
      "O programa salva um arquivo no computador",
      "O programa conecta com a internet",
    ],
    answer: 1,
    explanation:
      "Entrada de dados é quando o usuário fornece uma informação ao programa. É o fluxo de fora para dentro: do usuário para o programa.",
  },
  {
    q: "Qual comando captura uma informação digitada pelo usuário no Portugol?",
    options: ["escreva()", "captura()", "leia()", "receber()"],
    answer: 2,
    explanation:
      "O leia() é o comando de entrada do Portugol. Quando o programa chega nessa linha, ele para e aguarda o usuário digitar algo, guardando o valor na variável informada.",
  },
  {
    q: "Por que é importante usar escreva() antes de leia()?",
    options: [
      "Porque o Portugol exige essa ordem para não gerar erro",
      "Para que o usuário saiba o que o programa está esperando que ele digite",
      "Porque o escreva() ativa o teclado para a entrada",
      "Porque sem escreva() o leia() não consegue guardar o valor",
    ],
    answer: 1,
    explanation:
      "Sem uma mensagem antes do leia(), o programa fica parado esperando uma entrada e o usuário não sabe o que digitar. Sempre avise o usuário antes de pedir uma informação.",
  },
  {
    q: "Qual símbolo representa a multiplicação no Portugol?",
    options: ["x", "×", "*", "•"],
    answer: 2,
    explanation:
      "No Portugol e na maioria das linguagens de programação, a multiplicação é representada pelo asterisco *. O símbolo × não é reconhecido como operador matemático no código.",
  },
  {
    q: "O que o operador % faz no Portugol?",
    options: [
      "Calcula a porcentagem de um valor",
      "Retorna o resto da divisão inteira entre dois números",
      "Divide dois números com casas decimais",
      "Multiplica um valor por cem",
    ],
    answer: 1,
    explanation:
      "O operador % retorna o resto da divisão inteira. Por exemplo, 10 % 3 = 1, porque 10 dividido por 3 é 3 com resto 1. Ele é muito usado para verificar se um número é par ou ímpar.",
  },
  {
    q: "Qual é a ordem correta de prioridade dos operadores matemáticos no Portugol?",
    options: [
      "Adição e subtração → Multiplicação e divisão → Parênteses",
      "Da esquerda para a direita sempre, sem exceção",
      "Parênteses → Multiplicação e divisão → Adição e subtração",
      "Multiplicação → Divisão → Adição → Subtração",
    ],
    answer: 2,
    explanation:
      "O Portugol segue a mesma ordem da matemática: primeiro o que está entre parênteses, depois multiplicação e divisão, e por último adição e subtração.",
  },
  {
    q: "Por que parênteses são importantes em expressões matemáticas no código?",
    options: [
      "São apenas decorativos e não afetam o resultado",
      "Para garantir que as operações aconteçam na ordem que o programador quer, evitando resultados inesperados",
      "Porque o Portugol só aceita expressões com parênteses",
      "Para tornar o programa mais rápido na execução",
    ],
    answer: 1,
    explanation:
      "Sem parênteses, a ordem de execução segue as regras de prioridade dos operadores, o que pode gerar resultados diferentes do esperado. Parênteses deixam a intenção do cálculo explícita.",
  },
  {
    q: "Qual é o resultado da expressão 2 + 3 * 4 no Portugol?",
    options: ["20", "14", "24", "10"],
    answer: 1,
    explanation:
      "Multiplicação tem prioridade sobre adição. Então 3 * 4 = 12 é calculado primeiro, e depois 2 + 12 = 14. A expressão não é avaliada da esquerda para a direita.",
  },
  {
    q: "Para calcular a média de três notas corretamente, qual expressão está certa?",
    options: [
      "media = nota1 + nota2 + nota3 / 3.0",
      "media = (nota1 + nota2 + nota3) / 3.0",
      "media = nota1 + (nota2 + nota3 / 3.0)",
      "media = nota1 + nota2 + nota3 * 3.0",
    ],
    answer: 1,
    explanation:
      "Os parênteses garantem que as três notas sejam somadas antes de dividir por 3. Sem eles, apenas nota3 seria dividida por 3 por causa da prioridade dos operadores, gerando um resultado errado.",
  },
  {
    q: "O que são boas práticas de programação?",
    options: [
      "Técnicas avançadas usadas apenas por programadores profissionais",
      "Regras obrigatórias que causam erro de execução se não forem seguidas",
      "Hábitos de escrita que tornam o código mais legível, organizado e fácil de corrigir",
      "Ferramentas pagas que analisam o código automaticamente",
    ],
    answer: 2,
    explanation:
      "Boas práticas são hábitos voluntários de escrita. Elas não mudam o que o programa faz, mas tornam o código mais fácil de ler, entender e corrigir — por você e por qualquer outra pessoa.",
  },
  {
    q: "O que é indentação no código?",
    options: [
      "O processo de renomear variáveis para nomes mais curtos",
      "Os espaços antes de cada linha que mostram a hierarquia e organização do código",
      "Um comando do Portugol que organiza as variáveis automaticamente",
      "O espaço entre dois comandos para o programa fazer uma pausa",
    ],
    answer: 1,
    explanation:
      "Indentação são os espaços ou tabs antes de cada linha. Eles mostram visualmente quais linhas estão dentro de qual bloco, tornando a estrutura do código muito mais fácil de entender.",
  },
  {
    q: "Como se cria um comentário de linha no Portugol?",
    options: ["/* comentário */", "# comentário", "// comentário", "-- comentário"],
    answer: 2,
    explanation:
      "No Portugol, comentários de linha começam com //. O programa ignora completamente esse texto durante a execução. Os outros símbolos são usados em linguagens como C, Python e SQL.",
  },
  {
    q: "Por que usar comentários no código?",
    options: [
      "Para exibir mensagens extras para o usuário durante a execução",
      "Para documentar o raciocínio do programador e facilitar o entendimento do código",
      "Porque o Portugol exige pelo menos um comentário em todo programa",
      "Para deixar o programa mais rápido ao explicar os cálculos",
    ],
    answer: 1,
    explanation:
      "Comentários são textos explicativos que o programa ignora. Eles servem para documentar decisões e raciocínios, facilitando a leitura do código para você mesmo no futuro e para outras pessoas.",
  },
  {
    q: "Qual é o erro no nome de variável 'nota do aluno'?",
    options: [
      "Está em português, o Portugol exige nomes em inglês",
      "Tem espaços, e nomes de variáveis não podem conter espaços",
      "É longo demais para o Portugol aceitar",
      "Começa com letra minúscula, o que é inválido",
    ],
    answer: 1,
    explanation:
      "Nomes de variáveis não podem conter espaços. Para separar palavras, use underscore: nota_do_aluno. Espaços fazem o Portugol interpretar as palavras como elementos separados, gerando erro.",
  },
  {
    q: "É possível declarar múltiplas variáveis do mesmo tipo em uma única linha no Portugol?",
    options: [
      "Não, cada variável deve ser declarada em uma linha separada",
      "Sim, separando os nomes por vírgula: real nota1, nota2, nota3",
      "Sim, mas apenas para variáveis do tipo inteiro",
      "Não, o Portugol não reconhece essa sintaxe",
    ],
    answer: 1,
    explanation:
      "Quando duas ou mais variáveis são do mesmo tipo, você pode declará-las na mesma linha separadas por vírgula. Exemplo: real nota1, nota2, nota3. Isso deixa o código mais limpo.",
  },
  {
    q: "O que acontece com o valor de uma variável quando você atribui um novo valor a ela?",
    options: [
      "Os dois valores ficam guardados ao mesmo tempo na variável",
      "O programa gera um erro por conflito de valores",
      "O valor anterior é substituído pelo novo valor",
      "O novo valor é somado ao valor anterior automaticamente",
    ],
    answer: 2,
    explanation:
      "Uma variável guarda apenas um valor por vez. Quando você atribui um novo valor, o valor anterior é descartado e substituído. É por isso que se chamam variáveis — o valor pode variar.",
  },
  {
    q: "Por que é importante testar o programa durante o desenvolvimento e não apenas no final?",
    options: [
      "Porque o Portugol Studio só executa programas incompletos",
      "Para aumentar o número de execuções e impressionar o professor",
      "Porque encontrar um erro em poucas linhas é muito mais fácil do que procurá-lo em centenas de linhas",
      "Porque testes frequentes deixam o programa mais rápido",
    ],
    answer: 2,
    explanation:
      "Testar com frequência durante o desenvolvimento é uma das práticas mais importantes. Quanto mais cedo um erro é encontrado, mais fácil e rápido é corrigi-lo. Deixar para testar no final dificulta muito a identificação do problema.",
  },
  {
    q: "Qual tipo de variável é correto para armazenar o resultado do IMC, sabendo que IMC = peso / (altura * altura)?",
    options: ["inteiro", "cadeia", "logico", "real"],
    answer: 3,
    explanation:
      "O cálculo do IMC envolve uma divisão que normalmente resulta em números com casas decimais. Por isso, o tipo real é o mais adequado para armazenar esse valor, já que permite representar números com ponto decimal. Se fosse usado o tipo inteiro, a parte decimal seria descartada e o resultado ficaria incorreto.",
  },
  {
    q: "Qual das afirmações sobre o sinal de = no Portugol está correta?",
    options: [
      "Ele compara se dois valores são iguais, como na matemática",
      "Ele soma o valor da direita ao valor atual da variável",
      "Ele atribui o valor da direita para a variável da esquerda",
      "Ele verifica se a variável já foi declarada anteriormente",
    ],
    answer: 2,
    explanation:
      "Em programação, o = é um operador de atribuição, não de igualdade. A instrução idade = 25 significa 'coloque o valor 25 dentro da variável idade', não 'idade é igual a 25'.",
  },
  {
    q: "O que o escreva() exibe quando você passa o nome de uma variável, como escreva(idade)?",
    options: [
      "A palavra 'idade' como texto na tela",
      "O tipo da variável, como 'inteiro'",
      "O valor armazenado dentro da variável idade",
      "O endereço da variável na memória",
    ],
    answer: 2,
    explanation:
      "Quando você passa o nome de uma variável para o escreva() sem aspas, o Portugol exibe o valor que está armazenado nela. Se idade vale 17, escreva(idade) mostra 17 no console.",
  },
  {
    q: "Qual das sequências abaixo representa corretamente as etapas de um programa que calcula o dobro de um número?",
    options: [
      "Calcular o dobro → Pedir o número → Mostrar o resultado",
      "Mostrar o resultado → Pedir o número → Calcular o dobro",
      "Pedir o número → Calcular o dobro → Mostrar o resultado",
      "Declarar variáveis → Mostrar o resultado → Pedir o número → Calcular",
    ],
    answer: 2,
    explanation:
      "A sequência correta segue a lógica natural de qualquer programa: primeiro coleta os dados necessários, depois processa as informações e por último exibe o resultado. Qualquer outra ordem geraria erro ou resultado incorreto.",
  },
];

window.AP = {
  MODULES,
  MODULE1_LESSONS,
  MODULE1_PROJECT,
  MODULE1_QUIZZES,
  FINAL_QUIZ,
  QUIZ_CONFIG,
};

// ---------------------------------------------------------
// Estrutura de CURSOS (Curso → Módulo → Aula)
// Apenas a estrutura; conteúdo dos novos módulos será adicionado depois.
// ---------------------------------------------------------
const COURSES = [
  {
    id: "portugol",
    title: "Curso de Portugol Studio",
    desc: "Aprenda lógica de programação do zero utilizando Portugol Studio, desenvolvendo uma base sólida para migrar posteriormente para linguagens utilizadas no mercado.",
    locked: false,
    href: "./pages/curso-portugol/index.html",
    modules: [
      {
        id: 1,
        title: "Fundamentos",
        desc: "Conceitos básicos de lógica, algoritmos e Portugol.",
        available: true,
        href: "../../pages/modulo1/index.html",
      },
      {
        id: 2,
        title: "Estruturas de Controle",
        desc: "Condicionais e laços de repetição.",
        available: false,
        href: "./../../pages/curso-portugol/modulo-2/index.html",
      },
      {
        id: 3,
        title: "Estruturas de Dados",
        desc: "Vetores, matrizes e coleções.",
        available: false,
        href: "./../../pages/curso-portugol/modulo-3/index.html",
      },
      {
        id: 4,
        title: "Funções e Modularização",
        desc: "Reuso de código e organização.",
        available: false,
        href: "./../../pages/curso-portugol/modulo-4/index.html",
      },
      {
        id: 5,
        title: "Projetos Práticos",
        desc: "Aplicando o que aprendeu.",
        available: false,
        href: "./../../pages/curso-portugol/modulo-5/index.html",
      },
      {
        id: 6,
        title: "Recursos Avançados do Portugol",
        desc: "Bibliotecas e recursos avançados.",
        available: false,
        href: "./../../pages/curso-portugol/modulo-6/index.html",
      },
    ],
  },
  {
    id: "python",
    title: "Curso de Python",
    desc: "Aprenda Python a partir da base construída no Curso de Portugol Studio, realizando uma transição gradual para uma linguagem amplamente utilizada no mercado de trabalho.",
    locked: true,
    href: "./pages/curso-python/index.html",
    modules: [
      {
        id: 1,
        title: "Transição de Portugol para Python",
        desc: "Equivalências entre Portugol e Python.",
        available: false,
        href: "./../../pages/curso-python/modulo-1/index.html",
      },
      {
        id: 2,
        title: "Fundamentos do Python",
        desc: "Sintaxe e primeiros programas.",
        available: false,
        href: "./../../pages/curso-python/modulo-2/index.html",
      },
      {
        id: 3,
        title: "Estruturas de Controle",
        desc: "Condicionais e laços em Python.",
        available: false,
        href: "./../../pages/curso-python/modulo-3/index.html",
      },
      {
        id: 4,
        title: "Estruturas de Dados",
        desc: "Listas, tuplas, dicionários e conjuntos.",
        available: false,
        href: "./../../pages/curso-python/modulo-4/index.html",
      },
      {
        id: 5,
        title: "Funções e Modularização",
        desc: "Funções, módulos e pacotes.",
        available: false,
        href: "./../../pages/curso-python/modulo-5/index.html",
      },
      {
        id: 6,
        title: "Projetos Práticos",
        desc: "Aplicando Python em projetos.",
        available: false,
        href: "./../../pages/curso-python/modulo-6/index.html",
      },
    ],
  },
];

window.AP.COURSES = COURSES;
