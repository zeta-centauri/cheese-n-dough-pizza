import styled from "styled-components";
import { observer } from "mobx-react-lite";
import cartStore from "../../../stores/cart-store";

import backArrow from "/assets/img/svg/back-arrow.svg";
import burger from "/assets/img/svg/burger.svg";
import logoImg from "/assets/img/svg/logo.svg";

import { Logo } from "../../Header/Header.styled";
import { colors } from "../../../styles/colors";
import { useNavigate } from "react-router";

const CartHeader = observer(() => {
  const navigate = useNavigate();

  const handleCloseButton = () => {
    navigate("/");
  };
  const handleBurgerButton = () => {
    navigate("aside");
  };
  return (
    <Wrapper>
      <CloseButton onClick={handleCloseButton}>
        <img src={backArrow} alt="Back arrow" />
      </CloseButton>
      <Logo to="/">
        <img src={logoImg} />
      </Logo>
      <BurgerButton onClick={handleBurgerButton}>
        <img src={burger} alt="Burger" />
      </BurgerButton>
    </Wrapper>
  );
});

export default CartHeader;

const Wrapper = styled.header`
  display: none;

  padding: 16px;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  background-color: ${colors.bgLight};

  @media (width <= 800px) {
    display: flex;
  }
`;

const CloseButton = styled.button``;
const BurgerButton = styled.button``;
