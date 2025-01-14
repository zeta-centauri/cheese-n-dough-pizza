import Info from "./BuyInfo/BuyInfo";
import { Wrapper, BuyButton } from "./BuyBlock.styled";

const BuyBlock = () => {
  return (
    <Wrapper>
      <Info />
      <BuyButton>К оформлению заказа</BuyButton>
    </Wrapper>
  );
};

export default BuyBlock;
