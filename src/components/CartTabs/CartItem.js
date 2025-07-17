import { useState, useEffect } from "react";
import { Products } from "../Product/ProductList";

const CartItem = ({ data, changeQuantity }) => {
    const { productID, quantity } = data;
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const findDetail = Products.find(product => product.id === productID);
        setDetail(findDetail || {});
    }, [productID]);

    const handleMinusQuantity = () => {
        changeQuantity({
            productID: productID,
            quantity: quantity - 1
        });
    };

    const handlePlusQuantity = () => {
        changeQuantity({
            productID: productID,
            quantity: quantity + 1
        });
    };

    return (
        <div className="flex justify-between items-center bg-yellow-100 text-yellow-700 hover:bg-[#d19f60] hover:text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
            <img src={detail.image} alt={detail.name || "Sản phẩm"} className="w-12" />
            <h3>{detail.name || "Không xác định"}</h3>
            <p>{(detail.price ? detail.price * quantity : 0).toLocaleString()}đ</p>
            <div className="w-[120px] flex items-center justify-between bg-white rounded-full px-2 py-1 shadow">
                <button
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-cyan-600 text-base font-medium"
                    onClick={handleMinusQuantity}
                >
                    −
                </button>
                <span className="w-8 text-center text-yellow-700 text-base font-medium">{quantity}</span>
                <button
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-cyan-600 text-base font-medium"
                    onClick={handlePlusQuantity}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default CartItem;