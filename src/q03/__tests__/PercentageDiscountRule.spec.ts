import { Cart } from "../Cart";
import { User } from "../User";
import { Store } from "../Store";
import { UserType } from "../UserType";
import { PercentageDiscountRule } from "../PercentageDiscountRule";
import { EmployeeDiscountRule } from "../EmployeeDiscountRule";
import { AffiliateStoreDiscountRule } from "../AffiliateStoreDiscountRule";
import { CustomerDiscountRule } from "../CustomerDiscountRule";

describe("percentage discount rule", () => {
  const rule = new PercentageDiscountRule([
    new EmployeeDiscountRule(),
    new AffiliateStoreDiscountRule(),
    new CustomerDiscountRule(),
  ]);

  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it("should apply only percentage discount rules", () => {
    const store = new Store();
    store.isAffiliate = true;

    const user = new User();
    user.type = UserType.EMPLOYEE;
    user.registerTime = new Date();

    cart.totalPrice = 200;
    cart.user = user;
    cart.store = store;

    const discount = rule.apply(cart);

    expect(discount).toBe(60);
  });

  it("should not apply discount rule if store is grocery", () => {
    const store = new Store();
    store.isGrocery = true;

    const user = new User();
    user.type = UserType.EMPLOYEE;
    user.registerTime = new Date();

    cart.totalPrice = 200;
    cart.store = store;

    const discount = rule.apply(cart);

    expect(discount).toBe(0);
  });
});
