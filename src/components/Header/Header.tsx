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
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("login");
  };

  const handleBurgerClick = () => {
    navigate("aside");
  };

  return (
    <header>
      <MainHeaderContainer>
        <Logo to="/">
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
        <Burger onClick={handleBurgerClick}>
          <img src={burgerImg} alt="" />
        </Burger>
      </MainHeaderContainer>
    </header>
  );
}
