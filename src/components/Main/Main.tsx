import { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../styles/Container";
import { Category } from "../../types";
import { observer } from "mobx-react-lite";
import productsStore from "../../stores/products-store";
import LoadingMain from "./Loading/Loading";
import CategoryBlock from "./CategoryBlock/CategoryBlock";

const Main = observer(() => {
  const { products, fetchProducts, isLoading } = productsStore;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) return <LoadingMain />;

  return (
    <main>
      <MainContainer>
        {products.map((category: Category) => (
          <CategoryBlock key={category.categoryId} {...category} />
        ))}
      </MainContainer>
    </main>
  );
});

export const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 15px 0px 36px 0px;
`;

export default Main;
