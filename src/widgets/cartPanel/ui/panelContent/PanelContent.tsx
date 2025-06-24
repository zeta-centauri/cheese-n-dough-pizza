import { FC, useEffect, useLayoutEffect } from 'react';
import CartTitle from '../CartTitle/CartTitle';
import ProductsList from '../productsList/ProductsList';
import BuyBlock from '../BuyBlock/BuyBlock';
import { observer } from 'mobx-react-lite';
import { cartStore } from 'entities/cart/model/cart';

import styles from './PanelContent.module.scss';
import { CartHeader } from '../CartHeader/CartHeader';

type PanelContentProps = {
    onClose: () => void;
};

export const PanelContent: FC<PanelContentProps> = observer(({ onClose }) => {
    const fetchProducts = cartStore.fetchProducts;
    const products = cartStore.products;

    useLayoutEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <div className={styles.container}>
            <CartHeader onClose={onClose} />
            <CartTitle />
            <ProductsList products={products} />
            <BuyBlock />
        </div>
    );
});
