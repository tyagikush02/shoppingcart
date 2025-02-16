import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { ToastContainer } from "react-toastify"


function App() {

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
