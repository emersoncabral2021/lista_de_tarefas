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


function concluida(index){
    if(tarefa[index].style.textDecoration != "line-through"){
        tarefa[index].style.textDecoration = "line-through"
        tarefa[index].style.backgroundColor = "rgb(114, 230, 114)"
        tarefa[index].style.color = "white"

    }else{
        tarefa[index].style.textDecoration = "none"
        tarefa[index].style.backgroundColor = "white"
        tarefa[index].style.color = "black"

    }

}

function excluir(index){
    lista[index].style.display = "none"

}




