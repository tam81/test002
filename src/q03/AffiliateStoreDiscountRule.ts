import { DiscountRule } from "./DiscountRule";
import { Cart } from "./Cart";

export class AffiliateStoreDiscountRule implements DiscountRule {
  private readonly PERCENTAGE_DISCOUNT = 0.1;

  apply(cart: Cart): number {
    if (cart.store.isAffiliate) {
      return cart.totalPrice * this.PERCENTAGE_DISCOUNT;
    }
    return 0;
  }
}
