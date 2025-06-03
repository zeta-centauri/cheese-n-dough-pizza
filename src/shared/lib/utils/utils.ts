const API_URL = 'https://67028b4ebd7c8c1ccd3f2a78.mockapi.io/categories';

export const fetchData = async () => {
    const response = await fetch(API_URL);
    return response.json();
};
