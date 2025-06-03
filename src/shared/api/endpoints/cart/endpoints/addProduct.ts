export type AddProductPayload = {
    productId: number;
};

export const addProduct = async ({ productId }: AddProductPayload) => {
    const response = await fetch(
        `http://localhost/pizza_shop/api.php?action=add_to_cart`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId }),
            credentials: 'include', // важно для сессионных куки
        }
    );
    return await response.json();
};
