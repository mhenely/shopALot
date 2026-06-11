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
    dispatch(toggleCartOpen())
    navigate('/checkout')
  }

  return (
    <div className="fixed right-4 top-[72px] z-40 flex max-h-[28rem] w-80 flex-col border border-clay-100 bg-cream p-5 shadow-xl">
      <div className="flex items-center justify-between border-b border-clay-100 pb-3">
        <h3 className="font-serif text-lg font-semibold">Your cart</h3>
        <button
          onClick={() => dispatch(toggleCartOpen())}
          aria-label="Close cart"
          className="text-ink/40 hover:text-clay-700"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto py-4">
        {cartItems.length
          ? cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          : <p className="py-12 text-center text-ink/50">Your cart is empty</p>
        }
      </div>

      <div className="border-t border-clay-100 pt-3">
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-ink/60">Total</span>
          <span className="font-serif text-2xl">${cartTotal.toFixed(2)}</span>
        </div>
        <button
          onClick={goToCheckoutHandler}
          disabled={!cartItems.length}
          className="mt-3 w-full bg-clay-700 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-clay-900 disabled:opacity-50"
        >
          Checkout
        </button>
        {cartItems.length > 0 && (
          <button
            onClick={() => dispatch(removeAllItems())}
            className="mt-2 w-full py-2 text-sm font-medium text-ink/50 hover:text-clay-700"
          >
            Clear cart
          </button>
        )}
      </div>
    </div>
  )
}

export default CartDropdown;
