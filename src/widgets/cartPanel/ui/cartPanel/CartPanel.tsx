import { observer } from 'mobx-react-lite';

import CartTitle from '../CartTitle/CartTitle';
import BuyBlock from '../BuyBlock/BuyBlock';
import ProductsList from '../ProductsList/ProductsList';
import CartHeader from '../CartHeader/CartHeader';
import { useNavigate } from 'react-router';
import { useNormalizeScroll } from '../../../../shared/hooks';

import styles from './Cart.module.scss';
import { FC, useEffect } from 'react';
import { cartStore } from '../../../../entities/cart/model/cart';
import { Drawer } from 'shared/ui';

type CartPanelProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const CartPanel: FC<CartPanelProps> = observer(({ isOpen, onClose }) => {
    const fetchProducts = cartStore.fetchProducts;
    const products = cartStore.products;

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <>
            <Drawer isOpen={isOpen} onClose={onClose}>
                <CartHeader />
                <CartTitle />
                <ProductsList products={products} />
                <BuyBlock />
            </Drawer>
        </>
    );
});
