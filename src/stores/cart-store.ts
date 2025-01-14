import { CartProduct, Id, Ingridient, PizzaSize } from "../types";
import { makeAutoObservable } from "mobx";

class CartStore {
  products: Record<Id, CartProduct> = {};
  totalPrice: number = 0;
  isOpen = false;

  get totalCount() {
    return Object.values(this.products).reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  }

  constructor() {
    makeAutoObservable(this);
  }

  get productsList() {
    return Object.entries(this.products);
  }

  addProduct = (product: CartProduct) => {
    const hash = this.getProductHash(
      product.id,
      product.name,
      product.currentIngridients,
      product.currentSize
    );

    if (this.products[hash]) {
      this.products[hash].quantity += 1;
    } else {
      this.products[hash] = product;
    }
    this.totalPrice += this.products[hash].currentPrice;
  };

  removeProduct = (product: CartProduct) => {
    const hash = this.getProductHash(
      product.id,
      product.name,
      product.currentIngridients,
      product.currentSize
    );

    if (this.products[hash]) {
      this.totalPrice -= this.products[hash].currentPrice;

      if (this.products[hash].quantity > 1) {
        this.products[hash].quantity -= 1;
      } else {
        delete this.products[hash];
      }
    }
  };

  open = () => {
    this.isOpen = true;
  };

  close = () => {
    this.isOpen = false;
  };

  getProductHash = (
    id: Id,
    name: string,
    ingridients: Ingridient[] = [],
    size: PizzaSize = 0
  ) => {
    let result = `${id}_${name}_${size}`;
    ingridients.sort().forEach((el) => (result += `_${el}`));

    return result;
  };
}

export default new CartStore();
