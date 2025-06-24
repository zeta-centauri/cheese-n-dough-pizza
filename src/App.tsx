import { GlobalStyle } from './GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Home } from './pages/Home/ui/Home';
import SideBar from './components/SideBar/SideBar';
import { Authorization } from './widgets/authorization/authorization/Authorization';
import { CartPanel } from 'widgets/cartPanel';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
            <Toaster />
        </>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'cart',
                element: <CartPanel isOpen={true} onClose={() => {}} />,
            },
            {
                path: 'login',
                element: <Authorization />,
            },
            {
                path: 'aside',
                element: <SideBar />,
            },
            {
                path: 'product/:productId',
            },
        ],
    },
]);

export default App;
