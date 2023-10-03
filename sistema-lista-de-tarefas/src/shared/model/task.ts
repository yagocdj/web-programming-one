export class Task {
  private _title: string;
  private _date: Date;
  private _description: string;

  constructor(title: string, description: string, date: Date) {
    this._title = title;
    this._date = date;
    this._description = description;
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
