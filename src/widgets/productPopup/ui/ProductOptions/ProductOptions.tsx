import { observer } from 'mobx-react-lite';
import { Wrapper } from './ProductOptions.styled';
import AddProductButton from 'components/Buttons/AddProductButton/AddProductButton';
import { productsEndpoints } from 'shared/api';
import { useProductStore } from 'widgets/productPopup/lib/ProductStoreContext';
import { FC } from 'react';
import RadioButton from 'components/Buttons/RadioButton/RadioButton';
import { IngredientsPanel } from './IngredientsPanel/ingredientsPanel/IngredientsPanel';
import { cartStore } from 'entities/cart/model/cart';

type ProductOptionsProps = {
    onClose: () => void;
};

const ProductOptions: FC<ProductOptionsProps> = observer(({ onClose }) => {
    const { currentProduct, currentPrice, currentIngredients, currentSize } =
        useProductStore();

    const { addProduct } = cartStore;

    const handleAddProduct = () => {
        addProduct({
            productId: currentProduct.productId,
            customIngredients: currentIngredients,
            sizeId: currentSize?.sizeId,
        });

        onClose();
    };

    return (
        <Wrapper>
            <RadioButton sizes={currentProduct.sizes ?? []} />
            <IngredientsPanel />
            <AddProductButton onclick={handleAddProduct} price={currentPrice} />
        </Wrapper>
    );
});

export default ProductOptions;
