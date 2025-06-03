type GetButtonTextPayload = {};

export const getButtonText = ({
    availableIngredientsCount,
    sizesCount,
    isMobileButton = false,
    price,
}: {
    availableIngredientsCount: number;
    sizesCount: number;
    isMobileButton: boolean;
    price: string;
}) => {
    const isSimpleProduct = getIsSimpleProduct({
        availableIngredientsCount,
        sizesCount,
    });
    if (isMobileButton) {
        return !isSimpleProduct ? `от ${price} ₽` : `${price} ₽`;
    }
    return !isSimpleProduct ? 'Выбрать' : 'В корзину';
};

export const getIsSimpleProduct = ({
    availableIngredientsCount,
    sizesCount,
}: {
    availableIngredientsCount: number;
    sizesCount: number;
}) => {
    return !(availableIngredientsCount + sizesCount > 1);
};
