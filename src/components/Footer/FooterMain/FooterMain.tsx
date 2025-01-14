import {
  Wrapper,
  LinkBlock,
  Title,
  Link,
  Social,
  SocialLink,
} from "./FooterMain.styled";
import { linksData, socialButtonsData } from "./utils";

const FooterMain = () => {
  return (
    <Wrapper>
      {linksData.map((linkBlock, index) => (
        <LinkBlock key={index}>
          {linkBlock.title && <Title>{linkBlock.title}</Title>}
          {linkBlock.links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.text}
            </Link>
          ))}
        </LinkBlock>
      ))}
      <SocialBlock />
    </Wrapper>
  );
};

const SocialBlock = () => {
  return (
    <Social>
      {socialButtonsData.map(({ href, imgSrc }, index) => (
        <SocialLink key={index} href={href}>
          <img src={imgSrc} alt="" />
        </SocialLink>
      ))}
    </Social>
  );
};

export default FooterMain;
