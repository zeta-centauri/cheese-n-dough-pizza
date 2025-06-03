import { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../../../../styles/Container';
import { observer } from 'mobx-react-lite';
import productsStore from '../../../../stores/products-store';
import { CategoryBlock } from './сategoryBlock/categoryBlock/CategoryBlock';

const Main = observer(() => {
    const fetchCategories = productsStore.fetchCategories;
    const categories = productsStore.categories;

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return (
        <MainWrapper>
            <MainContainer>
                {categories.map((category) => (
                    <CategoryBlock key={category.categoryId} {...category} />
                ))}
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
