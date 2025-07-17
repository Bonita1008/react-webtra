import CardBenefits from './benefitscard';

const BenefitsList = () => {
    const benefits = [
        {
            icon: '✨',
            title: 'Thuần Khiết Tự Nhiên',
            description:
                'Trà được trồng tự nhiên, không sử dụng phân bón hóa học và thuốc trừ sâu, đảm bảo an toàn cho sức khỏe người tiêu dùng.',
        },
        {
            icon: '⚡',
            title: 'Giàu Chất Chống Oxy Hóa',
            description:
                'Trà Thái Nguyên chứa hàm lượng cao polyphenol và catechin, giúp chống lại các gốc tự do, bảo vệ cơ thể khỏi lão hóa sớm.',
        },
        {
            icon: '🛡️',
            title: 'Hương Vị Đặc Trưng',
            description:
                'Với hương thơm tinh tế và vị chát dịu đặc trưng, trà Thái Nguyên mang đến trải nghiệm thưởng thức khó quên và khác biệt với các loại trà khác.',
        },
        {
            icon: '💡',
            title: 'Tăng Cường Tập Trung',
            description:
                'L-theanine trong trà kết hợp với caffeine giúp cải thiện khả năng tập trung và tinh thần minh mẫn mà không gây cảm giác lo lắng.',
        },
    ];

    return (
        <div className="bg-[#f2e9d8] py-12 px-4" id="benefits">
            <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
                <h2 className="font-serif text-amber-900 text-3xl md:text-4xl font-bold">
                    Tại sao chọn trà Thái Nguyên ?
                </h2>
                <div className="w-20 h-1 bg-orange-400 my-6"></div>
                <p className="mt-2 text-[#735646] max-w-2xl">
                    Trà Thái Nguyên không chỉ là thức uống, mà còn là nguồn dinh dưỡng
                    quý giá dành cho sức khỏe và tâm hồn.
                </p>
                <div className="mt-8">
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex flex-wrap justify-center gap-4 px-4">
                            {benefits.map((item, idx) => (
                                <CardBenefits key={idx} icon={item.icon} title={item.title} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BenefitsList;
