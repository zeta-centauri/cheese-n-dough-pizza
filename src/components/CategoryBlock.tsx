import styled from "styled-components";
import { Product } from "./Main/Main";
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
          <ProductBlock
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.types[0].price}
            image={product.types[0].image}
          />
        ))}
      </Products>
    </StyledCategoryBlock>
  );
}

const StyledCategoryBlock = styled.section``;
const CategoryTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
`;
const Products = styled.div`
  display: grid;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
`;
