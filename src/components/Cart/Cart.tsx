import { useEffect } from "react";
import { normalizeScroll } from "../../utils/utils";
import { observer } from "mobx-react-lite";

import cartStore from "../../stores/cart-store";
import { CartOveraly, CartDialog, CartTitle, CloseButton } from "./Cart.styled";

const CartAside = observer(() => {
  const { isOpen, close } = cartStore;

  useEffect(() => {
    normalizeScroll(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <CartOveraly onClick={close}>
      <CartDialog onClick={(e) => e.stopPropagation()}>
        <CartTitle>Корзина</CartTitle>
        <CloseButton onClick={close} />
      </CartDialog>
    </CartOveraly>
  );
});

export default CartAside;
