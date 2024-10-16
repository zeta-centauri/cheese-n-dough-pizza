import styled from "styled-components";
import { colors } from "../styles/colors";

export default function CartButton() {
  return (
    <Button>
      <img src="assets/img/svg/cart.svg" alt="" />
      <div className="divider"></div>
      <p className="money">499 ₽</p>
    </Button>
  );
}

const Button = styled.button`
  display: none;
  position: fixed;
  right: 38px;
  bottom: 38px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${colors.primary};
  color: ${colors.fontWhite};
  font-weight: 700;
  min-width: 121px;
  padding: 12px 20px;
  border-radius: 50px;
  .divider {
    height: 21px;
    width: 2px;
    background-color: #e06b14;
  }
  @media (width <= 650px) {
    display: flex;
  }
`;
