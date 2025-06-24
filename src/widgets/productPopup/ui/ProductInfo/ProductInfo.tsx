import { observer } from 'mobx-react-lite';

import styles from './ProductInfo.module.scss';
import { FC } from 'react';
import { useProductStore } from 'widgets/productPopup/lib/ProductStoreContext';
import { toJS } from 'mobx';

export const ProductInfo: FC = observer(() => {
    const { currentSize, currentProduct } = useProductStore();

    console.log(toJS(currentProduct));

    return (
        <div className={styles.wrapper}>
            <img
                className={styles.productImage}
                src={
                    currentSize
                        ? currentSize.imageUrl
                        : currentProduct?.imageUrl
                }
            />
            <h2 className={styles.productTitle}>{currentProduct?.name}</h2>
            <div className={styles.productText}>
                <p className={styles.description}>
                    {currentProduct?.productDescription}
                </p>
                <p className={styles.params}>{}</p>
            </div>
        </div>
    );
});
