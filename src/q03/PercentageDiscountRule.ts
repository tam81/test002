import { DiscountRule } from "./DiscountRule";
import { Cart } from "./Cart";

export class PercentageDiscountRule implements DiscountRule {
  private percentageRules: DiscountRule[];
  constructor(percentageRules: DiscountRule[]) {
    this.percentageRules = percentageRules;
  }
  apply(cart: Cart): number {
    if (!cart.store.isGrocery) {
      for (const rule of this.percentageRules) {
        const discount = rule.apply(cart);
        if (discount > 0) {
          return discount;
        }
      }
    }
    return 0;
  }
}
