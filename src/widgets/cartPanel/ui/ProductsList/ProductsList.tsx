import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { ListItem } from './ListItem/ListItem';
import { FC } from 'react';
import { cartEndpoints } from '../../../../shared/api';

type ProductsListProps = {
    products: cartEndpoints.CartItem[];
};

const ProductsList: FC<ProductsListProps> = observer(({ products }) => {
    return (
        <List>
            {products.map((product) => (
                <ListItem key={product.cartItemId} product={product} />
            ))}
        </List>
    );
});

const List = styled.ul`
    height: 100%;
    width: 100%;

    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;

    list-style: none;
`;

export default ProductsList;
