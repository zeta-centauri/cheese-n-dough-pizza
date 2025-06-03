export type Product = {
    productId: number;
    categoryId: number;
    name: string;
    productDescription: string;
    price: string;
    imageUrl: string;
    categoryName: string;
    rating: number;
    availableIngredientsCount: number;
    sizesCount: number;
};

export type Category = {
    categoryId: number;
    name: string;
};
