import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
  height: 100%;
  padding: 0px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  border-radius: 14px;

  background-color: ${colors.bgLight};
`;
export const ProductImage = styled.img`
  width: 357px;
  height: auto;
`;
export const ProductTitle = styled.h2`
  color: ${colors.fontBlack};
  font-size: 24px;
  line-height: 100%;
`;
export const ProductText = styled.div`
  max-width: 357px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Description = styled.p`
  width: 100%;
  line-height: 143%;
  color: ${colors.fontBlack};
  font-size: 14px;
  text-align: center;
`;
export const Params = styled.p`
  color: ${colors.fontGray};
  font-size: 14px;
  line-height: 143%;
`;
