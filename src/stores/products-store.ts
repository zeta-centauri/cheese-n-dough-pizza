import { makeAutoObservable, runInAction } from "mobx";
import { Category, Product, SortProperty } from "../types";
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

  getProducts = (currentSortValue: SortProperty) => {
    return [...this.products].map((category) => {
      return {
        ...category,
        products: this.sortProducts(category.products, currentSortValue),
      };
    });
  };

  searchProducts = (
    currentSearchValue: string,
    currentSortValue: SortProperty
  ) => {
    let products: Product[] = [];
    this.products.forEach((category) => {
      products.push(...category.products);
    });

    products = this.sortProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(currentSearchValue.toLowerCase())
      ),
      currentSortValue
    );

    return {
      categoryId: 0,
      title: `Результаты по запросу "${currentSearchValue}"`,
      products,
    };
  };

  sortProducts = (products: Product[], currentSortValue: SortProperty) => {
    return products.slice().sort((a, b) => {
      if (currentSortValue === "name") {
        return a.name.localeCompare(b.name);
      }
      if (currentSortValue === "price") {
        return a.types[0].price - b.types[0].price;
      }
      if (currentSortValue === "rating") {
        if (a.rating && b.rating) {
          return b.rating - a.rating!;
        }
        return 0;
      }
      return 0;
    });
  };
}

export default new ProductsStore();
