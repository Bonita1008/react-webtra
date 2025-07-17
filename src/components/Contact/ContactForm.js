import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const SectionContact = ({ nameRef, phoneRef, addressRef, messageRef, handleResetForm }) => {
    return (
        <div className="bg-[#f2e9d8] py-12 px-4" id="contact">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="text-gray-700 md:pr-8">
                    <h2 className="font-serif text-amber-900 text-2xl md:text-3xl font-bold mb-4">
                        Liên Hệ Với Chúng Tôi
                    </h2>
                    <div className="w-16 h-1 bg-orange-400 mb-6"></div>
                    <p className="mb-6">
                        Để được tư vấn và đặt hàng nhanh chóng, quý khách vui lòng điền
                        thông tin bên dưới hoặc liên hệ trực tiếp qua các kênh sau:
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <FiPhone className="text-white text-lg bg-[#c79b5e] rounded-full p-2 w-8 h-8 flex-shrink-0" />
                            <div className="ml-4">
                                <strong className="block">Điện thoại</strong>
                                <a href="tel:0862670600" className="text-green-700 font-semibold">
                                    0862 670 600
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FiMail className="text-white text-lg bg-[#c79b5e] rounded-full p-2 w-8 h-8 flex-shrink-0" />
                            <div className="ml-4">
                                <strong className="block">Email</strong>
                                <a href="mailto:luongtu4530@gmail.com" className="text-green-700 font-semibold">
                                    luongtu4530@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FiMapPin className="text-white text-lg bg-[#c79b5e] rounded-full p-2 w-8 h-8 flex-shrink-0" />
                            <div className="ml-4">
                                <strong className="block">Địa chỉ</strong>
                                <a
                                    href="https://www.google.com/maps/search/123+%C4%90%C6%B0%E1%BB%9Dng+Tr%C3%A0+H%C6%B0%C6%A1ng,+T%C3%A2n+C%C6%B0%C6%A1ng,+Th%C3%A1i+Nguy%C3%AAn"
                                    className="text-green-700 font-semibold"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    123 Đường Trà Hương, Tân Cương, Thái Nguyên
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FiClock className="text-white text-lg bg-[#c79b5e] rounded-full p-2 w-8 h-8 flex-shrink-0" />
                            <div className="ml-4">
                                <strong className="block">Giờ làm việc</strong>
                                <p className="text-gray-700">
                                    Thứ Hai - Thứ Sáu: 8:00 - 17:30
                                    <br />
                                    Thứ Bảy: 8:00 - 12:00
                                    <br />
                                    Chủ Nhật: Đóng cửa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:mt-0">
                    <form
                        onSubmit={handleResetForm}
                        className="flex flex-col bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto"
                    >
                        <h2 className="text-green-900 text-3xl font-bold mb-4">
                            Gửi yêu cầu tư vấn
                        </h2>
                        <div className="mb-4">
                            <label htmlFor="name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Họ và Tên <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="name"
                                ref={nameRef}
                                type="text"
                                placeholder="Nguyễn Văn A"
                                aria-label="Họ và Tên"
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Số Điện Thoại <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="phone"
                                ref={phoneRef}
                                type="tel"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                placeholder="0862 670 600"
                                aria-label="Số Điện Thoại"
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Địa chỉ
                            </label>
                            <input
                                id="address"
                                ref={addressRef}
                                type="text"
                                placeholder="123 Đường ABC, phường xyz, TP Thái Nguyên"
                                aria-label="Địa chỉ"
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Lời Nhắn
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                ref={messageRef}
                                placeholder="Nhập nội dung yêu cầu tư vấn ..."
                                aria-label="Lời Nhắn"
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500 resize-y"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#c99f63] text-white font-bold py-3 px-4 rounded hover:bg-[#c38937] focus:outline-none focus:shadow-outline transition duration-300"
                        >
                            Gửi Yêu Cầu
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SectionContact;
