// rode o código a seguir no console do navegador

/* let altura = Number(prompt("Digite sua altura:"));
let massa = Number(prompt("Digite sua massa:"));

if (Number.isNaN(altura) || Number.isNaN(massa))
    console.log("A altura e a massa precisam ser números");
else {
    let imc =  massa / (altura ** 2);
    console.log(`O seu IMC é ${imc}`);
} */

let idade = 18;

/* Faça um if abaixo, imprimindo 'Pode entrar' caso a pessoa tenha idade >= 18, e 'Proibida entrada', caso contrário. */

if (idade >= 18)
    console.log('Pode entrar');
else
    console.log('É proibida a entrada de menores de 18 anos');

let serie = 3;

switch (serie) {
    case 3:
        console.log("Boa sorte!");
        break;
    case 2:
        console.log("Quase lá!");
        break;
    case 1:
        console.log("Ainda não pode fazer o ENEM");
        break;
    default:
        break;
    }
