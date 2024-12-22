import styled from "styled-components";
import { CloseButton } from "../Buttons/CloseButton/CloseButton";

export const ProductOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: opacity 0.3s ease;
  background-color: rgba(47, 47, 47, 0.66);

  @keyframes opacity {
    from {
      background-color: rgba(47, 47, 47, 0);
    }
    to {
      background-color: rgba(47, 47, 47, 0.66);
    }
  }
`;

export const ProductWrapper = styled.div`
  height: 605px;
  padding: 27px 0;

  position: relative;

  display: flex;
  align-items: center;
  gap: 10px;

  background-color: #fdfdfd;
  border-radius: 14px;

  animation: ascent 0.1s ease;

  @keyframes ascent {
    from {
      transform: scale(0.7);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (width <= 1000px) {
    width: 70%;
    height: auto;
    max-height: 90%;

    flex-direction: column;
    align-items: stretch;

    overflow-y: scroll;
    overflow-x: hidden;
  }

  @media (width < 650px) {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
  }
`;

export const ProductCloseButton = styled(CloseButton)`
  position: absolute;
  top: 0;
  right: -40px;

  display: flex;
`;
