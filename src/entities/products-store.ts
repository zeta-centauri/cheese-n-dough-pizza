import { makeAutoObservable, runInAction } from 'mobx';
import { Category, Product } from '../shared/api/endpoints/products/types';
import { fetchCategories } from '../shared/api/endpoints/products/endpoints/fetchCategories';
import { fetchProductsByCategoryId } from '../shared/api/endpoints/products/endpoints/fetchProductsByCategoryId';

// class ProductsStore {
//     products: Category[] = [];
//     isLoading = false;
//     error: string | null = null;
//     constructor() {
//         makeAutoObservable(this);
//     }

//     fetchProducts = async () => {
//         runInAction(() => {
//             this.error = null;
//             this.isLoading = true;
//         });
//         try {
//             const data = await fetchProducts();
//             runInAction(() => {
//                 this.products = data;
//             });
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         } finally {
//             runInAction(() => {
//                 this.isLoading = false;
//             });
//         }
//     };

//     getProduct = (id: Id) => {
//         for (const category of this.products) {
//             for (const product of category.products) {
//                 if (product.id == id) return product;
//             }
//         }
//     };

//     getProducts = (currentSortValue: SortProperty) => {
//         return [...this.products].map((category) => {
//             return {
//                 ...category,
//                 products: this.sortProducts(
//                     category.products,
//                     currentSortValue
//                 ),
//             };
//         });
//     };

//     searchProducts = (
//         currentSearchValue: string,
//         currentSortValue: SortProperty
//     ) => {
//         let products: Product[] = [];
//         this.products.forEach((category) => {
//             products.push(...category.products);
//         });

//         products = this.sortProducts(
//             products.filter((product) =>
//                 product.name
//                     .toLowerCase()
//                     .includes(currentSearchValue.toLowerCase())
//             ),
//             currentSortValue
//         );

//         return {
//             categoryId: 0,
//             title: `Результаты по запросу "${currentSearchValue}"`,
//             products,
//         };
//     };

//     sortProducts = (products: Product[], currentSortValue: SortProperty) => {
//         return products.slice().sort((a, b) => {
//             if (currentSortValue === 'name') {
//                 return a.name.localeCompare(b.name);
//             }
//             if (currentSortValue === 'price') {
//                 return a.types[0].price - b.types[0].price;
//             }
//             if (currentSortValue === 'rating') {
//                 if (a.rating && b.rating) {
//                     return b.rating - a.rating!;
//                 }
//                 return 0;
//             }
//             return 0;
//         });
//     };
// }

// export default new ProductsStore();

class ProductsStore {
    categories: Category[] = [];
    productsByCategoryId: Record<number, Product[] | undefined> = {};

    isLoading = false;
    error: string | null = null;
    constructor() {
        makeAutoObservable(this);
    }

    fetchCategories = async () => {
        runInAction(() => {
            this.error = null;
            this.isLoading = true;
        });
        try {
            const data = await fetchCategories();
            runInAction(() => {
                this.categories = data;
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    };

    fetchProductsByCategoryId = async (categoryId: number) => {
        runInAction(() => {
            this.error = null;
            this.isLoading = true;
        });

        try {
            const data = await fetchProductsByCategoryId(categoryId);

            runInAction(() => {
                this.productsByCategoryId[categoryId] = data;
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    };
}

export default new ProductsStore();
