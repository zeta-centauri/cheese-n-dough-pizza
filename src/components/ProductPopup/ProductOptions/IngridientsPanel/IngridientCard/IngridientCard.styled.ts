import styled from "styled-components";
import { colors } from "../../../../../styles/colors";

export const Wrapper = styled.div<{ $isPicked: boolean }>`
  width: 100%;
  max-width: 95px;
  min-width: 95px;
  height: 142px;
  padding: 10px 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  background-color: ${colors.bgLight};
  border-radius: 8px;
  box-shadow: 0 0 15px 1px rgba(140, 140, 140, 0.25);
  outline: ${({ $isPicked }) =>
    $isPicked ? `${colors.primary} 2px solid` : "none"};
  cursor: pointer;
`;

export const Title = styled.h5`
  font-weight: 400;
  font-size: 10px;
  line-height: 110%;
  text-align: center;
`;

export const Price = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 121%;
`;
export const Image = styled.img`
  width: 72px;
  height: 72px;
`;
