import { Button } from "./AddProductButton.styled";

interface AddProductButtonProps {
  price: number;
  onclick: () => void;
}

const AddProductButton = ({ price, onclick }: AddProductButtonProps) => {
  return <Button onClick={onclick}>В корзину за {price}₽</Button>;
};

export default AddProductButton;
