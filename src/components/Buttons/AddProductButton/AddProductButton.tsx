import { Button } from "./AddProductButton.styled";

interface AddProductButtonProps {
  price: number;
}

const AddProductButton = ({ price }: AddProductButtonProps) => {
  return <Button>В корзину за {price}₽</Button>;
};

export default AddProductButton;
