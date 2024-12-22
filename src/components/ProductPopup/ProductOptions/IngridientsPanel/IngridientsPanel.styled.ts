import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow-y: auto;
  @media (width <= 1000px) {
    align-items: flex-start;

    /* overflow-x: scroll; */
  }
`;

export const IngridientsTable = styled.div`
  width: auto;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (width <= 1000px) {
    padding: 8px;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
`;
