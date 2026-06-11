import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllItems } from '../../../features/cart/cartItems.js';
import { toggleCartOpen } from '../../../features/cart/cartDropdownSlice.js';

import CartItem from '../cart-items/CartItem.jsx'


const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cartItems.items);

  const cartTotal = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }


  return (
    
    <div className="absolute w-[300px] h-[350px] flex flex-col p-5 border border-black rounded-md bg-white top-[90px] right-10 z-[5]">
      <div className="h-[240px] flex flex-col overflow-scroll">
        {
          cartItems.length ? (cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item}/>
          }))
          : <span className="text-lg my-[50px] mx-auto">Your cart is empty</span>
        }

      </div>
      <div className='flex justify-between py-2'>
        <span>Total: ${cartTotal}</span>
        <button onClick={goToCheckoutHandler} className='w-1/2 rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'>
          Checkout
        </button>
      </div>
      <div className='flex-auto'>
        <button onClick={() => dispatch(removeAllItems())}
          className='w-1/2 rounded-md border border-transparent bg-red-600 px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-red-700'>
            Clear Cart
            </button>    
        <button onClick={() => dispatch(toggleCartOpen())}
          className='w-1/2 rounded-md border border-transparent bg-neutral-700 px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-neutral-800'>
          Close Cart
          </button>    
      </div>
    </div>
  )
}

export default CartDropdown;