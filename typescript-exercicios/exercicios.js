"use strict";
// Question 2
const pessoa = {
    nome: "Luiz",
    profissao: "Dev fullstack",
    idade: 35,
    listaInteresse: ["Java", "Javascript", "Angular", "TS"],
};
console.log(pessoa, "\n");
// Question 3 e 4
const listaTipada = (pessoa) => {
    return pessoa.listaInteresse;
};
console.log(listaTipada(pessoa));
console.log();
// Question 5
var MateriasCurso;
(function (MateriasCurso) {
    MateriasCurso["Angular"] = "Angular";
    MateriasCurso["Typescript"] = "Typescript";
    MateriasCurso["Git"] = "Git";
})(MateriasCurso || (MateriasCurso = {}));
// Question 7
const alan = {
    nome: "Alan",
    materiasCurso: [
        MateriasCurso.Angular,
        MateriasCurso.Typescript,
        MateriasCurso.Git,
    ],
};
const nathan = {
    nome: "Nathan",
    materiasCurso: [MateriasCurso.Angular, MateriasCurso.Typescript],
};
// Question 8
const professores = [alan, nathan];
// Question 9
const professoresPorNomes = (professores) => {
    return professores.map((professor) => professor.nome);
};
console.log(professoresPorNomes(professores), "\n");
// Question 10
const professoresPorCursos = (professores) => {
    const cursos = professores.map((professor) => [...professor.materiasCurso]);
    return cursos.reduce((lista, sub) => lista.concat(sub), []);
};
console.log(professoresPorCursos(professores), "\n");
// Question 11
const professorTypescript = (prof) => {
    return prof.find((professor) => professor.materiasCurso.includes(MateriasCurso.Typescript));
};
console.log(professorTypescript(professores));
