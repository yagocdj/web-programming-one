let aluno = {
    "matricula": "345",
    "nome": "Carlos",
    "idade": 20,
    "disciplinas_cursadas": ["ED", "BD", "APE"]
};

console.log('-> exibindo algumas propriedades do objeto aluno');
console.log(aluno.matricula);
console.log(aluno.pai);

console.log('\n-> exibindo o pai do aluno após inserir o pai');
aluno.pai = 'José';
console.log(aluno.pai);

// um array de objetos
let usuarios = [
    {
        "login": "u1",
        "nome": "Carlos"
    },
    {
        "login": "u2",
        "nome": "Joaquim"
    },
    {
        "login": "u3",
        "nome": "Maria"
    }
];

console.log('\n-> imprimindo o primeiro usuário e o seu nome');
console.log(usuarios[0]);
console.log(usuarios[0].nome);

/*
Faça um programa que, dada a lista de alunos abaixo,
imprima o nome apenas dos que tem mais de 30 anos.
*/

let alunos = [
    {
      "matricula": "345",
      "nome": "Carlos",
      "idade": 20,
    },
    {
      "matricula": "246",
      "nome": "João",
      "idade": 33,
    },
    {
      "matricula": "156",
      "nome": "Maria",
      "idade": 18,
    },
    {
      "matricula": "543",
      "nome": "José",
      "idade": 40,
    },
    {
      "matricula": "765",
      "nome": "Sebastião",
      "idade": 25,
    },  
];
  
for (let aluno of alunos)
    if (aluno.idade > 30)
        console.log(aluno.nome);
