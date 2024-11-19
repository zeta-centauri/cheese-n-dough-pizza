import { createGlobalStyle } from "styled-components";
import { reset } from "./styles/reset";
import "./styles/fonts.css";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    font-family: "DodoRounded";
  }
  body{
    position: relative;
  }
  
`;
