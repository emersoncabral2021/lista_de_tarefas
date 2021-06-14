var texto_tarefa = document.querySelector(".texto_tarefa")
var conteiner_lista = document.querySelector(".conteiner_lista")
var tarefa = document.getElementById("tarefa")



var adicionar = document.querySelector(".adicionar").addEventListener("click", function (){
    conteiner_lista.innerHTML += '<div class="lista"><div class="tarefa" id="tarefa">' + texto_tarefa.value + '</div><button class="concluida" onclick="concluida(this)><i class="fas fa-check"></i></button><button class="excluir"><i class="fas fa-times"></i></button></div>'
    texto_tarefa.value =""
})
   
tarefa.style.textDecoration = "line-through"
function concluida(n){

}



