import { Outlet } from 'react-router';
import CartButton from '../../../components/Buttons/CartButton/CartButton';
import Footer from '../../../components/Footer/Footer';
import Main from './main/Main';
import Categories from '../../../components/Nav/Categories';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { GlobalStyle } from '../../../GlobalStyle';
import { Header } from '../../../components/Header/Header';

export const Home = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Categories />
            <SearchBar isMobile={true} />
            <Main />
            <Footer />
            <CartButton isCategoriesButton={false} />
            <Outlet />
        </>
    );
};
