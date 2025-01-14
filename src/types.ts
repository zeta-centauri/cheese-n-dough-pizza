export interface Category {
  categoryId: number;
  title: string;
  products: Product[];
}

export interface Product {
  id: Id;
  name: string;
  description: string;
  isDrink?: boolean;
  types: ProductType[];
  availableIngridients?: AvailableIngridient[];
  rating?: number;
}
export interface ProductType {
  size: PizzaSize;
  price: number;
  image: string;
  weight: number;
}
export type Id = string;
export type PizzaSize = number;

export type CartProductKey = string;

export interface CartProduct extends Product {
  currentSize?: PizzaSize;
  currentIngridients?: Ingridient[];
  quantity: number;
  currentPrice: number;
}

export type Ingridient = string;
export type AvailableIngridient = {
  name: string;
  price: number;
  imgUrl: string;
};

export interface DropdownOption {
  property: DropdownProperty;
  name: string;
}

export type DropdownProperty = string;
export type SortProperty = DropdownProperty;
