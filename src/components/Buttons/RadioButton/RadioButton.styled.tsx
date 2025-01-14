import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0px 3px;
  border-radius: 30px;

  background-color: ${colors.bgGrayLight};
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

export const Slider = styled.div<{ $currentSizeIndex: number; $typesCount: number }>`
  position: absolute;
  top: auto;
  bottom: auto;
  left: 0;

  width: ${({ $typesCount }) => `${100 / $typesCount}%`};
  transform: translateX(
    ${({ $currentSizeIndex }) => `${100 * $currentSizeIndex}%`}
  );
  background-color: ${colors.bgLight};
  height: 80%;
  background-color: ${colors.bgLight};
  border-radius: 30px;
  box-shadow: 0 0 26px -1px rgba(29, 29, 29, 0.25);

  transition: all 0.3s ease;
`;

export const Option = styled.span`
  display: block;
  cursor: pointer;
  z-index: 2;
  height: 100%;
`;
