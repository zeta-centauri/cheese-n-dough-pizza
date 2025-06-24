import { useEffect, useRef } from 'react';
import { Category } from '../../../../../../shared/api/endpoints/products/types';
import {
    StyledCategoryBlock,
    CategoryTitle,
    Products,
} from './CategoryBlock.styled';
import { observer } from 'mobx-react-lite';
import productsStore from 'entities/products-store';
import { ProductCard } from '../../productCard/productCard/ProductCard';
import { CategoryLoader } from '../LoadingCategory';

type CategoryBlockProps = Category;

export const CategoryBlock = observer(
    ({ name, categoryId, itemsCount }: CategoryBlockProps) => {
        const observerRef = useRef<HTMLDivElement>(null);

        const productsByCategoryId = productsStore.productsByCategoryId;

        const fetchProductsByCategoryId =
            productsStore.fetchProductsByCategoryId;

        const products = productsByCategoryId[categoryId];

        const isShowLoader = !products;

        useEffect(() => {
            if (!observerRef.current) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !products) {
                        fetchProductsByCategoryId(categoryId);
                    }
                },
                { threshold: 0.5 } // Сработает, когда 50% элемента видно
            );
            observer.observe(observerRef.current);
            return () => observer.disconnect();
        }, [categoryId, fetchProductsByCategoryId, products]);

        return (
            <div ref={observerRef}>
                <StyledCategoryBlock id={name}>
                    <CategoryTitle>{name}</CategoryTitle>
                    {isShowLoader ? (
                        <CategoryLoader itemsCount={itemsCount} />
                    ) : (
                        <Products>
                            {products.map((product) => (
                                <ProductCard
                                    {...product}
                                    key={product.productId}
                                />
                            ))}
                        </Products>
                    )}
                </StyledCategoryBlock>
            </div>
        );
    }
);
