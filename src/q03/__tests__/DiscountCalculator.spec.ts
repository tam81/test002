import { DiscountCalculator } from "../DiscountCalculator";
import { Cart } from "../Cart";
import { User } from "../User";
import { Store } from "../Store";
import { PercentageDiscountRule } from "../PercentageDiscountRule";
import { EmployeeDiscountRule } from "../EmployeeDiscountRule";
import { AffiliateStoreDiscountRule } from "../AffiliateStoreDiscountRule";
import { CustomerDiscountRule } from "../CustomerDiscountRule";
import { TotalPriceDiscountRule } from "../TotalPriceDiscountRule";
import { UserType } from "../UserType";

describe("Discount calculator", () => {
  const percentageRules = new PercentageDiscountRule([
    new EmployeeDiscountRule(),
    new AffiliateStoreDiscountRule(),
    new CustomerDiscountRule(),
  ]);

  const calculator = new DiscountCalculator([
    percentageRules,
    new TotalPriceDiscountRule(),
  ]);

  it("should calculate discount price", () => {
    // setup an employee user
    const user = new User();
    user.type = UserType.EMPLOYEE;

    // setup affiliate store
    const store = new Store();
    store.isAffiliate = true;

    const cart = new Cart();
    cart.totalPrice = 200;
    cart.user = user;
    cart.store = store;

    const discountPrice = calculator.calculate(cart);

    expect(discountPrice).toBe(70);
  });
});
