export type Product = {
    productId: number;
    categoryId: number;
    name: string;
    productDescription: string;
    price: number;
    imageUrl: string;
    categoryName: string;
    rating: number;
    availableIngredientsCount: number;
    sizesCount: number;
    sizes?: Size[];
    ingredients?: Ingredient[];
    availableIngredients?: Ingredient[];
};

export type Category = {
    categoryId: number;
    name: string;
    itemsCount: number;
};

export type Ingredient = {
    ingredientId: number;
    name: string;
    imgUrl: string;
    price: number;
};

export type Size = {
    sizeId: number;
    size: number;
    price: number;
    imageUrl: string;
};
