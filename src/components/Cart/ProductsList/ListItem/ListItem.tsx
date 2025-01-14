import { CartProduct } from "../../../../types";
import ItemInfo from "./ItemInfo/ItemInfo";
import ItemButtons from "./ItemButtons/ItemButtons";
import { Wrapper } from "./ListItem.styled";

interface ListItemProps {
  product: CartProduct;
}

const ListItem = ({ product }: ListItemProps) => {
  return (
    <Wrapper>
      <ItemInfo product={product} />
      <ItemButtons product={product} />
    </Wrapper>
  );
};

export default ListItem;
