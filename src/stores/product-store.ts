import { makeAutoObservable } from "mobx";
import {
	AvailableIngridient,
	CartProduct,
	Ingridient,
	PizzaSize,
	Product,
} from "../types";

class ProductStore {
	currentProduct: Product | null = null;
	currentSize: PizzaSize = 0;
	currentIngridients: Ingridient[] = [];
	currentPrice: number = 0;

	constructor() {
		makeAutoObservable(this);
	}
	setProduct = (product: Product) => {
		this.currentSize = 0;
		this.currentIngridients = [];
		this.currentProduct = product;
		this.currentPrice = product?.types[this.currentSize].price;
	};
	setSize = (value: PizzaSize) => {
		this.currentPrice -= this.currentProduct!.types[this.currentSize].price;
		this.currentSize = value;
		this.currentPrice += this.currentProduct!.types[this.currentSize].price;
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

	packProduct = (product?: Product): CartProduct => {
		if (product) {
			return {
				...product,
				quantity: 1,
				currentPrice: product.types[0].price,
			};
		}
		return {
			...this.currentProduct!,
			currentSize: this.currentSize,
			currentIngridients: this.currentIngridients,
			quantity: 1,
			currentPrice: this.currentPrice,
		};
	};
}

export default new ProductStore();
