import { Cart } from "./Cart";
import { DiscountRule } from "./DiscountRule";
export class DiscountCalculator {
  private rules: DiscountRule[];

  constructor(rules: DiscountRule[]) {
    this.rules = rules;
  }

  calculate(cart: Cart): number {
    let discountAmount = 0;
    this.rules.forEach(rule => {
      discountAmount += rule.apply(cart);
    });
    return discountAmount;
  }
}
