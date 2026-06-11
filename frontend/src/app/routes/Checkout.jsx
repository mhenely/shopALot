import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import OrderSummary from '../../components/order-summary/OrderSummary'
import { removeAllItems } from '../../features/cart/cartItems'

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.cartItems.items)
  const dispatch = useDispatch()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handlePlaceOrder = async (e) => {
    e.preventDefault()
    if (!cartItems.length) return
    await dispatch(removeAllItems())
    setOrderPlaced(true)
  }

  if (orderPlaced) {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Thank you for your order!</h2>
          <p className="mt-4 text-base text-gray-500">
            Your order has been placed. A confirmation would normally be emailed to you.
          </p>
          <Link
            to="/categories"
            className="mt-8 inline-block rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <form onSubmit={handlePlaceOrder} className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <OrderSummary />
        </form>
      </div>
    </div>
  )
}
