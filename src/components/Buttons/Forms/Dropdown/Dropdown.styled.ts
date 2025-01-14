import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const Wrapper = styled.div`
  position: relative;
  @media (width <= 595px) {
    width: 100%;
  }
`;

export const Label = styled.div`
  min-width: 190px;
  padding: 8px 16px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;

  @media (width <= 595px) {
    padding: 16px;
    border: 1px solid ${colors.bgGrayLight};
    border-radius: 16px;
  }
`;

export const ArrowIcon = styled.img<{ $isOpen: boolean }>`
  transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0")});

  transition: all 0.3s ease;
`;
export const List = styled.ul`
  width: 100%;

  position: absolute;
  z-index: 1000;
  bottom: 0px;
  left: 0;

  transform: translateY(100%);

  display: flex;
  flex-direction: column;
  align-items: stretch;

  border-radius: 8px;
  background-color: ${colors.bgLight};
  box-shadow: 0 4px 8px 0 rgba(114, 114, 114, 0.25);
`;
export const ListItem = styled.li`
  padding: 8px 16px;

  cursor: pointer;

  &:hover {
    background-color: ${colors.bgGrayLight};
  }
  @media (width <= 595px) {
    padding: 16px;
  }
`;
