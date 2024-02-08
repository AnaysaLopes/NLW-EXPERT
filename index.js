const perguntas = [
    {
        "pergunta": "Qual é o nome do primeira série que assistimos juntas?",
        "respostas": [
            "This is us",
            "MasterChef",
            "Matrix",
        ],
        "correta": 0 // A resposta "correta" é "This Is Us"
    },
    {
        "pergunta": "Qual é o restaurante onde tivemos nosso primeiro encontro?",
        "respostas": [
            "Nuh Café",
            "Marechal",
            "Território Mexicano",
        ],
        "correta": 0 // A resposta "correta" é "Nuh Café"
    },
    {
        "pergunta": "Em que dia e mês foi o nosso primeiro beijo?",
        "respostas": [
            "02/06/2022",
            "06/02/2022",
            "02/06/2023",
        ],
        "correta": 0 // A resposta "correta" é "02/06/2022"
    },
    {
        "pergunta": "Qual desses pratos você cozinhou primeiro para mim?",
        "respostas": [
            "Macarrão",
            "Brownie",
            "Risoto",
        ],
        "correta": 0 // A resposta "correta" é "Macarrão"
    },
    {
        "pergunta": "Qual é o meu filme favorito entre esses?",
        "respostas": [
            "Elementos",
            "Viva - A vida é uma festa",
            "Encantada",
        ],
        "correta": 1 // A resposta "correta" é "Viva- A vida é uma festa"
    },
    {
        "pergunta": "Qual é a minha praia preferida?",
        "respostas": [
            "São Miguel do Gostoso",
            "Pipa",
            "Barra do Cunhaú",
        ],
        "correta": 2 // A resposta ""correta"" é "Barra do Cunhaú"
    },
    {
        "pergunta": "Qual é o meu hobby favorito?",
        "respostas": [
            "Pintura",
            "Leitura",
            "Cozinhar",
        ],
        "correta": 2 // A resposta "correta" é "Cozinhar"
    },
    {
        "pergunta": "Qual é a minha cor favorita?",
        "respostas": [
            "Azul",
            "Verde",
            "Roxo",
        ],
        "correta": 0 // A resposta "correta" é "Azul"
    },
    {
        "pergunta": "Qual é a minha sobremesa favorita?",
        "respostas": [
            "Pudim",
            "Cheesecake",
            "Mousse de maracujá",
        ],
        "correta": 0 // A resposta "correta" é "PUDIM"
    },
    {
        "pergunta": "Qual foi o dia que ficamos noivas?",
        "respostas": [
            "17/08/2023",
            "16/09/2023",
            "20/09/2022",
        ],
        "correta": 1 // A resposta "correta" é "16/09/2023"
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePertguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')


for(const item of perguntas){

    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {

        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePertguntas

        }


        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
}