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

const StyledProductBlock = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
`;
const ProductImage = styled.img`
  width: 90%;
  height: auto;
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
`;
const ProductFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: 400;
    font-size: 16px;
  }
`;
const SelectButtonDesktop = styled.button`
  border-radius: 16px;
  min-width: 101px;
  padding: 7px 20px;
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
  /* TODO: mobile */
`;
