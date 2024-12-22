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
import sidebarStore from "../../stores/sidebar-store";
import loginStore from "../../stores/login-store";

export default function Header() {
  const openSidebar = sidebarStore.open;
  const openLogin = loginStore.open;

  const handleLoginClick = () => {
    openLogin();
  };

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
        <LoginButton onClick={handleLoginClick}>Войти</LoginButton>
        <Burger onClick={openSidebar}>
          <img src={burgerImg} alt="" />
        </Burger>
      </MainHeaderContainer>
    </header>
  );
}
