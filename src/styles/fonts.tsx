import { css } from "styled-components";

export const fonts = css`
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
