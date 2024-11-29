import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Container } from "../../styles/Container";

export const CategoriesWrapper = styled.header`
  padding: 15px 0px;
  position: sticky;
  z-index: 1;
  top: 0;
  backdrop-filter: blur(7.400000095367432px);
  background: rgba(255, 255, 255, 0.71);
`;
export const CategoriesContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CategoriesList = styled.ul`
  display: flex;
  align-items: center;
  gap: 18px;
  @media (width < 880px) {
    overflow-y: hidden;
    overflow-x: scroll;
    .element::-webkit-scrollbar {
      display: none;
    }
    gap: 12px;
  }
`;
export const Category = styled.li<{ $isActive?: boolean }>`
  a {
    position: relative;
    text-decoration: none;
    color: black;
    &::after {
      position: absolute;
      content: "";
      bottom: -4px;
      right: 0;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      background-color: black;
      transition: all 0.2s ease;
    }
    &:hover::after {
      transform: scaleX(1);
    }

    @media (width < 880px) {
      border-radius: 16px;
      display: block;
      padding: 8px 16px;
      ${({ $isActive }) =>
        `background-color: ${$isActive ? colors.primary : colors.bgGray};`}
      ${({ $isActive }) =>
        `color: ${$isActive ? colors.fontWhite : colors.fontBlack};`}
      &::after {
        display: none;
      }
    }
  }
`;
