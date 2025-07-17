import { Link } from 'react-router-dom';

const ListProduct = () => {
    return (
        <nav className='flex justify-center pb-4'>
            <Link to='/product' className='px-4 py-2 rounded-lg font-medium border bg-[#d19f60] text-white hover:bg-yellow-700'> xem thêm </Link>
        </nav>
    )
}
export default ListProduct;