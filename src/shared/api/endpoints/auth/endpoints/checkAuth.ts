export type CheckAuthResponseType = {
    success: boolean;
    userId: number;
};

export const checkAuth = async (): Promise<CheckAuthResponseType> => {
    const response = await fetch(
        `http://localhost/pizza_shop/api.php?action=check_auth`,
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
