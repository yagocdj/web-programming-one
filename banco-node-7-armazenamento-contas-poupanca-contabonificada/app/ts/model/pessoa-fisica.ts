class PessoaFisica extends Pessoa {
    readonly cpf: string;

    constructor(nome: string, dataDeNascimento: Date, idade: number, cpf: string) {
        super(nome + ' - Física', dataDeNascimento, idade);
        this.cpf = cpf;
    }
}