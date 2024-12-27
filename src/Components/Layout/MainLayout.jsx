import Home from '../../Pages/Home/Home';
import Header from '../Shared/Header/Header';
import baner from '../../assets/Img/banner.png'
import StickyNavbar from '../Shared/Header/StickyNavbar';

const MainLayout = () => {
    return (
        <>
        <StickyNavbar />
            <Header />
            <img src={baner} alt="" className='mt-[115px]'/>
            <Home />
        </>
    );
};

export default MainLayout;