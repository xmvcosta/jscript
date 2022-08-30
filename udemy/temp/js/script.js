// for(let i = 10; i>0; i = i-1){
//     if(i % 2 == 0){
//         console.log("caiu no continue par");
//         continue;
//     }
//     console.log(i);
// }

// for (i=0; i<10; i++){
//     console.log(i);

// }

// let nome = "Marcos";
// let idade = 38;
// let solteiro = true;

// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof solteiro);

// let idade = 17;

// if(idade >= 18){
//     console.log("pode entrar na balada");
// }else {
//     console.log("Menor de 18 anos. Não pode entrar");
// }

// const nome = "Marcos";
// if(nome == "Marcos"){
//     console.log("Bem vindo Marcos");
// }

//minha solução
// let i = Math.pow(3,2);
// console.log(i);

//solução do professor
// let num = 18;
// console.log(Math.pow(2,2));
// console.log(Math.pow(3,2));
// console.log(Math.pow(num,2));

// exercicio 10 velocidade
//minha solução
// let velocidade = 880;

// if(velocidade <= 80){
//     console.log("Dentro do limite de velocidade");
// } else {
//     console.log("Multado. Você está acima do limite de velocidade!!!");
// }


// exercicio 11
// minha solução
// let idade = 19;
// let cnh = true;

// if(idade > 18 && cnh == true){
//     console.log("Pode dirigir. Maior de 18 anos com CNH.");
// } else if(idade > 18 && cnh == false){
//     console.log("Proibido Dirigir, maior de 18 anos não habilitado");

// } else {
//     console.log("Menor de 18 anos. Probido dirigir.");
// }

// exercicio 12
// minha solução
// i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// exercicio 13
// minha solução
// for(let i = 100; i >= 50; i--){
//     console.log(i);
// }

// exercicio 13
// minha solução

// let n = 0;

// while(n <= 50){
//     //console.log(n);
//     if(n % 2 == 0){
//         console.log(`${n} é par`);
//     } else{
//         console.log(n + " é impar");
//     }
//     n++;
// }

// function imprimirNoConsole(){
//     console.log("Função imprimir no console");
// }
// imprimirNoConsole();


// consoleTeste();
// //
// //
// let soma = (a,b)=>{
//     return console.log(a + b * 1000);
// }
// soma(5,10);

// setTimeout(consoleTeste,10000);
// setInterval(consoleTeste,10000);

//classes no javascript
// class Carro{
//     constructor(valor1,valor2,valor3){
//         this.marca = valor1;
//         this.modelo = valor2;
//         this.ano = valor3;
//     }
// }

// const uno = new Carro("Lamborguini","Diablo",2023);
// console.log(uno);

//datas no javascript
// let data = new Date();
// console.log(data);

// let ano = data.getFullYear();
// console.log(ano);

// let mes = data.getMonth();
// console.log(mes+1);

//arrow function
// const consoleTeste =  () =>{
//     console.log("Olá mundo!");
// }

// let y = 38;

// function imprimir(){
//     let y = 76;
//     console.log(y);
// }

// console.log(y);

// imprimir();

// let y = 38;

// if(y<50){
//     let y = 100;
//     y++
//     console.log(y);
// }

// console.log(y);

// let a = 10;

// function multiplicar(x,y){
//     let a = x * y;
//     if(a > 10){
//         let a = 0;
//         console.log(a);
//     }
//     console.log(a);
// }
// multiplicar(5,5);
// console.log(a);

// const multiplicarPorDois = (x) =>{
//     return x * 2;
// }
// console.log(multiplicarPorDois(18));