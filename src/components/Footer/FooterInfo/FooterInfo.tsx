import { Wrapper, Links, Link, Description } from "./FooterInfo.styled";
import { linksData } from "./utils";

const FooterInfo = () => {
  return (
    <Wrapper>
      <Links>
        {linksData.map((link) => (
          <Link href={link.href}>{link.text}</Link>
        ))}
      </Links>
      <Description>
        © 2024 ООО “Сыр и тесто”
        <br />
        Республика Татарстанг, г. Казань
      </Description>
    </Wrapper>
  );
};

export default FooterInfo;
