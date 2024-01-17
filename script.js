const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const botaoPergunta = document.querySelector('#botaoPergunta')
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

function fazerPergunta() {
    if(inputPergunta.value == "") {
        alert("Por favor, digite sua pergunta.")
        return
    }

    // desabilita botão de pergunta após já ter feito uma

    botaoPergunta.setAttribute("disabled", true)

    // numero aleatorio
    const pergunta = "<div>" + inputPergunta.value + "</div>"

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    // é possivel colocar estilos pelo JS
    elementoResposta.computedStyleMap.opacity = 1;

    // faz com que a resposta suma depois e 3s
    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        botaoPergunta.removeAttribute("disabled")
        elementoResposta.value = '';
    }, 3000)
    
}