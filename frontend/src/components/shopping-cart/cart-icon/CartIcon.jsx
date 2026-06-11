import { useDispatch, useSelector } from 'react-redux';
import { toggleCartOpen } from '../../../features/cart/cartDropdownSlice.js';

import ShoppingCartIcon from '../../../assets/ShoppingCartIcon';


const CartIcon = () => {

  const cartItems = useSelector((state) => state.cartItems.items)
  const cartCount = cartItems.reduce((acc, curr) => (acc + curr.quantity), 0)

  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleCartOpen())}
      aria-label={`Cart, ${cartCount} item${cartCount === 1 ? '' : 's'}`}
      className="w-[45px] h-[45px] relative flex items-center justify-center cursor-pointer"
    >
      <ShoppingCartIcon/>
      <span className="relative text-[10px] font-bold bottom-[12px] text-black">{cartCount}</span>
    </button>
  )
}

export default CartIcon;