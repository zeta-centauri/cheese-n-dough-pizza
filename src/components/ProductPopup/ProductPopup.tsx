import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { normalizeScroll } from "../../utils/utils";

import { ProductOverlay, ProductWrapper } from "./ProductPopup.styled";
import ProductOptions from "./ProductOptions/ProductOptions";
import productStore from "../../stores/product-store";
import ProductInfo from "./ProductInfo/ProductInfo";

const ProductPopup = observer(() => {
  const { isOpen, close } = productStore;

  useEffect(() => {
    normalizeScroll(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <ProductOverlay onClick={close}>
      <ProductWrapper onClick={(e) => e.stopPropagation()}>
        <ProductInfo />
        <ProductOptions />
      </ProductWrapper>
    </ProductOverlay>
  );
});

export default ProductPopup;
