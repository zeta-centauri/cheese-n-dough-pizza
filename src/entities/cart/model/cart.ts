import { cartEndpoints } from 'shared/api';
import { makeAutoObservable, runInAction } from 'mobx';

class CartStore {
    products: cartEndpoints.CartItem[] = [];
    totalPrice: string = '0';
    totalQuantity: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    fetchProducts = async () => {
        try {
            const { cartItems, totalPrice, totalQuantity } =
                await cartEndpoints.fetchCartItems();
            runInAction(() => {
                this.totalQuantity = totalQuantity;
                this.products = cartItems;
                this.totalPrice = totalPrice;
            });
        } catch {
            console.log('Fetching products error...');
        }
    };

    fetchTotalPrice = async () => {
        try {
            const { totalPrice } = await cartEndpoints.fetchTotalPrice();
            runInAction(() => {
                this.totalPrice = totalPrice;
            });
        } catch {
            console.log('Fetching totalPrice error...');
        }
    };

    addProduct = ({
        productId,
        customIngredients,
        sizeId,
    }: cartEndpoints.AddProductBody) => {
        const result = cartEndpoints
            .addProduct({ productId, customIngredients, sizeId })
            .then(({ totalPrice, success, message }) => {
                this.setTotalPrice(totalPrice);
                return { totalPrice, success, message };
            });

        return result;
    };

    updateProduct = async ({
        cartItemId,
        quantity,
    }: cartEndpoints.UpdateProductPayload) => {
        const result = cartEndpoints
            .updateProduct({ cartItemId, quantity })
            .then(({ totalPrice, success, totalQuantity, message }) => {
                this.setTotalPrice(totalPrice);
                this.totalQuantity = Number(totalQuantity);

                console.log({ cartItemId, quantity });

                const updatedProduct = this.products.find(
                    (product) => product.cartItemId === cartItemId
                );

                console.log({ quantity, cartItemId });

                if (updatedProduct) {
                    if (quantity > 0) {
                        runInAction(() => {
                            updatedProduct.quantity = quantity;
                            updatedProduct.totalPrice = String(
                                quantity * Number(updatedProduct.currentPrice)
                            );
                        });
                    } else {
                        runInAction(() => {
                            this.products = this.products.filter(
                                (product) => product.cartItemId !== cartItemId
                            );
                        });
                    }
                }

                return { totalPrice, success, message };
            });

        return result;
    };

    resetCart = () => {
        this.products = [];
        this.totalPrice = '0';
        this.totalQuantity = 0;
    };

    setTotalPrice = (totalPrice: string) => {
        this.totalPrice = totalPrice;
    };
}

export const cartStore = new CartStore();
