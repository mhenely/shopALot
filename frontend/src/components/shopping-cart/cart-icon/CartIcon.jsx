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
      className="relative flex h-10 w-10 items-center justify-center text-ink hover:text-clay-700"
    >
      <ShoppingCartIcon />
      {cartCount > 0 && (
        <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-clay-600 text-[11px] font-bold text-cream">
          {cartCount}
        </span>
      )}
    </button>
  )
}

export default CartIcon;
