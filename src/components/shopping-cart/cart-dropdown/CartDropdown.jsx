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
      <div>
      <span>Total: ${cartTotal}</span>
      <button onClick={goToCheckoutHandler}>Checkout</button>
      </div>
      <div className='flex-auto justify-stretch'>
        <button onClick={() => dispatch(removeAllItems())}>Clear Cart</button>    
        <button onClick={() => dispatch(toggleCartOpen())}>Close Cart</button>    
      </div>
    </CartDropdownContainer>
  )
}

export default CartDropdown;