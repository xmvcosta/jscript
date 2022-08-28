let velocidade = 39;
let x = document.getElementById("titulo");

if(velocidade <= 40){
    x.innerHTML = `Não foi multado ${velocidade} Km/h.`;
}else{
    x.innerHTML = `Foi multado ${velocidade} Km/h.`;
}
