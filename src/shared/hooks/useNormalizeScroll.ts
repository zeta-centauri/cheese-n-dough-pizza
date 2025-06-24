import { useEffect } from 'react';

export const useNormalizeScroll = (isOpen: boolean) => {
    useEffect(() => {
        if (isOpen) {
            const scrollBarWidth =
                window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
        }
    }, [isOpen]);
};
