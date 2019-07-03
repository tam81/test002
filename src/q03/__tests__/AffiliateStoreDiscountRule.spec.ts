import { Store } from "../Store";
import { Cart } from "../Cart";
import { AffiliateStoreDiscountRule } from "../AffiliateStoreDiscountRule";

describe("affiliate store discount rule", () => {
  const rule = new AffiliateStoreDiscountRule();
  it("should apply rule if store is affiliate", () => {
    const store = new Store();
    store.isAffiliate = true;

    const cart = new Cart();
    cart.totalPrice = 100;
    cart.store = store;

    const discount = rule.apply(cart);

    expect(discount).toBe(10);
  });

  it("should not apply if store is not an affiliate", () => {
    const store = new Store();
    store.isAffiliate = false;

    const cart = new Cart();
    cart.totalPrice = 100;
    cart.store = store;

    const discount = rule.apply(cart);

    expect(discount).toBe(0);
  });
});
