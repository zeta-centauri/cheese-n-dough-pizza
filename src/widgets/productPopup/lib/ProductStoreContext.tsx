import {
    createContext,
    FC,
    PropsWithChildren,
    useContext,
    useState,
} from 'react';
import { createProductStore, ProductStore } from '../model/store';

const ProductContext = createContext<ProductStore | null>(null);

export const ProductStoreProvider: FC<PropsWithChildren> = ({ children }) => {
    const [productStore] = useState(createProductStore());

    return (
        <ProductContext.Provider value={productStore}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductStore = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('Context Provider is missing');
    }
    return context;
};
