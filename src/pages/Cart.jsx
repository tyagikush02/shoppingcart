import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router';
import CartItem from '../components/CartItem';

function Cart() {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc+curr.price,0));
  },[cart])
  return (
    <div>
      {
        
      cart.length>0 ? 
        (<div className='flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap'>
          <div className='flex flex-col lg:w-[70%]'>
          {
            cart.map((item,index)=>(
                <CartItem key={item.id} item={item} itemIndex={index} />
              )
            )
          }
          </div>
          <div className='md:w-[30%] w-full flex flex-col gap-8 justify-between'>
            <div className="mt-20">
              <p>YOUR CART</p>
              <h1>SUMMARY</h1>
              <p>Total Items : {cart.length}</p>
            </div>
            <div className="mb-20">
              <p>Total Amount :${totalAmount}</p>
              <NavLink to="/shoppingcart">
                <button>Checkout Now</button>
              </NavLink>
            </div>
          </div>
        </div>)
        :
        (
          <div className='flex flex-col gap-4 justify-center items-center h-[100vh]'>
            <p>Your cart is empty!</p>
            <NavLink to="/shoppingcart">
                 <button className='p-1.5 text-green-300 border-2 border-green-300 rounded-2xl'>SHOP NOW</button>
            </NavLink>
          </div>
        )
        
      }
    </div>
  )
}

export default Cart
