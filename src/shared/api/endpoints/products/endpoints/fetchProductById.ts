import { Product } from '../types';

type FetchProductByIdResponse = { product: Product; success: boolean };

export const fetchProductById = async (productId: number) => {
    const response = await fetch(
        `http://localhost/pizza_shop/api.php?action=get_product&product_id=${productId}`
    );

    const data: FetchProductByIdResponse = await response.json();

    return data;
};
