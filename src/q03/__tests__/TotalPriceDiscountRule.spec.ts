import { TotalPriceDiscountRule } from "../TotalPriceDiscountRule";
import { Cart } from "../Cart";

describe("total price discount rule", () => {
  const rule = new TotalPriceDiscountRule();
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it("should apply total price discount rule", () => {
    cart.totalPrice = 250;

    const discount = rule.apply(cart);

    expect(discount).toBe(10);
  });

  it("should not apply if total price is less than qualified amount", () => {
    cart.totalPrice = 50; // less than 100$

    const discount = rule.apply(cart);

    expect(discount).toBe(0);
  });
});
