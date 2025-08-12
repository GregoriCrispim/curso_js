export class Estudante{
    constructor(nome, matricula, dataNascimento){
        this.nome = nome;
        this.matricula = matricula;
        this.dataNascimento = dataNascimento;
        this.notas = [];
    }

    adicionarNota(nota){
        if(nota >= 0 && nota <= 10){
            this.notas.push(nota);
            console.log(`Nota ${nota} adicionada para ${this.nome}`)
        }else{
            console.log('Nota inválida. A nota deve ser entre 0 e 10.')
        }
    }

    calcularMedia(){
        if(this.notas.length === 0) return 0
        const soma = this.notas.reduce((acc, nota) => acc + nota)
        return (soma / this.notas.length).toFixed(2)
    }
}

// const joao = new Estudante("João Silva", "2020043", "2002-03-15")
// const maria = new Estudante("Maria Silva", "1235443", "2005-08-25")

// joao.adicionarNota(8.5)
// maria.adicionarNota(10)

// console.log(joao)
// console.log(maria)

// console.log(`Média do João: ${joao.calcularMedia()}`);