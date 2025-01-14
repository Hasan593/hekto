import { createBrowserRouter } from 'react-router-dom';
import Products from '../Pages/Products/Products';
import MainLayout from '../Components/Layout/MainLayout';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact/Contact';
import Cart from '../Pages/Cart/Cart';
import WishList from '../Pages/WishList/WishList';
import AuthLayout from '../Components/Layout/AuthLayout';
import Sign_in from '../Pages/Auth/Sign_in';
import NotFound from '../Pages/NotFound/NotFound';
import Sign_up from '../Pages/Auth/Sign_up';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'wishList',
                element: <WishList />
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'sign_in',
                element: <Sign_in />
            },
            {
                path: 'sign',
                element: <Sign_up />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default Route;