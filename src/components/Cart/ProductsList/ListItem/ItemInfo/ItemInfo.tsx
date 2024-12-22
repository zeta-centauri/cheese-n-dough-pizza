import { CartProduct } from "../../../../../types";
import { getPizzaParams } from "../../../../ProductPopup/utils/utils";
import {
  ItemImg,
  ItemText,
  ItemTitle,
  ItemDescription,
  Wrapper,
} from "./ItemInfo.styled";

interface ItemInfoProps {
  product: CartProduct;
}

const ItemInfo = ({ product }: ItemInfoProps) => {
  return (
    <Wrapper>
      <ItemImg src={product.types[0].image} alt={product.name} />
      <ItemText>
        <ItemTitle>{product.name}</ItemTitle>
        <ItemDescription>{getPizzaParams(product)}</ItemDescription>
      </ItemText>
    </Wrapper>
  );
};
export default ItemInfo;
