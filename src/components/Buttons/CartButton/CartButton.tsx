import cartStore from "../../../stores/cart-store";
import { Button } from "./CartButton.styled";

export default function CartButton({
  isCategoriesButton,
}: {
  isCategoriesButton: boolean;
}) {
  const { open } = cartStore;
  return (
    <Button onClick={open} $isCategoriesButton={isCategoriesButton}>
      <img src="assets/img/svg/cart.svg" alt="" />
      <div className="divider"></div>
      <p className="money">499 ₽</p>
    </Button>
  );
}
