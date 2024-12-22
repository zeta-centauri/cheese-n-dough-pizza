import { observer } from "mobx-react-lite";
import { getPizzaParams, getProductImage } from "../utils/utils";
import productStore from "../../../stores/product-store";
import {
  Wrapper,
  ProductImage,
  ProductTitle,
  ProductText,
  Description,
  Params,
} from "./ProductInfo.styled";

const ProductInfo = observer(() => {
  const { currentProduct, currentSize } = productStore;

  return (
    <Wrapper>
      <ProductImage src={getProductImage()} />
      <ProductTitle>{currentProduct?.name}</ProductTitle>
      <ProductText>
        <Description>{currentProduct?.description}</Description>
        <Params>{getPizzaParams(currentProduct!, currentSize)}</Params>
      </ProductText>
    </Wrapper>
  );
});

export default ProductInfo;
