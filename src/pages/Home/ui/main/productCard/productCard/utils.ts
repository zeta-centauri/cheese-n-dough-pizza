type GetButtonTextPayload = {
    availableIngredientsCount: number;
    sizesCount: number;
    isMobileButton: boolean;
    price: number;
};

export const getButtonText = ({
    availableIngredientsCount,
    sizesCount,
    isMobileButton = false,
    price,
}: GetButtonTextPayload) => {
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
