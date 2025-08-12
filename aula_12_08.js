class Professor{
    constructor(nome, idFuncional, disciplinas){
        this.nome = nome
        this.idFuncional = idFuncional
        this.disciplinas = []
    }

    atribuirDisciplina(nomeDisciplina){
        this.disciplinas.push(nomeDisciplina)
    }
}

import {Estudante} from './aula_07_08.js'

export class Disciplina{
    constructor(nome, codigo, cargaHoraria){
        this.nome = nome
        this.codigo = codigo
        this.cargaHoraria = cargaHoraria
        this.professor = null
        this.estudantesMatriculados = []
    }

    // Método para associar um Professor
    atribuirProfessor(professor) {
        if (professor instanceof Professor) {
            this.professor = professor;
            console.log(`Professor ${professor.nome} atribuído à ${this.nome}.`);
        } else {
            console.log("Erro: Objeto não é uma instância de Professor.");
        }
    }

    // Método para matricular um Estudante
    matricularEstudante(estudante) {
        if (estudante instanceof Estudante) {
            this.estudantesMatriculados.push(estudante);
            console.log(`${estudante.nome} matriculado em ${this.nome}.`);
        } else {
            console.log("Erro: Objeto não é uma instância de Estudante.");
        }
    }

    listarEstudantes() {
        console.log(`\n--- Estudantes em ${this.nome} ---`);
        this.estudantesMatriculados.forEach(estudante => {
            console.log(`- ${estudante.nome} (${estudante.matricula})`);
        });
    }
}

// const Tiago = new Professor('Tiago', 84386)
// const Segato = new Professor('Segato', 84386)

// const joao = new Estudante('joao', 258935, '14/05/2000')
// const maria = new Estudante('maria', 263865, '12/01/2002')
// const pedro = new Estudante('joao', 840524, '09/07/2001')

// const logica = new  Disciplina('Lógica JS', 'LOG101', 24)
// const jspoo = new  Disciplina('JavaScript POO', 'LOG202', 24)

// logica.atribuirProfessor(Tiago)
// jspoo.atribuirProfessor(Segato)

// logica.matricularEstudante(joao)
// logica.matricularEstudante(maria)

// jspoo.matricularEstudante(pedro)
// jspoo.matricularEstudante(maria)

// console.log(`A disciplina de ${logica.nome} é lecionada por ${logica.professor.nome}`)
// logica.listarEstudantes()
// jspoo.listarEstudantes