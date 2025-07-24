// ### **Exercícios**

// **Exercício 1: Condição Simples (`if`) - Verificador de Temperatura**
// Declare uma variável `temperatura` e atribua um valor numérico a ela. Use uma estrutura `if` 
// para verificar se a temperatura é maior que 30. Se for, exiba a mensagem "Está muito calor hoje!" 
// no console.
let temperatura = 36
if(temperatura > 30){
    console.log('Está muito calor hoje!')
}

// **Exercício 2: Condição Composta (`if/else`) - Verificador de Permissão para Dirigir**
// Declare uma variável `idade` e atribua um valor a ela. Use uma estrutura `if/else` para verificar 
// se a pessoa tem 18 anos ou mais. Se tiver, exiba "Pode dirigir.". Caso contrário, exiba 
// "Não pode dirigir.".
let idade = 19

if(idade >= 18){
    console.log('Pode dirigir')
}else{
    console.log('Não pode dirigir')
}

// **Exercício 3: Condição Múltipla (`if/else if/else`) - Classificador de Desempenho do Aluno**
// Declare uma variável `nota` (de 0 a 10). Use uma estrutura `if/else if/else` para classificar o 
// desempenho:
// *   Se a nota for 9 ou maior, exiba "Excelente!".
// *   Se a nota for entre 7 e 8.9, exiba "Bom!".
// *   Se a nota for entre 5 e 6.9, exiba "Recuperação.".
// *   Se a nota for menor que 5, exiba "Reprovado.".

let nota = 9.9

if(nota >= 9){
    console.log('Exelente!')
}else if(nota >= 7 && nota <= 8.9){
    console.log('Bom!')
}else if(nota >= 5 && nota <= 6.9){
    console.log('Recuperação')
}else{
    console.log('Reprovado')
}

// **Exercício 4: `switch/case` - Conversor de Dia da Semana**
// Declare uma variável `diaDaSemana` com um número de 1 a 7. Use uma estrutura `switch` para exibir o 
// nome do dia correspondente (1 para "Domingo", 2 para "Segunda", e assim por diante). Inclua um caso 
// `default` para números inválidos.
let diaDaSemana = 4
let nomeDia

switch (diaDaSemana){
    case 1:
        nomeDia = 'Domingo'
        break
    case 2:
        nomeDia = 'Seegunda'
        break
    case 3:
        nomeDia = 'Terça'
        break
    case 4:
        nomeDia = 'Quarta'
        break
    case 5:
        nomeDia = 'Quinta'
        break
    case 6:
        nomeDia = 'Sexta'
        break
    case 7:
        nomeDia = 'Sábado'
        break
    default:
        nomeDia = 'Dia inválido'
}

console.log(nomeDia)

// **Exercício 5: `for` loop - Tabuada Personalizada**
// Declare uma variável `numero` e atribua um número inteiro a ela. Use um laço `for` para calcular e 
// exibir a tabuada desse número, de 1 a 10, no formato "numero x i = resultado".
let numero = 7

for(let i = 1; i < 11; i++){
    let resultado = numero * i
    console.log(`${numero} X ${i} = ${resultado}`)
}

// **Exercício 6: `for...of` - Encontrando o Maior Número em uma Lista**
// Declare um array de números chamado `listaDeNumeros`. Use um laço `for...of` para percorrer o array e 
// encontrar o maior número entre eles. Ao final, exiba o maior número encontrado no console.
let listaDeNumeros = [1, 2, 3, 9, 10, 15, 8, 5]
numeroAtual = listaDeNumeros[0]

for(let numero of listaDeNumeros){
    if(numero > numeroAtual){
        numeroAtual = numero
    }
}

console.log(numeroAtual)

// **Exercício 7: `while` loop - Simulador de Poupança**
// Declare as variáveis `saldo` (iniciando em 0), `meta` (com um valor desejado, ex: 1000) e 
// `depositoMensal`. Use um laço `while` que continue adicionando o `depositoMensal` ao `saldo` 
// enquanto o `saldo` for menor que a `meta`. A cada mês (iteração), exiba o saldo atual. Conte e 
// exiba também quantos meses foram necessários para atingir a meta.
let saldo = 0
let meta = 2000
let depositoMensal = 100
let count = 0

while(saldo < meta){
    saldo = depositoMensal + saldo
    count++
    console.log(`Saldo do ${count}º mês = ${saldo}`)
}

// **Exercício 8: `do...while` - Sorteio até o Número Correto**
// Crie um sorteio simples. Use `Math.random()` e Math.floor() para gerar um número aleatório entre 1 e 10 a cada 
// iteração. O laço deve continuar sorteando números *até que* o número sorteado seja 7. Use um laço 
// `do...while` para garantir que pelo menos um sorteio seja feito. A cada sorteio, exiba o número 
// que saiu. Ao final, exiba "Finalmente! O número 7 foi sorteado."
let numeroAlvo = 7
let numeroSorteado

do {
     numeroSorteado = Math.floor(Math.random() * 10) + 1
     if(numeroSorteado == 7){
        console.log('Finalmente o número sorteado foi ' + numeroSorteado)
     }else{
        console.log('O número sorteado foi: ' + numeroSorteado)
     }
}while(numeroSorteado !== numeroAlvo)