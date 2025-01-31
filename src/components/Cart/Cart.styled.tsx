import styled from "styled-components";
import { colors } from "../../styles/colors";
import { CloseButton } from "../Buttons/CloseButton/CloseButton";

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
  height: 100vh;
  width: 650px;
  position: relative;

  display: flex;
  flex-direction: column;

  background-color: ${colors.bgGray};
  animation: open 0.6s ease;

  @keyframes open {
    from {
      transform: translateX(1000px);
    }
    to {
      transform: translateX(0px);
    }
  }
  @media (width <= 800px) {
    width: 100%;
  }
`;

export const CartCloseButton = styled(CloseButton)`
  top: 50%;
  bottom: 50%;
  transform: translateY(-50%);
  left: -70px;

  @media (width <= 800px) {
    display: none;
  }

  &:hover {
    animation: spin 1s ease;

    @keyframes spin {
      0% {
        transform: translateY(-50%) rotate(0deg);
      }
      100% {
        transform: translateY(-50%) rotate(90deg);
      }
    }
  }
`;
