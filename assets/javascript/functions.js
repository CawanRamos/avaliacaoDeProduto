import * as elementos from "./elementos.js"

export function verificarClasseYellow (){
    for( let i = 0; i<5; i++){
        if(elementos.estrela[i].classList.contains("yellow")){
            elementos.estrela[i].classList.remove("yellow")
        }
    }
}