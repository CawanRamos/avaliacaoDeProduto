import * as elementos from "./elementos.js"
import * as functions from "./functions.js"

elementos.continuar.onclick = () => {
    elementos.notaEstrela[0].classList.add("hidden")
    elementos.comentario[0].classList.remove("hidden")
}

elementos.enviar.onclick = () => {
    elementos.comentario[0].classList.add("hidden")
    elementos.notaEstrela[0].classList.remove("hidden")
    functions.verificarClasseYellow()
}

elementos.estrela[0].onclick = () => {
    functions.verificarClasseYellow()
    for(let i =0; i< 1; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}

elementos.estrela[1].onclick = () => {
    functions.verificarClasseYellow()
    for(let i =0; i< 2; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}

elementos.estrela[2].onclick = () => {
    functions.verificarClasseYellow()
    for(let i =0; i< 3; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}

elementos.estrela[3].onclick = () => {
    functions.verificarClasseYellow()
    for(let i =0; i< 4; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}

elementos.estrela[4].onclick = () => {
    for(let i =0; i< 5; i++ ){
        elementos.estrela[i].classList.add("yellow")
    }
}


