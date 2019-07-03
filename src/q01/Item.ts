class ValueMap {
  [prop: string]: string;
}
export class Item {
  private map = new ValueMap();
  constructor() {}

  public setProperty(name: string, value: string) {
    this.map[name] = value;
  }

  public getProperty(name: string): string {
    return this.map[name];
  }
}
