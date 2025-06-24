import { PropsWithChildren } from 'react';
import { useOpen } from 'shared/hooks/useOpen';
import { SelectButtonDesktop } from '../ProductCard.styled';
import { useNavigate } from 'react-router';
import { Modal } from 'shared/ui';
import { cartStore } from 'entities/cart/model/cart';
import toast from 'react-hot-toast';
import { ProductPopup } from 'widgets/productPopup/ui/productPopup/ProductPopup';

type SelectButtonProps = PropsWithChildren<{
    productId: number;
    isSimpleAddButton: boolean;
    onOpen?: () => void;
}>;

export const SelectButton = ({
    children,
    isSimpleAddButton,
    productId,
}: SelectButtonProps) => {
    const navigate = useNavigate();
    const { isOpen, open, close } = useOpen();

    const { addProduct } = cartStore;

    const onSelectHandler = async () => {
        if (isSimpleAddButton) {
            const { success, message } = await addProduct({ productId });
            if (success) {
                const notify = () =>
                    toast(message, {
                        position: 'bottom-left',
                        style: {
                            backgroundColor: 'var(--primary)',
                            color: 'var(--fontWhite)',
                        },
                    });
                notify();
            } else {
                const notify = () =>
                    toast('Что-то пошло не так...', {
                        position: 'bottom-left',
                    });
                notify();
            }
        } else {
        }
    };

    const onClickHandler = () => {
        navigate(`product/${productId}`);
        open();
    };

    const onCloseHandler = () => {
        navigate('/');
        close();
    };

    return isSimpleAddButton ? (
        <SelectButtonDesktop onClick={onSelectHandler}>
            {children}
        </SelectButtonDesktop>
    ) : (
        <>
            <SelectButtonDesktop onClick={onClickHandler}>
                {children}
            </SelectButtonDesktop>
            <ProductPopup isOpen={isOpen} onClose={onCloseHandler} />
        </>
    );
};
