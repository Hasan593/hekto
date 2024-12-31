import { createBrowserRouter } from 'react-router-dom';
import Products from '../Pages/Products/Products';
import MainLayout from '../Components/Layout/MainLayout';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
])

export default Route;