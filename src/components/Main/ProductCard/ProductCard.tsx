import { Product } from "../../../types";
import productStore from "../../../stores/product-store";
import {
  Wrapper,
  ProductInfo,
  ProductImage,
  ProductText,
  SelectButtonMobile,
  ProductFooter,
  SelectButtonDesktop,
} from "./ProductCard.styled";

export default function ProductBlock({ ...product }: Product) {
  const { open, setProduct } = productStore;

  const handleSelectButton = () => {
    setProduct(product);
    open();
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
          <p>{product.description}</p>
          <SelectButtonMobile onClick={handleSelectButton}>
            от {product.types[0].price} ₽
          </SelectButtonMobile>
        </ProductText>
      </ProductInfo>

      <ProductFooter>
        <p>от {product.types[0].price} ₽</p>
        <SelectButtonDesktop onClick={handleSelectButton}>
          Выбрать
        </SelectButtonDesktop>
      </ProductFooter>
    </Wrapper>
  );
}
