import { makeAutoObservable } from "mobx";
import { PizzaSize, Product } from "../types";

class ProductStore {
  product: Product | null = null;
  isOpen: boolean = false;
  currentSize: PizzaSize = 0;

  constructor() {
    makeAutoObservable(this);
  }
  setProduct = (product: Product) => {
    this.product = product;
  };
  resetProduct = () => {
    this.product = null;
  };
  open = () => {
    this.isOpen = true;
  };
  setSize = (value: PizzaSize) => {
    this.currentSize = value;
  };
  close = () => {
    this.isOpen = false;
  };
}

export default new ProductStore();
