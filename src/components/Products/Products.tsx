import { useState, useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard";
import "./Products.scss";
interface ProductType {
  size?: number;
  price: number;
  imageUrl: string;
  weight?: number;
}
interface Product {
  id: number;
  name: string;
  description: string;
  categories: string[];
  types: ProductType[];
}

export default function Products() {
  const [data, setData] = useState<Product[]>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://67028b4ebd7c8c1ccd3f2a78.mockapi.io/products"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <main className="py-3">
        {data &&
          data.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              imageUrl={product.types[0].imageUrl}
              price={product.types[0].price}
            />
          ))}
      </main>
    </div>
  );
}
