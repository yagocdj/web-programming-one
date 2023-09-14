let num1 = 10, num2 = 9, operacao = "-";

switch (operacao) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2)
        break;
    default:
        console.log("Não é uma operação válida");
        break;
}