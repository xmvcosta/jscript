////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                              OBJETOS                                              //
//  https://www.youtube.com/watch?v=McKNP3g6VBA&t=7990s&ab_channel=Programa%C3%A7%C3%A3oWeb         //
/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: "2022",
    buzina: function(){alert("biiiiii")},
    completo: function(){
        return "A marca é "+this.marca +" e o modelo é: "+this.modelo;
    }
};
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                              FUNÇÔES                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////
function eventoClique() {
  //alert("Clicou");
  console.log("Clicou");
  document.body.style.backgroundColor = "yellow";
}

function corVermelha() {
  let cor = document.getElementById("teste");
  cor.style.backgroundColor = "green";
}

function corAzul() {
  let cor = document.getElementById("teste");
  cor.style.backgroundColor = "blue";
}

function limparTexto() {
  document.getElementById("nome").value = "";
}

function mudou() {
  console.log("mudou");
}

function digitou() {
  let digitou = document.getElementById("nome").value;
  console.log(digitou);
}

function realParaDolar(real, cotacaoDolar) {
  return real * cotacaoDolar;
}
function soma(valor1, valor2) {
  return valor1 + valor2;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                              ARRAYS                                              //
/////////////////////////////////////////////////////////////////////////////////////////////////////

const lista = ["arroz","feijão","macarrão","carne"];
let t = document.getElementById("texto");
//t.innerText = lista;
//t.innerHTML = lista;
t.innerHTML = lista[1];

const pessoa = ["Marcos", "Costa", 38, "Brasileiro"];
//pessoa.push("Solteiro"); //adiciona +1 novo valor ao final do array
//pessoa[pessoa.length] = "Solteiro"; //adiciona +1 novo valor ao final do array
//alert(pessoa[pessoa.length -1]); //exibe o último item do array 
console.log(pessoa);


