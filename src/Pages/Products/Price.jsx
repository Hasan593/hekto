/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";


const Price = ({handlePrice}) => {

    const [active, setActive] = useState(null);
    const [toggle, setToggle] = useState(false);

    const handleActive = (index, low, high) => {
        setActive(index);
        handlePrice(low, high)
    }

    const handleActiveCategory = () => {
        setToggle(!toggle)
    };

    const priceRange = [
        { range: "1 - 100", low: 1, high: 100 },
        { range: "100 - 500", low: 100, high: 500 },
        { range: "500 - 1000", low: 500, high: 1000 },
        { range: "1000 - 10000", low: 1000, high: 10000 },
    ];

    return (
        <div className="bg-white shadow-lg rounded-lg px-2 w-full md:pb-4">
            <h2
                className="text-2xl font-bold text-[#101750] flex items-center cursor-pointer mb-4 md:sticky "
                onClick={handleActiveCategory}
            >
                Price
                {!toggle ? (
                    <IoMdArrowDropdownCircle
                        className="ml-2 text-[#FB2E86] transform transition-transform md:duration-500 duration-300 rotate-0"
                    />
                ) : (
                    <IoMdArrowDropdownCircle
                        className="ml-2 text-[#FB2E86] transform transition-transform md:duration-500 duration-300 rotate-180"
                    />
                )}
            </h2>

            <ul
                className={`transition-all md:duration-500 duration-300 ease-in-out space-y-3 sticky top-[140px]
                    ${toggle ? "max-h-[300px]" : "max-h-0"}  
                        overflow-hidden`}
            >
                {
                    priceRange.map((price, index) => (
                        <li 
                        key={index}
                        className={`border-b-2 border-b-pink-500 pb-1 capitalize text-[#151875] hover:text-green-600 cursor-pointer transition-all duration-200
                            ${active === index ? "text-[21px] text-pink-600 font-medium hover:text-pink-600" : "text-[20px]"}`}
                            onClick={()=>handleActive(index, price.low, price.high)}
                        >
                            {price.range}
                        </li>
                    ))
                }

                <li
                    className="border-b-pink-500 border-b-2 pb-1 capitalize text-[#151875] hover:text-green-600 cursor-pointer transition-all duration-200 text-[20px]"
                    onClick={()=>{
                        setToggle(!toggle);
                        setActive(null);
                        handlePrice(0, Infinity)
                    }}
                >
                    All Price
                </li>
            </ul>
        </div>
    );
};

export default Price;