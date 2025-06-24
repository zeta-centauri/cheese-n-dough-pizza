import { observer } from 'mobx-react-lite';
import { Button, ButtonCounter } from './CartButton.styled';
import { useNavigate } from 'react-router';
import { useOpen } from 'shared/hooks/useOpen';
import { CartPanel } from 'widgets/cartPanel';
import { cartStore } from 'entities/cart/model/cart';
import { useEffect } from 'react';
import loginStore from 'entities/login-store';
import cartIcon from 'assets/img/svg/cart.svg';

interface CartButtonProps {
    isCategoriesButton: boolean;
}

const CartButton = observer(({ isCategoriesButton }: CartButtonProps) => {
    const { isOpen, close, open } = useOpen();

    const navigate = useNavigate();

    const userData = loginStore.user;

    const { totalPrice, fetchTotalPrice } = cartStore;

    const handleCartButtonClick = () => {
        if (!userData) {
            navigate('/login');
        } else {
            open();
        }
    };

    useEffect(() => {
        fetchTotalPrice();
    }, []);

    return (
        <>
            <Button
                onClick={handleCartButtonClick}
                $isCategoriesButton={isCategoriesButton}
            >
                <img src={cartIcon} alt="" />
                <div className="divider"></div>
                <ButtonCounter>{totalPrice ?? 0} ₽</ButtonCounter>
            </Button>

            <CartPanel isOpen={isOpen} onClose={close} />
        </>
    );
});

export default CartButton;
