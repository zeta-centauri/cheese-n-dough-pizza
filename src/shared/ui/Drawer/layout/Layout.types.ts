import type { ReactNode } from 'react';

export type LayoutType = {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    width?: string | number;
    className?: string;
    position?: 'right' | 'left';
    withFallback?: boolean;
    zIndexContentInPortal?: number;
    cssTransitionEnterDoneClassName?: string;
    drawerClassName?: string;
    mainClassName?: string;
    containerClassName?: string;
    withoutCloseButton?: boolean;
};
