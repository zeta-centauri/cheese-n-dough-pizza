import { Outlet } from "react-router";
import CartButton from "../components/Buttons/CartButton/CartButton";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Categories from "../components/Nav/Categories";
import SearchBar from "../components/SearchBar/SearchBar";
import { GlobalStyle } from "../GlobalStyle";

const Home = () => {
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

export default Home;
