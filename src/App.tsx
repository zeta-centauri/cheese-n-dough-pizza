import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    // <GlobalStyle>
    //   <Header />
    //   <Products />
    //   <Footer />
    // </GlobalStyle>

    <>
      <GlobalStyle />
      <Header />
      <Categories />
    </>
  );
}

export default App;
