import { useEffect } from "react";
import { normalizeScroll } from "../../utils/utils";
import { observer } from "mobx-react-lite";

import cartStore from "../../stores/cart-store";
import { CartOveraly, CartDialog, CartCloseButton } from "./Cart.styled";
import CartTitle from "./CartTitle/CartTitle";
import BuyBlock from "./BuyBlock/BuyBlock";
import ProductsList from "./ProductsList/ProductsList";
import CartHeader from "./CartHeader/CartHeader";

const CartAside = observer(() => {
  const { isOpen, close } = cartStore;

  useEffect(() => {
    normalizeScroll(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <CartOveraly onClick={close}>
      <CartDialog onClick={(e) => e.stopPropagation()}>
        <CartHeader />
        <CartTitle />
        <ProductsList />
        <BuyBlock />

        <CartCloseButton onClick={close} />
      </CartDialog>
    </CartOveraly>
  );
});

export default CartAside;
