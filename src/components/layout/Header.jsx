import Logo from '../../assets/Logo.svg'
import { FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";


const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-2">
            <div className="container mx-auto flex justify-around items-center">
                <div className="logo">
                    <a href="/">
                        <img src={Logo} alt="Logo" className="h-16" />
                    </a>
                </div>
                <nav>
                    <ul className="flex space-x-5">
                        <li><a href="/laptops" className="hover:text-gray-300">Laptops</a></li>
                        <li><a href="/desktops" className="hover:text-gray-300">Desktop PCs</a></li>
                        <li><a href="/networking" className="hover:text-gray-300">Networking Devices</a></li>
                        <li><a href="/printersandscanners" className="hover:text-gray-300">Printers & Scanners</a></li>
                        <li><a href="/pcparts" className="hover:text-gray-300">PC Parts</a></li>
                        <li><a href="/allotherproducts" className="hover:text-gray-300">All other products</a></li>
                        <li><a href="/repairs" className="hover:text-gray-300">Repairs</a></li>
                        <li><a href="/deals" className="inline-block bg-white text-blue-600 font-bold py-[1.5px] px-4 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                            Our Deals
                        </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
    
    <div className=" hover:text-gray-300">
        <FaMagnifyingGlass className="h-6 w-6" />
    </div>

    <div className="relative hover:text-gray-300">
        <FaShoppingCart className="h-7 w-7" />
    </div>

    <div className="h-7 w-7 bg-white rounded-full flex items-center justify-center">
        <span className="text-gray-600 font-bold">A</span>
    </div>
</div>


            </div>
        </header>
    );
};

export default Header;
