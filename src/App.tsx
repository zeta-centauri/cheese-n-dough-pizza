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
      <CartButton />

      <div style={{ height: "200vh" }} className="testblock"></div>
    </>
  );
}

export default App;
