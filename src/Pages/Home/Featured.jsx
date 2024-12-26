import { useContext } from "react";
import { apiData } from "../../Context/ContextApi";
import Loading from "../../Components/Loading";

const Featured = () => {
    const products = useContext(apiData);
    console.log(products);

    return (
        <section className="sec_pad py-16 bg-gray-100">
            <div className="mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-gray-800">Featured Products</h2>
                </div>
                <div
                    className={products.length > 0 ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8' : 'mt-10'}>
                    { 
                    products.length > 0 ?
                        products.map(product => (
                            <div
                                key={product.id}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                            >
                                <div className="relative">
                                    <img
                                        src={product.thumbnail}
                                        alt="latest_product"
                                        className="w-full h-[235px] object-cover transform transition-all duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div className="text-center py-6 bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                    <h3 className="text-xl font-medium text-[#FB2E86] group-hover:text-white">
                                        {product.title}
                                    </h3>
                                    <div className="flex justify-center gap-x-2 pb-3 mt-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#05E6B7]"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#F701A8]"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#00009D] group-hover:bg-white"></div>
                                    </div>
                                    <h4 className="text-sm font-normal text-[#151875] pb-2">
                                        Code - {product.sku}
                                    </h4>
                                    <h5 className="text-lg font-semibold text-[#151875]">${product.price}</h5>
                                </div>
                            </div>
                        )) : <div><Loading /></div>
                    }
                </div>
        </div>
        </section >
    );
};

export default Featured;
