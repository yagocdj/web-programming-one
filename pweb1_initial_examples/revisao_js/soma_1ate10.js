// qual a soma de todos os números no intervalo de 1 a 10?
// cria uma variável
let soma = 0;
let numAtual = 1;

// continua o laço enquanto a expressão for verdadeira
while (numAtual <= 10) {
    soma = soma + numAtual;
    numAtual++;
}

//função para logar no console do desenvolvedor o resultado
console.log(soma);

/* Explicação
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15
15 + 6 = 21
21 + 7 = 28
28 + 8 = 36
36 + 9 = 45
45 + 10 = 55
*/