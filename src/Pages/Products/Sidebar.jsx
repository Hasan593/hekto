/* eslint-disable react/prop-types */

import { useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const Sidebar = ({ products, handleCategory }) => {
    const [toggle, setToggle] = useState(false);
    const categories = [...new Set(products.length > 0 ? products.map(product => product.category) : [])];
    
    console.log("Categories:", categories);

    return (
        <div className="sidebar bg-white shadow-lg rounded-lg p-4 mt-5 w-full md:w-1/4 sticky top-[65px] z-30">
            <h2 
                className="text-2xl font-semibold text-[#101750] flex items-center cursor-pointer mb-4 md:sticky md:top-[65px]" 
                onClick={() => setToggle(!toggle)}
            >
                Category 
                {!toggle ? 
                    <IoMdArrowDropdownCircle className="ml-2 text-[#FB2E86]" /> : 
                    <IoMdArrowDropupCircle className="ml-2 text-[#FB2E86]" />
                }
            </h2>
            
            {toggle && 
                <ul className="space-y-3 sticky top-[100px]">
                    {categories.map((category, index) => (
                        <li 
                            key={index} 
                            onClick={() => handleCategory(category)} 
                            className="text-lg font-medium text-[#151875] hover:text-[#FB2E86] cursor-pointer transition-all duration-200"
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default Sidebar;
