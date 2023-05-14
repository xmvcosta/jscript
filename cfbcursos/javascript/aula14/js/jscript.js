"use restrict"

let nota = 5
switch(nota){
    case 8: case 9: case 10:
        console.log("Aprovado com louvor")
        break
    
    case 6: case 7: 
        console.log("Aprovador por pouco")
        break

    case 5: case 4: case 3: case 2:
        console.log("Reprovado")
        break

    default:
        console.log("Valor Inválido")
        break
}