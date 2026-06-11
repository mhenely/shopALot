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
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-12">
      <h1 className="font-serif text-4xl font-semibold tracking-tight">Checkout</h1>

      <div className="mt-6 flex gap-3 rounded-sm border border-clay-100 bg-white/60 px-5 py-4 text-sm text-ink/70">
        <span className="font-serif text-lg italic text-clay-600">Demo —</span>
        <p>
          This is a portfolio project, so no real payment is taken. On Stripe’s page, use test card{' '}
          <span className="font-medium text-ink">4242 4242 4242 4242</span>, any future expiry date, and any
          3-digit CVC.
        </p>
      </div>

      {error && (
        <p className="mt-6 text-sm text-red-700" role="alert">{error}</p>
      )}

      <form onSubmit={handlePlaceOrder} className="mt-10">
        <OrderSummary redirecting={redirecting} />
      </form>
    </main>
  )
}
