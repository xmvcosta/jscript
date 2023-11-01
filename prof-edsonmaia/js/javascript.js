//Aula 01
// console.log("Olá mundo!");
// document.write("Olá mundo!");
// alert("olá mundo!");

//

//Aula 02
//https://www.youtube.com/watch?v=qsqeHCVYkMU&ab_channel=ProfessorEdsonMaia

//declaração de variáveis e constantes
// var mensagem = "Não é recomendado o uso de var para declarar variaveis"
// let mensagem2 = "Mensagem 2 usando aspas dupla"
// let mensagem3 = 'Mensagem 3 usando aspas simples'
// let idade = 39
// let peso = 66.5
// let teste = null
// let ehDoador = false
// const sexo = "Masculino"
// const PI = 3.1415
// const TAXA = 0.5
// teste = "FFFFFF"

//escrever o valor de variáveis e constantes
// document.write(mensagem)
// document.write(mensagem2)
// document.write(mensagem3)
// document.write(idade)
// document.write(peso)
// document.write(teste)
// document.write(ehDoador)
// document.write(sexo)
// document.write(PI)
// document.write(TAXA)

// document.write("<p>Mensagem 01 = " + mensagem +"</p>") //forma concatenada
// document.write(`Mensagem2 = ${mensagem2}`) // forma de template string
// document.write("<p>Meu peso = " + peso + " KG</p>") //forma concatenada
// document.write("<p>Mensagem 03 =" + mensagem3 + "</p>") //forma concatenada
// document.write(`Idade = ${idade}`) // forma de template string
// document.write("<p>Teste =" + teste + "</p>") //forma concatenada
// document.write("<p>É doador? = "+ ehDoador + "</p>")
// document.write("<p>Sexo = " + sexo + "</p>")
// document.write(`O valor de PI é ${PI}`)// forma de template string
//  document.write("<p>Valor da Taxa = " + TAXA + "</p")

//

//AULA 03 - Curso de JS Aula 03 Operadores e Operações no JavaScript
//https://www.youtube.com/watch?v=6d6IV3SQnIM&ab_channel=ProfessorEdsonMaia

// let n1 = 10
// let n2 = 2
// let n3 = "2"

// document.write(`N1 = ${n1}</br>`)
// document.write(`N2 = ${n2}</br>`)
// document.write(`N3 = ${n3}</br>`)

// //operadores matematicos
// console.log(n1 + n2) //adição
// console.log(n1 - n2) //subtração
// console.log(n1 * n2) //multiplicação
// console.log(n1 / n2) //divisão
// console.log(n1 % n2) //resto ou modulo

// //operadores de igualdade e diferença
// console.log(n2 == n3) //igual a
// console.log(n2 === n3) //identico a
// console.log(n2 != n3) //diferente de Nao=
// console.log(n2 !== n3) //Nao é identico

// //operadores logicos
// let a = true
// let b = false

// console.log(a && b) //and ou "E"
// console.log(a || b) //or ou "OU"
// console.log(!a) //negação "NOT" inverte o conteudo se é verdadeiro vira falso se é falso vira verdadeiro
// console.log(!b) //negação "NOT" inverte o conteudo se é verdadeiro vira falso se é falso vira verdadeiro

//operadores de comparação
// console.log(n1 > n2)
// console.log(n1 < n2)
// console.log(n1 >= n2)
// console.log(n1 <= n2)


//AULA 04 - Curso de JS Aula 04 Arrays, métodos, length e spreed operator
//https://www.youtube.com/watch?v=XisY6rpfbiw&ab_channel=ProfessorEdsonMaia

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10,20,30)
let meses = ['Jan', 'Fev', 'Mar', 'Abr']

//metodo para adicionar elementos (dado) ao final do array push = empurre
produtos.push('Açúcar', 'Trigo') 
codigos.push(40, 50, 60, 70)
meses.push('Mai', 'Jun','Jul','Ago')

//metodo para remover o ultimo elemento (dado) do array pop = estourar
produtos.pop()
codigos.pop()
meses.pop()
meses.pop() //podemos usar o metodo pop mais de uma vez, assim como os outros.

//metodo para adicionar elemento (dado) ao inicio do array unshift
produtos.unshift('Uva', 'Maçã')

//metodo para remover elemento (dado) do inicio shift
produtos.shift()

//REMOVER de uma posicao especifico
//posicao inicial, quantos remover
//codigos.splice(1, 3)

//COPIAR array slice == fatiar porção
//posiçao inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

//ver tamanho do array lenght comprimento
//meses.lenght
//meses1.lenght
//meses2.lenght

//spreed operator ... copiar o conteudo de um array e inserir... espalhar dentro de outro array
let teste = [...produtos,'Ovo','Pera']




