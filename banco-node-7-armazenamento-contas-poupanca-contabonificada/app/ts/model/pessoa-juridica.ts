class PessoaJuridica extends Pessoa {
    readonly cnpj: string;

    constructor(nome: string, dataDeNascimento: Date, idade: number, cnpj: string) {
        super(nome + ' - Jurídica', dataDeNascimento, idade);
        this.cnpj = cnpj;
    }
}