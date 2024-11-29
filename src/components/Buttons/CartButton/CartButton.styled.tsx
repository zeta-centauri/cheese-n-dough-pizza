import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Button = styled.button<{ $isCategoriesButton: boolean }>`
  display: ${(props) => (props.$isCategoriesButton ? "flex" : "none")};
  position: ${(props) => (props.$isCategoriesButton ? "static" : "fixed")};
  margin-left: 40px;
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
  &:hover {
    background-color: #e46f15;
  }
  .divider {
    height: 21px;
    width: 2px;
    background-color: #e06b14;
  }
  p {
    text-wrap: nowrap;
  }
  @media (width <= 650px) {
    display: ${(props) => (props.$isCategoriesButton ? "none" : "flex")};
  }
`;
