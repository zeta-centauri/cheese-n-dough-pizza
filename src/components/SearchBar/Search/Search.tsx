import { observer } from "mobx-react-lite";
import searchStore from "../../../stores/search-store";
import styled from "styled-components";
import { colors } from "../../../styles/colors";
import searchImg from "/assets/img/svg/search.svg";

const Search = observer(() => {
  const { currentValue, updateSearchValue } = searchStore;

  const onChangeInput = (currentValue: string) => {
    updateSearchValue(currentValue);
  };

  return (
    <Wrapper>
      <Input
        type="text"
        value={currentValue}
        onChange={(e) => onChangeInput(e.target.value)}
        placeholder="Введите запрос"
      />
      <SearchImg src={searchImg} alt="search" />
    </Wrapper>
  );
});

export default Search;

const Wrapper = styled.div`
  width: 100%;
  min-width: 340px;
  max-width: 800px;
  padding: 8px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${colors.fontGray};

  @media (width <= 595px) {
    padding: 16px;
  }
`;

const Input = styled.input`
  width: 100%;

  font-weight: 400;
  font-size: 16px;
  color: ${colors.fontBlack};

  &::placeholder {
    color: ${colors.fontGray};
  }
`;

const SearchImg = styled.img`
  width: 17px;
  height: 17px;
`;
