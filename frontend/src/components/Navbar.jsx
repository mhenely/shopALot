import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";


import HomeLogo from "../assets/HomeLogo";
import CartIcon from "./shopping-cart/cart-icon/CartIcon";
import CartDropdown from "./shopping-cart/cart-dropdown/CartDropdown";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {

  const isCartOpen = useSelector(state => state.cartDropdown.value)
  const user = useSelector(state => state.auth.user)
  const categories = useSelector(state => state.shopData.value)
  const dispatch = useDispatch()

  const [ categoryDropdown, setCategoryDropdown ] = useState(false)


  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <HomeLogo className="h-8" alt="Home Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Home</span>
        </Link>
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li onMouseEnter={() => setCategoryDropdown(prev => !prev)} onMouseLeave={() => setCategoryDropdown(prev => !prev)}>
            <Link to='/categories' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Categories</Link>
            <div className={`absolute ${categoryDropdown ? 'block' : 'hidden'} bg-slate-300 rounded shadow-md mt-1 space-y-2 z-20`}>
              <div className='p-4 flex flex-col '>
                {
                  categories.map(({ title }) => (
                    <Link key={title} to={`/categories/${encodeURIComponent(title)}`}>{title}</Link>
                  ))
                }
              </div>
            </div>
          </li>
          {
            user
              ? (
                <li className="flex items-center gap-3">
                  <span className="block py-2 px-3 text-gray-900 md:p-0 dark:text-white">Hi, {user.name || user.username}</span>
                  <button
                    onClick={() => dispatch(logout())}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Sign Out
                  </button>
                </li>
              )
              : (
                <li>
                  <Link to="/authentication" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Authentication</Link>
                </li>
              )
          }
        <CartIcon />
        { isCartOpen && <CartDropdown />}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
