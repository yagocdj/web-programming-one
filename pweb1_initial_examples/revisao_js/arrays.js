const matriculas = [1,3,5,7,8,9,10,15];
console.log(typeof matriculas);

console.log(matriculas.length);
console.log(matriculas[0]);
console.log(matriculas[matriculas.length - 1]);
console.log(matriculas[5]);

console.log('\nexibindo cada elemento de um array');
for (let i = 0; i < matriculas.length; i++)
    console.log(matriculas[i]);

console.log('\nmaneira simplificada de varrer o array');
for (let matricula of matriculas)
    console.log(matricula);

console.log('\nmais outra maneira de varrer o array');
matriculas.forEach(matricula => console.log(matricula));

matriculas.forEach(matricula => console.log(matricula + 1));

console.log('\nimprimindo o maior elemento do array matriculas');
console.log(Math.max(...matriculas));

console.log('\ninserir o elemento 20');
matriculas.push(20);
console.log(matriculas);

console.log('\nremover elementos do final do array');
console.log(matriculas.pop());
console.log(matriculas);

console.log('\ninserir elementos do início do array');
console.log(matriculas.unshift(2, 4, 6));
console.log(matriculas);

console.log('\nremover elementos do início do array');
console.log(matriculas.shift());
console.log(matriculas);

console.log('\nchecando a existência de um determinado elemento');
console.log(matriculas.includes(10));
console.log(matriculas.includes(0));

console.log('\nprocurando pelo índice de um determinado elemento');
console.log(matriculas.indexOf(10));
console.log(matriculas.indexOf(30));

console.log('\nobter os elementos presentes do índice 0 até o 3');
//matriculas =  [4, 6, 1, 3, 5, 7, 8, 9, 10, 15]
console.log(matriculas.slice(0, 4)); // [4, 6, 1, 3]

console.log('\nexemplos utilizando o splice');

let myFish = ["angel", "clown", "mandarin", "surgeon"];

//remove 0 elementos a partir do índice 2, e insere "drum"
let removed = myFish.splice(2, 0, "drum");
//myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
//removed é [], nenhum elemento removido

//remove 1 elemento do índice 3
removed = myFish.splice(3, 1);
//myFish é ["angel", "clown", "drum", "surgeon"]
//removed é ["mandarim"]

//remove 1 elemento a partir do índice 2, e insere "trumpet"
removed = myFish.splice(2, 1, "trumpet");
//myFish é ["angel", "clown", "trumpet", "surgeon"]
//removed é ["drum"]

//remove 2 elementos a partir do índice 0, e insere "parrot", "anemone" e "blue"
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
//myFish é ["parrot", "anemone", "blue", "trumpet", "surgeon"]
//removed é ["angel", "clown"]

//remove 2 elementos a partir do indice 3
removed = myFish.splice(3, Number.MAX_VALUE);
//myFish é ["parrot", "anemone", "blue"]
//removed é ["trumpet", "surgeon"]