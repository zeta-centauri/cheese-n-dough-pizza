import styled from "styled-components";
import { colors } from "../../../styles/colors";

const FooterInfo = () => {
  return (
    <Wrapper>
      <Links>
        <Link href="#">СЫР И ТЕСТО © 2024</Link>
        <Link href="#">Правовая информация</Link>
        <Link href="#">Калорийность и состав</Link>
        <Link href="#">Помощь</Link>
      </Links>
      <Description>
        © 2024 ООО “Сыр и тесто”
        <br />
        Республика Татарстанг, г. Казань
      </Description>
    </Wrapper>
  );
};

export default FooterInfo;

const Wrapper = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (width <= 1080px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;
const Links = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;

  @media (width <= 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Link = styled.a`
  color: ${colors.fontGray};
  font-weight: bold;
  font-size: 16px;
  &:hover {
    color: ${colors.primary};
  }
`;

const Description = styled.p`
  color: ${colors.fontBlue};
  font-size: 12px;
  text-wrap: nowrap;
`;
