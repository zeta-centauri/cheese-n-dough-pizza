import { observer } from "mobx-react-lite";
import cartStore from "../../../stores/cart-store";
import { Button, ButtonCounter } from "./CartButton.styled";
import { useNavigate } from "react-router";

interface CartButtonProps {
  isCategoriesButton: boolean;
}

const CartButton = observer(({ isCategoriesButton }: CartButtonProps) => {
  const { totalPrice } = cartStore;
  const navigate = useNavigate();
  const handleCartButtonClick = () => {
    navigate("cart");
  };

  return (
    <Button
      onClick={handleCartButtonClick}
      $isCategoriesButton={isCategoriesButton}
    >
      <img src="assets/img/svg/cart.svg" alt="" />
      <div className="divider"></div>
      <ButtonCounter>{totalPrice} ₽</ButtonCounter>
    </Button>
  );
});

export default CartButton;
