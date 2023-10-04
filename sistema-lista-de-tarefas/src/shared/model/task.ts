export class Task {
  private _title: string;
  private _date: Date;
  private _description: string;

  constructor() {
    this._title = '';
    this._date = new Date();
    this._description = '';
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
