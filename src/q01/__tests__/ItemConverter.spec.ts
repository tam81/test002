import { ItemConverter } from "../ItemConverter";
import { Item } from "../Item";

describe("item converter", () => {
  it("should convert string to items", () => {
    const value = "key1=value1;key2=value2\nkey3=value3;key4=value4";

    const convert = new ItemConverter();

    const items: Item[] = convert.fromString(value);

    expect(items[0].getProperty("key1")).toBe("value1");
  });

  it("should return an empty array on empty or null input", () => {
    const convert = new ItemConverter();

    const items: Item[] = convert.fromString(null);

    expect(items.length).toBe(0);
  });

  it("should throw error on invalid input", () => {
    const value = "key1+value1\nkey3=value3;key4=value4";

    const convert = new ItemConverter();

    expect(() => {
      convert.fromString(value);
    }).toThrowError();
  });

  it("should convert list items to string value", () => {
    const items: Item[] = [];

    const item1 = new Item();
    item1.setProperty("key1", "value1");
    item1.setProperty("key2", "value2");

    const item2 = new Item();
    item2.setProperty("key3", "value3");
    item2.setProperty("key4", "value4");

    items.push(item1);
    items.push(item2);

    const convert = new ItemConverter();

    const stringValue = convert.toStringValue(items);

    expect(stringValue).toBe(
      "key1=value1;key2=value2\nkey3=value3;key4=value4"
    );
  });
});
