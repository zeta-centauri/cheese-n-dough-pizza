import { Product } from "../../../types";
import ProductBlock from "../ProductCard/ProductCard";
import {
  StyledCategoryBlock,
  CategoryTitle,
  Products,
} from "./CategoryBlock.styled";

interface CategoryBlockProps {
  title: string;
  products: Product[];
}

export default function CategoryBlock({ title, products }: CategoryBlockProps) {
  return (
    <StyledCategoryBlock id={title}>
      <CategoryTitle>{title}</CategoryTitle>
      <Products>
        {products.map((product) => (
          <ProductBlock key={product.id} {...product} />
        ))}
      </Products>
    </StyledCategoryBlock>
  );
}
