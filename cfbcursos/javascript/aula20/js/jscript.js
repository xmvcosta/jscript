"use restrict"

// let n = 1
// let max = 100

// while(n<=max){
//     console.log("Valor de n é : "+n)
//     if(n>10){
//         break
//     }
//     n++
// }

// while(n <= max){
//     console.log("Valor de n é: " + n)
//     if(n>10){
//         console.log("O valor de n é: " + n)
//         break
//     }
//     n++
// }

// for(let i=n;i<max;i++){
//     console.log("Valor de n é: " + i)
// }

//let n=0
let max=1000
let pares=0
for (let i = 0;i<max;i++){
    console.log("Valor de i: "+i)
    if(i%2!=0){
        continue
    }
    pares++
}
console.log(pares)