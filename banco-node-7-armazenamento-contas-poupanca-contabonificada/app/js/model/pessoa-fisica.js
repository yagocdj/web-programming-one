class PessoaFisica extends Pessoa {
    constructor(nome, dataDeNascimento, idade, cpf) {
        super(nome + ' - Física', dataDeNascimento, idade);
        this.cpf = cpf;
    }
}
