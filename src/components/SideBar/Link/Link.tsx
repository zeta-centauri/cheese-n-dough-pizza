import { LinkData } from "../utils";
import { LinkStyled, Image } from "./Link.styled";

const Link = ({ href, imageUrl, title, onClick }: LinkData) => {
  return (
    <li>
      <LinkStyled onClick={onClick} href={href}>
        <Image src={imageUrl} />
        {title}
      </LinkStyled>
    </li>
  );
};

export default Link;
