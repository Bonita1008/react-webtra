import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const SectionFooter = () => {
    return (
        <footer className="bg-[#075e3b] text-white py-10 px-4" id="end">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                <div>
                    <h3 className="text-lg font-semibold mb-3">Trà Thái Nguyên</h3>
                    <p className="mb-4 leading-relaxed">
                        Chúng tôi tự hào mang đến cho quý khách những sản phẩm trà Thái
                        Nguyên chính gốc với chất lượng tuyệt hảo.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.facebook.com/luong.tu.537966/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className="hover:text-gray-300 transition duration-200 w-7 h-7" />
                        </a>
                        <a href="https://www.instagram.com/9622.lu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="hover:text-gray-300 transition duration-200 w-7 h-7" />
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <AiOutlineTwitter className="hover:text-gray-300 transition duration-200 w-7 h-7" />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Liên Kết Nhanh</h3>
                    <ul className="space-y-2">
                        <li><a href="#Home" className="hover:underline block">Trang chủ</a></li>
                        <li><a href="#about" className="hover:underline block">Giới thiệu</a></li>
                        <li><a href="#benefits" className="hover:underline block">Lợi ích</a></li>
                        <li><a href="#products" className="hover:underline block">Sản phẩm</a></li>
                        <li><a href="#contact" className="hover:underline block">Liên hệ</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Chính Sách</h3>
                    <ul className="space-y-2">
                        <li>Chính sách bảo mật</li>
                        <li>Điều khoản sử dụng</li>
                        <li>Chính sách thanh toán</li>
                        <li>Chính sách giao hàng</li>
                        <li>Chính sách đổi trả</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Thông Tin Liên Hệ</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <FiMapPin className="mr-2 mt-1 text-orange-400 flex-shrink-0" />
                            <a href="https://www.google.com/maps/search/123+%C4%90%C6%B0%E1%BB%9Dng+Tr%C3%A0+H%C6%B0%C6%A1ng,+T%C3%A2n+C%C6%B0%C6%A1ng,+Th%C3%A1i+Nguy%C3%AAn" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                123 Đường Trà Hương, Tân Cương, Thái Nguyên
                            </a>
                        </li>
                        <li className="flex items-center">
                            <FiPhone className="mr-2 text-orange-400 flex-shrink-0" />
                            <a href="tel:0862670600" className="hover:underline">0862 670 600</a>
                        </li>
                        <li className="flex items-center">
                            <FiMail className="mr-2 text-orange-400 flex-shrink-0" />
                            <span>info@trathainguyentruyen.com</span>
                        </li>
                        <li className="flex items-center">
                            <FiClock className="mr-2 text-orange-400 flex-shrink-0" />
                            <span>Thứ Hai - Thứ Bảy, 8:00 - 17:30</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm border-green-700 pt-6 mt-10 text-green-300">
                © 2025 Trà Thái Nguyên Chính Gốc. Tất cả các quyền được bảo lưu.
            </div>
        </footer>
    );
};

export default SectionFooter;
