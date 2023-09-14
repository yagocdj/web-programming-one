// As linhas de código comentadas devem ser rodadas no console do navegador
// let nome = window.prompt('Digite o seu nome: ');
// console.log('Você digitou o nome: ' + nome);

// console.log(typeof prompt);
// window.alert('Olá!');

let x = Number('10') + 2; console.log(x);
let idade = 20;
console.log('Eu tenho ' + String(idade) + ' anos');

console.log(Math.max(30, 20));
console.log(Math.min(30, 20));

// Algumas funções da classe utilitária Math
console.log(Math.sqrt(9)); // 3
console.log(Math.max(1,3,5,4,2,7,6)); // 7
console.log(Math.PI); // 3.14159...
console.log(Math.floor(Math.PI)); // 3
console.log(Math.ceil(Math.PI)); // 4

// imprimir a palavra "Acabou" após 3 segundos (3000 milisegundos)
setTimeout(() => console.log("Acabou!"), 3000);

// imprimir a string "mais uma vez" a cada 3 segundos
// setInterval(() => console.log("mais uma vez"), 3000);

// imprimindo a string "mais uma vez" a cada 3 segundos (modificado)
let temporizador = setInterval(() => console.log("mais uma vez"), 3000);

// parando o temporizador depois de 11s
setTimeout(() => clearInterval(temporizador), 11000);

