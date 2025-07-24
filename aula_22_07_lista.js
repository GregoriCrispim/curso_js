// **Exercício 1:**
// Crie um script que declare duas variáveis com valores numéricos. Realize as quatro operações matemáticas básicas (soma, subtração, multiplicação e divisão) e exiba os resultados no console.

// **Exercício 2:**
// Escreva um programa que armazene a idade de uma pessoa em uma variável. Use uma estrutura condicional (`if/else`) para verificar se a pessoa tem 16 anos ou mais. Se tiver, exiba no console "Você pode votar.". Caso contrário, exiba "Você ainda não pode votar.".

let idade = 19

if(idade >= 16){
    console.log('Você pode votar')
}else{
    console.log('Você não pode votar')
}

// **Exercício 3:**
// Crie uma variável `codigoProduto` e atribua um valor numérico a ela. Use uma estrutura `switch` para exibir o nome do lanche correspondente ao código:
// *   1: "Hambúrguer"
// *   2: "Batata Frita"
// *   3: "Refrigerante"
// *   4: "Milk-shake"
// *   Se o código não for nenhum desses, exiba "Produto não encontrado.".

let codigoProduto = 3

switch (codigoProduto){
    case 1:
        console.log('Hambúrguer')
        break
        
    case 2:
        console.log('Batata Frita')
        break

    case 3:
        console.log('Refrigerante')
        break
        
    case 4:
        console.log('Milk-shake')
        break

    default:
        console.log('Produto não encontrado.')
}

// **Exercício 4:**
// Escreva um programa que utilize um laço `for` para exibir a tabuada do número 7 (de 7x1 até 7x10) no console.

for(let i = 1; i <= 10; i++){
    let resultado = 7 * i
    console.log(resultado)
}

// **Exercício 5:**
// Crie um script que use um laço `while` para fazer uma contagem regressiva de 10 até 0, exibindo cada número no console.
let contagem = 10

while(contagem > 0){
    console.log(contagem)
    contagem--
}

// **Exercício 6:**
// Declare um array com 5 notas de um aluno. Use um laço de repetição (`for` ou `for...of`) para calcular a soma de todas as notas e, em seguida, calcule e exiba a média delas.

let notas = [3, 9, 8.8, 4, 10]
let soma_notas = 0

for (let nota of notas){
    soma_notas += nota
}

let media = soma_notas / notas.length
console.log(media)

// **Exercício 7:**
// Crie uma função chamada `verificarParidade` que recebe um número como parâmetro. A função deve retornar uma string: "Par" se o número for par, ou "Ímpar" se for ímpar. Chame a função com diferentes números e exiba o resultado no console.

function verificarParidade(n){
    let pariedade = 'Não verificado'
    if(n % 2 == 0){
        pariedade = 'par'
        console.log(pariedade)
    }else{
        pariedade = 'ímpar'
        console.log(pariedade)
    }
}

verificarParidade(2)
verificarParidade(5)

// **Exercício 8:**
// Crie uma função chamada `calcularFatorial` que recebe um número inteiro não negativo como parâmetro e retorna o seu fatorial. O fatorial de um número `n` (representado por `n!`) é a multiplicação de todos os inteiros de 1 a `n`. Ex: `5! = 5 * 4 * 3 * 2 * 1 = 120`. Lembre-se que o fatorial de 0 é 1.

function calcularFatorial(n_fat){
    let resultado_fatorial = 1
    while(n_fat >= 1){
        resultado_fatorial = n_fat * resultado_fatorial
        n_fat--
    }
    console.log(resultado_fatorial)
}

calcularFatorial(5)