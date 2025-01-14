import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { useNormalizeScroll } from "../../utils/utils";

import {
  ProductCloseButton,
  ProductOverlay,
  ProductWrapper,
} from "./ProductPopup.styled";
import ProductOptions from "./ProductOptions/ProductOptions";
import ProductInfo from "./ProductInfo/ProductInfo";
import { useNavigate, useParams } from "react-router";
import productsStore from "../../stores/products-store";
import { Id } from "../../types";
import productStore from "../../stores/product-store";

const ProductPopup = observer(() => {
  useNormalizeScroll();

  const { getProduct } = productsStore;
  const { setProduct, currentProduct } = productStore;
  const navigate = useNavigate();

  const { productId } = useParams<Id>();

  useEffect(() => {
    setProduct(getProduct(productId as Id)!);
  }, []);

  const handleOverlayClick = () => {
    navigate("/");
  };

  return (
    <ProductOverlay onClick={handleOverlayClick}>
      <ProductWrapper onClick={(e) => e.stopPropagation()}>
        <ProductCloseButton onClick={close} />
        {currentProduct && (
          <>
            <ProductInfo product={currentProduct} />
            <ProductOptions product={currentProduct} />
          </>
        )}
      </ProductWrapper>
    </ProductOverlay>
  );
});

export default ProductPopup;
