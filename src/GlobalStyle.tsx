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
    overflow: auto;
    padding-right: 0px;
  }
  #root{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    
  }
`;
