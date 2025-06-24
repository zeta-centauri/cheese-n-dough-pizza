export type RegisterPayloadType = {
    email: string;
    username: string;
    password: string;
};

export type RegisterResponseType = {
    success: boolean;
    userId: number;
    username: string;
    email: string;
    message: string;
};

export const register = async ({
    email,
    username,
    password,
}: RegisterPayloadType): Promise<RegisterResponseType> => {
    const response = await fetch(
        `http://localhost/pizza_shop/api.php?action=register`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
            credentials: 'include', // важно для сессионных куки
        }
    );
    return await response.json();
};
