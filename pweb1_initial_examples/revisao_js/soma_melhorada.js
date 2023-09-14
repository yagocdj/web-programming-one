// qual a soma de todos os números no intervalo de 1 a 10?
console.log(sum(range(1,15)));

// funções
// sum(range(1, 10)) -> 55
function sum(numeros) {
    let soma = 0;
    let posAtual = 0;
    let posFinal = numeros.length-1;
    
    while (posAtual <= posFinal) {
        soma = soma + numeros[posAtual];
        posAtual++;
    }
    return soma;
}

// range(1, 10) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function range(num1, num2) {
    let numeros = [];
    for (let i=num1; i<=num2; i++)
        numeros.push(i);
    return numeros;
}