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
    <section className="px-6 py-20">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-clay-100 text-clay-700">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight">Thank you for your order.</h1>
        <p className="mt-4 leading-relaxed text-ink/65">
          Your payment went through in Stripe test mode — no real charge was made. A confirmation email is on
          its way (and yes, it includes a little hello from me).
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/categories"
            className="bg-clay-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-clay-900"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CheckoutSuccess
