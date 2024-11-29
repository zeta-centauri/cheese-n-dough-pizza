import { makeAutoObservable } from "mobx";
import { AvailableIngridient, Ingridient, PizzaSize, Product } from "../types";

class ProductStore {
  currentProduct: Product | null = null;
  isOpen: boolean = false;
  currentSize: PizzaSize = 0;
  currentIngridients: Ingridient[] = [];
  currentPrice: number = 0;

  constructor() {
    makeAutoObservable(this);
  }
  setProduct = (product: Product) => {
    this.currentProduct = product;
    this.currentPrice = product?.types[this.currentSize].price;
  };
  resetProduct = () => {
    this.currentProduct = null;
  };
  open = () => {
    this.isOpen = true;
  };
  setSize = (value: PizzaSize) => {
    this.currentPrice -= this.currentProduct!.types[this.currentSize].price;
    this.currentSize = value;
    this.currentPrice += this.currentProduct!.types[this.currentSize].price;
  };
  close = () => {
    this.isOpen = false;
  };
  addIngridient = (ingridient: AvailableIngridient) => {
    this.currentPrice += Number(ingridient.price);
    this.currentIngridients.push(ingridient.name as Ingridient);
  };

  removeIngridient = (ingridient: AvailableIngridient) => {
    this.currentPrice -= Number(ingridient.price);
    this.currentIngridients = this.currentIngridients.filter(
      (cur) => cur != ingridient.name
    );
  };
}

export default new ProductStore();
