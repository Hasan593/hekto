import { CiMail } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const StickyNavbar = () => {
    return (
        <section className="bg-[#7E33E0] text-white fixed w-full top-0 z-50">
            <div className="mx-auto px-4">
                {/* Desktop and Tablet View */}
                <div className="hidden md:flex justify-between py-[15px] items-center">
                    {/* Left Side */}
                    <div className="flex gap-x-10">
                        <div className="flex gap-x-2 items-center text-[16px] font-jsans">
                            <CiMail />
                            <h3>mdhasanuddin593@gmail.com</h3>
                        </div>
                        <div className="flex gap-x-2 items-center text-[16px] font-jsans">
                            <MdOutlineWifiCalling3 />
                            <h3>+880 1946495764</h3>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-x-6">
                        <ul className="flex gap-x-6">
                            <li>
                                <select name="" id="" className="bg-[#7E33E0] outline-none">
                                    <option value="">English</option>
                                    <option value="">Bengali</option>
                                </select>
                            </li>
                            <li>
                                <select name="" id="" className="bg-[#7E33E0] outline-none">
                                    <option value="">USD</option>
                                    <option value="">BDT</option>
                                </select>
                            </li>
                        </ul>
                        <ul className="flex gap-x-4">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <FaFacebookF className="text-[20px] hover:text-[#FFD700]" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                    <FaTwitter className="text-[20px] hover:text-[#FFD700]" />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                    <FaInstagram className="text-[20px] hover:text-[#FFD700]" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="flex md:hidden justify-between py-[10px] items-center">
                    {/* Hamburger Menu */}

                    {/* Logo */}
                    <h3 className="text-[18px] font-bold">My Brand</h3>

                    {/* Dropdown Options */}
                    <div className="flex items-center gap-x-4">
                        <select name="" id="" className="bg-[#7E33E0] outline-none text-sm">
                            <option value="">USD</option>
                            <option value="">BDT</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <select name="" id="" className="bg-[#7E33E0] outline-none">
                            <option value="">English</option>
                            <option value="">Bengali</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StickyNavbar;
