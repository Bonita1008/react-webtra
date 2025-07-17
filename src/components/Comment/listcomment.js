import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const ListComment = () => {
    const listCM = [
        {
            name: 'Nguyễn Văn An',
            title: 'Chuyên gia ẩm thực',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            content:
                'Trà Thái Nguyên của cửa hàng có hương thơm đặc trưng và vị chất dịu mà tôi chưa từng tìm thấy ở nơi nào khác. Một sản phẩm thực sự xứng đáng với danh tiếng của trà Thái Nguyên.',
        },
        {
            name: 'Trần Thị Hương',
            title: 'Người yêu trà',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            content:
                'Tôi đã uống trà Thái Nguyên nhiều năm nay và phải công nhận rằng trà ở đây là một trong những loại ngon nhất mà tôi từng thưởng thức. Đặc biệt là hậu vị ngọt thanh kéo dài rất đặc trưng.',
        },
        {
            name: 'Lê Minh Quân',
            title: 'Doanh nhân',
            avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
            content:
                'Chất lượng tuyệt vời, dịch vụ chuyên nghiệp. Tôi thường xuyên chọn trà Thái Nguyên làm quà tặng đối tác và đều nhận được phản hồi tích cực.',
        },
        {
            name: 'Phạm Thảo Vy',
            title: 'Nhà văn',
            avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
            content:
                'Không chỉ ngon mà còn mang đậm giá trị văn hóa Việt. Mỗi lần uống trà là một lần thư giãn tâm hồn.',
        },
    ];

    return (
        <>
            <div className="bg-[#4c7763] text-white py-12 px-4">
                <div className="text-center max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-times font-bold mb-4">
                        Khách Hàng Nói Gì Về Chúng Tôi
                    </h2>
                    <div className="w-16 h-1 bg-orange-400 mx-auto my-6"></div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        Niềm tin của khách hàng là động lực lớn nhất giúp chúng tôi không
                        ngừng nỗ lực mang đến những sản phẩm trà chất lượng nhất.
                    </p>
                </div>
            </div>
            <div className="flex justify-center bg-[#4c7763] text-white pt-6 pb-16 px-4">
                <div className="w-full max-w-5xl">
                    <Splide
                        options={{
                            type: 'loop',
                            perPage: 2,
                            perMove: 1,
                            gap: '1px',
                            autoplay: true,
                            pauseOnHover: true,
                            arrows: true,
                            pagination: false,
                            breakpoints: {
                                1024: {
                                    perPage: 2,
                                },
                                768: {
                                    perPage: 1,
                                },
                            },
                        }}
                        aria-label="Testimonials"
                    >
                        {listCM.map((item, index) => (
                            <SplideSlide key={index}>
                                <div className="flex justify-center">
                                    <div className="bg-white text-gray-800 rounded-xl p-5 shadow-xl w-full max-w-md flex flex-col justify-start h-auto min-h-[280px]">
                                        <div className="flex items-center mb-4">
                                            <img
                                                src={item.avatar}
                                                alt={item.name}
                                                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mr-4 border-2 border-green-600"
                                            />
                                            <div>
                                                <h4 className="text-lg sm:text-xl font-semibold text-green-800">{item.name}</h4>
                                                <p className="text-xs sm:text-sm text-gray-500">{item.title}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex text-yellow-500 text-lg mb-3">★★★★★</div>
                                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </>
    );
};

export default ListComment;