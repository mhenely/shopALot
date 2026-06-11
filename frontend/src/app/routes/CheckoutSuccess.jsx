import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeAllItems } from '../../features/cart/cartItems'

// Stripe redirects here after a successful payment. We clear the cart (the order is
// done) and confirm; the confirmation email is sent server-side via the Stripe webhook.
const CheckoutSuccess = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(removeAllItems())
  }, [dispatch])

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Thank you for your order! 🎉</h2>
        <p className="mt-4 text-base text-gray-500">
          Your payment was successful (in Stripe test mode — no real charge). A confirmation
          email is on its way.
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

export default CheckoutSuccess
