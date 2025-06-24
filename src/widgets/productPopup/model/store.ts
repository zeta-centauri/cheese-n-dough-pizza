import { makeAutoObservable, runInAction } from 'mobx';
import { productsEndpoints } from 'shared/api';
import { PropertiesOnly } from 'shared/lib/types';

const initialProduct: productsEndpoints.Product = {
    productId: -1,
    categoryId: -1,
    name: '',
    productDescription: '',
    price: 0,
    imageUrl: '',
    categoryName: '',
    rating: 0,
    availableIngredientsCount: 0,
    sizesCount: 0,
};

export class ProductStore {
    currentProduct: productsEndpoints.Product = initialProduct;
    currentSize: productsEndpoints.Size | null = null;
    currentIngredients: number[] = [];
    currentPrice: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    fetchProduct = async (productId: string) => {
        try {
            const { product } = await productsEndpoints.fetchProductById(
                Number(productId)
            );

            runInAction(() => {
                this.setProduct(product);
            });
        } catch {
            console.log('fetch product error');
        }
    };

    setProduct = (product: productsEndpoints.Product) => {
        this.currentSize = product.sizes?.[0] || null;
        this.currentIngredients = [];
        this.currentProduct = product;
        this.currentPrice = product.price;
    };

    setSize = (size: productsEndpoints.Size) => {
        this.currentPrice = this.currentSize
            ? this.currentPrice - this.currentSize?.price + size.price
            : this.currentPrice - this.currentProduct!.price + size.price;

        this.currentSize = size;
    };

    addIngredient = (ingredient: productsEndpoints.Ingredient) => {
        this.currentPrice += ingredient.price;
        this.currentIngredients.push(ingredient.ingredientId);
    };

    removeIngredient = (ingredient: productsEndpoints.Ingredient) => {
        this.currentPrice -= ingredient.price;

        this.currentIngredients = this.currentIngredients.filter(
            (cur) => cur != ingredient.ingredientId
        );
    };
}

export const createProductStore = () => new ProductStore();
