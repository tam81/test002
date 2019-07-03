import { Store } from "./Store";
import { User } from "./User";

export class Cart {
  private _store: Store;
  private _user: User;
  private _totalPrice: number;

  get store(): Store {
    return this._store;
  }

  set store(store: Store) {
    this._store = store;
  }

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    this._user = user;
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  set totalPrice(price: number) {
    this._totalPrice = price;
  }
}
