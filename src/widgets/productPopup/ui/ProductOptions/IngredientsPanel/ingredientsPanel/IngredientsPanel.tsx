import { observer } from 'mobx-react-lite';
import { useProductStore } from '../../../../lib/ProductStoreContext';

import styles from './IngredientsPanel.module.scss';
import IngredientCard from '../IngredientCard/IngredientCard';

export const IngredientsPanel = observer(() => {
    const {
        currentProduct: { availableIngredients },
    } = useProductStore();
    const { currentIngredients } = useProductStore();

    if (!availableIngredients) return null;

    return (
        <div className={styles.wrapper}>
            <div className={styles.ingredients}>
                {availableIngredients &&
                    availableIngredients.map((ingredient) => (
                        <IngredientCard
                            key={ingredient.name}
                            isPicked={
                                currentIngredients?.indexOf(
                                    ingredient.ingredientId
                                ) != -1
                            }
                            ingredient={ingredient}
                        />
                    ))}
            </div>
        </div>
    );
});
