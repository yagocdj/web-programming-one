class Conta {

    private _numero: string;
    private _saldo: number;
    constructor(numero: string, saldo: number=0) {
        this._numero = numero;
        this._saldo = saldo;
    }

    get numero(): string {
        return this._numero;
    }

    set numero(numero: string){
        this._numero = numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    debitar(valor: number): void {
        //apenas debita se houver saldo
        if (valor < this._saldo) {
            this._saldo -= valor;
        }
    }

    creditar(valor: number): void {
        this._saldo += valor;
    }

}
