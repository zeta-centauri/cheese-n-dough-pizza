export type LoginPayloadType = {
    email: string;
    password: string;
};

export type LoginResponseType = {
    success: boolean;
    userId: number;
    username: string;
    email: string;
    message?: string;
};

export const login = async ({
    email,
    password,
}: LoginPayloadType): Promise<LoginResponseType> => {
    const response = await fetch(
        `http://localhost/pizza_shop/api.php?action=login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            credentials: 'include', // важно для сессионных куки
        }
    );
    return await response.json();
};
