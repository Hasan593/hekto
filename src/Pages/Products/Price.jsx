import { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";


const Price = () => {

    const [toggle, setToggle] = useState(false);

    const handleActiveCategory = () => {
        setToggle(!toggle)
    };

    return (
        <div className="bg-white shadow-lg rounded-lg px-2 w-full md:pb-4">
            <h2
                className="text-2xl font-bold text-[#101750] flex items-center cursor-pointer mb-4 md:sticky md:top-[100px]"
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

                <li
                    className={`border-b-2 border-b-pink-500 pb-1 capitalize text-[20px] text-[#151875] hover:text-green-600 cursor-pointer transition-all duration-200`}
                >
                    1 - 100
                </li>
                <li
                    className={`border-b-2 border-b-pink-500 pb-1 capitalize text-[20px] text-[#151875] hover:text-green-600 cursor-pointer transition-all duration-200`}
                >
                    100 - 500
                </li>
                <li
                    className={`border-b-2 border-b-pink-500 pb-1 capitalize text-[20px] text-[#151875] hover:text-green-600 cursor-pointer transition-all duration-200`}
                >
                    500 - 1000
                </li>
                <li
                    className={`border-b-2 border-b-pink-500 pb-1 capitalize text-[20px] text-[#151875] hover:text-green-600 cursor-pointer transition-all duration-200`}
                >
                    1000 - 10000
                </li>

                <li
                    className="border-b-pink-500 border-b-2 pb-1 capitalize text-[#151875] hover:text-green-600 cursor-pointer transition-all duration-200 text-[20px]"
                >
                    All Price
                </li>
            </ul>
        </div>
    );
};

export default Price;