import type { Product } from '../types/cart';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../store/cartSlice'

const Jeans: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    console.log(cartItems)

    // Sample products
    const PRODUCTS: Product[] = [
        { id: '1', name: 'Men Jeans', price: 15 },
        { id: '2', name: 'Women Jeans', price: 8 },
        { id: '3', name: 'Kids Jeans', price: 3 },
    ];


    return (
        <>
            {PRODUCTS.map(product => (
                <div key={product.id} className='grid grid-cols-3 gap-4 m-8 '>
                    <h2>{product.name}</h2>
                    <p>₹{product.price}</p>
                    <button onClick={() => dispatch(addToCart(product))} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add to Cart</button>
                </div>
            ))}

            <code>
                {JSON.stringify(cartItems, null, 2)}
            </code>
        </>
    );
};

export default Jeans;