import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header'
import StickyNavbar from '../Shared/Header/StickyNavbar';
import Footer from '../Shared/Footer/Footer';
import OfferModal from '../OfferModal';
import OfferCountdown from '../OfferCountdown';
// import Home from '../../Pages/Home/Home';

const MainLayout = () => {
    return (
        <>
            <StickyNavbar />
            <Header />
            <OfferModal />
            <OfferCountdown />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;