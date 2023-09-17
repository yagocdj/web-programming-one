class PessoaJuridica extends Pessoa {
    constructor(nome, dataDeNascimento, idade, cnpj) {
        super(nome + ' - Jurídica', dataDeNascimento, idade);
        this.cnpj = cnpj;
    }
}
