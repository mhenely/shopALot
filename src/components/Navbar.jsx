import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";


import HomeLogo from "../assets/HomeLogo";
import CartIcon from "./shopping-cart/cart-icon/CartIcon";
import CartDropdown from "./shopping-cart/cart-dropdown/CartDropdown";

const categories = [
  {
    id: 1,
    title: "cooking",
    imageSrc: 'src/assets/food.jpeg',
    route: 'categories/cooking'
    
  },
  {
    id: 2,
    title: "national parks",
    imageSrc: "https://cdn.outsideonline.com/wp-content/uploads/2021/04/13/arches-best-time-visit_h.jpg?width=800",
    route: 'categories/national%20parks'
  },
  {
    id: 3,
    title: "sailing",
    imageSrc: 'src/assets/sailing.jpeg',
    route: 'categories/sailing'
  },
  {
    id: 4,
    title: "soccer",
    imageSrc: 'src/assets/soccer.jpeg',
    route: 'categories/soccer'
  },
  {
    id: 5,
    title: "traveling",
    imageSrc: 'src/assets/travel.png',
    route: 'categories/traveling'
  },
]


const Navbar = () => {

  const isCartOpen = useSelector(state => state.cartDropdown.value)

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
                  categories.map(category => <Link key={category.id} to={`/${category.route}`} >{category.title}</Link>)
                }
              </div>
            </div>
          </li>
          <li>
            <Link to="/authentication" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Authentication</Link>
          </li>
        <CartIcon />
        { isCartOpen && <CartDropdown />}
        </ul>
      </div>
    </nav>
    // <Navbar2 />
  )
}

export default Navbar
