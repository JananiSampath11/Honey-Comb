import React, { useState } from 'react';

// import { Link } from 'react-router-dom';



const Cart = () => {
  const cart=[{
    id:"1",
    name:"Item1",
},
{
  id:"2",
  name:"Item2",
},
{
  id:"3",
  name:"Item3",
},
{
  id:"4",
  name:"Item4",
},
{
  id:"5",
  name:"Item5",
},
{
  id:"6",
  name:"Item6",
},
{
  id:"7",
  name:"Item1",
}
]
  return (
    <div className="bg-white text-center bg-opacity-20 h-[80vh] flex items-center justify-center">
      <div className="flex flex-col justify-center items-center w-2/4 h-full  xl:w-2/4 lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-3/4 xxs:w-3/4 mob:w-3/4 mobs:w-3/4">
        <div className="bg-white bg-opacity-70 w-full h-3/4 p-5 text-black text-left"> 
        <div className=" w-full h-80 overflow-y-scroll hover:scrollbar-thumb-green-700">
                {cart.map(({name,price},i)=>(
                <div className=" flex items-center  h-20 pl-5 pt-2 pb-2 box-border">
                    <div className="w-full flex justify-around h-full pl-4 pr-2 box-border"key={name}>
                        <div className="text-2xl xl:text-2xl lg:text-[22px] md:text-[20px] sm:text-[18px] xs:text-[16px] xxs:text-[15px] mob:text-[15px] mobs:text-[15px] mobxs:text-[15px]">
                            {name}
                        </div>
                        <div>
                          <button className="text-sm xl:text-sm lg:text-sm md:text-sm sm:text-[12px] xs:text-[11px] xxs:text-[10px] mob:text-[9px] mobs:text-[9px] mobxs:text-[9px]">Quantity</button>
                        </div>
                        <div className="text-xl xl:text-xl lg:text-[19px] md:text-[18px] sm:text-[17px] xs:text-[16px] xxs:text-[16px] xxxs:text-[15px] mob:text-[15px] mobs:text-[15px] mobxs:text-[15px] "key={price}>
                            <span>₹{price}</span>
                        </div>
                    </div>    
                </div>
                ))}
                
            </div>
          <div>Total amount:</div>
          <div>Tax:</div>
          <div>
            <select className="w-3/5 mb-1 text-gray-900 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600" name="service">
              <option>Select Your payment method..</option>
              <option>UPI payment</option>
              <option>Cashon Delivery</option>
              <option>Bank transfer</option>
              <option>others</option>
            </select>   
            <button className="text-sm xl:text-sm lg:text-sm md:text-sm sm:text-[12px] xs:text-[11px] xxs:text-[10px] mob:text-[9px] mobs:text-[9px] mobxs:text-[9px] text-white bg-zinc-700 px-4 py-[2px] rounded-xl">Place Order</button>       
        </div>
        </div>
      </div>          
    </div>
  )
}

export default Cart;
