import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header'
import StickyNavbar from '../Shared/Header/StickyNavbar';
import PageHeading from '../PageHeading';

const MainLayout = () => {
    return (
        <>
            <StickyNavbar />
            <Header />
            <PageHeading />
            <Outlet />
        </>
    );
};

export default MainLayout;