import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router';

import { Modal } from 'shared/ui';

import styles from './ProductPopup.module.scss';
import { ProductPopupContent } from '../productPopupContent/ProductPopupContent';
import { ProductStoreProvider } from 'widgets/productPopup/lib/ProductStoreContext';
import { useViewPortWidth } from 'shared/hooks/useViewportWidth';

type ProductPopupProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const ProductPopup: FC<ProductPopupProps> = observer(
    ({ isOpen, onClose }) => {
        const navigate = useNavigate();

        const viewPortWidth = useViewPortWidth();

        return (
            <Modal
                className={styles.modal}
                width={viewPortWidth < 970 ? '90%' : 890}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ProductStoreProvider>
                    <div className={styles.wrapper}>
                        <ProductPopupContent onClose={onClose} />
                    </div>
                </ProductStoreProvider>
            </Modal>
        );
    }
);
