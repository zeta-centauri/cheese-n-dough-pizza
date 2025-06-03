// import productStore from '../../../stores/product-store';
// import cartStore from '../../../stores/cart-store';
// import { getButtonText } from './utils';
// import Rating from './Rating/Rating';
import { FC } from 'react';
import { Product } from '../../../../../../shared/api/endpoints/products/types';
import {
    ProductFooter,
    ProductImage,
    ProductInfo,
    ProductText,
    SelectButtonDesktop,
    Wrapper,
} from './ProductCard.styled';
import { Rating } from '../rating/Rating';
import { getButtonText, getIsSimpleProduct } from './utils';
import { useNavigate } from 'react-router';
import { SelectButton } from './selectButton/SelectButton';

type ProductCardProps = Product;

export const ProductCard: FC<ProductCardProps> = ({
    name,
    productDescription,
    productId,
    price,
    imageUrl,
    rating,
    availableIngredientsCount,
    sizesCount,
}) => {
    return (
        <Wrapper>
            <ProductInfo>
                <ProductImage
                    // onClick={handleSelectButton}
                    src={imageUrl}
                    alt=""
                />
                <ProductText>
                    <h3>{name}</h3>
                    <Rating rating={rating} />
                    <p>{productDescription}</p>
                    {/* <SelectButtonMobile onClick={handleSelectButton}>
                        {getButtonText(product.types, true)}
                    </SelectButtonMobile> */}
                </ProductText>
            </ProductInfo>

            <ProductFooter>
                <p>от {price} ₽</p>
                <SelectButton
                    productId={productId}
                    isSimpleAddButton={getIsSimpleProduct({
                        availableIngredientsCount,
                        sizesCount,
                    })}
                >
                    {getButtonText({
                        availableIngredientsCount,
                        sizesCount,
                        price,
                        isMobileButton: false,
                    })}
                </SelectButton>
            </ProductFooter>
        </Wrapper>
    );
};
