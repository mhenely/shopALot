import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { fetchShopData } from "../features/shopData"
import { loadServerCart } from "../features/cart/cartItems"

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    dispatch(fetchShopData())
    // If a session was restored from storage, load that user's server cart.
    if (user) {
      dispatch(loadServerCart())
    }
    // Mount-only: login/logout handle cart sync separately.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <>
      {/* Reset scroll to top on navigation; restore position on back/forward. */}
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

