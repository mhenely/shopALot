import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "./shopping-cart/cart-icon/CartIcon";
import CartDropdown from "./shopping-cart/cart-dropdown/CartDropdown";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {

  const isCartOpen = useSelector(state => state.cartDropdown.value)
  const user = useSelector(state => state.auth.user)
  const categories = useSelector(state => state.shopData.value)
  const dispatch = useDispatch()

  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-30 border-b border-clay-100 bg-cream/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <Link to="/" onClick={closeMenu} className="font-serif text-2xl font-semibold tracking-tight text-ink">
          shopALot
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 text-sm sm:flex">
          <div className="relative group">
            <Link to="/categories" className="font-medium text-ink hover:text-clay-700">Categories</Link>
            <div className="absolute right-0 hidden min-w-[12rem] rounded-sm border border-clay-100 bg-cream shadow-lg group-hover:block group-focus-within:block z-20">
              <div className="flex flex-col gap-1 p-3">
                {categories.map(({ title }) => (
                  <Link
                    key={title}
                    to={`/categories/${encodeURIComponent(title)}`}
                    className="rounded-sm px-2 py-1.5 capitalize text-ink/70 hover:bg-clay-100 hover:text-clay-700"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/about" className="font-medium text-ink/70 hover:text-clay-700">About</Link>

          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/authentication" className="text-ink/60 hover:text-clay-700">Hi, {user.name || user.username}</Link>
              <button onClick={() => dispatch(logout())} className="font-medium text-ink/70 hover:text-clay-700">Sign Out</button>
            </div>
          ) : (
            <Link to="/authentication" className="font-medium text-ink/70 hover:text-clay-700">Sign In</Link>
          )}

          <CartIcon />
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex items-center gap-1 sm:hidden">
          <CartIcon />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center text-ink hover:text-clay-700"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-clay-100 bg-cream px-4 py-2 text-sm sm:hidden">
          <div className="flex flex-col">
            <Link to="/categories" onClick={closeMenu} className="py-2.5 font-medium text-ink hover:text-clay-700">Categories</Link>
            <Link to="/about" onClick={closeMenu} className="py-2.5 font-medium text-ink/70 hover:text-clay-700">About</Link>
            {user ? (
              <>
                <Link to="/authentication" onClick={closeMenu} className="py-2.5 text-ink/60 hover:text-clay-700">Hi, {user.name || user.username}</Link>
                <button
                  onClick={() => { dispatch(logout()); closeMenu() }}
                  className="py-2.5 text-left font-medium text-ink/70 hover:text-clay-700"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/authentication" onClick={closeMenu} className="py-2.5 font-medium text-ink/70 hover:text-clay-700">Sign In</Link>
            )}
          </div>
        </div>
      )}

      {isCartOpen && <CartDropdown />}
    </header>
  )
}

export default Navbar
