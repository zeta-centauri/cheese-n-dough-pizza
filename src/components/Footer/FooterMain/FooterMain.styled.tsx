import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  padding: 30px 0;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 0.3px solid #9f9f9f;

  @media (width <= 1080px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const LinkBlock = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const Title = styled.h2`
  text-wrap: nowrap;
  color: ${colors.fontWhite};
  font-weight: bold;
  font-size: 16px;
`;

export const Link = styled.a`
  color: ${colors.fontGray};
  font-weight: bold;
  font-size: 16px;
  text-wrap: nowrap;
  &:hover {
    color: ${colors.primary};
  }
`;

export const Social = styled(LinkBlock)`
  flex-direction: row;
`;
export const SocialLink = styled.a`
  background-color: ${colors.bgGrayDark};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(0.9);
  }
`;
