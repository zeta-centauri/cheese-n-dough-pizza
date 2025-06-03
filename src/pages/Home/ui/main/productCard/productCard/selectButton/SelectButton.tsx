import { PropsWithChildren } from 'react';
import { useOpen } from 'shared/hooks/useOpen';
import { SelectButtonDesktop } from '../ProductCard.styled';
import { useNavigate } from 'react-router';
import ProductPopup from 'widgets/productPopup/ProductPopup';
import { addProduct } from 'shared/api/endpoints/cart/endpoints/addProduct';
import { Modal } from 'shared/ui';

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

    const onSelectHandler = () => {
        addProduct({ productId });
    };

    const onClickHandler = () => {
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
            <Modal isOpen={isOpen} onClose={onCloseHandler}>
                <ProductPopup />
            </Modal>
        </>
    );
};
