class Pessoa {
    protected _nome: string;
    private _dataDeNascimento: Date;
    private _idade: number;

    constructor(nome: string, dataDeNascimento: Date, idade: number) {
        this._nome = nome;
        this._dataDeNascimento = dataDeNascimento;
        this._idade = idade;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    get dataDeNascimento(): Date {
        return this._dataDeNascimento;
    }

    set dataDeNascimento(novaData: Date) {
        this._dataDeNascimento = novaData;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(novaIdade: number) {
        this._idade = novaIdade;
    }
}