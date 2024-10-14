import { createGlobalStyle } from "styled-components";
import { reset } from "./styles/reset";
import { fonts } from "./styles/fonts";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  *{
    font-family: DodoRounded;
  }
  
`;

