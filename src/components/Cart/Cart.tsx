import { useNormalizeScroll } from "../../utils/utils";
import { observer } from "mobx-react-lite";

import cartStore from "../../stores/cart-store";
import { CartOveraly, CartDialog, CartCloseButton } from "./Cart.styled";
import CartTitle from "./CartTitle/CartTitle";
import BuyBlock from "./BuyBlock/BuyBlock";
import ProductsList from "./ProductsList/ProductsList";
import CartHeader from "./CartHeader/CartHeader";
import { useNavigate } from "react-router";

const Cart = observer(() => {
  const navigate = useNavigate();
  useNormalizeScroll();

  const handleOverlayClick = () => {
    navigate("/");
  };

  return (
    <CartOveraly onClick={handleOverlayClick}>
      <CartDialog onClick={(e) => e.stopPropagation()}>
        <CartHeader />
        <CartTitle />
        <ProductsList />
        <BuyBlock />

        <CartCloseButton onClick={handleOverlayClick} />
      </CartDialog>
    </CartOveraly>
  );
});

export default Cart;
