import styled from "styled-components";
import { colors } from "../../styles/colors";

interface AddProductButtonProps {
  price: number;
}

const AddProductButton = ({ price }: AddProductButtonProps) => {
  return <Button>В корзину за {price}₽</Button>;
};

const Button = styled.button`
  background-color: ${colors.primary};
  padding: 10px;
  color: ${colors.fontWhite};
  font-weight: bold;
  color: ${colors.fontWhite};
  font-size: 16px;
  border-radius: 30px;

  transition: all 0.3s ease;
  &:hover {
    background-color: #e46f15;
  }
`;

export default AddProductButton;
