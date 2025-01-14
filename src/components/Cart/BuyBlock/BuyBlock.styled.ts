import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px 24px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;

  background-color: ${colors.bgLight};
`;

export const BuyButton = styled.button`
  display: flex;
  padding: 16px 0;

  align-items: center;
  justify-content: center;

  background-color: ${colors.primary};
  color: ${colors.fontWhite};
  border-radius: 69px;
`;
