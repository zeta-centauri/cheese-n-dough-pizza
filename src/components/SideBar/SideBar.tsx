import { observer } from 'mobx-react-lite';

import Link from './Link/Link';

import { LinksData } from './utils';
import { Wrapper, Header, CloseButton, LinkList, Logo } from './SideBar.styled';

import logoImage from '/assets/img/svg/logo-mini-light.svg';
import doorIcon from '/assets/img/svg/door.svg';
import { useNavigate } from 'react-router';
import { useNormalizeScroll } from '../../shared/hooks';

const SideBar = observer(() => {
    const navigate = useNavigate();
    // useNormalizeScroll();

    const handleCloseButton = () => {
        navigate('/');
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
