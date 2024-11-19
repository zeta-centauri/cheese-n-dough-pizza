import CartButton from "./components/Buttons/CartButton";
import CartAside from "./components/Cart/CartPopup";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { GlobalStyle } from "./GlobalStyle";
import ProductPopup from "./components/ProductPopup/ProductPopup";
import Categories from "./components/Categories";

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
