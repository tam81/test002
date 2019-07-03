import { Cart } from "./Cart";
export interface DiscountRule {
  apply(cart: Cart): number;
}
