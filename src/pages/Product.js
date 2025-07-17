import { Products } from '../components/Product/ProductList';
import ProductCard from '../components/Product/Produccard';

const Product = ({ statusTabCart, addToCart }) => {
    return (
        <div
            className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500 ${statusTabCart ? "-translate-x-5" : ""}`}
        >
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
                {Products.map((product, key) => (
                    <ProductCard key={key} data={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default Product;
