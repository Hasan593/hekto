import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header'
import StickyNavbar from '../Shared/Header/StickyNavbar';
import PageHeading from '../PageHeading';
import Footer from '../Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <StickyNavbar />
            <Header />
            <PageHeading />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;