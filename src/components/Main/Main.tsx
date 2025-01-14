import { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../styles/Container";
import { Category } from "../../types";
import { observer } from "mobx-react-lite";
import productsStore from "../../stores/products-store";
import LoadingMain from "./Loading/Loading";
import CategoryBlock from "./CategoryBlock/CategoryBlock";
import sortStore from "../../stores/sort-store";
import searchStore from "../../stores/search-store";

const Main = observer(() => {
  const { getProducts, fetchProducts, isLoading, searchProducts } =
    productsStore;
  const currentSortValue = sortStore.currentValue;
  const currentSearchValue = searchStore.currentValue;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) return <LoadingMain />;

  return (
    <MainWrapper>
      <MainContainer>
        {!currentSearchValue.trim() &&
          getProducts(currentSortValue).map((category: Category) => (
            <CategoryBlock key={category.categoryId} {...category} />
          ))}

        {currentSearchValue.trim() && (
          <CategoryBlock
            key={0}
            {...searchProducts(currentSearchValue, currentSortValue)}
          />
        )}
      </MainContainer>
    </MainWrapper>
  );
});

export const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 15px 0px 36px 0px;
`;

export const MainWrapper = styled.main`
  flex: 1 0 auto;
`;

export default Main;
