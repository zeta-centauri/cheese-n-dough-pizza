import ItemInfo from './ItemInfo/ItemInfo';
import ItemButtons from './ItemButtons/ItemButtons';
import { Wrapper } from './ListItem.styled';
import { cartEndpoints } from '../../../../../shared/api';

type ListItemProps = {
    product: cartEndpoints.CartItem;
};

export const ListItem = ({ product }: ListItemProps) => {
    return (
        <Wrapper>
            <ItemInfo
                productName={product.productName}
                imageUrl={product.imageUrl}
                productDescription={product.productDescription}
            />
            <ItemButtons product={product} />
        </Wrapper>
    );
};
