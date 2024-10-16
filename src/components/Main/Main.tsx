import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../Container";
import CategoryBlock from "../CategoryBlock";

interface Category {
  categoryId: number;
  title: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  types: ProductType[];
}

interface ProductType {
  size: number;
  price: number;
  image: string;
  weight: number;
}

export default function Main() {
  const [data, setData] = useState<Category[]>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://67028b4ebd7c8c1ccd3f2a78.mockapi.io/categories");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <main>
      <MainContainer>
        {data && data.map((category: Category) => <CategoryBlock key={category.categoryId} {...category} />)}
      </MainContainer>
    </main>
  );
}

const MainContainer = styled(Container)`
  padding: 15px 0px;
`;
