import styled from "styled-components";
import { Container } from "../Container";
import { colors } from "../../styles/colors";

import FooterMain from "./FooterMain/FooterMain";
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterMain />
        <FooterInfo />
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${colors.bgDark};
`;

export default Footer;
