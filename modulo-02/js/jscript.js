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



//  Modulo 02 Conceitos Básicos Aula 01 - Evento de clique        
//  https://alunos.b7web.com.br/curso/javascript/evento-de-clique 
//
// function clicou(){
//     document.getElementById("titulo").innerHTML = "Clicou e alterou";
//     console.log("clicou");
// }


//  Modulo 02 Conceitos Básicos Aula 02 - Evento de teclado        
//  https://alunos.b7web.com.br/curso/javascript/evento-de-teclado 
//
// 




























///////////////DAQUI PARA BAIXO NO SITE DO PROFESSOR ELE AUTEROU A ORDEM DAS AULAS E NO NOME E AULAS DO MODULO
// MAS EU JA TINHA ESTUDADO
// ENTAO EU DEIXEI O CODIGO ABAIXO SALVO APENAS PARA ESTUDOS.........
//


////////////////////////////////////////////////////////////////////////////
//  Modulo 02 Aula 02
//  https://alunos.b7web.com.br/curso/javascript/selecionando-elementos-4-funcoes-1
//document.getElementById("exemplo").innerHTML = "Teste"
//document.getElementById("exemplo").innerHTML = "<p style = color:blue>Teste</p>"

////////////////////////////////////////////////////////////////////////////
//  Modulo 02 Aula 03
//  https://alunos.b7web.com.br/curso/javascript/selecionando-elementos-4-funcoes-2

//Selecionar elemento pelo ID e alterar seu conteudo
//document.getElementById("titulo").innerHTML = "Novo titulo"

//Selecionar elemento pela CLASSE e alterar seu conteudo no array
//document.getElementsByClassName("lista")[0].innerHTML = "Bolacha, Biscoito, Chocolate"

//Selecionar elemento pelo nome da TAG HTML e alterar seu conteudo
//document.getElementsByTagName("div")[2].innerHTML = "<h1 style = background-color:red> teste 123</h1>"

//Selecionar elemento pelo nome 
//document.getElementsByName("email")


// 4 maneiras usadas para selecionar elementos, existem outras....
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.getElementsByName


///////////////////////////////////////////////////////////////////////////////
//  Modulo 02 Aula 04
//  https://alunos.b7web.com.br/curso/javascript/selecionando-com-queryselector

// querySelector retorna apenas o primeiro resultado
// document.querySelector("#titulo")
// document.querySelector(".lista")
// document.querySelector('button').innerHTML = "Novo Botao"

//querySelectorAll retona todos elementos encontrados
//document.querySelectorAll(".lista")

///////////////////////////////////////////////////////////////////////////////
//  Modulo 02:DOM Aula 05 Manipulando Class do elemento 1
//  https://alunos.b7web.com.br/curso/javascript/manipulando-class-do-elemento-1

// function vermelho(){
//     document.querySelector("#exemplo").classList.remove("azul")
//     document.querySelector("#exemplo").classList.remove("verde")
//     document.querySelector("#exemplo").classList.add("vermelho")

// }

// function verde(){
//     document.querySelector("#exemplo").classList.remove("azul")
//     document.querySelector("#exemplo").classList.remove("vermelho")
//     document.querySelector("#exemplo").classList.add("verde")

// }

// function azul(){
//     document.querySelector("#exemplo").classList.remove("verde")
//     document.querySelector("#exemplo").classList.remove("vermelho")
//     document.querySelector("#exemplo").classList.add("azul")

// }

///////////////////////////////////////////////////////////////////////////////
//  Modulo 02:DOM Aula 06 Manipulando Class do elemento 2
//  https://alunos.b7web.com.br/curso/javascript/manipulando-class-do-elemento-2

// function trocar(){
//     if(document.querySelector("#trocar").classList.contains("preto")){
//         document.querySelector("#trocar").classList.remove("preto")
//         document.querySelector("#trocar").classList.add("azul")
//     } else {
//         document.querySelector("#trocar").classList.remove("azul")
//         document.querySelector("#trocar").classList.add("preto")
// }
// }
        
///////////////////////////////////////////////////////////////////////////////
//  Modulo 02:DOM Aula 07 Tipos de dados
//  https://alunos.b7web.com.br/curso/javascript/tipos-de-dados

// var nome = "Marcos"
// var idade = 38
// var salvo = true
// var cidade


///////////////////////////////////////////////////////////////////////////////
//  Modulo 02:DOM Aula 08 Comentários
//  https://alunos.b7web.com.br/curso/javascript/comentarios

// No javascript existem dois tipos de comentários

// Comentários de 1 linha que inicia com: //
/*
Comentários de 
Múltiplas linhas
que se iniciam com: /* e se fecham com */


///////////////////////////////////////////////////////////////////////////////
//  Modulo 02:DOM Aula 09 Funções (1/2)
//  https://alunos.b7web.com.br/curso/javascript/funcoes-12

// function alterar(){
//     document.getElementById("titulo").innerHTML = "Trocou o titulo"
//     document.getElementById("campo").value = "Trocou o campo"
// }

///////////////////////////////////////////////////////////////////////////////
//  Modulo 02:DOM Aula 10 Funções (2/2)
//  https://alunos.b7web.com.br/curso/javascript/funcoes-22


