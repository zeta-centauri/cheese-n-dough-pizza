import { observer } from "mobx-react-lite";
import IngridientsPanel from "./IngridientsPanel/IngridientsPanel";
import productStore from "../../../stores/product-store";
import AddProductButton from "../../Buttons/AddProductButton/AddProductButton";
import RadioButton from "../../Buttons/RadioButton/RadioButton";
import { Wrapper } from "./ProductOptions.styled";
import cartStore from "../../../stores/cart-store";

const ProductOptions = observer(() => {
  const { currentPrice, currentProduct, packProduct, close } = productStore;
  const { addProduct } = cartStore;

  const handleAddProduct = () => {
    addProduct(packProduct());
    close();
  };

  return (
    <Wrapper>
      <RadioButton types={currentProduct?.types} />
      <IngridientsPanel />
      <AddProductButton onclick={handleAddProduct} price={currentPrice} />
    </Wrapper>
  );
});

export default ProductOptions;
