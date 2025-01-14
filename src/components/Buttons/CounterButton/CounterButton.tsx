import styled from "styled-components";
import { colors } from "../../../styles/colors";

interface CounterButtonProps {
  currentValue: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CounterButton = ({
  currentValue,
  onIncrement,
  onDecrement,
}: CounterButtonProps) => {
  return (
    <Wrapper>
      <Button onClick={onDecrement}>-</Button>
      <Counter>{currentValue}</Counter>
      <Button onClick={onIncrement}>+</Button>
    </Wrapper>
  );
};

export default CounterButton;

const Wrapper = styled.div`
  padding: 7px 8px;

  display: flex;
  gap: 20px;

  border-radius: 16px;
  background-color: ${colors.bgGray};
`;

const Button = styled.button``;

const Counter = styled.p``;
