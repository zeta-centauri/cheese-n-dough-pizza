import { Category } from '../types';

type FetchCategoriesResponse = {
    categories: Category[];
};

export const fetchCategories = async () => {
    const response = await fetch(
        'http://localhost/pizza_shop/api.php?action=get_categories'
    );

    const { categories }: FetchCategoriesResponse = await response.json();

    return categories;
};
