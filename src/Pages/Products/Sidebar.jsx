/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Sidebar = ({ products, handleCategory, setCat }) => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(null);
    // 'isMobile' নামের একটি স্টেট তৈরি করা হচ্ছে, যা পৃষ্ঠা লোডের সময় চেক করবে স্ক্রীনের প্রস্থ 768 পিক্সেলের কম কিনা।
    // অর্থাৎ, যদি স্ক্রীন সাইজ মোবাইলের মতো হয় (768 পিক্সেল থেকে কম), তাহলে 'isMobile' হবে true, নইলে false।
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // মোবাইল ভিউ চেক করা হচ্ছে

    // স্ক্রীনের সাইজ পরিবর্তন হলে সেটি ট্র্যাক করতে useEffect ব্যবহার করা হচ্ছে
    useEffect(() => {
        // স্ক্রীনের সাইজ পরিবর্তন হলে এটি আপডেট করবে 'isMobile' স্টেট
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // স্ক্রীনের আকারের উপর ভিত্তি করে 'isMobile' আপডেট করা হচ্ছে
        };

        // স্ক্রীনের সাইজ পরিবর্তনের সময় 'resize' ইভেন্ট লিসেনার যোগ করা হচ্ছে
        window.addEventListener("resize", handleResize);

        // যখন কম্পোনেন্টটি আনমাউন্ট হবে, তখন ইভেন্ট লিসেনারটি রিমুভ করা হবে
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // এফেক্টটি একবারই রান হবে (কম্পোনেন্ট মাউন্ট হওয়ার সময়)


    const categories = [
        // 'Set' একটি ডাটা স্ট্রাকচার যা শুধু ইউনিক (অদ্বিতীয়) মান রাখে।
        // 'new Set()' দিয়ে একটি নতুন 'Set' তৈরি করা হচ্ছে যা শুধু ইউনিক মান ধারণ করবে।
        ...new Set(
            products.length > 0 ? products.map((product) => product.category) : []
        ),
    ];


    const handleActiveCategory = () => {
        setToggle(!toggle)
    };

    const handleAllProduct = () => {
        setCat([]);
        setToggle(false);
        setActive(null);
    };

    // // Handle click for mobile view
    // const handleMobileClick = (category) => {
    //     setActive(category);
    //     handleCategory(category);
    //     setToggle(!toggle); // Toggle categories for mobile
    // };

    // // Handle click for desktop view
    // const handleDesktopClick = (category) => {
    //     setActive(category);
    //     handleCategory(category);
    // };

    const handleCategoryToggle = (category) => {
        setActive(category);
        handleCategory(category);
        isMobile && setToggle(!toggle)
    };

    return (
        <div className="sidebar bg-white shadow-lg rounded-lg p-4 mt-5 w-full md:w-1/4 sticky top-[64px] z-30">
            <h2
                className="text-2xl font-bold text-[#101750] flex items-center cursor-pointer mb-4 md:sticky md:top-[100px]"
                onClick={() => handleActiveCategory()}

            >
                Category
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
                className={`transition-all md:duration-500 duration-300 ease-in-out space-y-3 sticky top-[120px] 
                    ${toggle ? "max-h-[300px]" : "max-h-0"} 
                    overflow-hidden`}
            >
                {categories.map((category, index) => (
                    <li
                        key={index}
                        // onClick={isMobile ? () => handleMobileClick(category) : () => handleDesktopClick(category)}
                        onClick={() => handleCategoryToggle(category)}
                        className={`capitalize text-lg text-[#151875] hover:text-green-600 cursor-pointer transition-all duration-200
                            ${active === category ? "text-[26px] text-pink-600 font-medium hover:text-pink-600" : "text-[24px]"}`}
                    >
                        {category}
                    </li>
                ))}
                <li
                    className="capitalize text-lg text-[#151875] hover:text-green-600 cursor-pointer transition-all duration-200 text-[24px]"
                    onClick={handleAllProduct}
                >
                    All Product
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
