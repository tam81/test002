import { DiscountRule } from "./DiscountRule";
import { Cart } from "./Cart";
import { UserType } from "./UserType";
export class CustomerDiscountRule implements DiscountRule {
  private readonly PERCENTAGE_DISCOUNT = 0.05;
  private readonly MIN_OF_YEARS = 2;

  apply(cart: Cart): number {
    const userType = cart.user.type;
    const cur = new Date().getUTCFullYear();
    if (
      userType == UserType.CUSTOMER &&
      cur - cart.user.registerTime.getUTCFullYear() > this.MIN_OF_YEARS
    ) {
      return cart.totalPrice * this.PERCENTAGE_DISCOUNT;
    }
    return 0;
  }
}
