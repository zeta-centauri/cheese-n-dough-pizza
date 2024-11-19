import { makeAutoObservable, runInAction } from "mobx";
import { Category } from "../types";
import { fetchData } from "../utils/utils";

class ProductsStore {
  products: Category[] = [];
  isLoading = false;
  error: string | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    runInAction(() => {
      this.error = null;
      this.isLoading = true;
    });
    try {
      const data = await fetchData();
      runInAction(() => {
        this.products = data;
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export default new ProductsStore();
