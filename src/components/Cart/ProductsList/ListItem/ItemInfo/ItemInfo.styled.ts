import styled from "styled-components";
import { colors } from "../../../../../styles/colors";

export const Wrapper = styled.div`
  padding: 12px 0;

  display: flex;
  align-items: center;
  gap: 11px;

  border-bottom: ${colors.fontGray} solid 0.5px;
`;
export const ItemImg = styled.img`
  width: 76px;
  height: 76px;
`;
export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ItemTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
`;
export const ItemDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${colors.fontGray};
`;
