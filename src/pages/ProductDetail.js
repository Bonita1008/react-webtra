import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Products } from "../components/Product/ProductList";
import { toast } from "react-hot-toast";

const ProductDetail = ({ addToCart, statusTabCart }) => {
    const { slug } = useParams();
    const [detail, setDetail] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const found = Products.find(product => product.slug === slug);
        if (found) {
            setDetail(found);
        } else {
            window.location.href = "/";
        }
    }, [slug]);

    if (!detail) return <p className="text-center">Đang tải sản phẩm...</p>;

    const handleMinusQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    const handlePlusQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const handleAddToCart = () => {
        addToCart({ productID: detail.id, quantity });
        toast.success("Thêm Vào Giỏ Hàng Thành Công");
    };

    return (
        <div className={`container mx-auto px-4 py-10 transform transition-transform duration-500 ${statusTabCart ? "-translate-x-5" : ""}`}>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Chi Tiết Sản Phẩm</h2>

            <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="w-full">
                    <img
                        src={detail.image}
                        alt={detail.name}
                        className="w-full h-[450px] object-cover rounded-xl shadow-lg"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-gray-800 uppercase">{detail.name}</h1>
                    {detail.rating && <p className="text-yellow-500">{detail.rating}</p>}

                    <div className="flex items-center gap-3 text-amber-600 text-2xl font-semibold">
                        <span>{detail.price.toLocaleString()}₫</span>
                        {detail.old_price && (
                            <span className="text-gray-400 text-lg line-through">{detail.old_price.toLocaleString()}₫</span>
                        )}
                        {detail.discount && <span className="text-red-500 text-base">{detail.discount}</span>}
                    </div>

                    <p className="text-gray-700 leading-relaxed">{detail.description}</p>

                    <div className="grid grid-cols-3 gap-2 text-sm text-gray-900">
                        {detail.weight && <p><strong>Khối lượng:</strong> <br />{detail.weight}</p>}
                        {detail.packaging && <p><strong>Bao bì:</strong> <br />{detail.packaging}</p>}
                        {detail.origin && <p><strong>Xuất xứ:</strong> <br />{detail.origin}</p>}
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <span className="text-gray-700 font-semibold">Số lượng:</span>
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <button
                                className="w-10 h-10 bg-gray-200 text-xl font-bold hover:bg-gray-300"
                                onClick={handleMinusQuantity}
                            >−</button>
                            <span className="w-12 text-center text-xl font-medium">{quantity}</span>
                            <button
                                className="w-10 h-10 bg-gray-200 text-xl font-bold hover:bg-gray-300"
                                onClick={handlePlusQuantity}
                            >+</button>
                        </div>
                    </div>

                    <button
                        className=" bg-yellow-200 text-yellow-700 hover:bg-[#d19f60] hover:text-white py-3 px-6 rounded-lg text-lg font-semibold transition mt-4"
                        onClick={handleAddToCart}
                    >
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
