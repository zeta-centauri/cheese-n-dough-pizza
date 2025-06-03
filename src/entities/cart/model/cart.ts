import { cartEndpoints } from '../../../shared/api';
import { makeAutoObservable, runInAction } from 'mobx';

class CartStore {
    products: cartEndpoints.CartItem[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    fetchProducts = async () => {
        try {
            const data = await cartEndpoints.fetchCartItems();
            runInAction(() => {
                this.products = data;
            });
        } catch {
            console.log('Fetching products error...');
        }
    };
}

export const cartStore = new CartStore();
