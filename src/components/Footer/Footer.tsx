import { Container } from "../../styles/Container";
import FooterMain from "./FooterMain/FooterMain";
import FooterInfo from "./FooterInfo/FooterInfo";
import { StyledFooter } from "./Footer.styled";

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

export default Footer;
