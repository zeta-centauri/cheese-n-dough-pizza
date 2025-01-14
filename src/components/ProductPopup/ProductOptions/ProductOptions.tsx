import { observer } from "mobx-react-lite";
import IngridientsPanel from "./IngridientsPanel/IngridientsPanel";
import productStore from "../../../stores/product-store";
import AddProductButton from "../../Buttons/AddProductButton/AddProductButton";
import RadioButton from "../../Buttons/RadioButton/RadioButton";
import { Wrapper } from "./ProductOptions.styled";
import cartStore from "../../../stores/cart-store";
import { Product } from "../../../types";
import { useNavigate } from "react-router";

interface Props {
  product: Product;
}

const ProductOptions = observer(({ product }: Props) => {
  const { currentPrice, packProduct } = productStore;
  const { addProduct } = cartStore;

  const navigate = useNavigate();

  const handleAddProduct = () => {
    addProduct(packProduct());
    navigate("/");
  };

  return (
    <Wrapper>
      <RadioButton types={product.types} />
      <IngridientsPanel />
      <AddProductButton onclick={handleAddProduct} price={currentPrice} />
    </Wrapper>
  );
});

export default ProductOptions;
