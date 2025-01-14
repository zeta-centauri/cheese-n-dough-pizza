import { observer } from "mobx-react-lite";
import styled from "styled-components";
import cartStore from "../../../stores/cart-store";
import ListItem from "./ListItem/ListItem";

const ProductsList = observer(() => {
  const { productsList } = cartStore;
  return (
    <List>
      {productsList.map(([id, product]) => (
        <ListItem key={id} product={product} />
      ))}
    </List>
  );
});

const List = styled.ul`
  height: 100%;
  width: 100%;

  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;

  list-style: none;
`;

export default ProductsList;
