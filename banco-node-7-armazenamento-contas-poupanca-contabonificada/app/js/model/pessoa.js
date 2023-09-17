class Pessoa {
    constructor(nome, dataDeNascimento, idade) {
        this._nome = nome;
        this._dataDeNascimento = dataDeNascimento;
        this._idade = idade;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get dataDeNascimento() {
        return this._dataDeNascimento;
    }
    set dataDeNascimento(novaData) {
        this._dataDeNascimento = novaData;
    }
    get idade() {
        return this._idade;
    }
    set idade(novaIdade) {
        this._idade = novaIdade;
    }
}
