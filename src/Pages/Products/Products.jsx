import { useContext, useState } from "react";
import { apiData } from "../../Context/ContextApi";
import Loading from "../../Components/Loading";
import { ToastContainer } from "react-toastify";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import Sidebar from "./Sidebar";
import Price from "./Price";

const Products = () => {
    const [cat, setCat] = useState([]);
    const products = useContext(apiData);

    const handleCategory = (item) => {
        setCat(products.length > 0 ? products.filter(product => product.category === item) : []);
    };

    // নির্ধারণ করুন কোন ডেটা প্রদর্শন করা হবে
    const displayProducts = cat.length > 0 ? cat : products;

    console.log("Display Products:", displayProducts);

    return (
        <div className="flex flex-col md:flex-row gap-8 px-4 lg:px-8 py-8">

            <div className="md:w-1/4 sticky top-[64px] md:top-[80px] z-30 h-[450px]">
                {/* Sidebar */}
                <div className="sticky">
                    <Sidebar setCat={setCat} products={products} handleCategory={handleCategory} />
                </div>

                {/* Price */}
                <div className="sticky">
                    <Price />
                </div>
            </div>

            {/* Products Grid */}
            <div className="w-full md:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center">
                    {displayProducts.length > 0 ? (
                        displayProducts.map(product => (
                            <div key={product.id} className="!w-[95%] mx-auto shadow-md group font-lato">
                                {/* Product Image */}
                                <div className="w-full bg-[#F6F7FB] h-[235px] py-8 flex justify-center relative overflow-hidden rounded-t-md">
                                    <img src={product.thumbnail} alt={product.title} className='group-hover:scale-125 duration-700 ease-in-out' />
                                    <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                        <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center">
                                            <FiShoppingCart />
                                        </div>
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
                                        <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center">
                                            <FaRegHeart />
                                        </div>
                                        <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center">
                                            <LuZoomIn />
                                        </div>
                                    </div>
                                    <p className='absolute bottom-3 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white opacity-0 group-hover:opacity-100'>
                                        View Details
                                    </p>
                                </div>
                                {/* Product Details */}
                                <div className="text-center py-[15px] bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                    <h3 className='b_title text-[#FB2E86] group-hover:text-white'>{product.title}</h3>
                                    <div className="flex justify-center gap-x-2 pb-3">
                                        <div className="clr bg-[#05E6B7]" />
                                        <div className="clr bg-[#F701A8]" />
                                        <div className="clr bg-[#00009D] group-hover:bg-white" />
                                    </div>
                                    <h4 className='text-[14px] font-normal text-[#151875] pb-[12px] group-hover:text-white'>
                                        Code - {product.sku}
                                    </h4>
                                    <h5 className='text-[14px] font-normal text-[#151875] group-hover:text-white'>
                                        ${product.price}
                                    </h5>
                                </div>
                            </div>
                        ))
                    ) :
                        (
                            <div className="w-full flex justify-center items-center col-span-3 md:mt-20">
                                <Loading />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
