import CartButton from "./components/CartButton";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Categories />
      <Main />
      <CartButton isCategoriesButton={false} />
    </>
  );
}

export default App;
