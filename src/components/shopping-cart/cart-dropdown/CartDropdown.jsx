import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllItems } from '../../../features/cart/cartItems.js';
import { toggleCartOpen } from '../../../features/cart/cartDropdownSlice.js';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx'
import CartItem from '../cart-items/CartItem.jsx'

// import Button from '../button/button.component';


const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cartItems.items);

  const cartTotal = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }


  return (
    
    <CartDropdownContainer>
      <CartItems >
        {
          cartItems.length ? (cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item}/>
          })) 
          : <EmptyMessage>Your cart is empty</EmptyMessage>
        }
        
      </CartItems>
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
    </CartDropdownContainer>
  )
}

export default CartDropdown;