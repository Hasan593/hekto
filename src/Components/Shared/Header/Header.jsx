import logo from '../../../assets/HL-full-Logo.png';
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { } from "react-icons/fi";
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { apiData } from '../../../Context/ContextApi';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState([]);
    const products = useContext(apiData);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // handleSearch ফাংশনটি একটি ইভেন্ট হ্যান্ডলার, যা ফর্ম সাবমিটের মাধ্যমে কাজ করে
    // const handleSearchSubmit = (e) => {
    //     e.preventDefault();
    //     const searchKey = e.target.elements.search.value.toLowerCase();
    //     const searchProducts = products.filter((product) =>
    //         product.title.toLowerCase().includes(searchKey)
    //     );
    //     console.log(searchProducts);
    // };

    /** Handle product Search  **/
    const handleSearchOnchange = e => {
        const searchKey = e.target.value.toLowerCase();
        const searchProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchKey)
        );
        setSearch(searchProducts)
        if (e.target.value === '') {
            setSearch([])
        };
    };

    return (
        <header className="bg-gray-500 text-white shadow-md sticky w-full z-40 top-0">
            <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
                        <div className="flex-shrink-0">
                            <Link to='/'>
                                <img className='h-[44px] w-[150px]' src={logo} alt="HL Dream Store" />
                            </Link>
                        </div>

                        {/* Search Bar */}
                        <form
                            // onSubmit={handleSearchSubmit}
                            className='relative'
                        >
                            <div
                                className="hidden sm:flex sm:items-center"
                            >
                                <input
                                    type="text"
                                    name='search'
                                    placeholder="Search..."
                                    className="z-20 px-3 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                    onChange={handleSearchOnchange}
                                />
                                <button
                                    type="submit"
                                    className="ml-2 px-3 py-2 bg-sky-900 text-white rounded-md hover:bg-sky-950"
                                >
                                    Search
                                </button>
                            </div>
                            <div className='bg-pink-400 rounded-md absolute md:right-0 right-full md:w-full top-10 max-h-[370px] md:max-h-[400px] overflow-auto'>
                                {
                                    search.map(product => (
                                        <div
                                            key={product.id}
                                            className='m-1 bg-pink-600 rounded-md'
                                        >
                                            <div className="flex items-center gap-2 group cursor-pointer">
                                                <div className="min-w-20 bg-green-800 overflow-hidden rounded-md">
                                                    <img
                                                        src={product.thumbnail}
                                                        alt="Product Img"
                                                        className="w-20 transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                                    />
                                                </div>
                                                <h1 className="text-gray-800 font-medium text-lg transition-colors duration-300 ease-in-out group-hover:text-green-200">
                                                    {product.title}
                                                </h1>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        </form>

                        {/* Navbar Links for Desktop */}
                        <div className="hidden sm:flex sm:items-center sm:space-x-4">
                            <NavLink to="/products"
                                className={({ isActive }) => isActive ? 'bg-pink-700 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}
                            >
                                Product
                            </NavLink>
                            <NavLink to="/about"
                                className={({ isActive }) => isActive ? 'bg-pink-700 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}
                            >
                                About
                            </NavLink>
                            <NavLink to="/contact"
                                className={({ isActive }) => isActive ? 'bg-pink-700 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}
                            >
                                Contact
                            </NavLink>
                            <NavLink to="/cart"
                                className={({ isActive }) => isActive ? 'bg-pink-700 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}
                            >
                                <FiShoppingCart className='h-[28px] w-[40px]' />
                            </NavLink>
                            <NavLink to="/wishList"
                                className={({ isActive }) => isActive ? 'bg-pink-700 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}
                            >
                                {/* <FaRegHeart className='text-pink-700 h-[40px] w-[40px]' /> */}
                                <FaHeart className='h-[28px] w-[40px]' />
                            </NavLink>
                            <NavLink to="/auth/sign_in"
                                className={({ isActive }) => isActive ? 'bg-pink-700 px-3 py-2 rounded-md font-medium text-lg' : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}
                            >
                                Sign-In
                            </NavLink>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none relative flex items-center justify-center h-10 w-10">
                            {
                                menuOpen ? (
                                    <RxCross2 className="h-8 w-8" />
                                ) : (
                                    <FiMenu className="h-8 w-8" />
                                )
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Hidden by default */}
                <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                    <div
                        className="flex flex-col space-y-4 items-center p-4 bg-gray-500"
                        onClick={toggleMenu}
                    >
                        <NavLink to="/products"
                            className={({ isActive }) => isActive ? 'bg-pink-700 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}
                        >
                            Product
                        </NavLink>
                        <NavLink to="/about"
                            className={({ isActive }) => isActive ? 'bg-pink-700 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}>
                            About
                        </NavLink>
                        <NavLink to="/contact"
                            className={({ isActive }) => isActive ? 'bg-pink-700 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}>
                            Contact
                        </NavLink>
                        <NavLink to="/cart"
                            className={({ isActive }) => isActive ? 'bg-pink-700 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}>
                            <FiShoppingCart className='h-[32px] w-[32px] mx-auto' />
                        </NavLink>
                        <NavLink to="/wishList"
                            className={({ isActive }) => isActive ? 'bg-pink-700 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}>
                            {/* <FaRegHeart className='text-pink-700 h-[40px] w-[40px]' /> */}
                            <FaHeart className='h-[32px] w-[32px] mx-auto' />
                        </NavLink>
                        <NavLink to="/auth/sign_in"
                            className={({ isActive }) => isActive ? 'bg-pink-700 text-center w-full py-2 rounded-md font-medium text-lg' : "text-white text-center w-full py-2 rounded-md text-lg font-medium hover:bg-pink-500 hover:text-white"}>
                            Sign-In
                        </NavLink>

                        {/* Mobile Search Bar */}
                        <form className="w-full mt-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-3 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                onChange={handleSearchOnchange}
                            />
                            <button type="submit" className="w-full mt-2 px-3 py-2 bg-sky-900 text-white rounded-md hover:bg-sky-950">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
