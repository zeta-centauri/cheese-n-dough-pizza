import { createGlobalStyle } from "styled-components";
import { reset } from "./styles/reset";
import "./styles/fonts.css";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    scroll-behavior: smooth;
  }
  *{
    font-family: "DodoRounded";
  }
  body{
    position: relative;
  }
`;
