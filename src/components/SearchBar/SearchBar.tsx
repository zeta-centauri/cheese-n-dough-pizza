import styled from "styled-components";
import Search from "./Search/Search";
import Sort from "./Sort/Sort";

interface SearchBarProps {
  isMobile: boolean;
}

const SearchBar = ({ isMobile }: SearchBarProps) => {
  return (
    <Wrapper $isMobile={isMobile}>
      <Search />
      <Sort />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isMobile: boolean }>`
  width: 100%;

  display: ${({ $isMobile }) => ($isMobile ? "none" : "flex")};
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  @media (width <= 1260px) {
    display: ${({ $isMobile }) => ($isMobile ? "flex" : "none")};
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
  }
  @media (width <= 595px) {
    flex-wrap: wrap;
    
  }
`;

export default SearchBar;
