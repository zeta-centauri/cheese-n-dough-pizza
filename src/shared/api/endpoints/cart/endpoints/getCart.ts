export type FetchCartItemsResponseType = {
    cartItems: CartItem[];
    totalPrice: string;
    totalQuantity: number;
};

export type CartItem = {
    cartItemId: number;
    cartId: number;
    productId: number;
    productDescription: string | null;
    sizeId: number | null;
    quantity: number;
    productName: string;
    imageUrl: string;
    productSize: string | null;
    currentPrice: string;
    totalPrice: string;
    customIngredients: [];
};

export const fetchCartItems = async (): Promise<FetchCartItemsResponseType> => {
    const response = await fetch(
        `http://localhost/pizza_shop/api.php?action=get_cart`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // важно для сессионных куки
        }
    );
    return await response.json();
};
