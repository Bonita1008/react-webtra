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
        <div className="flex flex-row justify-center gap-1 lg:gap-2 xl:gap-6">
            {benefits.map((item, idx) => (
                <CardBenefits key={idx} icon={item.icon} title={item.title} description={item.description} />
            ))}
        </div>
    );
};

export default BenefitsList;
