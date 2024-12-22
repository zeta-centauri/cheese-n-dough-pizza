import CartButton from "./components/Buttons/CartButton/CartButton";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProductPopup from "./components/ProductPopup/ProductPopup";
import Categories from "./components/Nav/Categories";
import CartAside from "./components/Cart/Cart";
import { GlobalStyle } from "./GlobalStyle";
import SideBar from "./components/SideBar/SideBar";
import LoginPopup from "./components/LoginPopup/LoginPopup";

import "bootstrap";
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Categories />
      <SearchBar isMobile={true} />
      <Main />
      <Footer />
      <CartButton isCategoriesButton={false} />
      <CartAside />
      <ProductPopup />
      <SideBar />
      <LoginPopup />
    </>
  );
}

export default App;
