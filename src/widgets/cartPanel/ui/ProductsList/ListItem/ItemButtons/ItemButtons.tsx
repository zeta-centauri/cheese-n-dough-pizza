import { observer } from 'mobx-react-lite';
import { Wrapper, Price, Buttons, EditButton } from './ItemButtons.styled';
import { cartEndpoints } from '../../../../../../shared/api';

interface ItemButtonsProps {
    product: cartEndpoints.CartItem;
}

const ItemButtons = observer(({ product }: ItemButtonsProps) => {
    // const handleIncrementClick = () => {
    //     addProduct(product);
    // };

    // const handleDecrementClick = () => {
    //     removeProduct(product);
    // };

    return (
        <Wrapper>
            <Price>{product.sizePrice} ₽</Price>
            <Buttons>
                <EditButton>Изменить</EditButton>
                {/* <CounterButton
                    onIncrement={handleIncrementClick}
                    onDecrement={handleDecrementClick}
                    currentValue={product.quantity}
                /> */}
            </Buttons>
        </Wrapper>
    );
});

export default ItemButtons;
