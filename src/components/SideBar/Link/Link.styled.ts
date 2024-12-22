import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 400;
  font-size: 20px;

  color: ${colors.fontWhite};
`;

export const Image = styled.img`
  height: 14px;
  width: auto;
`;
