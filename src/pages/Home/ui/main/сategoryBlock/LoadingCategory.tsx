import {
    Products,
    StyledCategoryBlock,
} from './categoryBlock/CategoryBlock.styled';
import PizzaSkeleton from './Skeleton';

export const LoadingCategory = () => {
    return (
        <StyledCategoryBlock>
            <Products>
                {new Array(8).fill(0).map((_, index) => (
                    <PizzaSkeleton key={index} />
                ))}
            </Products>
        </StyledCategoryBlock>
    );
};
