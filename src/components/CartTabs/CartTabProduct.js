import { useState } from "react";
import CartItem from "./CartItem";
import { Products } from "../Product/ProductList";

const CartTab = ({ cartItems, statusTabCart, toggleStatusTab, changeQuantity, setCartItems }) => {
    const [checkedItems, setCheckedItems] = useState({});


    const handleCloseTab = () => {
        toggleStatusTab();
    };

    const handlePay = () => {
        const selectedItems = cartItems.filter(item => checkedItems[item.productID]);
        if (selectedItems.length > 0) {
            setCartItems(prevItems =>
                prevItems.filter(item => !checkedItems[item.productID])
            );
            setCheckedItems({});
            alert("Thanh toán thành công! mặt hàng đã được xóa khỏi giỏ.");
        } else {
            alert("Vui lòng chọn ít nhất một mặt hàng để thanh toán!");
        }
    };

    const calculateTotal = () => {
        return cartItems
            .filter(item => checkedItems[item.productID])
            .reduce((total, item) => {
                const product = Products.find(p => p.id === item.productID);
                const price = product?.price || 0;
                const quantity = item.quantity || 0;
                return total + (price * quantity);
            }, 0);
    };

    const calculateSelectedCount = () => {
        return cartItems
            .filter(item => checkedItems[item.productID])
            .reduce((count, item) => count + (parseInt(item.quantity) || 0), 0);
    };

    const totalAmount = calculateTotal();
    const selectedCount = calculateSelectedCount();

    return (
        <div
            className={`fixed top-0 right-0 z-[1000] bg-[#4c7763] shadow-2xl w-[calc(22%)] h-full grid grid-rows-[60px_1fr_80px_60px] 
                    transform transition-transform duration-500
                    ${statusTabCart === false ? "translate-x-full" : "translate-x-0"}`}
        >
            <h2 className="p-5 text-white text-2xl">Giỏ hàng</h2>
            <div className="p-5">
                {cartItems.length === 0 ? (
                    <p className="text-white text-center">Giỏ hàng trống</p>
                ) : (
                    cartItems.map((item, key) => (
                        <div className="flex flex-row items-center gap-2" key={key}>
                            <input
                                type="checkbox"
                                className="checkBox w-4 h-4"
                                checked={checkedItems[item.productID] || false}
                                onChange={(e) => setCheckedItems(prev => ({
                                    ...prev,
                                    [item.productID]: e.target.checked
                                }))}
                            />
                            <CartItem data={item} changeQuantity={changeQuantity} />
                        </div>
                    ))
                )}
            </div>

            <div className="px-5 py-3 bg-[#3d6354] text-white border-t border-[#2a4d3e]">
                <div className="flex justify-between items-center mb-2">
                    <span>Đã chọn: {selectedCount} sản phẩm</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                    <span>Tổng tiền:</span>
                    <span className="text-yellow-300">
                        {totalAmount > 0 ? totalAmount.toLocaleString('vi-VN') : '0'} đ
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <button className="bg-[#075e3b] hover:bg-[#144935] text-white" onClick={handleCloseTab}>
                    ĐÓNG
                </button>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white" onClick={handlePay}>
                    THANH TOÁN
                </button>
            </div>
        </div>
    );
};

export default CartTab;