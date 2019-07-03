import { Cart } from "../Cart";
import { User } from "../User";
import { UserType } from "../UserType";
import { CustomerDiscountRule } from "../CustomerDiscountRule";

describe("customer discount rule", () => {
  const rule = new CustomerDiscountRule();
  it("should apply if user is being customer for more than 2 years", () => {
    const user = new User();
    user.type = UserType.CUSTOMER;
    user.registerTime = new Date("2015-12-17T03:24:00");

    const cart = new Cart();
    cart.totalPrice = 200;
    cart.user = user;

    const discount = rule.apply(cart);

    expect(discount).toBe(10);
  });

  it("should not apply if user is not a customer", () => {
    const user = new User();
    user.type = UserType.EMPLOYEE;
    user.registerTime = new Date("2015-12-17T03:24:00");

    const cart = new Cart();
    cart.totalPrice = 200;
    cart.user = user;

    const discount = rule.apply(cart);

    expect(discount).toBe(0);
  });

  it("should not apply if user registered less than 2 years", () => {
    const user = new User();
    user.type = UserType.CUSTOMER;
    user.registerTime = new Date();

    const cart = new Cart();
    cart.totalPrice = 200;
    cart.user = user;

    const discount = rule.apply(cart);

    expect(discount).toBe(0);
  });
});
