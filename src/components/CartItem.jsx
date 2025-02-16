import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc";
import { removeCart } from '../redux/slices/CartSlice';
import { useDispatch } from 'react-redux';

function CartItem({item,itemIndex}) {
    const dispatch=useDispatch();

    function removeFromCart(){
          dispatch(removeCart(item.id))
          toast.error("item remove from cart");
    }
  return (
    <div className="p-4 border-b-2 last:border-none border-slate-700">
    <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">
      <div className="md:w-[30%] w-full flex justify-center items-center">
          <img src={item.image} alt="" className="w-[40%] md:w-[50%] lg:w-full"/>
        </div>
      <div className="md:w-[70%] w-full flex flex-col gap-5">
        <h1>{item.title}</h1>
        <h1>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
        <div className="flex justify-between">
            <p>${item.price}</p>
            <FcDeleteDatabase className='bg-red-500' onClick={removeFromCart}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CartItem
