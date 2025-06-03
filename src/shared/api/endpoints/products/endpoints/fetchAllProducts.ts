import { Product } from '../types';

type FetchProductsResponse = {
    products: Product[];
};

export const fetchProducts = async () => {
    const response = await fetch(
        'http://localhost/pizza_shop/api.php?action=get_products'
    );

    const { products }: FetchProductsResponse = await response.json();

    return products;
};
