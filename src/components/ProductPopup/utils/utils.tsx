import productStore from "../../../stores/product-store";

export const getProductImage = (): string => {
  const { currentSize, product } = productStore;
  return product!.types[currentSize]?.image ?? product!.types[0].image;
};

export const getPizzaParams = (): string => {
  let { currentSize } = productStore;
  const { product } = productStore;

  if (!product!.types[currentSize]) currentSize = 0;

  const result = [];

  if (product!.types[currentSize].size)
    result.push(product!.types[currentSize].size + " см");
  if (product!.types[currentSize].weight)
    result.push(
      product!.types[currentSize].weight + `${product?.isDrink ? " л" : " г"}`
    );
  return result.join(", ");
};

export const getProductPrice = (): number => {
  let { currentSize } = productStore;
  const { product } = productStore;
  if (!product?.types[currentSize]) currentSize = 0;
  return product!.types[currentSize].price;
};
