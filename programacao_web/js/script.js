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

//const lista = ["arroz","feijão","macarrão","carne"];
//let t = document.getElementById("texto");
//t.innerText = lista;
//t.innerHTML = lista;
//t.innerHTML = lista[1];
//

const pessoa = ["Marcos", "Costa", 38, "Brasileiro"];
let p = document.getElementById("texto");
//p.innerHTML = pessoa.join(" ? "); muda o caracter que separa os itens do array ao serem exibidos
//pessoa.push("Solteiro"); //adiciona +1 novo valor ao final do array
//pessoa[pessoa.length] = "Solteiro"; //adiciona +1 novo valor ao final do array
//alert(pessoa[pessoa.length -1]); //exibe o último item do array 
//pessoa.unshift("lindão"); //adiciona um item na primeira posição da matriz/array
//pessoa.shift();// remove o primeiro item do array/matriz
//pessoa.pop(); //remove o último item do array
//delete pessoa[0]; //exclui um item em uma determina posição e "seta" a posição para undefined
//pessoa.push("Solteiro");// adiciona item ao final do array


p.innerHTML = pessoa;



