import * as elementos from "./elementos.js"
import * as functions from "./functions.js"

elementos.continuar.onclick = () => {
    elementos.notaEstrela[0].classList.add("hidde")
    elementos.comentario[0].classList.remove("hidde")
}

elementos.enviar.onclick = () => {
    elementos.comentario[0].classList.add("hidde")
    elementos.notaEstrela[0].classList.remove("hidde")
    functions.verificarYellow()
}

elementos.estrela[0].onclick = () => {
    functions.verificarYellow()
    for(let i =0; i< 1; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}

elementos.estrela[1].onclick = () => {
    functions.verificarYellow()
    for(let i =0; i< 2; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}

elementos.estrela[2].onclick = () => {
    functions.verificarYellow()
    for(let i =0; i< 3; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}

elementos.estrela[3].onclick = () => {
    functions.verificarYellow()
    for(let i =0; i< 4; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}

elementos.estrela[4].onclick = () => {
    for(let i =0; i< 5; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}


