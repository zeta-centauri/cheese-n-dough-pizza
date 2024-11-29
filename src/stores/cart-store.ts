import { CartProduct, Id, Ingridient, PizzaSize, Product } from "../types";
import { makeAutoObservable } from "mobx";

class CartStore {
  products: Record<Id, CartProduct> = {};
  totalPrice: number = 0;
  isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  addProduct = (currentProduct: CartProduct) => {
    const hash = this.getProductHash(
      currentProduct.id,
      currentProduct.name,
      currentProduct.currentIngridients,
      currentProduct.currentSize
    );

    if (this.products[hash]) {
      this.products[hash].quantity += 1;
    } else {
      this.products[hash] = currentProduct;
    }
    this.totalPrice += this.products[hash].currentPrice;
  };

  removeProduct = (product: Product) => {
    const hash = this.getProductHash(
      product.id,
      product.name,
      product.ingridients,
      product.types[product.types.length - 1].size
    );

    if (this.products[hash]) {
      this.totalPrice -= this.products[hash].currentPrice;
      delete this.products[hash];
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
