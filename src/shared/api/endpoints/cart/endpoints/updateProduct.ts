export type UpdateProductPayload = {
    cartItemId: number;
    quantity: number;
};

export type UpdateProductResponse = {
    success: boolean;
    totalPrice: string;
    totalQuantity: string;
    message: string;
};

export const updateProduct = async ({
    cartItemId,
    quantity,
}: UpdateProductPayload): Promise<UpdateProductResponse> => {
    const response = await fetch(
        `http://localhost/pizza_shop/api.php?action=update_cart_item`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartItemId, quantity }),
            credentials: 'include', // важно для сессионных куки
        }
    );
    return await response.json();
};
