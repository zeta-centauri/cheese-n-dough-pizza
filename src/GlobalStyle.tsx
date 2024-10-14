import { createGlobalStyle, css } from "styled-components";

const reset = css`
  * {
    padding: 0px;
    margin: 0px;
    border: none;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  a,
  a:link,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  aside,
  nav,
  footer,
  header,
  section,
  main {
    display: block;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: inherit;
    font-weight: inherit;
  }
  ul,
  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  address {
    font-style: normal;
  }

  /* Form */

  input,
  textarea,
  button,
  select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button,
  input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }
`;
const fonts = css`
  @font-face {
    font-family: "DodoRounded";
    src: url("assets/fonts/DodoRoundedBold/dodorounded_bold.eot");
    src: local("☺"), url("assets/fonts/DodoRoundedBold/dodorounded_bold.woff") format("woff"), url("assets/fonts/DodoRoundedBold/dodorounded_bold.ttf") format("truetype"),
      url("assets/fonts/DodoRoundedBold/dodorounded_bold.svg") format("svg");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "DodoRounded";
    src: url("assets/fonts/DodoRoundedRegular/dodorounded-regular.eot");
    src: url("assets/fonts/DodoRoundedRegular/dodorounded-regular.eot?#iefix") format("embedded-opentype"), url("assets/fonts/DodoRoundedRegular/dodorounded-regular.woff2") format("woff2"),
      url("assets/fonts/DodoRoundedRegular/dodorounded-regular.woff") format("woff"), url("assets/fonts/DodoRoundedRegular/dodorounded-regular.ttf") format("truetype"),
      url("assets/fonts/DodoRoundedRegular/dodorounded-regular.svg#dodorounded-regular") format("svg");
    font-weight: 400;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  *{
    font-family: DodoRounded;
  }
  
`;
