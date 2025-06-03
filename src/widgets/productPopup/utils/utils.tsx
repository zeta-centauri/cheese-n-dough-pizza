import productStore from "../../../stores/product-store";
import { CartProduct, PizzaSize, Product } from "../../../types";

export const getProductImage = (product: Product): string => {
  const { currentSize } = productStore;
  return product.types[currentSize]?.image ?? product.types[0].image;
};

export const getPizzaParams = (
  product: CartProduct | Product,
  currentSize: PizzaSize = 0
): string => {
  // if (!product!.types[currentSize]) currentSize = 0;
  const result = [];
  if ((product as CartProduct).currentSize) {
    currentSize = (product as CartProduct).currentSize!;
  }

  if (product!.types[currentSize].size)
    result.push(product!.types[currentSize].size + " см");
  if (product!.types[currentSize].weight)
    result.push(
      product!.types[currentSize].weight + `${product?.isDrink ? " л" : " г"}`
    );
  return result.join(", ");
};
