import styled from "styled-components";
import { observer } from "mobx-react-lite";
import cartStore from "../../../stores/cart-store";

import backArrow from "/assets/img/svg/back-arrow.svg";
import burger from "/assets/img/svg/burger.svg";
import logoImg from "/assets/img/svg/logo.svg";

import { Logo } from "../../Header/Header.styled";
import { colors } from "../../../styles/colors";
import sidebarStore from "../../../stores/sidebar-store";

const CartHeader = observer(() => {
  const { close } = cartStore;
  const { open } = sidebarStore;

  return (
    <Wrapper>
      <CloseButton onClick={close}>
        <img src={backArrow} alt="Back arrow" />
      </CloseButton>
      <Logo>
        <img src={logoImg} />
      </Logo>
      <BurgerButton onClick={open}>
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
