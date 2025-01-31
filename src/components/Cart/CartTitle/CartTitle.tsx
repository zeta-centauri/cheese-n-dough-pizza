import { observer } from "mobx-react-lite";
import cartStore from "../../../stores/cart-store";
import { StyledCartTitle } from "./CartTitle.styled";
const CartTitle = observer(() => {
  const { totalCount, totalPrice } = cartStore;
  return (
    <StyledCartTitle>
      {totalCount} товар на {totalPrice} ₽
    </StyledCartTitle>
  );
});

export default CartTitle;
