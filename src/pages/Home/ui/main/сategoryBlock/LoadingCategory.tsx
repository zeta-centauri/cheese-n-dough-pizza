import { FC } from 'react';
import {
    Products,
    StyledCategoryBlock,
} from './categoryBlock/CategoryBlock.styled';
import PizzaSkeleton from './Skeleton';

type CategoryLoaderProps = {
    itemsCount: number;
};

export const CategoryLoader: FC<CategoryLoaderProps> = ({ itemsCount }) => {
    return (
        <StyledCategoryBlock>
            <Products>
                {new Array(itemsCount).fill(0).map((_, index) => (
                    <PizzaSkeleton key={index} />
                ))}
            </Products>
        </StyledCategoryBlock>
    );
};
