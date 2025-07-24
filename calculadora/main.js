//import {somar} from './calculadora'
import * as calcular from './calculadora.js'

//De acordo com a operação informada
let operacao = '+'
let n1 = 7
let n2 = 3

switch (operacao){
    case '+':
        console.log(calcular.somar(n1, n2))
        break

    case '-':
        console.log(calcular.subtrair(n1, n2))
        break

    case '*':
        console.log(calcular.multiplicar(n1, n2))
        break

    case '/':
        console.log(calcular.dividir(n1, n2))
        break

    default:
        console.log('Operação não permitida.')
}