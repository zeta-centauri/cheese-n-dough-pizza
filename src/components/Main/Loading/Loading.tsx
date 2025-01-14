import { MainContainer } from "../Main";
import PizzaSkeleton from "./Skeleton";
import {
  CategoryTitle,
  Products,
  StyledCategoryBlock,
} from "../CategoryBlock/CategoryBlock.styled";

const Loading = () => {
  return (
    <MainContainer>
      <StyledCategoryBlock>
        <CategoryTitle>Пиццы</CategoryTitle>
        <Products>
          {new Array(16).fill(0).map((_, index) => (
            <PizzaSkeleton key={index} />
          ))}
        </Products>
      </StyledCategoryBlock>
    </MainContainer>
  );
};

export default Loading;
