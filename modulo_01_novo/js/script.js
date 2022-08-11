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
/*
let idade = 38;
if(idade > 17){
    console.log("Maior de 18 anos.");
    document.getElementById("paragrafo").innerHTML = "Maior de 18 anos.";
} else {
    console.log("Menor de 18 anos.");
    document.getElementById("paragrafo").innerHTML = "Menor de 18 anos.";
}
*/


//let carro = {marca: "Ferrari", modelo: "XXXX", placa: "ABC-1234", ano: "2022"};
const carro = {
    marca:"Lamborguini",
    ano: 2022,
    modelo: "Mazeratti",
    cor: "vermelho",
    buzina: function(){alert("biiiiiiiii")}
    };

console.log(carro.marca);
console.log(carro.ano);
console.log(carro.buzina);