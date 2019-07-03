import { DiscountRule } from "./DiscountRule";
import { Cart } from "./Cart";

export class TotalPriceDiscountRule implements DiscountRule {
  private QUALIFIED_AMOUNT: number = 100;
  private AMOUNT_DISCOUNT: number = 5;
  apply(cart: Cart): number {
    if (cart.totalPrice < this.QUALIFIED_AMOUNT) {
      return 0;
    }
    return (
      Math.trunc(cart.totalPrice / this.QUALIFIED_AMOUNT) * this.AMOUNT_DISCOUNT
    );
  }
}
