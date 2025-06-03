import { observer } from 'mobx-react-lite';
import { Button } from './CartButton.styled';
import { useNavigate } from 'react-router';
import { useOpen } from 'shared/hooks/useOpen';
import { CartPanel } from 'widgets/cartPanel';

interface CartButtonProps {
    isCategoriesButton: boolean;
}

const CartButton = observer(({ isCategoriesButton }: CartButtonProps) => {
    const { isOpen, close, open } = useOpen();

    const handleCartButtonClick = () => {
        open();
    };

    return (
        <>
            <Button
                onClick={handleCartButtonClick}
                $isCategoriesButton={isCategoriesButton}
            >
                <img src="assets/img/svg/cart.svg" alt="" />
                <div className="divider"></div>
                {/* <ButtonCounter>{totalPrice} ₽</ButtonCounter> */}
            </Button>

            <CartPanel isOpen={isOpen} onClose={close} />
        </>
    );
});

export default CartButton;
