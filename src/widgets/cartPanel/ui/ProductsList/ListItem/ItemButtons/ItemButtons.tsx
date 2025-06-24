import { observer } from 'mobx-react-lite';
import { cartEndpoints } from '../../../../../../shared/api';

import styles from './ItemButtons.module.scss';
import CounterButton from 'components/Buttons/CounterButton/CounterButton';
import { cartStore } from 'entities/cart/model/cart';
import toast from 'react-hot-toast';
type ItemButtonsProps = Pick<
    cartEndpoints.CartItem,
    'cartItemId' | 'quantity' | 'totalPrice'
>;

const ItemButtons = observer(
    ({ cartItemId, quantity, totalPrice }: ItemButtonsProps) => {
        const { updateProduct } = cartStore;

        const onIncrement = async () => {
            const { success, totalPrice } = await updateProduct({
                cartItemId,
                quantity: quantity + 1,
            });
            if (success) {
                const notify = () =>
                    toast(
                        `Кол-во товара обновлено, общая стоимость - ${totalPrice}`,
                        {
                            position: 'bottom-left',
                        }
                    );
                notify();
            } else {
                const notify = () =>
                    toast('Ошибка при обновлении товара', {
                        position: 'bottom-left',
                    });
                notify();
            }
        };

        const onDecrement = async () => {
            const { success, totalPrice } = await updateProduct({
                cartItemId,
                quantity: quantity - 1,
            });
            if (success) {
                const notify = () =>
                    toast(
                        `Кол-во товара обновлено, общая стоимость - ${totalPrice}`,
                        {
                            position: 'bottom-left',
                        }
                    );
                notify();
            } else {
                const notify = () =>
                    toast('Ошибка при обновлении товара', {
                        position: 'bottom-left',
                    });
                notify();
            }
        };

        return (
            <div className={styles.wrapper}>
                <p className={styles.price}>{totalPrice} ₽</p>
                <div className={styles.buttons}>
                    <button className={styles.editButton}>Изменить</button>
                    <CounterButton
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        currentValue={quantity}
                    />
                </div>
            </div>
        );
    }
);

export default ItemButtons;
