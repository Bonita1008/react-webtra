import { useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeaProductUI from '../components/ProductIntroduction/ProductIntroduction';
import ListComment from '../components/Comment/listcomment';
import BenefitsList from '../components/benefits/benefitList';
import SectionHero from '../layouts/TitleHeader/TitleSection';
import SectionIntro from '../components/Introduce/SectionIntro';
import SectionContact from '../components/Contact/ContactForm';
import SectionFooter from '../layouts/Footer/SectionFooter';
import ListProduct from '../components/comon/BTListProduct';
import Product from './Product';
import ProductDetail from './ProductDetail';
import CartTab from '../components/CartTabs/CartTabProduct';
import MainLayout from '../layouts/MainLayout/MainLayout';

function App() {
  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const messageRef = useRef();

  const [cartItems, setCartItems] = useState([]);
  const [statusTabCart, setStatusTabCart] = useState(false);

  const handleResetForm = (e) => {
    e.preventDefault();
    if (!nameRef.current.value || !phoneRef.current.value) {
      toast.error('Vui lòng nhập đầy đủ họ tên và số điện thoại');
      return;
    }
    console.log('Form Data:', {
      name: nameRef.current.value,
      phone: nameRef.current.value,
      address: addressRef.current.value,
      message: messageRef.current.value,
    });

    toast.success('Gửi thành công, chúng tôi sẽ liên hệ lại sớm!');
    nameRef.current.value = '';
    phoneRef.current.value = '';
    addressRef.current.value = '';
    messageRef.current.value = '';
  };

  const addToCart = ({ productID, quantity }) => {
    setCartItems(prevItems => {
      const index = prevItems.findIndex(item => item.productID === productID);
      if (index >= 0) {
        const newItems = [...prevItems];
        newItems[index].quantity += quantity;
        return newItems;
      } else {
        return [...prevItems, { productID, quantity }];
      }
    });
  };

  const changeQuantity = ({ productID, quantity }) => {
    setCartItems(prevItems => {
      const index = prevItems.findIndex(item => item.productID === productID);
      if (quantity > 0) {
        const newItems = [...prevItems];
        newItems[index].quantity = quantity;
        return newItems;
      } else {
        return prevItems.filter(item => item.productID !== productID);
      }
    });
  };

  const toggleStatusTab = () => {
    setStatusTabCart(prev => !prev);
  };

  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <CartTab
        cartItems={cartItems}
        setCartItems={setCartItems}
        statusTabCart={statusTabCart}
        toggleStatusTab={toggleStatusTab}
        changeQuantity={changeQuantity}

      />
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full overflow-x-hidden">
              <SectionHero />
              <SectionIntro />
              <BenefitsList />
              <TeaProductUI />
              <ListProduct statusTabCart={statusTabCart} />
              <ListComment />
              <SectionContact
                nameRef={nameRef}
                phoneRef={phoneRef}
                addressRef={addressRef}
                messageRef={messageRef}
                handleResetForm={handleResetForm}
              />
              <SectionFooter />
            </div>
          }
        />
        <Route
          path="/product"
          element={
            <MainLayout
              cartItems={cartItems}
              statusTabCart={statusTabCart}
              toggleStatusTab={toggleStatusTab}>
              <Product
                statusTabCart={statusTabCart}
                addToCart={addToCart} />
            </MainLayout>
          }
        />
        <Route
          path="/:slug"
          element={
            <MainLayout
              cartItems={cartItems}
              statusTabCart={statusTabCart}
              toggleStatusTab={toggleStatusTab}
            >
              <ProductDetail
                addToCart={addToCart}
                statusTabCart={statusTabCart} />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;