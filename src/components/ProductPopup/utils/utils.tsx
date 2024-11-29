import productStore from "../../../stores/product-store";

export const getProductImage = (): string => {
  const { currentSize, currentProduct } = productStore;
  return (
    currentProduct!.types[currentSize]?.image ?? currentProduct!.types[0].image
  );
};

export const getPizzaParams = (): string => {
  let { currentSize } = productStore;
  const { currentProduct } = productStore;

  if (!currentProduct!.types[currentSize]) currentSize = 0;

  const result = [];

  if (currentProduct!.types[currentSize].size)
    result.push(currentProduct!.types[currentSize].size + " см");
  if (currentProduct!.types[currentSize].weight)
    result.push(
      currentProduct!.types[currentSize].weight +
        `${currentProduct?.isDrink ? " л" : " г"}`
    );
  return result.join(", ");
};

