import { CartProduct } from "../../../../../types";
import CounterButton from "../../../../Buttons/CounterButton/CounterButton";
import cartStore from "../../../../../stores/cart-store";
import { observer } from "mobx-react-lite";
import { Wrapper, Price, Buttons, EditButton } from "./ItemButtons.styled";

interface ItemButtonsProps {
  product: CartProduct;
}

const ItemButtons = observer(({ product }: ItemButtonsProps) => {
  const { addProduct, removeProduct } = cartStore;

  const handleIncrementClick = () => {
    addProduct(product);
  };

  const handleDecrementClick = () => {
    removeProduct(product);
  };

  return (
    <Wrapper>
      <Price>{product.currentPrice} ₽</Price>
      <Buttons>
        <EditButton>Изменить</EditButton>
        <CounterButton
          onIncrement={handleIncrementClick}
          onDecrement={handleDecrementClick}
          currentValue={product.quantity}
        />
      </Buttons>
    </Wrapper>
  );
});

export default ItemButtons;
