import { GoArrowDown } from 'react-icons/go';
import bg1 from '../../assets/images/trevietnam.jpg';

const SectionHero = () => {
    return (
        <div
            className="bg-fixed bg-cover bg-center bg-no-repeat pt-32 px-4 md:pt-32 md:pb-9"
            id="Home"
            style={{ backgroundImage: `url(${bg1})` }}
        >
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <h1 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Tinh hoa trà Thái Nguyên
                    <br />
                    <span className="text-orange-100">thượng hạng</span>
                </h1>
                <p className="text-orange-100 mt-2 text-sm md:text-base max-w-2xl">
                    Được lựa chọn từ những búp trà tươi ngon nhất vùng Tân Cương, với
                    bề dày kinh nghiệm trên 10 năm trồng và chế biến trà.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <a
                        href="#products"
                        className="px-6 py-3 bg-[#c7a065] text-black font-bold rounded hover:bg-[#d28956] transition duration-300"
                    >
                        Khám Phá Sản Phẩm
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-white text-white font-bold rounded hover:bg-white hover:text-[#c7a065] transition duration-300"
                    >
                        Liên Hệ Tư Vấn
                    </a>
                </div>
                <button className="px-5 py-2 mt-8 bg-[#e6e7e2] text-green-700 font-bold rounded shadow-md transform transition duration-300 hover:-translate-y-1">
                    🎊 Ưu Đãi Đặc Biệt: Giảm 15% cho đơn hàng đầu tiên
                </button>
            </div>
            <div className="flex flex-col items-center mt-20">
                <a href="#end">
                    <GoArrowDown className="text-white w-10 h-10 animate-bounce-slow transform transition duration-300 hover:-translate-y-1" />
                </a>
            </div>
        </div>
    );
};

export default SectionHero;