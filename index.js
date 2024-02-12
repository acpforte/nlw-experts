const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código: console.log(typeof [])?",
      respostas: [
        "array",
        "object",
        "undefined",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método de array adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array?",
      respostas: [
        "push()",
        "pop()",
        "concat()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara o valor e o tipo",
        "Compara apenas o valor",
        "Compara apenas o tipo",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para arredondar um número para o inteiro mais próximo em JavaScript?",
      respostas: [
        "Math.floor()",
        "Math.round()",
        "Math.ceil()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado de 5 + '5' em JavaScript?",
      respostas: [
        "'10'",
        "10",
        "'55'",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma única linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToInt()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "shift()",
        "pop()",
        "remove()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de selecionar um elemento HTML com o id 'myElement' em JavaScript?",
      respostas: [
        "document.getElementById('myElement')",
        "document.getElementByName('myElement')",
        "document.querySelector('#myElement')",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}