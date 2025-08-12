import { Disciplina } from "./aula_12_08.js"

class Turma{
    constructor(ano, semestre, codigoTurma, disciplinas){
        this.ano = ano
        this.semestre = semestre
        this.codigoTurma = codigoTurma
        this.disciplinas = []

    }

    adicionarDisciplinas(disciplina){
        this.disciplinas.push(disciplina)
    }
}

const turmaJS = new Turma(2025, 1, 'A101')

const logica = new  Disciplina('Lógica JS', 'LOG101', 24)
const jspoo = new  Disciplina('JavaScript POO', 'LOG202', 24)

turmaJS.adicionarDisciplinas(logica)
turmaJS.adicionarDisciplinas(jspoo)
console.log(turmaJS)