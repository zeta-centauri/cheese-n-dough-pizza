import { observer } from "mobx-react-lite";
import cartStore from "../../../../stores/cart-store";
import styled from "styled-components";

const Info = observer(() => {
  const { totalPrice } = cartStore;
  return (
    <Wrapper>
      <p>{totalPrice} ₽</p>
      <p>Сумма заказа</p>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 400;
  font-size: 14px;
`;

export default Info;
