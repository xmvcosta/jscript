"use restrict"

// function soma(n1=0,n2=0){
//     return n1 + n2
// }

// console.log(soma(10,20))

// function soma(...valores){
//     return valores.length
// }
// console.log(soma(10,5,3))

function soma(...valores){
    let tam=valores.length
    let res=0
    for(let i=0;i<tam;i++){
        res+=valores[i]
    }
    return res
}
console.log(soma(7,5,19,4,23))