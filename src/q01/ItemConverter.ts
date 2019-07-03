import { Item } from "./Item";
export class ItemConverter {
  fromString(value: string | null | undefined): Item[] {
    if (value) {
      return value.split("\n").map(row => {
        const items = row.split(";");
        const item = new Item();
        items.map(str => {
          const pair = str.split("=");
          if (pair.length == 2) {
            item.setProperty(pair[0], pair[1]);
          }
        });
        return item;
      });
    }
    return [];
  }
}
