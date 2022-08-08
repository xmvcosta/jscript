//let nome = "Marcos";
//let sobreNome = "Costa";
//let nomeCompleto = nome + ' '+sobreNome;
//document.getElementById("titulo").innerHTML = nomeCompleto;
//console.log(nomeCompleto);

//AULA12 TEMPLATE STRING
/*
let nome = "Marcos";
let sobreNome = "Costa";
let idade = 38;

console.log(`${nome} ${sobreNome}` );
document.getElementById("paragrafo").innerHTML = `Nome: ${nome} ${sobreNome + " e tem"} ${idade + " anos."}`;
*/

//AULA 13 IF / ELSE
let idade = 38;
if(idade > 17){
    console.log("Maior de 18 anos.");
    document.getElementById("paragrafo").innerHTML = "Maior de 18 anos.";
} else {
    console.log("Menor de 18 anos.");
    document.getElementById("paragrafo").innerHTML = "Menor de 18 anos.";
}