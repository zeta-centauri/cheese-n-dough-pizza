import styled from "styled-components";
import { colors } from "../../styles/colors";

import closeImg from "/assets/img/svg/close.svg";

export const Wrapper = styled.aside`
  height: 100vh;
  width: 100vw;
  padding: 40px 16px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;

  background-color: ${colors.bgDark};

  animation: open 0.6s ease;

  @keyframes open {
    from {
      transform: translateX(1000px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px;
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;

  background-image: url(${closeImg});
  background-position: center;
  background-size: cover;
`;

export const LinkList = styled.ul`
  padding: 20px 28px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;
