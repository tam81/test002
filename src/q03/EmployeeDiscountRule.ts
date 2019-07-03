import { DiscountRule } from "./DiscountRule";
import { Cart } from "./Cart";
import { UserType } from "./UserType";
export class EmployeeDiscountRule implements DiscountRule {
  private readonly PERCENTAGE_DISCOUNT = 0.3;

  apply(cart: Cart): number {
    if (cart.user.type == UserType.EMPLOYEE) {
      return cart.totalPrice * this.PERCENTAGE_DISCOUNT;
    }
    return 0;
  }
}
