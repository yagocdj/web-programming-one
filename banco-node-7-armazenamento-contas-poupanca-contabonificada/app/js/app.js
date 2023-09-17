let contaController = new ContaController();
contaController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
// Criando objetos das classes 'Pessoa', 'PessoaFisica' e 'PessoaJuridica'
const pessoaUm = new Pessoa('Marcela', new Date(2003, 0, 27), 20);
const pessoaDois = new PessoaFisica('Yago', new Date(2002, 11, 13), 20, '14492954429');
const pessoaTres = new PessoaJuridica('Mercadinho Silva', new Date(2010, 5, 10), 13, '20942541976259');
// Imprimindo os atributos de cada objeto
console.log(`
 Nome: ${pessoaUm.nome}
 Idade: ${pessoaUm.idade}
 Data de nascimento: ${pessoaUm.dataDeNascimento}
`);
console.log(`
 Nome: ${pessoaDois.nome}
 Idade: ${pessoaDois.idade}
 Data de nascimento: ${pessoaDois.dataDeNascimento}
 CPF: ${pessoaDois.cpf}
`);
console.log(`
 Nome: ${pessoaTres.nome}
 Idade: ${pessoaTres.idade}
 Data de nascimento: ${pessoaTres.dataDeNascimento}
 CPF: ${pessoaTres.cnpj}
`);
