import logoImg from "/assets/img/svg/logo.svg";
import burgerImg from "/assets/img/svg/burger.svg";
import {
  MainHeaderContainer,
  Logo,
  Nav,
  LoginButton,
  Burger,
} from "./Header.styled";
import { navLinks } from "./utils";

export default function Header() {
  return (
    <header>
      <MainHeaderContainer>
        <Logo href="#">
          <img src={logoImg} alt="" className="logo" />
        </Logo>
        <Nav>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <img src={link.iconSrc} alt={link.text} />
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </Nav>
        <LoginButton>Войти</LoginButton>
        <Burger>
          <img src={burgerImg} alt="" />
        </Burger>
      </MainHeaderContainer>
    </header>
  );
}
