type LogoutResponseType = {
    success: boolean;
};

export const logout = async (): Promise<LogoutResponseType> => {
    const response = await fetch(
        `http://localhost/pizza_shop/api.php?action=logout`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // важно для сессионных куки
        }
    );
    return await response.json();
};
