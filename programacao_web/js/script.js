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

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            MÉTODOS PARA ARRAYS                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////
//p.innerHTML = pessoa.join(" ? "); muda o caracter que separa os itens do array ao serem exibidos
//pessoa.push("Solteiro"); //adiciona +1 novo valor ao final do array
//pessoa[pessoa.length] = "Solteiro"; //adiciona +1 novo valor ao final do array
//alert(pessoa[pessoa.length -1]); //exibe o último item do array 
//pessoa.unshift("lindão"); //adiciona um item na primeira posição da matriz/array
//pessoa.shift();// remove o primeiro item do array/matriz
//pessoa.pop(); //remove o último item do array
//delete pessoa[0]; //exclui um item em uma determina posição e "seta" a posição para undefined
//pessoa.push("Solteiro");// adiciona item ao final do array
//pessoa.splice(1,0,"item1","item2"); //adiciona itens a partir de uma determinada posição no array


//p.innerHTML = pessoa;

//const lista1=["suco", "refrigerante","cerveja"]; //array
//const lista2=["carne", "linguiça", "frango"]; //array
//const lista3=["1,2,3","4,5,6"];
//const superLista = lista1.concat(lista2,lista3);
//const jogadores = ["bebeto", "roberto carlos", "amaral", "romario", "tonhão", "zequinha","valderrama"];
//const craques = jogadores.slice(2,4); //fatia da posição 2 até a posição 4
//jogadores.sort();//mostra o array em ordem alfabetica
//jogadores.reverse();//inverte a ordem de exibição do array-matriz

//document.getElementById("texto").innerHTML = superLista;
//document.getElementById("texto").innerHTML = lista1;
//document.getElementById("texto").innerHTML = jogadores;


const numeros = [100,250,10,20,21,30,31,40];
let n = document.getElementById("texto");

//numeros.sort(function(a,b){return a-b});//função que mostra os numeros em ordem crescente 


n.innerHTML = numeros;



