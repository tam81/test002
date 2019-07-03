import { EmployeeDiscountRule } from "../EmployeeDiscountRule";
import { Cart } from "../Cart";
import { User } from "../User";
import { UserType } from "../UserType";

describe("employee discount rule", () => {
  const rule = new EmployeeDiscountRule();
  it("should apply discount if user is employee", () => {
    const cart = new Cart();
    cart.totalPrice = 100;

    const user = new User();
    user.type = UserType.EMPLOYEE;
    cart.user = user;

    const discount = rule.apply(cart);

    expect(discount).toBe(30);
  });

  it("should not apply if user is not employee", () => {
    const cart = new Cart();
    cart.totalPrice = 100;

    const user = new User();
    user.type = UserType.CUSTOMER;
    cart.user = user;

    const discount = rule.apply(cart);

    expect(discount).toBe(0);
  });
});
