import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { fetchShopData } from "../features/shopData"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchShopData())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer className='sticky bottom-0'/>
    </>
  )
}

export default App

