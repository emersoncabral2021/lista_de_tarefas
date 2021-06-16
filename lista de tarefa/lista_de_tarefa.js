var texto_tarefa = document.querySelector(".texto_tarefa")
var conteiner_lista = document.querySelector(".conteiner_lista")
var lista = document.getElementsByName("lista")
var tarefa = document.getElementsByName("tarefa")

var numlista = 0

var adicionar = document.querySelector(".adicionar").addEventListener("click", function (){
    conteiner_lista.innerHTML += '<div class="lista" name="lista"><div class="tarefa" name="tarefa">' + texto_tarefa.value + '</div><button class="concluida" onclick="concluida('+ numlista +')"><i class="fas fa-check"></i></button><button class="excluir" onclick="excluir('+ numlista +')"><i class="fas fa-times"></i></button></div>'
    localStorage.setItem('id' + numlista, conteiner_lista.innerHTML)
    texto_tarefa.value =""
    numlista++
})
window.addEventListener("load", function(){
    for(let i = 0;i < localStorage.length;i++){
    conteiner_lista.innerHTML = localStorage.getItem("id" + i)
}
})

function concluida(n){
    if(tarefa[n].style.textDecoration != "line-through"){
        tarefa[n].style.textDecoration = "line-through"
        tarefa[n].style.backgroundColor = "rgb(114, 230, 114)"
        tarefa[n].style.color = "white"

    }else{
        tarefa[n].style.textDecoration = "none"
        tarefa[n].style.backgroundColor = "white"
        tarefa[n].style.color = "black"

    }

}

function excluir(n){
    lista[n].style.display = "none"
    localStorage.removeItem("id" + n)


}




