// Question 1
type Pessoa = {
  nome: string;
  profissao: string;
  idade: number;
  listaInteresse: string[];
};

// Question 2
const pessoa: Pessoa = {
  nome: "Luiz",
  profissao: "Dev fullstack",
  idade: 35,
  listaInteresse: ["Java", "Javascript", "Angular", "TS"],
};

console.log(pessoa, "\n");

// Question 3 e 4
const listaTipada = (pessoa: Pessoa): string[] => {
  return pessoa.listaInteresse;
};
console.log(listaTipada(pessoa));
console.log();

// Question 5
enum MateriasCurso {
  Angular = "Angular",
  Typescript = "Typescript",
  Git = "Git",
}

// Question 6
interface Professor {
  nome: string;
  materiasCurso: MateriasCurso[];
}

// Question 7

const alan: Professor = {
  nome: "Alan",
  materiasCurso: [
    MateriasCurso.Angular,
    MateriasCurso.Typescript,
    MateriasCurso.Git,
  ],
};

const nathan: Professor = {
  nome: "Nathan",
  materiasCurso: [MateriasCurso.Angular, MateriasCurso.Typescript],
};

// Question 8
const professores: Professor[] = [alan, nathan];

// Question 9
const professoresPorNomes = (professores: Professor[]): string[] => {
  return professores.map((professor) => professor.nome);
};
console.log(professoresPorNomes(professores),"\n");

// Question 10
const professoresPorCursos = (professores: Professor[]) => {
  const cursos = professores.map((professor) => [...professor.materiasCurso]);

  return cursos.reduce((lista, sub) => lista.concat(sub), []);
};

console.log(professoresPorCursos(professores),"\n");

// Question 11
const professorTypescript = (prof: Professor[]): Professor | undefined => {
  return prof.find((professor) =>
    professor.materiasCurso.includes(MateriasCurso.Typescript)
  );
};

console.log(professorTypescript(professores))
