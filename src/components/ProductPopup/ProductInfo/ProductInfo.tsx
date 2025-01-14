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
import { Product } from "../../../types";

interface Props {
  product: Product;
}

const ProductInfo = observer(({ product }: Props) => {
  const { currentSize } = productStore;

  return (
    <Wrapper>
      <ProductImage src={getProductImage(product)} />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductText>
        <Description>{product.description}</Description>
        <Params>{getPizzaParams(product, currentSize)}</Params>
      </ProductText>
    </Wrapper>
  );
});

export default ProductInfo;
