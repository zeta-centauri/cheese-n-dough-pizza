/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import { PizzaSize, ProductType } from "../../../../types";
import { colors } from "../../../../styles/colors";
import productStore from "../../../../stores/product-store";
import { observer } from "mobx-react-lite";

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

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 3px;
  border-radius: 30px;

  background-color: ${colors.bgGrayLight};
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

const Slider = styled.div<{ $currentSizeIndex: number; $typesCount: number }>`
  position: absolute;
  top: auto;
  bottom: auto;
  left: 0;

  width: ${({ $typesCount }) => `${100 / $typesCount}%`};
  transform: translateX(
    ${({ $currentSizeIndex }) => `${100 * $currentSizeIndex}%`}
  );
  background-color: ${colors.bgLight};
  height: 80%;
  background-color: ${colors.bgLight};
  border-radius: 30px;
  box-shadow: 0 0 26px -1px rgba(29, 29, 29, 0.25);

  transition: all 0.3s ease;
`;

const Option = styled.span`
  display: block;
  cursor: pointer;
  z-index: 2;
  height: 100%;
`;
