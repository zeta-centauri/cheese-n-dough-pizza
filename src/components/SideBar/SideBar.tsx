import { observer } from "mobx-react-lite";

import sidebarStore from "../../stores/sidebar-store";

import Link from "./Link/Link";

import { LinksData } from "./utils";
import { Wrapper, Header, CloseButton, LinkList, Logo } from "./SideBar.styled";
import { useNormalizeScroll } from "../../utils/utils";

import logoImage from "/assets/img/svg/logo-mini-light.svg";
import doorIcon from "/assets/img/svg/door.svg";
import { useNavigate } from "react-router";
// import loginStore from "../../stores/login-store";

const SideBar = observer(() => {
  // const { isOpen, close } = sidebarStore;
  // const { open } = loginStore;
  const navigate = useNavigate();
  useNormalizeScroll();

  // if (!isOpen) return null;

  const handleCloseButton = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <Header>
        <Logo>
          <img src={logoImage} alt="Logo" />
        </Logo>
        <CloseButton onClick={handleCloseButton} />
      </Header>
      <LinkList>
        <Link imageUrl={doorIcon} title="Войти" onClick={open} />
        {LinksData.map((link) => (
          <Link key={link.imageUrl} {...link} />
        ))}
      </LinkList>
    </Wrapper>
  );
});

export default SideBar;
