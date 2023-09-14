// exemplo 1
/* let seuNome;
do {
  seuNome = prompt('Quem é você?');
} while (!seuNome);  // !undefined -> true
console.log(seuNome); */

// exemplo 2
/* let numero = prompt("Advinhe o número que pensei");
while (numero != "10") {
  console.log("Você não acertou o número!");
  numero = prompt("Advinhe o número que pensei");
}
console.log("Parabéns!"); */

// exemplo 3
// se i começa em 0, exibe apenas os pares
// se i começa em 1, exibe apenas os ímpares
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}
