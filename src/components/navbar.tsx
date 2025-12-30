import { appName } from "../appConfig";
export default function Navbar() {
    return (
        <nav className="bg-fk-blue sticky top-0 z-50 shadow-md">
            <div className="mx-auto px-4 h-16 flex items-center gap-4 md:gap-8">
                <div className="flex-shrink-0 cursor-pointer">
                    <div className="text-white font-bold italic text-xl tracking-tighter">{appName}</div>
                    <div className="text-xs italic text-gray-200 -mt-1 hover:underline">
                        Dive <span className="text-fk-yellow font-bold">Now</span> <i className="fa-solid fa-star text-[10px] text-fk-yellow"></i>
                    </div>
                </div>

                <div className="flex-grow relative hidden md:block max-w-xl">
                    <div className="relative w-full">
                        <input type="text" placeholder="Search for products" className="w-full py-2 pl-4 pr-10 rounded-sm text-sm shadow-sm text-gray-700 focus:outline-none"/>
                        <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 text-fk-blue font-bold">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
                <div className="md:hidden text-white ml-auto">
                    <i className="fa-solid fa-magnifying-glass text-lg"></i>
                </div>
                <div className="ml-auto flex items-center gap-6 md:gap-8 font-medium text-white text-[15px]">
                    <button className="bg-white text-fk-blue px-8 py-1 font-bold rounded-sm shadow-sm hidden md:block hover:bg-gray-100 transition">Login</button>
                    <a href="#" className="flex items-center gap-2 hover:text-gray-200">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="hidden md:block">Cart</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}