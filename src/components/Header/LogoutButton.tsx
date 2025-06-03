import loginStore from '../../stores/login-store';

export const LogoutButton = () => {
    const logout = loginStore.logout;

    const onClickHandle: React.MouseEventHandler<HTMLButtonElement> = async (
        event
    ) => {
        event.preventDefault();

        try {
            await logout();
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
