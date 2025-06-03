import styled from "styled-components";
import markImg from "/assets/img/svg/ingridient-mark.svg";

interface IngridientPickMarkProps {
  show: boolean;
}

const IngridientPickMark = ({ show }: IngridientPickMarkProps) => {
  if (!show) return null;
  return <Image src={markImg} />;
};

const Image = styled.img`
  position: absolute;
  height: 18px;
  width: 18px;
  top: 7px;
  right: 7px;
`;

export default IngridientPickMark;
