import { cartStore } from 'entities/cart/model/cart';
import loginStore from '../../entities/login-store';

export const LogoutButton = () => {
    const logout = loginStore.logout;
    const resetCart = cartStore.resetCart;
    const onClickHandle: React.MouseEventHandler<HTMLButtonElement> = async (
        event
    ) => {
        event.preventDefault();

        try {
            await logout().then(() => {
                resetCart();
            });
        } catch (error) {
            console.log('error');
        }
    };
    return (
        <button onClick={onClickHandle}>
            <img src="./src/assets/img/svg/logout_icon.svg" alt="" />
        </button>
    );
};
