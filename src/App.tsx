import { GlobalStyle } from "./GlobalStyle";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import ProductPopup from "./components/ProductPopup/ProductPopup";
import Cart from "./components/Cart/Cart";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "product",
        children: [
          {
            path: ":productId",
            element: <ProductPopup />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <LoginPopup />,
      },
      {
        path: "aside",
        element: <SideBar />,
      },
    ],
  },
]);

export default App;
