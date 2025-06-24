import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import styles from './IngredientCard.module.scss';
import { useProductStore } from 'widgets/productPopup/lib/ProductStoreContext';
import clsx from 'clsx';
import { productsEndpoints } from 'shared/api';
import IngredientPickMark from './IngredientPickMark';

type IngredientCardProps = {
    ingredient: productsEndpoints.Ingredient;
    isPicked: boolean;
};

const IngredientCard = observer(
    ({ ingredient, isPicked }: IngredientCardProps) => {
        const { addIngredient, removeIngredient } = useProductStore();

        const { name, imgUrl, price } = ingredient;

        const handleIngredientClick = useCallback(() => {
            if (isPicked) {
                removeIngredient(ingredient);
            } else {
                addIngredient(ingredient);
            }
        }, [isPicked, addIngredient, ingredient, removeIngredient]);

        return (
            <div
                className={clsx(styles.wrapper, isPicked && styles.isPicked)}
                onClick={handleIngredientClick}
            >
                <IngredientPickMark show={isPicked} />
                <img className={styles.image} src={imgUrl} alt="" />
                <h5 className={styles.title}>{name}</h5>
                <p className={styles.price}>{price}₽</p>
            </div>
        );
    }
);

export default IngredientCard;
