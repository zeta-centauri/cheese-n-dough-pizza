import styled from "styled-components";
import { Product } from "../../types";
import ProductBlock from "./ProductBlock";

interface CategoryBlockProps {
  title: string;
  products: Product[];
}

export default function CategoryBlock({ title, products }: CategoryBlockProps) {
  return (
    <StyledCategoryBlock>
      <CategoryTitle>{title}</CategoryTitle>
      <Products>
        {products.map((product) => (
          <ProductBlock key={product.id} {...product} />
        ))}
      </Products>
    </StyledCategoryBlock>
  );
}

const StyledCategoryBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 36px;
  @media (width <= 576px) {
    gap: 8px;
  }
`;
const CategoryTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
`;
const Products = styled.div`
  display: grid;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  align-items: stretch;
  grid-template-columns: repeat(4, 1fr);
  @media (width <= 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (width <= 812px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (width <= 576px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;
