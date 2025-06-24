export type AddProductBody = {
    productId: number;
    sizeId?: number;
    customIngredients?: number[];
};

type AddProductResponse = {
    success: boolean;
    totalPrice: string;
    message: string;
};

export const addProduct = async (
    body: AddProductBody
): Promise<AddProductResponse> => {
    const response = await fetch(
        `http://localhost/pizza_shop/api.php?action=add_to_cart`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            credentials: 'include', // важно для сессионных куки
        }
    );
    return await response.json();
};
