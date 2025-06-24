import { observer } from 'mobx-react-lite';

import styles from './CartPanel.module.scss';
import { FC } from 'react';
import { Drawer } from 'shared/ui';
import { PanelContent } from '../panelContent/PanelContent';
import { useViewPortWidth } from '../../../../shared/hooks/useViewportWidth';

type CartPanelProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const CartPanel: FC<CartPanelProps> = observer(({ isOpen, onClose }) => {
    const viewPortWidth = useViewPortWidth();

    return (
        <Drawer
            isOpen={isOpen}
            onClose={onClose}
            width={viewPortWidth < 800 ? '100%' : 650}
            className={styles.cartDialog}
        >
            <PanelContent onClose={onClose} />
        </Drawer>
    );
});
