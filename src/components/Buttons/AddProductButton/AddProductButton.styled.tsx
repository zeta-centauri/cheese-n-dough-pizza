import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Button = styled.button`
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
