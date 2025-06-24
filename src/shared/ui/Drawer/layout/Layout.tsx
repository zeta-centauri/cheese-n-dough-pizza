import type { FC } from 'react';
import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';

import type { LayoutType } from './Layout.types';

import styles from './Layout.module.scss';
import { DEFAULT_Z_INDEX_CONTENT_IN_PORTAL } from 'shared/ui/Portal/constants';
import { ANIMATION_DURATION } from '../Drawer';
import { useAnimationIn } from 'shared/hooks/useAnimationIn';

export const Layout: FC<LayoutType> = ({
    children,
    isOpen,
    onClose,
    cssTransitionEnterDoneClassName,
    drawerClassName,
    mainClassName,
    containerClassName,
    width = '50vw',
    className = '',
    position = 'right',
    withFallback = true,
    zIndexContentInPortal = DEFAULT_Z_INDEX_CONTENT_IN_PORTAL,
}) => {
    const { animationIn } = useAnimationIn(isOpen);

    const nodeRef = useRef(null);

    return (
        <div
            className={clsx(styles.container, containerClassName)}
            style={{ zIndex: zIndexContentInPortal }}
        >
            <CSSTransition
                in={animationIn}
                timeout={ANIMATION_DURATION}
                nodeRef={nodeRef}
                classNames={{
                    enterActive: styles.drawer__enter,
                    enterDone: clsx(
                        styles.drawer__enter_done,
                        cssTransitionEnterDoneClassName
                    ),
                    exitActive: styles.drawer__exit,
                }}
                unmountOnExit
            >
                <div
                    ref={nodeRef}
                    className={clsx(styles.drawer, drawerClassName)}
                >
                    <div
                        className={clsx(
                            styles.content,
                            styles[position],
                            className
                        )}
                        style={{ width }}
                    >
                        <div className={clsx(styles.main, mainClassName)}>
                            {children}
                        </div>
                    </div>
                    {withFallback && (
                        <div className={styles.fallback} onClick={onClose} />
                    )}
                </div>
            </CSSTransition>
        </div>
    );
};
