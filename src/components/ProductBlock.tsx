import styled from "styled-components";
import { colors } from "../styles/colors";

interface ProductBlockProps {
  name: string;
  description: string;
  price: number;
  image: string;
}
export default function ProductBlock({ name, description, price, image }: ProductBlockProps) {
  return (
    <StyledProductBlock>
      <ProductImage src={image} alt="" />
      <ProductText>
        <h3>{name}</h3>
        <p>{description}</p>
        <SelectButtonMobile>от {price} ₽</SelectButtonMobile>
      </ProductText>
      <ProductFooter>
        <p>от {price} ₽</p>
        <SelectButtonDesktop>Выбрать</SelectButtonDesktop>
      </ProductFooter>
    </StyledProductBlock>
  );
}

// 576px

const StyledProductBlock = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  @media (width <= 576px) {
    max-width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    border-bottom: 0.5px ${colors.bgGray} solid;
  }
`;
const ProductImage = styled.img`
  width: 90%;
  height: auto;
  @media (width <= 576px) {
    width: 158px;
    height: auto;
  }
`;
const ProductText = styled.div`
  padding: 5px 0px;
  height: 168px;
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
