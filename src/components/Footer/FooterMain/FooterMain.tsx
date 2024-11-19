import styled from "styled-components";
import { colors } from "../../../styles/colors";

import VKLogo from "/assets/img/svg/vk.svg";
import OKLogo from "/assets/img/svg/ok.svg";
import YTLogo from "/assets/img/svg/youtube.svg";

const FooterMain = () => {
  return (
    <Wrapper>
      <LinkBlock>
        <Title>Сыр и тесто</Title>
        <Link href="#">О нас</Link>
        <Link href="#">Акции</Link>
        <Link href="#">Контакты</Link>
      </LinkBlock>
      <LinkBlock>
        <Title>Работа</Title>
        <Link href="#">Актуальные вакансии</Link>
      </LinkBlock>
      <LinkBlock>
        <Title>Партнерам</Title>
        <Link href="#">Франшиза</Link>
        <Link href="#">Инвестиции</Link>
        <Link href="#">Поставщикам</Link>
        <Link href="#">Предложить помещение</Link>
      </LinkBlock>
      <LinkBlock>
        <Link href="#">feedback@cheesendough.com</Link>
      </LinkBlock>
      <Social>
        <SocialLink href="#">
          <img src={VKLogo} alt="" />
        </SocialLink>
        <SocialLink href="#">
          <img src={OKLogo} alt="" />
        </SocialLink>
        <SocialLink href="#">
          <img src={YTLogo} alt="" />
        </SocialLink>
      </Social>
    </Wrapper>
  );
};

export default FooterMain;

const Wrapper = styled.div`
  display: flex;
  padding: 30px 0;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 0.3px solid #9f9f9f;

  @media (width <= 1080px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const LinkBlock = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const Title = styled.h2`
  text-wrap: nowrap;
  color: ${colors.fontWhite};
  font-weight: bold;
  font-size: 16px;
`;

const Link = styled.a`
  color: ${colors.fontGray};
  font-weight: bold;
  font-size: 16px;
  text-wrap: nowrap;
  &:hover {
    color: ${colors.primary};
  }
`;

const Social = styled(LinkBlock)`
  flex-direction: row;
`;
const SocialLink = styled.a`
  background-color: ${colors.bgGrayDarker};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(0.9);
  }
`;
