import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Product } from "../../types";
import productStore from "../../stores/product-store";

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

const Wrapper = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  justify-content: space-between;
  @media (width <= 576px) {
    width: 100%;
    max-width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    border-bottom: 0.5px ${colors.bgGray} solid;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
  @media (width <= 576px) {
    flex-direction: row;
  }
`;
const ProductImage = styled.img`
  width: 90%;
  height: auto;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 0;
  @media (width <= 576px) {
    width: 158px;
    height: auto;
  }
  &:hover {
    transform: translateY(3px);
  }
`;
const ProductText = styled.div`
  width: 100%;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  h3 {
    font-size: 20px;
    line-height: 120%;
  }
  p {
    font-size: 14px;
    line-height: 131%;
    color: ${colors.fontGray};
  }
  @media (width <= 576px) {
    height: auto;
    padding: 5px 0px;
    gap: 4px;
    h3 {
      font-size: 16px;
      line-height: 125%;
    }
    p {
      font-size: 12px;
      line-height: 133%;
      color: ${colors.fontGray};
    }
  }
`;
const ProductFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: 700;
    font-size: 18px;
  }
  @media (width <= 576px) {
    display: none;
  }
`;
const SelectButtonDesktop = styled.button`
  border-radius: 20px;
  min-width: 101px;
  padding: 12px 20px;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  font-weight: 700;
  font-size: 16px;

  transition: all 0.2s ease;
  &:hover {
    background-color: ${colors.primary};
    color: ${colors.fontWhite};
  }
`;
const SelectButtonMobile = styled(SelectButtonDesktop)`
  display: none;
  @media (width <= 576px) {
    display: block;
    margin-top: 4px;
    border-radius: 16px;
    padding: 7px 20px;
    font-size: 16px;
    line-height: 131%;
    max-width: 110px;
  }
  /* TODO: mobile */
`;
