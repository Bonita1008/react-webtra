import { useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import TeaProductUI from '../components/listItem';
import ListComment from '../components/listcomment';
import BenefitsList from '../components/benefits/benefitList';
import SectionHero from '../components/TitleSection/titleSection';
import SectionIntro from '../components/SectionIntro/SectionIntro';
import SectionContact from '../components/SectionContact/SectionContact';
import SectionFooter from '../components/SectionFooter/SectionFooter';


function App() {
  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const messageRef = useRef();

  const handleResetForm = (e) => {
    e.preventDefault();
    if (!nameRef.current.value || !phoneRef.current.value) {
      toast.error('Vui lòng nhập đầy đủ họ tên và số điện thoại');
      return;
    }
    console.log('Form Data:', {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      message: messageRef.current.value,
    });

    toast.success('Gửi thành công, chúng tôi sẽ liên hệ lại sớm!');
    nameRef.current.value = '';
    phoneRef.current.value = '';
    addressRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      {/* 1 */}
      <div className="w-full overflow-x-hidden">
        <SectionHero />

        {/* 2 */}
        <SectionIntro />


        {/* 4 */}
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
                <BenefitsList />
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="flex flex-col items-center py-12 px-4 bg-[#ffffff]" id="products">
          <h2 className="text-3xl font-serif font-bold text-[#075e3b] mb-4 md:text-4xl">
            Sản Phẩm Tinh Hoa
          </h2>
          <div className="w-16 h-1 bg-orange-400 mb-6"></div>
          <p className="text-center text-gray-700 max-w-2xl">
            Khám phá các sản phẩm trà Thái Nguyên chất lượng cao, được chọn lọc
            và chế biến theo phương pháp truyền thống.
          </p>
        </div>
        <TeaProductUI />

        {/* 6 */}
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
        <ListComment />

        {/* 7 */}
        <SectionContact
          nameRef={nameRef}
          phoneRef={phoneRef}
          addressRef={addressRef}
          messageRef={messageRef}
          handleResetForm={handleResetForm}
        />

        {/* 8 */}
        <SectionFooter />
      </div >
    </>
  );
}

export default App;