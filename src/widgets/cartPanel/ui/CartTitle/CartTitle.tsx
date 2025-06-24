import { observer } from 'mobx-react-lite';
import { cartStore } from 'entities/cart/model/cart';

import styles from './CartTitle.module.scss';

const CartTitle = observer(() => {
    const { totalQuantity, totalPrice } = cartStore;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {totalQuantity} товар на {totalPrice} ₽
            </h2>
        </div>
    );
});

export default CartTitle;
