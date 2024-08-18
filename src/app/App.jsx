import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer className='sticky bottom-0'/>
    </>
  )
}

export default App

