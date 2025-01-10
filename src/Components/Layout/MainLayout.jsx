import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header'
import StickyNavbar from '../Shared/Header/StickyNavbar';
import PageHeading from '../PageHeading';
import Footer from '../Shared/Footer/Footer';
// import Home from '../../Pages/Home/Home';

const MainLayout = () => {
    return (
        <>
            <StickyNavbar />
            <Header />
            <PageHeading />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;