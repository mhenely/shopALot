import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { incrementItems, decrementItems, removeItem } from '../../features/cart/cartItems'

import { TrashIcon } from '@heroicons/react/20/solid'

const money = (n) => n.toFixed(2)

const OrderSummary = ({ redirecting = false }) => {

  const checkoutItems = useSelector(state => state.cartItems.items)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNavigate = (category, name) => {
    navigate(`/categories/${category}/${name.toLowerCase()}`)
  }

  if (!checkoutItems.length) {
    return (
      <div className="rounded-sm border border-clay-100 bg-white/60 p-12 text-center">
        <p className="font-serif text-2xl">Your cart is empty</p>
        <p className="mt-2 text-ink/60">Add something you love and it’ll show up here.</p>
        <Link
          to="/categories"
          className="mt-6 inline-block bg-clay-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-clay-900"
        >
          Browse the shop
        </Link>
      </div>
    )
  }

  const subtotal = checkoutItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
  const shipping = checkoutItems.length ? 10 : 0
  const tax = (subtotal + shipping) * 0.075
  const total = subtotal + shipping + tax

  return (
    <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
      {/* items */}
      <div>
        <h2 className="border-b border-clay-100 pb-4 font-serif text-2xl font-semibold">Your order</h2>
        <ul className="divide-y divide-clay-100">
          {checkoutItems.map((item) => (
            <li key={item.id} className="flex gap-5 py-6">
              <img
                alt={item.name}
                src={item.imageUrl?.[0]}
                onClick={() => handleNavigate(item.category, item.name)}
                className="h-24 w-20 shrink-0 cursor-pointer rounded-sm object-cover"
              />
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-3">
                  <div className="min-w-0">
                    <h3
                      onClick={() => handleNavigate(item.category, item.name)}
                      className="cursor-pointer font-serif text-lg hover:text-clay-700"
                    >
                      {item.name}
                    </h3>
                    {item.category && (
                      <p className="text-xs uppercase tracking-wide text-ink/40">{item.category}</p>
                    )}
                  </div>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    type="button"
                    aria-label={`Remove ${item.name}`}
                    className="h-fit text-ink/30 hover:text-clay-700"
                  >
                    <TrashIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-auto flex items-end justify-between pt-4">
                  <div className="flex items-center rounded-sm border border-clay-100 text-sm">
                    <button
                      type="button"
                      onClick={() => dispatch(decrementItems(item.id))}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="px-3 py-1.5 text-ink/60 hover:text-clay-700"
                    >
                      −
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => dispatch(incrementItems(item))}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="px-3 py-1.5 text-ink/60 hover:text-clay-700"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-clay-700">${money(item.price * item.quantity)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* summary */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-sm border border-clay-100 bg-white/60 p-6">
          <h2 className="font-serif text-xl font-semibold">Summary</h2>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink/60">Subtotal</dt>
              <dd className="font-medium">${money(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink/60">Shipping</dt>
              <dd className="font-medium">${money(shipping)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink/60">Taxes</dt>
              <dd className="font-medium">${money(tax)}</dd>
            </div>
            <div className="flex justify-between border-t border-clay-100 pt-3 text-base">
              <dt className="font-serif font-semibold">Total</dt>
              <dd className="font-serif text-xl font-semibold">${money(total)}</dd>
            </div>
          </dl>
          <button
            type="submit"
            disabled={!checkoutItems.length || redirecting}
            className="mt-6 w-full bg-clay-700 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-clay-900 disabled:opacity-50"
          >
            {redirecting ? 'Redirecting to checkout…' : 'Proceed to payment'}
          </button>
          <p className="mt-3 text-center text-xs text-ink/40">You’ll be redirected to Stripe’s secure checkout.</p>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
