/* eslint-disable react-refresh/only-export-components */
import { observer } from "mobx-react-lite";
import productStore from "../../../stores/product-store";
import { ProductType, PizzaSize } from "../../../types";
import { Wrapper, Inner, Slider, Option } from "./RadioButton.styled";

interface RadioButtonProps {
  types: ProductType[] | undefined;
}

export const pizzaSizes: Record<PizzaSize, string> = {
  25: "Маленькая",
  30: "Средняя",
  35: "Большая",
};

const RadioButton = observer(({ types }: RadioButtonProps) => {
  const { currentSize, setSize } = productStore;

  const handleOptionClick = (size: PizzaSize) => {
    setSize(size);
  };

  if (!types || types.length < 2) return null;
  return (
    <Wrapper>
      <Inner>
        {types.map((type, index) => (
          <Option
            key={index}
            onClick={() => {
              handleOptionClick(index);
            }}
          >
            {pizzaSizes[type.size]}
          </Option>
        ))}
        <Slider $typesCount={types.length} $currentSizeIndex={currentSize} />
      </Inner>
    </Wrapper>
  );
});

export default RadioButton;

