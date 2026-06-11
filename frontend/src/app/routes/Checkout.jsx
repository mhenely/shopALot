import { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderSummary from '../../components/order-summary/OrderSummary'
import { createCheckoutSession } from '../../api/checkout'

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.cartItems.items)
  const [redirecting, setRedirecting] = useState(false)
  const [error, setError] = useState(null)

  // Build a Stripe Checkout Session on the server, then redirect to Stripe's hosted page.
  // The cart is cleared on the /checkout/success page once payment completes.
  const handlePlaceOrder = async (e) => {
    e.preventDefault()
    if (!cartItems.length) return
    setError(null)
    setRedirecting(true)
    try {
      const items = cartItems.map((i) => ({ itemId: i.id, quantity: i.quantity }))
      const { url } = await createCheckoutSession(items)
      window.location.href = url
    } catch (err) {
      setRedirecting(false)
      setError(err.response?.data?.error || 'Could not start checkout. Please try again.')
    }
  }

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        {error && (
          <p className="mb-6 text-center text-sm text-red-600" role="alert">{error}</p>
        )}

        <form onSubmit={handlePlaceOrder} className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <OrderSummary redirecting={redirecting} />
        </form>
      </div>
    </div>
  )
}
