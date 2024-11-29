import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-y: scroll;
  height: 100%;
  padding: 10px;
`;

export const IngridientsTable = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 6px;
  gap: 6px;
`;
