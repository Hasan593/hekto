import Featured from "./Featured";
import baner from '../../assets/Img/banner.png';

const Home = () => {
    return (
        <>
            <img src={baner} alt="" />
            <Featured />
        </>
    );
};

export default Home;