import React, { useState } from 'react';

const teaTabs = [
    {
        id: 'thuong-hang',
        label: 'Trà Thái Nguyên Thượng Hạng',
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                    alt="Trà Thái Nguyên Thượng Hạng"
                    className="rounded-xl shadow-xl w-11/12 h-72"
                />
                <p className="bg-[#d19f60] text-white text-center absolute w-auto h-auto p-1 left-[calc(43%)] mt-2 rounded-2xl">bán chạy</p>
                <div>
                    <h2 className="text-2xl font-serif font-bold text-green-900 mb-2">
                        Trà Thái Nguyên Thượng Hạng
                    </h2>
                    <p className="text-yellow-500 mb-2">★★★★★ (150+ đánh giá)</p>
                    <p className="text-gray-700 mb-4">
                        Hương thơm tinh tế, vị chất dịu. Được chọn lọc từ những búp trà non nhất, mang đến hương vị đậm đà, tinh tế và ngọt thanh đặc trưng.
                    </p>
                    <p><strong>Khối lượng:</strong> 500g</p>
                    <p><strong>Bao bì:</strong> Túi zip, hút chân không</p>
                    <p><strong>Xuất xứ:</strong> Thái Nguyên</p>
                    <p className="text-green-600 text-xl font-bold mt-4">450.000 đ <span className="line-through text-gray-400 ml-2">540.000 đ</span> <span className="text-red-500 ml-2">Giảm 20%</span></p>
                    <div className="mt-4 flex gap-2">
                        <button className="bg-[#d19f60] text-white px-4 py-2 rounded-lg">Đặt Hàng Ngay</button>
                        <a href="#contact" className="border border-green-600 text-green-700 px-4 py-2 rounded-lg">Liên Hệ Tư Vấn</a>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'truyen-thong',
        label: 'Trà Thái Nguyên Truyền Thống',
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <img
                    src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9"
                    alt="Trà Thái Nguyên Truyền Thống"
                    className="rounded-xl shadow-xl w-11/12 h-72"
                />
                <div>
                    <h2 className="text-2xl font-serif font-bold text-green-900 mb-2">
                        Trà Thái Nguyên Truyền Thống
                    </h2>
                    <p className="text-yellow-500 mb-2">★★★★★ (100+ đánh giá)</p>
                    <p className="text-gray-700 mb-4">
                        Vị chát nhẹ đầu lưỡi, hậu ngọt sâu – đặc trưng của trà truyền thống lâu đời. Sản phẩm phù hợp cho người yêu thích trà kiểu xưa.
                    </p>
                    <p><strong>Khối lượng:</strong> 500g</p>
                    <p><strong>Bao bì:</strong> Hộp giấy truyền thống</p>
                    <p><strong>Xuất xứ:</strong> Thái Nguyên</p>
                    <p className="text-green-600 text-xl font-bold mt-4">380.000 đ <span className="line-through text-gray-400 ml-2">450.000 đ</span> <span className="text-red-500 ml-2">Giảm 20%</span></p>
                    <div className="mt-4 flex gap-2">
                        <button className="bg-[#d19f60] text-white px-4 py-2 rounded-lg">Đặt Hàng Ngay</button>
                        <a href="#contact" className="border border-green-600 text-green-700 px-4 py-2 rounded-lg">Liên Hệ Tư Vấn</a>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'tra-sen',
        label: 'Trà Sen Thái Nguyên',
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <img
                    src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
                    alt="Trà Sen Thái Nguyên"
                    className="rounded-xl shadow-xl w-11/12 h-72"
                />
                <div>
                    <h2 className="text-2xl font-serif font-bold text-green-900 mb-2">
                        Trà Sen Thái Nguyên
                    </h2>
                    <p className="text-yellow-500 mb-2">★★★★★ (80+ đánh giá)</p>
                    <p className="text-gray-700 mb-4">
                        Sự kết hợp hài hòa giữa trà xanh Thái Nguyên và hương sen Tây Hồ truyền thống, mang lại cảm giác thư giãn và thanh tao.
                    </p>
                    <p><strong>Khối lượng:</strong> 500g</p>
                    <p><strong>Bao bì:</strong> Hộp thiếc cao cấp</p>
                    <p><strong>Xuất xứ:</strong> Thái Nguyên</p>
                    <p className="text-green-600 text-xl font-bold mt-4">410.000 đ <span className="line-through text-gray-400 ml-2">520.000 đ</span> <span className="text-red-500 ml-2">Giảm 20%</span></p>
                    <div className="mt-4 flex gap-2">
                        <button className="bg-[#d19f60] text-white px-4 py-2 rounded-lg">Đặt Hàng Ngay</button>
                        <a href="#contact" className="border border-green-600 text-green-700 px-4 py-2 rounded-lg">Liên Hệ Tư Vấn</a>
                    </div>
                </div>
            </div>
        )
    }
];

const TeaProductUI = () => {
    const [activeTab, setActiveTab] = useState('thuong-hang');

    return (
        <div className="max-w-7xl mx-auto pt-4 pb-10">
            <div className="flex justify-center mb-6">
                {teaTabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-lg font-medium border ${activeTab === tab.id ? 'bg-[#d19f60] text-white' : 'bg-yellow-100 text-yellow-700'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>{teaTabs.find((tab) => tab.id === activeTab).content}</div>
        </div>
    );
}
export default TeaProductUI;