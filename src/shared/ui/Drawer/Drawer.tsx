import { FC } from 'react';
import { LayoutType } from './layout/Layout.types';
import { useMountedForAnimation } from 'shared/hooks/useMountedForAnimation';
import { Layout } from './layout/Layout';
import { Portal } from '../Portal';
import { useNormalizeScroll } from 'shared/hooks';

export type DrawerType = LayoutType;

export const ANIMATION_DURATION = 300;

export const Drawer: FC<DrawerType> = ({
    children,
    isOpen,
    onClose,
    width,
    className,
    position,
    withFallback,
    zIndexContentInPortal,
    cssTransitionEnterDoneClassName,
    drawerClassName,
    mainClassName,
    containerClassName,
    withoutCloseButton,
}) => {
    useNormalizeScroll(isOpen);

    const { isMounted } = useMountedForAnimation({
        isOpen,
        animationDuration: ANIMATION_DURATION,
    });

    if (!isMounted) {
        return null;
    }

    return (
        <Portal>
            <Layout
                isOpen={isOpen}
                withFallback={withFallback}
                onClose={onClose}
                position={position}
                className={className}
                width={width}
                zIndexContentInPortal={zIndexContentInPortal}
                cssTransitionEnterDoneClassName={
                    cssTransitionEnterDoneClassName
                }
                drawerClassName={drawerClassName}
                mainClassName={mainClassName}
                containerClassName={containerClassName}
                withoutCloseButton={withoutCloseButton}
            >
                {children}
            </Layout>
        </Portal>
    );
};
