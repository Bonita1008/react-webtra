import bg1 from '../../assets/images/trevietnam.jpg';
import bg2 from '../../assets/images/bg1.jpg';

const SectionIntro = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 md:flex md:items-center md:space-x-8 bg-[#ffffff]">
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[450px]">
                <img
                    src={bg1}
                    alt="Đường rừng"
                    className="w-full h-full object-cover rounded-lg shadow-xl absolute z-10 md:static md:w-auto md:h-auto"
                />
                <img
                    src={bg2}
                    alt="Flowers"
                    className="ring-4 ring-white ring-offset-0 drop-shadow-md absolute top-[calc(68%)] left-[calc(72%)] w-1/3 h-32 object-cover rounded-xl"
                />
            </div>
            <div className="md:w-1/2 p-4 md:p-8 mt-12 md:mt-0">
                <h2 className="text-3xl font-bold text-[#075e3b] mb-4 font-times leading-tight">
                    Hương Vị Trà Chính Gốc
                    <br />
                    Thái Nguyên
                </h2>
                <div className="w-16 h-1 bg-orange-400 mb-6"></div>
                <div className="max-w-prose">
                    <p className="text-gray-700 text-left mb-4">
                        Trà Thái Nguyên được trồng trên những vùng đất đỏ bazan màu mỡ
                        của tỉnh Thái Nguyên, nơi có địa hình đồi núi và khí hậu mát mẻ,
                        lý tưởng cho việc nuôi dưỡng những búp trà thượng hạng.
                    </p>
                    <p className="text-gray-700 text-left mb-4">
                        Với lịch sử trồng trà lâu đời trên 100 năm, nghề trà Thái Nguyên
                        đã trở thành một phần không thể thiếu trong văn hóa và đời sống
                        người Việt. Kỹ thuật chọn búp, hái trà và các bí quyết chế biến
                        truyền từ đời này sang đời khác, tạo nên hương vị đặc trưng
                        không thể trộn lẫn.
                    </p>
                    <p className="text-gray-700 text-left mb-6">
                        Trà Thái Nguyên của chúng tôi được chọn lọc kỹ lưỡng từ những
                        đồi chè đặc sản vùng Tân Cương, với tiêu chuẩn thu hái "một tôm
                        hai lá", đảm bảo chất lượng tốt nhất cho mọi sản phẩm.
                    </p>
                </div>
                <div className="flex flex-row gap-2 w-full mt-6 flex-wrap">
                    <span className="px-4 py-2 bg-[#ece3d2] text-[#735646] text-sm font-semibold rounded-full whitespace-nowrap">
                        100% Tự Nhiên
                    </span>
                    <span className="px-4 py-2 bg-[#ece3d2] text-[#735646] text-sm font-semibold rounded-full whitespace-nowrap">
                        Không Hóa Chất
                    </span>
                    <span className="px-4 py-2 bg-[#ece3d2] text-[#735646] text-sm font-semibold rounded-full whitespace-nowrap">
                        Hái Thủ Công
                    </span>
                    <span className="px-4 py-2 bg-[#ece3d2] text-[#735646] text-sm font-semibold rounded-full whitespace-nowrap">
                        Chế Biến Truyền Thống
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SectionIntro;
