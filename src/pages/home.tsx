

export default function HomePage() {
    return (
        <>
            <TopCategoryMenu />
            <FirstTopBanner/>
            <FirstItemsList/>
        </>
    );
}

export function TopCategoryMenu() {
    return (
        <>
            <div className="bg-white shadow-sm border-b mb-3">
                <div className="max-w-[1248px] mx-auto p-3 flex justify-between overflow-x-auto gap-6 hide-scroll">
                    <div className="flex flex-col items-center min-w-[64px] cursor-pointer group">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                            className="h-16 w-16 object-contain mb-1 group-hover:scale-105 transition" alt="Grocery" />
                        <span className="text-sm font-semibold text-gray-700">
                            Grocery
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[64px] cursor-pointer group">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                            className="h-16 w-16 object-contain mb-1 group-hover:scale-105 transition" alt="Mobiles" />
                        <span className="text-sm font-semibold text-gray-700">
                            Mobiles
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[64px] cursor-pointer group">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
                            className="h-16 w-16 object-contain mb-1 group-hover:scale-105 transition" alt="Fashion" />
                        <span className="text-sm font-semibold text-gray-700">
                            Fashion
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[64px] cursor-pointer group">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                            className="h-16 w-16 object-contain mb-1 group-hover:scale-105 transition" alt="Electronics" />
                        <span className="text-sm font-semibold text-gray-700">
                            Electronics
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[64px] cursor-pointer group">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                            className="h-16 w-16 object-contain mb-1 group-hover:scale-105 transition" alt="Home" />
                        <span className="text-sm font-semibold text-gray-700">
                            Home
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[64px] cursor-pointer group">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100"
                            className="h-16 w-16 object-contain mb-1 group-hover:scale-105 transition" alt="Appliances" />
                        <span className="text-sm font-semibold text-gray-700">
                            Appliances
                        </span>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export function FirstTopBanner(){
    return(
        <>
            <div className=" mx-auto px-2 mb-4">
                <div className="relative w-full h-48 md:h-72 bg-gray-200 overflow-hidden shadow-sm cursor-pointer">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/66faf3950cda0b7a.png?q=60"
                        alt="Banner" className="w-full h-full object-cover hover:opacity-95 transition" />
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/74f0ad81e44e6e6f.jpg?q=60"
                        alt="Banner" className="w-full h-full object-cover hover:opacity-95 transition" />
                    <div className="absolute top-1/2 left-0 bg-white py-8 px-2 shadow-md transform -translate-y-1/2 rounded-r-sm cursor-pointer hover:bg-gray-100">
                        <i className="fa-solid fa-angle-left text-gray-600"></i>
                    </div>
                    <div className="absolute top-1/2 right-0 bg-white py-8 px-2 shadow-md transform -translate-y-1/2 rounded-l-sm cursor-pointer hover:bg-gray-100">
                        <i className="fa-solid fa-angle-right text-gray-600"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export function FirstItemsList() {
    return (
        <>
            <div className="mx-auto px-2 mb-8">
                <div className="bg-white shadow-sm p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">More Items to Explore</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="flex flex-col items-center p-3 hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200 rounded-sm">
                            <img src="/assets/img/product-image/smart-watch.webp" className="h-32 object-contain mb-2 hover:scale-105 transition" />
                            <div className="text-sm font-medium text-gray-900 truncate w-full text-center">Smart Watches</div>
                            <div className="text-green-600 text-sm font-bold mt-1">From ₹999</div>
                        </div>

                        <div className="flex flex-col items-center p-3 hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200 rounded-sm">
                            <img src="https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2421hn-24-vtbdl-dell-original-imagfjphuywuh2a7.jpeg?q=70" className="h-32 object-contain mb-2 hover:scale-105 transition" />
                            <div className="text-sm font-medium text-gray-900 truncate w-full text-center">Dell Monitors</div>
                            <div className="text-green-600 text-sm font-bold mt-1">From ₹7,999</div>
                        </div>

                        <div className="flex flex-col items-center p-3 hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200 rounded-sm">
                            <img src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70" className="h-32 object-contain mb-2 hover:scale-105 transition" />
                            <div className="text-sm font-medium text-gray-900 truncate w-full text-center">HP Printers</div>
                            <div className="text-green-600 text-sm font-bold mt-1">Min 20% Off</div>
                        </div>

                        <div className="flex flex-col items-center p-3 hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200 rounded-sm">
                            <img src="https://rukminim1.flixcart.com/image/200/200/k7285u80/projector/k/h/b/eb-e01-v11h971040-epson-original-imafpdz8zgyt8k6g.jpeg?q=70" className="h-32 object-contain mb-2 hover:scale-105 transition" />
                            <div className="text-sm font-medium text-gray-900 truncate w-full text-center">Projectors</div>
                            <div className="text-green-600 text-sm font-bold mt-1">From ₹9,999</div>
                        </div>

                        <div className="flex flex-col items-center p-3 hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200 rounded-sm">
                            <img src="https://rukminim1.flixcart.com/image/200/200/khf63680/hair-trimmer-groomer/g/r/k/hc-1015-groomiist-original-imafxff8zfh8ye7g.jpeg?q=70" className="h-32 object-contain mb-2 hover:scale-105 transition" />
                            <div className="text-sm font-medium text-gray-900 truncate w-full text-center">Trimmers</div>
                            <div className="text-green-600 text-sm font-bold mt-1">From ₹399</div>
                        </div>

                        <div className="flex flex-col items-center p-3 hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200 rounded-sm">
                            <img src="https://rukminim1.flixcart.com/image/200/200/kactpjk0/power-bank/j/f/6/power-bank-10000-plm13zm-mi-original-imafry2qdythbypk.jpeg?q=70" className="h-32 object-contain mb-2 hover:scale-105 transition" />
                            <div className="text-sm font-medium text-gray-900 truncate w-full text-center">Power Banks</div>
                            <div className="text-green-600 text-sm font-bold mt-1">From ₹499</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
