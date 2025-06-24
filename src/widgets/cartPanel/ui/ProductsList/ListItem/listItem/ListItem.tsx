import { cartEndpoints } from '../../../../../../shared/api';
import ItemButtons from '../ItemButtons/ItemButtons';
import ItemInfo from '../ItemInfo/ItemInfo';

import styles from './ListItem.module.scss';

type ListItemProps = cartEndpoints.CartItem;

export const ListItem = ({
    productName,
    imageUrl,
    productDescription,
    cartItemId,
    quantity,
    totalPrice,
}: ListItemProps) => {
    return (
        <div className={styles.wrapper}>
            <ItemInfo
                productName={productName}
                imageUrl={imageUrl}
                productDescription={productDescription}
            />
            <ItemButtons
                cartItemId={cartItemId}
                quantity={quantity}
                totalPrice={totalPrice}
            />
        </div>
    );
};
