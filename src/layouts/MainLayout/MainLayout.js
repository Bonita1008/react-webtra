import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import SectionFooter from '../../layouts/Footer/SectionFooter';

const MainLayout = ({ children, cartItems, statusTabCart, toggleStatusTab }) => {
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleOpenTabCart = () => {
        toggleStatusTab();
    };

    return (
        <>
            <header className="bg-white top-0 relative z-10 shadow-md">
                <div className="w-[1200px] max-w-full m-auto p-5 flex justify-between items-center">
                    <div className={`flex gap-4 items-center transform transition-transform duration-500 ${statusTabCart ? "-translate-x-20" : ""}`}>
                        <Link
                            to="/"
                            className="text-2xl font-bold text-gray-700 hover:text-amber-600 transition">
                            Trang chủ
                        </Link>
                        <Link
                            to="/product"
                            className="text-2xl font-bold text-gray-700 hover:text-amber-600 transition">
                            Sản phẩm
                        </Link>
                    </div>

                    <button
                        className={`w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative transform transition-transform duration-500 ${statusTabCart ? "-translate-x-56" : ""
                            }`}
                        onClick={handleOpenTabCart}
                    >
                        <TiShoppingCart className="w-6" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
                            {isNaN(totalQuantity) ? 0 : totalQuantity}
                        </span>
                    </button>
                </div>
            </header>


            <main className={`w-[1200px] max-w-full m-auto p-5 bg-[#ffffff] transform transition-transform duration-500 ${statusTabCart ? "-translate-x-56" : ""}`}>
                {children}
            </main>
            <SectionFooter />
        </>
    );
};

export default MainLayout;