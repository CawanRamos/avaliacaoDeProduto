import * as elementos from "./elementos.js"

function verificarYellow (){
    for( let i = 0; i<5; i++){
        if(elementos.estrela[i].classList.contains("yellow")){
            elementos.estrela[i].classList.remove("yellow")
        } else {
            return
        }
    }
}

elementos.continuar.onclick = () => {
    elementos.notaEstrela[0].classList.add("hidde")
    elementos.comentario[0].classList.remove("hidde")
}

elementos.estrela[0].onclick = () => {
    verificarYellow()
    for(let i =0; i< 1; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}

elementos.estrela[1].onclick = () => {
    verificarYellow()
    for(let i =0; i< 2; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}

elementos.estrela[2].onclick = () => {
    verificarYellow()
    for(let i =0; i< 3; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}

elementos.estrela[3].onclick = () => {
    verificarYellow()
    for(let i =0; i< 4; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}

elementos.estrela[4].onclick = () => {
    for(let i =0; i< 5; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}


