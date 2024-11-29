import styled from "styled-components";
import { colors } from "../../styles/colors";

export const CartOveraly = styled.div`
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: rgba(47, 47, 47, 0.66);

  animation: opacity 0.3s ease;
  @keyframes opacity {
    from {
      background-color: rgba(47, 47, 47, 0);
    }
    to {
      background-color: rgba(47, 47, 47, 0.66);
    }
  }
`;

export const CartDialog = styled.aside`
  height: 100%;
  width: 40%;
  background-color: ${colors.bgLight};
  animation: open 0.6s ease;
  position: relative;

  @keyframes open {
    from {
      transform: translateX(1000px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;

export const CartTitle = styled.h2``;

export const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  bottom: 50%;
  transform: translateY(-50%);
  left: -70px;
  background-image: url("assets/img/svg/close.svg");
  width: 29px;
  height: 29px;
`;
