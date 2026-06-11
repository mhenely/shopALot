import { useDispatch, useSelector } from 'react-redux';
import { toggleCartOpen } from '../../../features/cart/cartDropdownSlice.js';

import {CartIconContainter, ItemCount, ShopIcon} from './cart-icon.styles.jsx'


const CartIcon = () => {

  const cartItems = useSelector((state) => state.cartItems.items)
  const cartCount = cartItems.reduce((acc, curr) => (acc + curr.quantity), 0)

  const dispatch = useDispatch();

  // sum quantity of all carItems 

  return (
    <CartIconContainter onClick={() => dispatch(toggleCartOpen())}>
      <ShopIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainter>
  )
}

export default CartIcon;