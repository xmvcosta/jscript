// aula 04 - Formas de mostrar (Output)
// document.getElementById("titulo").innerHTML = "Olá mundo!";

// document.write("document.write");

// window.alert('ok');

// console.log("O que eu escrever aqui aparecerá no console");

// //aula 05 Variáveis (1/2)

// var nome = "Marcos";    //string
// var sobrenome = "Costa";    //sting

// var nomecompleto = nome+" "+sobrenome;

// console.log (nomecompleto);

// // Aula 06 - Condicionais - Parte 01////
// var hora = 13;

// if(hora < 12){
//     console.log("Bom dia!");
// } else{
//     console.log("Boa tarde ou Boa noite");
// }

// // Aula 06 - Condicionais - Parte 02////

// var hora = 13;

// if(hora < 12){
//     console.log("Bom dia!");
// } else if(hora < 18){
//     console.log("Boa tarde!");
// } else if (hora <= 23){
//     console.log("Boa noite!");
// }

// if(hora >=12 && hora < 18){
//     console.log("Boa tarde!");
// }

// if(hora == 12 || hora == 18){
//     console.log("Você está na hora do rush!");

// }

// // Aula 08 - Variáveis - Parte 02////

// var nome = "marcos";

// let nome = "marcos";

// const nome = "marcos";

// var nome = "Marcos";
// window.alert(nome);

// #### MODULO 02 - AULA 01 - O QUE É DOM #### //
// document object model

// #### MODULO 02 - AULA 02 - Selecionando Elementos (4 funções) 1 #### //
// document.getElementById('aula').innerHTML = "Pedro";

// #### MODULO 02 - AULA 03 - Selecionando Elementos (4 funções) 2 #### //
// document.getElementsByClassName('aula03')[0].innerHTML = "Açucar, CAfé, Banana";
// document.getElementsByTagName('div')[1].innerHTML = "Pedrinho";

// #### MODULO 02 - AULA 04 - querySelector #### //
// document.querySelector('.div');
// document.querySelectorAll('.div');

// #### MODULO 02 - AULA 05 - Manipulando Class do elemento 1 #### //
// function vermelho(){
//     document.querySelector('#exemplo').classList.remove('verde');
//     document.querySelector('#exemplo').classList.remove('azul');
//     document.querySelector('#exemplo').classList.add('vermelho');
// }

// function verde(){
//     document.querySelector('#exemplo').classList.remove('azul');
//     document.querySelector('#exemplo').classList.remove('vermelho');
//     document.querySelector('#exemplo').classList.add('verde');
// }

// function azul(){
//     document.querySelector('#exemplo').classList.remove('vermelho');
//     document.querySelector('#exemplo').classList.remove('verde');
//     document.querySelector('#exemplo').classList.add('azul');
// }

// #### MODULO 02 - AULA 06 - Manipulando Class do elemento 2 #### //
// function trocar(){
//     if(document.querySelector('button').classList.contains('preto')){
//         document.querySelector('button').classList.remove('preto');
//         document.querySelector('button').classList.add('verde');
//     } else{
//         document.querySelector('button').classList.remove('verde');
//         document.querySelector('button').classList.add('preto');
//     }
// }

// #### MODULO 02 - AULA 07 - Tipos de dados #### //
// var nome = "Marcos"; //string
// var idade = 38; //number
// var salvo = true; //boolean
// var cidade; //undefined
// var tipo = typeof cidade;


// #### MODULO 02 - AULA 08 - Comentários #### //

// comentário de uma linha

/*
comentário
de 
multiplas 
linhas
*/

// // #### MODULO 02 - AULA 09 - funções 1 / 2 #### //

// function alterar(){
//     document.getElementById("titulo").innerHTML="trocou o titulo";
//     document.getElementById("campo").value="trocou o campo";
// }



//#### MODULO 02 - AULA 10 - funções 2 / 2 ####//

function alterar(titulo){
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}
