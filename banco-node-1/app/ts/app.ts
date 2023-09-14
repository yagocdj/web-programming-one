let c1 = new Conta('123', 100);
let valorDigitado = prompt('Digite o valor a ser creditado:');
c1.creditar(parseFloat(valorDigitado));
console.log(c1.saldo);
