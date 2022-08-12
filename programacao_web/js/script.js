/*
function soma(valor1, valor2){
    return valor1 + valor2;
   

}
//document.getElementById("texto").innerHTML = soma(15, 20);

function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}
var total = realParaDolar(10, 5.08);
alert (total);
*/

//https://www.youtube.com/watch?v=McKNP3g6VBA&t=7990s&ab_channel=Programa%C3%A7%C3%A3oWeb
//objetos
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


//https://www.youtube.com/watch?v=McKNP3g6VBA&t=7990s&ab_channel=Programa%C3%A7%C3%A3oWeb
//eventos

function eventoClique(){
    //alert("Clicou");
    console.log("Clicou");
    document.body.style.backgroundColor = "red";
}

function corVermelha(){
    document.getElementById("teste").style.backgroundColor = "green";
}

function corAzul(){
    document.getElementById("teste").style.backgroundColor = "blue";
}