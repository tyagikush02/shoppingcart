import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeCart } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';

function Product({post}) {
    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();

    const addToCart=()=>{
        dispatch(addCart(post));  
        toast.success("item added to cart");
    }

    const removeFromCart=()=>{
        dispatch(removeCart(post  .id))
        toast.error("item remove from cart");
    }
  return (
    <>
      <div className='flex flex-col justify-between w-full gap-3 p-4 rounded-xl border-2 border-[#00095] hover:shadow-2xl hover:scale-110 transition ease-in'>
        <p className='text-center'>{post.title.split(" ").slice(0,3).join(" ") + "..."}</p>
        <p>{post.description.split(" ").slice(0,9).join(" ") + "..."}</p>
        <div className="h-[180px]">
          <img src={post.image} className="h-full w-full" alt="" />
          </div>
        <div className='flex justify-between w-full mt-5'>
            
            <p className='text-green-500 font-bold'>${post.price}</p>
            
            {
            cart.some((p)=>p.id === post.id) ?
            (<button className='border-2 rounded-4xl p-1 cursor-pointer' onClick={removeFromCart}>REMOVE ITEM</button>)
             : 
            (<button className='border-2 rounded-4xl p-1 cursor-pointer' onClick={addToCart}>ADD TO CART</button>)
            } 
            
        </div>
      </div>
    </>
  )
}

export default Product
