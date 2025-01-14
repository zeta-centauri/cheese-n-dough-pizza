import { ProductType } from "../../../types";

export const getButtonText = (
  types: ProductType[],
  isMobileButton: boolean = false
) => {
  if (isMobileButton) {
    return types.length > 1 ? `от ${types[0].price} ₽` : `${types[0].price} ₽`;
  }
  return types.length > 1 ? "Выбрать" : "В корзину";
};

export const getRatingStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push("full");
    } else if (rating > i - 1) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }
  return stars;
};
