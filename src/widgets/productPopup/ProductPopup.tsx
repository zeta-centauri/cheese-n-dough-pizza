import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router';

import productsStore from '../../stores/products-store';
import { Id } from '../../types';
import productStore from '../../stores/product-store';
import { useNormalizeScroll } from '../../shared/hooks';
import { ProductCloseButton, ProductWrapper } from './ProductPopup.styled';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductOptions from './ProductOptions/ProductOptions';

const ProductPopup = observer(() => {
    // const { getProduct } = productsStore;
    const navigate = useNavigate();

    const { productId } = useParams<Id>();

    // useEffect(() => {
    //     setProduct(getProduct(productId as Id)!);
    // }, []);

    const handleOverlayClick = () => {
        navigate('/');
    };

    return (
        <ProductWrapper onClick={(e) => e.stopPropagation()}>
            {/* {currentProduct && (
                    <>
                        <ProductInfo product={currentProduct} />
                        <ProductOptions product={currentProduct} />
                    </>
                )} */}
            Какой то продукт
        </ProductWrapper>
    );
});

export default ProductPopup;
