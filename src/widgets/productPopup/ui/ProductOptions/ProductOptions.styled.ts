import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  height: 100%;
  padding: 0px 27px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 27px;

  @media (width <= 1000px) {
    width: 100%;
  }
`;
