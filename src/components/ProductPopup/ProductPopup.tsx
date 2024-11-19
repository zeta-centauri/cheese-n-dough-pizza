import styled from "styled-components";
import productStore from "../../stores/product-store";
import { useEffect } from "react";
import { normalizeScroll } from "../../utils/utils";
import ProductInfo from "./ProductInfo/ProductInfo";
import { observer } from "mobx-react-lite";
import ProductOptions from "./ProductOptions/ProductOptions";

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

const ProductOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  animation: opacity 0.3s ease;
  background-color: rgba(47, 47, 47, 0.66);
  @keyframes opacity {
    from {
      background-color: rgba(47, 47, 47, 0);
    }
    to {
      background-color: rgba(47, 47, 47, 0.66);
    }
  }
`;

const ProductWrapper = styled.div`
  background-color: #fdfdfd;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 890px;
  height: 596px;

  animation: ascent 0.1s ease;
  @keyframes ascent {
    from {
      transform: scale(0.7);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default ProductPopup;
