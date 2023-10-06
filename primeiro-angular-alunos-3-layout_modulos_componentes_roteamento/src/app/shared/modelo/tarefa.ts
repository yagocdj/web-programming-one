export class Tarefa {
  private _titulo: string;
  private _descricao: string;
  private _data: Date | undefined;

  constructor(titulo: string='', descricao: string='', data: Date | undefined=undefined) {
    this._titulo = titulo;
    this._descricao = descricao;
    this._data = data;
  }


  get data(): Date | undefined {
    return this._data;
  }

  set data(value: Date | undefined) {
    this._data = value;
  }

  get titulo(): string {
    return this._titulo;
  }

  set titulo(value: string) {
    this._titulo = value;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(value: string) {
    this._descricao = value;
  }
}
