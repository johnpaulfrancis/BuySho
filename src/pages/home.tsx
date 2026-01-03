import { useEffect, useState } from "react";


export default function HomePage() {
    return (
        <>
            <TopCategoryMenu />
            <FirstTopBanner />
            <FirstItemsList />
        </>
    );
}

export function TopCategoryMenu() {
    return (
        <>
            <div className="bg-white shadow-sm border-b mb-3">
                <div className="max-w-[1248px] mx-auto p-3 flex justify-between overflow-x-auto gap-6 hide-scroll">
                    <div className="flex flex-col items-center min-w-[64px] cursor-pointer group">
                        <img src="product-image/grocery.webp"
                            className="h-16 w-16 object-contain mb-1 group-hover:scale-105 transition" alt="Grocery" />
                        <span className="text-sm font-semibold text-gray-700">
                            Grocery
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[64px] cursor-pointer group">
                        <img src="product-image/mobile.webp"
                            className="h-16 w-16 object-contain mb-1 group-hover:scale-105 transition" alt="Mobiles" />
                        <span className="text-sm font-semibold text-gray-700">
                            Mobiles
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[64px] cursor-pointer group">
                        <img src="product-image/fashion.webp"
                            className="h-16 w-16 object-contain mb-1 group-hover:scale-105 transition" alt="Fashion" />
                        <span className="text-sm font-semibold text-gray-700">
                            Fashion
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[64px] cursor-pointer group">
                        <img src="product-image/electronics.webp"
                            className="h-16 w-16 object-contain mb-1 group-hover:scale-105 transition" alt="Electronics" />
                        <span className="text-sm font-semibold text-gray-700">
                            Electronics
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[64px] cursor-pointer group">
                        <img src="product-image/home.webp"
                            className="h-16 w-16 object-contain mb-1 group-hover:scale-105 transition" alt="Home" />
                        <span className="text-sm font-semibold text-gray-700">
                            Home
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[64px] cursor-pointer group">
                        <img src="product-image/appliances.webp"
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

export function FirstTopBanner() {
    const bannerImg = [{ src: "banner/banner1.webp", alt: "Main" }, { src: "banner/banner2.webp", alt: "Bed" }, { src: "banner/banner3.webp", alt: "Office Chair" }];
    const [currentImgIndex, setImgIndex] = useState(0);

    //Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((pre) =>
                pre === bannerImg.length - 1 ? 0 : pre + 1
            );
        }, 3000);
        return () => clearInterval(interval); //to remove the interval if user visits another page. This will prevent memory leackage
    }, []);

    //Function to go to previous image
    const goPrevious = () => {
        setImgIndex((pre) =>
            pre === 0 ? bannerImg.length - 1 : pre - 1
        );
    };

    //Function to go to next image
    const goNext = () => {
        setImgIndex((pre) =>
            pre === bannerImg.length - 1 ? 0 : pre + 1
        );
    };

    return (
        <>
            <div className=" mx-auto px-2 mb-4">
                <div className="relative w-full h-48 md:h-72 bg-gray-200 overflow-hidden shadow-sm cursor-pointer">
                    <img src={bannerImg[currentImgIndex].src} alt={bannerImg[currentImgIndex].alt} className="w-full h-full object-cover hover:opacity-95 transition" />

                    {/* indicator located in banner image */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {
                            bannerImg.map((_, index) => (
                                <span key={index} className={`h-2 w-2 rounded-full ${index === currentImgIndex ? "bg-white" : "bg-gray-400"}`} />
                            ))
                        }
                    </div>
                    <button onClick={goPrevious} className="absolute top-1/2 left-0 bg-white py-8 px-2 shadow-md transform -translate-y-1/2 rounded-r-sm cursor-pointer hover:bg-gray-100">
                        <i className="fa-solid fa-angle-left text-gray-600"></i>
                    </button>
                    <button onClick={goNext} className="absolute top-1/2 right-0 bg-white py-8 px-2 shadow-md transform -translate-y-1/2 rounded-l-sm cursor-pointer hover:bg-gray-100">
                        <i className="fa-solid fa-angle-right text-gray-600"></i>
                    </button>
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
                    <h2 className="text-xl font-bold text-gray-800 mb-5">Top Deals</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="flex flex-col items-center p-3 hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200 rounded-sm">
                            <img src="product-image/smart-watch.webp" className="h-32 object-contain mb-2 hover:scale-105 transition" />
                            <div className="text-sm font-medium text-gray-900 truncate w-full text-center">Smart Watches</div>
                            <div className="text-green-600 text-sm font-bold mt-1">From ₹999</div>
                        </div>

                        <div className="flex flex-col items-center p-3 hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200 rounded-sm">
                            <img src="product-image/monitor.webp" className="h-32 object-contain mb-2 hover:scale-105 transition" />
                            <div className="text-sm font-medium text-gray-900 truncate w-full text-center">Monitors</div>
                            <div className="text-green-600 text-sm font-bold mt-1">From ₹7,999</div>
                        </div>

                        <div className="flex flex-col items-center p-3 hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200 rounded-sm">
                            <img src="product-image/printer.webp" className="h-32 object-contain mb-2 hover:scale-105 transition" />
                            <div className="text-sm font-medium text-gray-900 truncate w-full text-center">Printers</div>
                            <div className="text-green-600 text-sm font-bold mt-1">Min 20% Off</div>
                        </div>

                        <div className="flex flex-col items-center p-3 hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200 rounded-sm">
                            <img src="product-image/projector.webp" className="h-32 object-contain mb-2 hover:scale-105 transition" />
                            <div className="text-sm font-medium text-gray-900 truncate w-full text-center">Projectors</div>
                            <div className="text-green-600 text-sm font-bold mt-1">From ₹9,999</div>
                        </div>

                        <div className="flex flex-col items-center p-3 hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200 rounded-sm">
                            <img src="product-image/trimmer.webp" className="h-32 object-contain mb-2 hover:scale-105 transition" />
                            <div className="text-sm font-medium text-gray-900 truncate w-full text-center">Trimmers</div>
                            <div className="text-green-600 text-sm font-bold mt-1">From ₹399</div>
                        </div>

                        <div className="flex flex-col items-center p-3 hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-200 rounded-sm">
                            <img src="product-image/power-bank.webp" className="h-32 object-contain mb-2 hover:scale-105 transition" />
                            <div className="text-sm font-medium text-gray-900 truncate w-full text-center">Power Banks</div>
                            <div className="text-green-600 text-sm font-bold mt-1">From ₹499</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
