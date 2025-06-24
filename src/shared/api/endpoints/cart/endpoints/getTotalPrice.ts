type FetchTotalPriceResponse = {
    totalPrice: string;
};

export const fetchTotalPrice = async (): Promise<FetchTotalPriceResponse> => {
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
