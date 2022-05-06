//Modulo 01 Aula 04
//https://alunos.b7web.com.br/curso/javascript/formas-de-mostrar-output

// document.getElementById("titulo").innerHTML = "Novo titulo"
// document.write("Algum texto")

// window.alert("mostrar na janela")

// console.log("teste123")

////////////////////////////////////////////////////////////////////////////
//Modulo 01 Aula 05
//https://alunos.b7web.com.br/curso/javascript/variaveis-1

//variaveis nao pode ter espaço, caracter espercial, nao pode começar com um numero
// var idade = 38
// var nome = "Marcos" //string
// var sobreNome = "Costa" //string
// var x = 10
// var y = 15
// total = x + y
// document.write(nome + " " + sobreNome + " O valor total é: " + total)
// window.alert(nome + " " + sobreNome + " O valor total é: " + total)


////////////////////////////////////////////////////////////////////////////
//Modulo 01 Aula 06
//https://alunos.b7web.com.br/curso/javascript/condicionais-1

// var hora = 14

// if (hora < 12){
//     document.getElementById("titulo").innerHTML = "Agora é de manha"
//     console.log("Bom dia!")
//     document.write("Agora é de manha")
// } else{
//     document.write("não é de manhã")
// }


////////////////////////////////////////////////////////////////////////////
//  Modulo 01 Aula 07
//  https://alunos.b7web.com.br/curso/javascript/condicionais-2
//

// var hora = 19

// if (hora < 12){
//     console.log("Bom dia!")
// } else if (hora < 18){
//     console.log("Boa tarde!")
// } else if (hora <=23){
//     console.log("Boa noite!")
// }

// var hora = 12
// if (hora >= 12 && hora < 18 ){
//     console.log("Boa tarde!")
// }

// var hora = 19
// if ( hora == 12 || hora == 18 ){
//     console.log("Você está no horário de RUSH!")
//     document.getElementById("titulo").innerHTML = "Você está no horário de RUSH!"

// }

////////////////////////////////////////////////////////////////////////////
//  Modulo 01 Aula 08
//  https://alunos.b7web.com.br/curso/javascript/variaveis-2

// var nome = "Marcos"

// let nome = "Marcos"

// const nome = "Pedro"

// var nome = "Marcos"

// if( nome == "Marcos"){
//     var idade = 38
// } else { console.log("Não é o Marcos")}

// console.log("Marcos tem " + idade + " anos.")

// let nome = "Marcos" //define a variavel e atrui um valor a ela.
// nome = "Pedro" //redefine o valor da variavel sem a necessidade de declaraá-la novamente.

// if( nome == "Pedro"){
//     let idade = 38
//     console.log(idade)
// }

//console.log(idade) 

// const nome = "Marcos"
// nome = "Pedro"
// if ( nome == "Marcos"){

//     console.log(idade)

// }

////////////////////////////////////////////////////////////////////////////
//  Modulo 02 Aula 02
//  https://alunos.b7web.com.br/curso/javascript/selecionando-elementos-4-funcoes-1
//document.getElementById("exemplo").innerHTML = "Teste"
//document.getElementById("exemplo").innerHTML = "<p style = color:blue>Teste</p>"

////////////////////////////////////////////////////////////////////////////
//  Modulo 02 Aula 02
//  https://alunos.b7web.com.br/curso/javascript/selecionando-elementos-4-funcoes-2

document.getElementsByClassName("lista")[0].innerHTML = ""