import { Item } from "./Item";
export class ItemConverter {
  private readonly ROW_SEPARATOR: string = ";";
  private readonly ITEM_SEPARATOR: string = "\n";
  private readonly VALUE_SEPARATOR: string = "=";

  fromString(value: string | null | undefined): Item[] {
    const items: Item[] = [];
    if (value) {
      const rows = value.split(this.ITEM_SEPARATOR);
      for (const row of rows) {
        if (this.isNotValidRowString(row)) {
          throw new Error("invalid input");
        }
        const item = new Item();
        row.split(this.ROW_SEPARATOR).map(str => {
          const pair = str.split(this.VALUE_SEPARATOR);
          item.setProperty(pair[0], pair[1]);
        });
        items.push(item);
      }
    }
    return items;
  }

  private isNotValidRowString(row: string): boolean {
    return (
      row.indexOf(this.ROW_SEPARATOR) == -1 &&
      row.indexOf(this.VALUE_SEPARATOR) == -1
    );
  }

  toStringValue(items: Item[]): string {
    return items.map(item => item.toStringValue()).join("\n");
  }
}
