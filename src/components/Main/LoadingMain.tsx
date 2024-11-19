import styled from "styled-components";
import { MainContainer } from "./Main";
import PizzaSkeleton from "../Skeleton";

const LoadingMain = () => {
  return (
    <MainContainer>
      <CategorySkeletonBlock>
        <h2>Пиццы</h2>
        <SkeletonsWrapper>
          {new Array(16).fill(0).map((_, index) => (
            <PizzaSkeleton key={index} />
          ))}
        </SkeletonsWrapper>
      </CategorySkeletonBlock>
    </MainContainer>
  );
};

const CategorySkeletonBlock = styled.section`
  h2 {
    font-size: 32px;
    font-weight: 700;
  }
  display: flex;
  flex-direction: column;
  gap: 36px;
  @media (width <= 576px) {
    gap: 8px;
  }
`;

const SkeletonsWrapper = styled.div`
  display: grid;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
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

export default LoadingMain;
