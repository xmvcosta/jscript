"use restrict"

// Operador Spread, aprendendo sobre o espalhador em Javascript - Curso de Javascript Moderno - Aula 12

// let n1 = [10,20,30]
// let n2 = [11,22,33,44,55]
// //let n3 = n1 //sem operador spread
// let n3 = [...n1,...n2]
// console.log("n1 = " + n1)
// console.log("n2 = " + n2)
//console.log("n3 = " + n3)
// console.log("n3 = " + n3)
// console.log("Tipo de n3 = " + typeof(n3))

// const jogador1={nome:"Marcos",energia:70,vidas:3}
// const jogador2={nome:"Ricardo",energia:70,vidas:5}
// const jogador3={...jogador1,...jogador2}
// console.log(jogador3)

// const jogador1={nome:"Marcos",energia:70,vidas:3,magia:150}
// const jogador2={nome:"Ricardo",energia:70,vidas:5,velocidade:100}
// const jogador3={...jogador1,...jogador2}
// console.log(jogador3)

// const soma=(v1,v2,v3)=>{
//     return v1+v2+v3
// }
// let valores=[1,2,3]
// console.log(soma(...valores))

const obj1=document.getElementsByTagName("div")
const obj2=[...document.getElementsByTagName("div")]

//obj1. //html colection-apenas algumas funções
//obj2. //array com muito mais funções

obj2.forEach(element => {
    element.innerHTML="curso"
})

console.log(obj1)
console.log(obj2)