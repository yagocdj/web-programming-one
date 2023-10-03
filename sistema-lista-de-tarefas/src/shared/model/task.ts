export class Task {
  private _id: number;
  private _title: string;
  private _date: Date;
  private _description: string;

  constructor(id: number) {
    this._id = id;
    this._title = '';
    this._date = new Date();
    this._description = '';
  }
  get id(): number {
    return this._id;
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
