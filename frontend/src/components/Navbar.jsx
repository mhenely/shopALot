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

  return (
    <header className="sticky top-0 z-30 border-b border-clay-100 bg-cream/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-serif text-2xl font-semibold tracking-tight text-ink">
          shopALot
        </Link>

        <div className="flex items-center gap-7 text-sm">
          <div className="relative group">
            <Link to="/categories" className="font-medium text-ink hover:text-clay-700">Categories</Link>
            <div className="absolute right-0 hidden min-w-[12rem] rounded-sm border border-clay-100 bg-cream shadow-lg group-hover:block group-focus-within:block z-20">
              <div className="flex flex-col gap-1 p-3">
                {
                  categories.map(({ title }) => (
                    <Link
                      key={title}
                      to={`/categories/${encodeURIComponent(title)}`}
                      className="rounded-sm px-2 py-1.5 capitalize text-ink/70 hover:bg-clay-100 hover:text-clay-700"
                    >
                      {title}
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>

          <Link to="/about" className="font-medium text-ink/70 hover:text-clay-700">About</Link>

          {
            user
              ? (
                <div className="flex items-center gap-4">
                  <Link to="/authentication" className="hidden text-ink/60 hover:text-clay-700 sm:inline">Hi, {user.name || user.username}</Link>
                  <button
                    onClick={() => dispatch(logout())}
                    className="font-medium text-ink/70 hover:text-clay-700"
                  >
                    Sign Out
                  </button>
                </div>
              )
              : (
                <Link to="/authentication" className="font-medium text-ink/70 hover:text-clay-700">Sign In</Link>
              )
          }

          <CartIcon />
          { isCartOpen && <CartDropdown /> }
        </div>
      </nav>
    </header>
  )
}

export default Navbar
