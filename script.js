






/*const pergunta1 = {
  pergunta: "Como que todo código de HTML começa?",
  alternativa: ["a) <head></head>", "b) <html></html>", "c) <!DOCTYPE html>", "d) <start></start>"],
  resposta: "c"
};

const pergunta2 =  {
  pergunta: "Qual tag que define o título de uma página em HTML?",
  alternativa: ["a) <page></page>", "b) <name></name>", "c) <title></title>", "d) <p></p>"],
  resposta: "c"
};

const pergunta3 =  {
  pergunta: "Qual tag define um parágrafo em HTML?",
  alternativa: ["a) <p></p>", "b) <text></text>", "c) <h1></h1>"],
  resposta: "a"
};

const questionario = [pergunta1, pergunta2, pergunta3];
const perguntaContainer = document.getElementById("quiz-js");

let  question1 = document.getElementById("question1")
question1.innerHTML ="Como que todo código de HTML começa?"

let  a = document.getElementById("a")
a.innerHTML = "< head > < /head>"

let  b = document.getElementById("b")
b.innerHTML = "< html > < /html > "

let  c = document.getElementById("c")
c.innerHTML = "< !DOCTYPE html >"

let  d = document.getElementById("d")
d.innerHTML = "< start > < /start >"



/*
for (let i = 0; i < questionario.length; i++) {
  let rsp = prompt(`${questionario[i].pergunta}\n${questionario[i].alternativa.join("\n")}`).toLowerCase();
  
  if (rsp === questionario[i].resposta.toLowerCase()) {
    alert("Você acertou!");
  } else {
    alert("Você errou!");
  }
}










/*



/*

let perguntaAtual = 0;

function exibirPergunta() {

  perguntaContainer.innerHTML = "";

  // Cria elementos HTML para representar a pergunta e as opções
  const perguntaElement = document.createElement("h2");
  perguntaElement.textContent = questionario[perguntaAtual].pergunta;
  perguntaContainer.appendChild(perguntaElement);

  const opcoesElement = document.createElement("ul");
  questionario[perguntaAtual].opcoes.forEach(opcao => {
    const opcaoItem = document.createElement("button");
    opcaoItem.textContent = opcao;
    opcaoItem.addEventListener("click", verificarResposta);
    opcoesElement.appendChild(opcaoItem);
  });

  perguntaContainer.appendChild(opcoesElement);
}

function verificarResposta(event) {
  const respostaSelecionada = event.target.textContent;
  const respostaCorreta = questionario[perguntaAtual].respostaCorreta;

  if (respostaSelecionada === respostaCorreta) {
    alert("Resposta correta!");
  } else {
    alert("Resposta incorreta. Tente novamente.");
  }

  perguntaAtual++;

  if (perguntaAtual < questionario.length) {
    exibirPergunta();
  } else {
    alert("Você completou o questionário!");
    perguntaAtual = 0; // Reinicia o questionário
    exibirPergunta();
  }
}

// Inicia o questionário
exibirPergunta();



*/
