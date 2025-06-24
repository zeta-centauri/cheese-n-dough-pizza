import { Product } from '../types';

type FetchProductsByCategoryIdResponse = {
    products: Product[];
};

export const fetchProductsByCategoryId = async (categoryId: number) => {
    const response = await fetch(
        `http://localhost/pizza_shop/api.php?action=get_products&category_id=${categoryId}`
    );

    const { products }: FetchProductsByCategoryIdResponse =
        await response.json();

    return products;
};
