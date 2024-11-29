import { observer } from "mobx-react-lite";
import IngridientsPanel from "./IngridientsPanel/IngridientsPanel";
import productStore from "../../../stores/product-store";
import AddProductButton from "../../Buttons/AddProductButton/AddProductButton";
import RadioButton from "../../Buttons/RadioButton/RadioButton";
import { Wrapper } from "./ProductOptions.styled";

const ProductOptions = observer(() => {
  const { currentPrice, currentProduct } = productStore;

  return (
    <Wrapper>
      <RadioButton types={currentProduct?.types} />
      <IngridientsPanel />
      <AddProductButton price={currentPrice} />
    </Wrapper>
  );
});


export default ProductOptions;
