import { Item } from "../Item";

describe("item", () => {
  it("should convert item to string value", () => {
    const item = new Item();
    item.setProperty("key1", "value1");
    item.setProperty("key2", "value2");

    const value = item.toStringValue();

    expect(value).toBe("key1=value1;key2=value2");
  });
});
