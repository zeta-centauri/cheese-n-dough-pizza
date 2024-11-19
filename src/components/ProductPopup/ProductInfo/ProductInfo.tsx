import { observer } from "mobx-react-lite";
import { colors } from "../../../styles/colors";
import { getPizzaParams, getProductImage } from "../utils/utils";
import styled from "styled-components";
import productStore from "../../../stores/product-store";

const ProductInfo = observer(() => {
  const { product } = productStore;

  return (
    <Wrapper>
      <ProductImage src={getProductImage()} />
      <ProductTitle>{product?.name}</ProductTitle>
      <ProductText>
        <Description>{product?.description}</Description>
        <Params>{getPizzaParams()}</Params>
      </ProductText>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  border-radius: 14px;

  background-color: ${colors.bgLight};
`;
const ProductImage = styled.img`
  width: 357px;
  height: auto;
`;
const ProductTitle = styled.h2`
  color: ${colors.fontBlack};
  font-size: 24px;
  line-height: 100%;
`;
const ProductText = styled.div`
  max-width: 357px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Description = styled.p`
  width: 100%;
  line-height: 143%;
  color: ${colors.fontBlack};
  font-size: 14px;
  text-align: center;
`;
const Params = styled.p`
  color: ${colors.fontGray};
  font-size: 14px;
  line-height: 143%;
`;
export default ProductInfo;
