/* eslint-disable react/prop-types */
import { useContext } from "react";
import { apiData } from "../../Context/ContextApi";
import Loading from "../../Components/Loading";
import Slider from "react-slick";
import { ToastContainer } from 'react-toastify';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featured = () => {
    const products = useContext(apiData);
    console.log(products);

    function SampleNextArrow({ className, style, onClick }) {
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red", borderRadius: '4px' }} // আগের মতোই কালার রাখা হয়েছে
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow({ className, style, onClick }) {
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green", borderRadius: '4px' }} // আগের মতোই কালার রাখা হয়েছে
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // বড় স্ক্রিনের জন্য আগের সেটিংস ঠিক রাখা হয়েছে
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // ট্যাবলেট বা ছোট স্ক্রিনের জন্য
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480, // মোবাইল স্ক্রিনের জন্য
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false // মোবাইল স্ক্রিনে ডটস সরিয়ে ফেলা
                }
            }
        ]
    };

    return (
        <section className='sec_pad'>
            <div className="w-full md:container mx-auto slider-container px-8"> {/* প্যাডিং সামঞ্জস্য করা হয়েছে */}
                <div className="text-center">
                    <h2 className='heading md:text-4xl text-2xl font-bold my-10'>Featured Products</h2> {/* আগের মতোই ফন্ট সাইজ রাখা হয়েছে */}
                </div>
                <Slider {...settings} className='text-center'>
                    {
                        products.length > 0 ? products.map((product) => (
                            <div key={product.id} className="!w-[95%] shadow-md group font-lato">
                                <div className="w-full bg-[#F6F7FB] h-[235px] py-8 flex justify-center relative overflow-hidden"> {/* আগের মতোই স্টাইল */}
                                    <img src={product.thumbnail} alt='latest_product' className='group-hover:scale-125 duration-700 ease-in-out' />
                                    <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                        <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center"><FiShoppingCart /></div>
                                        <ToastContainer
                                            position="top-right"
                                            autoClose={500}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                            theme="light"
                                        />
                                        <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center"><FaRegHeart /></div>
                                        <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center"><LuZoomIn /></div>
                                    </div>
                                    <p className='absolute bottom-3 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white opacity-0 group-hover:opacity-100'>View Details</p>
                                </div>
                                <div className="text-center py-[15px] bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                    <h3 className='b_title text-[#FB2E86] group-hover:text-white'>{product.title}</h3>
                                    <div className="flex justify-center gap-x-2 pb-3">
                                        <div className="clr bg-[#05E6b7] "></div>
                                        <div className="clr bg-[#F701A8] "></div>
                                        <div className="clr bg-[#00009D] group-hover:bg-white"></div>
                                    </div>
                                    <h4 className='text-[14px] font-normal text-[#151875] pb-[12px] group-hover:text-white '>Code - {product.sku}</h4>
                                    <h5 className='text-[14px] font-normal text-[#151875] group-hover:text-white'>${product.price}</h5>
                                </div>
                            </div>
                        )) : <Loading />
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Featured;
