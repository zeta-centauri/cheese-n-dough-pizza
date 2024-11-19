import styled from "styled-components";
import AddProductButton from "../../Buttons/AddProductButton";
import { getProductPrice } from "../utils/utils";
import RadioButton from "./RadioButton/RadioButton";
import { observer } from "mobx-react-lite";
import productStore from "../../../stores/product-store";

const ProductOptions = observer(() => {
  const currentProduct = productStore.product;

  return (
    <Wrapper>
      <RadioButton types={currentProduct?.types} />
      <AddProductButton price={getProductPrice()} />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 467px;
  height: 100%;
  padding: 27px;
  gap: 27px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

export default ProductOptions;
