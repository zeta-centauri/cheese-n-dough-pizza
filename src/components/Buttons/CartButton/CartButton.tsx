import { observer } from "mobx-react-lite";
import cartStore from "../../../stores/cart-store";
import { Button, ButtonCounter } from "./CartButton.styled";

interface CartButtonProps {
  isCategoriesButton: boolean;
}

const CartButton = observer(({ isCategoriesButton }: CartButtonProps) => {
  const { open, totalPrice } = cartStore;

  return (
    <Button onClick={open} $isCategoriesButton={isCategoriesButton}>
      <img src="assets/img/svg/cart.svg" alt="" />
      <div className="divider"></div>
      <ButtonCounter>{totalPrice} ₽</ButtonCounter>
    </Button>
  );
});

export default CartButton;
