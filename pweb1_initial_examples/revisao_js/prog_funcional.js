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
  
console.log("for tradicional");
for (let i=0; i < alunos.length; i++)
    console.log(alunos[i].idade);

console.log("\nforeach");
alunos.forEach(aluno => console.log(aluno.idade));

//  Mude o programa abaixo para imprimir todas as matrículas dos alunos.
console.log('\nimprimindo as matrículas de cada aluno');
alunos.forEach(aluno => console.log(aluno.matricula));

console.log("\ntradicional");
for (const aluno of alunos)
    if (aluno.idade > 30)
        console.log(aluno.idade);

console.log("\nfilter");
alunos.filter(aluno => aluno.idade > 30).forEach(aluno => console.log(aluno.idade));

// Altere o programa abaixo para devolver os alunos com nome "José" ou com matrícula "765".

console.log('\nexibindo os alunos que tenham nome igual a "José" ou com matrícula "765"');
alunos.filter(aluno => aluno.nome === 'José' || aluno.matricula === '765')
    .forEach(aluno => console.log(aluno));

// demonstrando o map
console.log('\ndemonstrando o método map');
let numeros = [1, 4, 9, 16];
let raizes = numeros.map(Math.sqrt);
// a linha acima faz a mesma coisa da linha abaixo
// let raizes = numeros.map(numero => Math.sqrt(numero));
console.log(raizes);

// Altere o código acima para calcular o cosseno dos números.
let cossenos = numeros.map(numero => Math.cos(numero));
console.log(cossenos);

// usando o reduce
console.log('demonstrando o reduce');
let outrosNumeros = [1, 3, 5, 6, 7, 4, 10, 20, 0];
const total = outrosNumeros.reduce((soma, numero) => soma + numero);
console.log(total);

// Altere o código abaixo para somar a idade de todos os alunos (use a função reduce).

let outrosAlunos = [
    {
      "idade": 20,
    },
    {
      "idade": 33,
    },
    {
      "idade": 18,
    },
    {
      "idade": 40,
    },
    {
      "idade": 25,
    },  
];

console.log('\nsoma das idades de todos os alunos:');
let somaDasIdades = outrosAlunos.reduce((somaIdade, aluno) => somaIdade + aluno.idade, 0);
console.log(somaDasIdades);
