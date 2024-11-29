import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (width <= 1080px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;
export const Links = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;

  @media (width <= 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Link = styled.a`
  color: ${colors.fontGray};
  font-weight: bold;
  font-size: 16px;
  &:hover {
    color: ${colors.primary};
  }
`;

export const Description = styled.p`
  color: ${colors.fontBlue};
  font-size: 12px;
  text-wrap: nowrap;
`;
