import { observer } from "mobx-react-lite";
import { AvailableIngridient } from "../../../../../types";
import IngridientPickMark from "./IngridientPickMark";
import { useCallback } from "react";
import productStore from "../../../../../stores/product-store";
import { Price, Title, Wrapper, Image } from "./IngridientCard.styled";

interface IngridientCardProps {
  ingridient: AvailableIngridient;
  isPicked: boolean;
}

const IngridientCard = observer(
  ({ ingridient, isPicked }: IngridientCardProps) => {
    const { addIngridient, removeIngridient } = productStore;

    const { name, imgUrl, price } = ingridient;

    const handleIngridientClick = useCallback(() => {
      if (isPicked) {
        removeIngridient(ingridient);
      } else {
        addIngridient(ingridient);
      }
    }, [isPicked, addIngridient, ingridient, removeIngridient]);

    return (
      <Wrapper $isPicked={isPicked} onClick={handleIngridientClick}>
        <IngridientPickMark show={isPicked} />
        <Image src={imgUrl} alt="" />
        <Title>{name}</Title>
        <Price>{price}₽</Price>
      </Wrapper>
    );
  }
);

export default IngridientCard;
