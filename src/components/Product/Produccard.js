import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const ProductCard = ({ data, addToCart }) => {
    const handleAddToCard = (e) => {
        e.preventDefault();
        addToCart({ productID: data.id, quantity: 1 });
        toast.success("Đã thêm vào giỏ hàng");
    };

    return (
        <Link to={`/${data.slug}`}>
            <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition bg-[#ffffff] flex flex-col justify-between h-full">
                <div>
                    <img src={data.image} alt={data.name} className="w-full h-48 object-cover rounded-md" />
                    <h3 className="mt-4 text-lg font-semibold">{data.name}</h3>
                    <p className="text-amber-600 font-bold mt-2">{data.price.toLocaleString()}₫</p>
                </div>

                <button
                    onClick={handleAddToCard}
                    className="mt-4 bg-yellow-100 text-yellow-700 hover:bg-[#d19f60] hover:text-white py-2 px-4 rounded-md text-sm font-medium transition"
                >
                    + Thêm vào giỏ
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;
