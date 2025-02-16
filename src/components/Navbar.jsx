import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router';
import { useSelector } from "react-redux";
function Navbar() {
  const {cart} = useSelector((state) => state);
  return (
    <div className='flex justify-evenly items-center w-full h-[60px] bg-blue-950'>
      <NavLink to="/shoppingcart">
        <img src="logo.png" className='w-[100px] h-[40px]' alt="" />
      </NavLink>
      <div className='flex gap-5 text-white justify-center items-center'>
        <NavLink to="/shoppingcart">
            <p>Home</p>
        </NavLink>
        <NavLink to="/shoppingcart/cart">
              <div className="relative">
              <IoCartOutline  className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
      </div>
    </div>
  )
}

export default Navbar
