import { ItemConverter } from "../ItemConverter";
import { Item } from "../Item";

describe("item store", () => {
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

  it("should return an empty array on invalid input", () => {
    const value = "key1+value1\nkey3=value3;key4=value4";

    const convert = new ItemConverter();

    const items: Item[] = convert.fromString(value);

    expect(items[0].getProperty("key3")).toBe("value3");
  });
});
