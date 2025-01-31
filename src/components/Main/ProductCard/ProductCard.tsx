import { Product } from "../../../types";
import productStore from "../../../stores/product-store";
import { useNavigate } from "react-router";
import {
  Wrapper,
  ProductInfo,
  ProductImage,
  ProductText,
  SelectButtonMobile,
  ProductFooter,
  SelectButtonDesktop,
} from "./ProductCard.styled";
import cartStore from "../../../stores/cart-store";
import { getButtonText } from "./utils";
import Rating from "./Rating/Rating";

export default function ProductBlock({ ...product }: Product) {
  const { packProduct } = productStore;
  const { addProduct } = cartStore;

  const navigate = useNavigate();

  const handleSelectButton = () => {
    if (product.types.length > 1) {
      navigate("product/" + product.id);
    } else {
      addProduct(packProduct());
    }
  };

  return (
    <Wrapper>
      <ProductInfo>
        <ProductImage
          onClick={handleSelectButton}
          src={product.types[0].image}
          alt=""
        />
        <ProductText>
          <h3>{product.name}</h3>
          <Rating rating={product.rating} />
          <p>{product.description}</p>
          <SelectButtonMobile onClick={handleSelectButton}>
            {getButtonText(product.types, true)}
          </SelectButtonMobile>
        </ProductText>
      </ProductInfo>

      <ProductFooter>
        <p>от {product.types[0].price} ₽</p>
        <SelectButtonDesktop onClick={handleSelectButton}>
          {getButtonText(product.types)}
        </SelectButtonDesktop>
      </ProductFooter>
    </Wrapper>
  );
}
