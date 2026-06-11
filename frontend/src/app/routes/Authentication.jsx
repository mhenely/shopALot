import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { enterDemo, loginUser, logout } from "../../features/auth/authSlice"
import { mergeGuestCart } from "../../features/cart/cartItems"
import { loadDemoCreds } from "../../api/client"

const AuthenticationPage = () => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const demoCreds = loadDemoCreds()

  // Already signed in as a demo account → show the credentials panel.
  if (user && demoCreds) {
    return <DemoAccountPanel creds={demoCreds} />
  }
  // Signed in some other way → a minimal landing.
  if (user) {
    return (
      <section className="px-6 py-20 text-center">
        <h1 className="font-serif text-3xl font-semibold">You’re signed in as {user.name || user.username}.</h1>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/categories" className="bg-clay-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-clay-900">Continue shopping</Link>
          <button onClick={() => dispatch(logout())} className="border border-clay-100 px-6 py-3 text-sm font-medium text-ink/60 hover:border-clay-600 hover:text-clay-700">Log out</button>
        </div>
      </section>
    )
  }

  return <EntryPage onEntered={() => navigate("/")} />
}

const EntryPage = ({ onEntered }) => {
  const dispatch = useDispatch()
  const [entering, setEntering] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [signingIn, setSigningIn] = useState(false)
  const [error, setError] = useState(null)

  const finish = async (result) => {
    if (result.meta.requestStatus === "fulfilled") {
      await dispatch(mergeGuestCart())
      onEntered()
      return
    }
    setError(result.payload)
  }

  const handleEnterDemo = async () => {
    setError(null)
    setEntering(true)
    const result = await dispatch(enterDemo())
    setEntering(false)
    await finish(result)
  }

  const handleSignIn = async (e) => {
    e.preventDefault()
    setError(null)
    setSigningIn(true)
    const result = await dispatch(loginUser({ username: credentials.username, password: credentials.password }))
    setSigningIn(false)
    await finish(result)
  }

  const onChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <Link to="/" className="font-serif text-3xl font-semibold">shopALot</Link>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight">Welcome to the demo</h1>
          <p className="mt-3 text-ink/60">
            shopALot is a portfolio project. Jump straight in with a private demo account — nothing to create,
            no email or password required.
          </p>
        </div>

        <div className="mt-8 border border-clay-100 bg-white/60 p-8">
          <button
            onClick={handleEnterDemo}
            disabled={entering}
            className="block w-full bg-clay-700 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-clay-900 disabled:opacity-60"
          >
            {entering ? "Setting up your account…" : "Enter the demo store →"}
          </button>
          <p className="mt-3 text-center text-xs text-ink/45">
            We’ll set up a fresh account and sign you in. Your cart will persist so you can come back to it.
          </p>

          <div className="my-7 flex items-center gap-4 text-xs uppercase tracking-widest text-ink/35">
            <span className="h-px flex-1 bg-clay-100" />
            Already have a demo account?
            <span className="h-px flex-1 bg-clay-100" />
          </div>

          <form onSubmit={handleSignIn} className="text-left">
            <label htmlFor="username" className="block text-sm font-medium text-ink/70">Demo email</label>
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="username"
              value={credentials.username}
              onChange={onChange}
              placeholder="demo-a4f2@shopalot.test"
              className="mb-4 mt-1.5 w-full border border-clay-100 bg-cream px-3 py-2.5 text-sm focus:border-clay-600 focus:outline-none"
            />
            <label htmlFor="password" className="block text-sm font-medium text-ink/70">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              value={credentials.password}
              onChange={onChange}
              placeholder="••••••••"
              className="mb-5 mt-1.5 w-full border border-clay-100 bg-cream px-3 py-2.5 text-sm focus:border-clay-600 focus:outline-none"
            />
            {error && <p className="mb-4 text-sm text-red-700" role="alert">{error}</p>}
            <button
              type="submit"
              disabled={signingIn}
              className="w-full border border-clay-700 py-2.5 text-sm font-semibold uppercase tracking-wide text-clay-700 hover:bg-clay-700 hover:text-cream disabled:opacity-60"
            >
              {signingIn ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
        <p className="mt-5 text-center text-xs text-ink/40">
          No real personal data is collected or stored. Demo accounts are automatically removed after a week.
        </p>
      </div>
    </section>
  )
}

const DemoAccountPanel = ({ creds }) => {
  const dispatch = useDispatch()
  const [copied, setCopied] = useState(null)

  const copy = (label, value) => {
    navigator.clipboard?.writeText(value)
    setCopied(label)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-md border border-clay-100 bg-white/60 p-7">
        <h1 className="font-serif text-2xl font-semibold">You’re in a demo account</h1>
        <p className="mt-1 text-sm text-ink/60">
          You’re signed in and your cart will be saved on this device. To return from a different device — or
          after you log out — save these credentials:
        </p>

        <div className="mt-5 space-y-2">
          <CredRow label="Email" value={creds.username} copied={copied === "Email"} onCopy={() => copy("Email", creds.username)} />
          <CredRow label="Password" value={creds.password} mono copied={copied === "Password"} onCopy={() => copy("Password", creds.password)} />
        </div>

        <div className="mt-5 flex gap-3">
          <Link to="/categories" className="flex-1 bg-clay-700 py-2.5 text-center text-sm font-semibold uppercase tracking-wide text-cream hover:bg-clay-900">
            Start shopping
          </Link>
          <button onClick={() => dispatch(logout())} className="flex-1 border border-clay-100 py-2.5 text-sm font-medium text-ink/60 hover:border-clay-600 hover:text-clay-700">
            Log out
          </button>
        </div>
      </div>
    </section>
  )
}

const CredRow = ({ label, value, mono, copied, onCopy }) => (
  <div className="flex items-center justify-between rounded-sm border border-clay-100 bg-cream px-3 py-2.5 text-sm">
    <span>
      <span className="text-xs uppercase tracking-widest text-ink/40">{label}</span>
      <br />
      <span className={mono ? "font-mono" : ""}>{value}</span>
    </span>
    <button onClick={onCopy} className="text-xs font-semibold uppercase tracking-wide text-clay-700 hover:text-clay-900">
      {copied ? "Copied" : "Copy"}
    </button>
  </div>
)

export default AuthenticationPage
