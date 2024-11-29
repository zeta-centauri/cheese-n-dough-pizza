import CartButton from "./components/Buttons/CartButton/CartButton";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProductPopup from "./components/ProductPopup/ProductPopup";
import Categories from "./components/Nav/Categories";
import CartAside from "./components/Cart/Cart";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Categories />
      <Main />
      <Footer />
      <CartButton isCategoriesButton={false} />
      <CartAside />
      <ProductPopup />
    </>
  );
}

export default App;
