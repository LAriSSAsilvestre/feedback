let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botoes =>{
    botao.addEventListener("click", guardarNota)
})

function guardarNota(evento) {
    let nota = evento.target.innerText

    localStorage.setItem("nota", nota)
}