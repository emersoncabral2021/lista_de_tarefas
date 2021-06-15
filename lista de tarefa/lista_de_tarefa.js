var texto_tarefa = document.querySelector(".texto_tarefa")
var conteiner_lista = document.querySelector(".conteiner_lista")
var lista = document.getElementsByName("lista")
var tarefa = document.getElementsByName("tarefa")

var numlista = 0

var adicionar = document.querySelector(".adicionar").addEventListener("click", function (){
    conteiner_lista.innerHTML += '<div class="lista" name="lista"><div class="tarefa" name="tarefa">' + texto_tarefa.value + '</div><button class="concluida" onclick="concluida('+ numlista +')"><i class="fas fa-check"></i></button><button class="excluir" onclick="excluir('+ numlista +')"><i class="fas fa-times"></i></button></div>'
    texto_tarefa.value =""
    numlista++
})
function concluida(n){
    tarefa[n].style.textDecoration = "line-through"

}

function excluir(n){
   lista[n].style.display = "none"
}




