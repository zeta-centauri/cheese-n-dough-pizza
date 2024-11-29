import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Container } from "../../styles/Container";

export const MainHeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 17px;
`;
export const Logo = styled.a`
  margin-right: auto;
  img {
    width: 301px;
    height: auto;
  }
`;
export const Nav = styled.nav`
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
export const LoginButton = styled.button`
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
export const Burger = styled.button`
  display: none;
  @media (width < 880px) {
    display: block;
  }
`;
