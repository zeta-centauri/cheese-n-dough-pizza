import styled from "styled-components";
import { Container } from "./Container";
import { colors } from "../styles/colors";
import { useState } from "react";
import CartButton from "./CartButton";

const categories = ["Пиццы", "Закуски", "Завтраки", "Напитки", "Коктейли", "Десерты"];

export default function Categories() {
  const [currentCategory, setCurrentCategory] = useState(0);
  return (
    <CategoriesWrapper>
      <CategoriesContainer>
        <CategoriesList>
          {categories.map((category, index) => (
            <Category key={index} $isActive={currentCategory === index}>
              <a href="#" onClick={() => setCurrentCategory(index)}>
                {category}
              </a>
            </Category>
          ))}
        </CategoriesList>
        <CartButton isCategoriesButton={true} />
      </CategoriesContainer>
    </CategoriesWrapper>
  );
}

const CategoriesWrapper = styled.header`
  padding: 15px 0px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(7.400000095367432px);
  background: rgba(255, 255, 255, 0.71);
`;
const CategoriesContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CategoriesList = styled.ul`
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
const Category = styled.li<{ $isActive?: boolean }>`
  a {
    position: relative;
    text-decoration: none;
    color: black;
    &::after {
      position: absolute;
      content: "";
      bottom: -5px;
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
      ${({ $isActive }) => `background-color: ${$isActive ? colors.primary : colors.bgGray};`}
      ${({ $isActive }) => `color: ${$isActive ? colors.fontWhite : colors.fontBlack};`}
      &::after {
        display: none;
      }
    }
  }
`;
