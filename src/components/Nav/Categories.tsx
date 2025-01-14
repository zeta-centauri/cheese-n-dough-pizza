import { useState } from "react";
import CartButton from "../Buttons/CartButton/CartButton";
import {
  CategoriesWrapper,
  CategoriesContainer,
  CategoriesList,
  Category,
} from "./Categories.styled";
import { categories } from "./utils";
import SearchBar from "../SearchBar/SearchBar";

export default function Categories() {
  const [currentCategory, setCurrentCategory] = useState(0);
  return (
    <CategoriesWrapper>
      <CategoriesContainer>
        <CategoriesList>
          {categories.map((category, index) => (
            <Category key={index} $isActive={currentCategory === index}>
              <a href={category.href} onClick={() => setCurrentCategory(index)}>
                {category.text}
              </a>
            </Category>
          ))}
        </CategoriesList>
        <SearchBar isMobile={false} />
        <CartButton isCategoriesButton={true} />
      </CategoriesContainer>
    </CategoriesWrapper>
  );
}
