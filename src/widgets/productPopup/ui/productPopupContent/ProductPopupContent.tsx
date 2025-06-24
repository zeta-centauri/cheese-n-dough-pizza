import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import {
    ProductStoreProvider,
    useProductStore,
} from '../../lib/ProductStoreContext';
import { observer } from 'mobx-react-lite';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import ProductOptions from '../ProductOptions/ProductOptions';

type ProductPopupContentProps = {
    onClose: () => void;
};

export const ProductPopupContent: FC<ProductPopupContentProps> = observer(
    ({ onClose }) => {
        const { productId } = useParams<string>();

        const { fetchProduct } = useProductStore();

        useEffect(() => {
            console.log(productId);
            productId && fetchProduct(productId);
        }, [productId]);

        return (
            <>
                <ProductInfo />
                <ProductOptions onClose={onClose} />
            </>
        );
    }
);
