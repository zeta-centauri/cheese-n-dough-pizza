import styled from "styled-components";
import { Container } from "./Container";
import { colors } from "../styles/colors";

export default function Header() {
  return (
    <header>
      <MainHeaderContainer>
        <Logo href="#">
          <img src="assets/img/svg/logo.svg" alt="" className="logo" />
        </Logo>
        <Nav>
          <ul>
            <li>
              <img src="assets/img/svg/lightning-icon.svg" alt="" />
              <a href="">Контакты</a>
            </li>
            <li>
              <img src="assets/img/svg/gift-icon.svg" alt="" />
              <a href="">Акции</a>
            </li>
            <li>
              <img src="assets/img/svg/about-icon.svg" alt="" />
              <a href="#">О нас</a>
            </li>
          </ul>
        </Nav>
        <LoginButton>Войти</LoginButton>
        <Burger>
          <img src="assets/img/svg/burger.svg" alt="" />
        </Burger>
      </MainHeaderContainer>
    </header>
  );
}

const MainHeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 17px;
`;
const Logo = styled.a`
  margin-right: auto;
  img {
    width: 301px;
    height: auto;
  }
`;
const Nav = styled.nav`
  margin-right: 60px;
  @media (width < 880px) {
    display: none;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 28px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      img {
        width: 14px;
        height: 14px;
      }
      a {
        position: relative;
        text-decoration: none;
        color: black;
        &::after {
          position: absolute;
          content: "";
          bottom: -5px;
          right: 0;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          background-color: black;
          transition: all 0.2s ease;
        }
        &:hover::after {
          transform: scaleX(1);
        }
      }
    }
  }
`;
const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.secondary};
  border-radius: 9px;
  padding: 16px 35px;
  font-weight: 700;
  font-size: 16px;
  color: ${colors.primary};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${colors.primary};
    color: ${colors.fontWhite};
  }
  @media (width < 880px) {
    display: none;
  }
`;
const Burger = styled.button`
  display: none;
  @media (width < 880px) {
    display: block;
  }
`;
