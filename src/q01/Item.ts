class ValueMap {
  [prop: string]: string;
}
export class Item {
  private map = new ValueMap();
  private indexies: string[] = [];

  public setProperty(name: string, value: string) {
    this.map[name] = value;
    this.indexies.push(name);
  }

  public getProperty(name: string): string {
    return this.map[name];
  }

  toStringValue(): string {
    return this.indexies
      .map(key => `${key}=${this.getProperty(key)}`)
      .join(";");
  }
}
