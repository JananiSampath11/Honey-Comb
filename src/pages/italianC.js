import React from "react";
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Italian(){
    const italian=[{
        name:"Lasagna",
        description:"Available from 8am to 10pm",
        price:"15",
        image:"images/lasagna.jpg",
    },{
        name:"Risotto",
        description:"Available from 8am to 10pm",
        price:"15",
        image:"images/Risotto.jpeg",
    },{
        name:"Gnocchi",
        description:"Available from 8am to 10pm",
        price:"15",
        image:"images/Gnocchi.jpeg",
    },{
        name:"Ossobuco",
        description:"Available from 8am to 10pm",
        price:"15",
        image:"images/Ossobuco.jpeg",
    },{
        name:"Arancini",
        description:"Available from 8am to 10pm",
        price:"15",
        image:"images/Arancini.jpeg",
    },{
        name:"Focaccia",
        description:"Available from 8am to 10pm",
        price:"15",
        image:"images/Focaccia.jpeg",
    },{
        name:"Truffles",
        description:"Available from 8am to 10pm",
        price:"15",
        image:"images/Truffles.jpg",
    },{
        name:"Broth",
        description:"Available from 8am to 10pm",
        price:"15",
        image:"images/Broth.jpeg",
    },{
        name:"Spaghetti",
        description:"Available from 8am to 10pm",
        price:"15",
        image:"images/Spaghetti.jpeg",
    },{
        name:"Chicken Parmesan",
        description:"Available from 8am to 10pm",
        price:"15",
        image:"images/Chicken Parmesan.jpeg",
    },{
        name:"Italian Meatballs",
        description:"Available from 8am to 10pm",
        price:"15",
        image:"images/Italian Meatballs.jpeg",
    },{
        name:"Calzone",
        description:"Available from 8am to 10pm",
        price:"15",
        image:"images/Calzone.jpeg",
    }]
    
    const [num,setNum]=useState(italian.map(item=>0));
    const [disable,setDisable]=useState(italian.map(item=>false));
const incrementCounter=(index)=>{ 
       num[index]++;
       setNum([...num]);
       disable[index]=false;
    setDisable([...disable]);
};
    const decrementCounter=(index)=> {
        if (num[index] > 1) {
          disable[index] = false;
          setDisable([...disable]);
          num[index]--;
          setNum([...num]);
        } else {
          num[index] = 0;
          setNum([...num]);
          disable[index] = true;
          setDisable([...disable]);}
    };

    const btn1=<button className="w-full border-l-2 border-r-2 border-b-2 hover:bg-black hover:text-white shadow-xl">SOUTH INDIAN</button>
    const btn2=<button className="w-full border-l-2 border-r-2 border-b-2 hover:bg-black hover:text-white shadow-xl">NORTH INDIAN</button>
    const btn3=<button className="w-full border-l-2 border-r-2 border-b-2 hover:bg-black hover:text-white shadow-xl">FRENCH</button>
    const btn4=<button className="w-full border-l-2 border-r-2 border-b-2 hover:bg-black hover:text-white shadow-xl">CHINESE</button>
    const btn5=<button className="w-full border-l-2 border-r-2 border-b-2 hover:bg-black hover:text-white shadow-xl">ITALIAN</button>
    const btn6=<button className="w-full border-l-2 border-r-2 border-b-2 hover:bg-black hover:text-white shadow-xl">JAPANESE</button>
   

return(
<>
<div className="w-full flex items-center justify-center h-[80vh]">
    <Link to ="/Cart">
            <button className="xxs:right-[30px] mob:right-[5px] mobxs:right-[2px] xs:text-xl xxxs:text-sm mob:text-[13px] mobs:text-[12px] mobxs:text-[12px] text-sm text-white absolute rounded-full right-[30px] top-[110px] p-2 " >
                            <i className="text-black fa-solid fa-cart-shopping pr-1"></i>
                            <span className="top-[-10px] relative inline-flex items-center justify-center px-1 py-[2px] mr-2 text-xs font-bold leading-none text-white bg-red-600 rounded-full">0</span>    
                            </button>
        </Link>
        <div className=" w-1/4 h-full xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-1/4 xs:w-1/4 xxs:w-1/4
                        text-3xl xl:text-3xl lg:text-[22px] md:text-[21px] sm:text-[20px] xs:text-[19px] xxs:text-[18px] xxxs:text-[17px] mob:text-[15px] mobs:text-[10px] mobxs:text-[8px] text-black bg-zinc-300  ">
            <button className="w-full h-[80px] text-4xl xl:text-4xl lg:text-[28px] md:text-[28px] sm:text-[27px] xs:text-[25px] xxs:text-[21px] xxxs:text-[18px] mob:text-[17px] mobs:text-[14px] mobxs:text-[13px] border-2 bg-white shadow-xl">Select Your Cuisine</button>
            <Link to ="/Menu">{btn1}</Link>
            <Link to ="/North">{btn2}</Link>
            <Link to ="/French">{btn3}</Link>
            <Link to ="/Chinese">{btn4}</Link>
            <Link to ="/Italian">{btn5}</Link>
            <Link to ="/Japanese">{btn6}</Link>
            <Link to ="/Fastfood"><button className="w-full border-l-2 border-r-2 border-b-2 hover:bg-black hover:text-white shadow-xl">FAST FOOD</button></Link>
            <Link to ="/Drinks"><button className="w-full border-l-2 border-r-2 border-b-2 hover:bg-black hover:text-white shadow-xl">DRINKS</button></Link>
            <Link to ="/Desserts"><button className="w-full border-l-2 border-r-2 border-b-2 hover:bg-black hover:text-white shadow-xl">DESSERTS</button></Link>
            <Link to ="/Bites"><button className="w-full border-l-2 border-r-2 border-b-2 hover:bg-black hover:text-white shadow-xl">BITES</button></Link>
           
        </div> 
        <div className=" w-3/4 h-full bg-white " >
            <div className=" h-full overflow-y-scroll hover:scrollbar-thumb-green-700">
            {italian.map(({name,description,price,image},i)=>(
                <div className=" flex items-center h-40 pl-5 pt-2 pb-2 box-border">
    
                <div className="w-1/5 xl:w-1/5 lg:w-1/5 md:w-1/5 sm:w-1/5 xs:w-[90px] xxs:w-[80px] xxxs:w-[70px] mob:w-[60px] mobs:w-[50px] mobxs:w-[40px]
                                h-full xl:h-full lg:h-[140px] md:h-[120px] sm:h-[115px] xs:h-[110px] xxs:h-[105px] xxxs:h-[100px] mob:h-[95px] mobs:h-[90px] mobxs:h-[85px]"key={image}>
                    <img className=" h-full w-full shadow-lg shadow-black" src={image} alt={name}/>
                </div>
                <div className="w-full h-full pl-4 pr-2 box-border"key={name}>
                    <div className="text-2xl xl:text-2xl lg:text-[22px] md:text-[20px] sm:text-[18px] xs:text-[16px] xxs:text-[15px] mob:text-[15px] mobs:text-[15px] mobxs:text-[15px]">
                        {name}
                    </div>
                    <div className="text-[12px]"key={description}>
                        {description}
                    </div>
                    <div className="text-xl xl:text-xl lg:text-[19px] md:text-[18px] sm:text-[17px] xs:text-[16px] xxs:text-[16px] xxxs:text-[15px] mob:text-[15px] mobs:text-[15px] mobxs:text-[15px] "key={price}>
                        <span>₹{price}</span>
                    </div>
                    <div className="flex items-center"key={i}>
                        <button className="w-[30px] text-2xl xl:text-xl lg:text-[19px] md:text-[18px] sm:text-[17px] xs:text-[16px] xxs:text-[16px] xxxs:text-[15px] mob:text-[15px] mobs:text-[15px] mobxs:text-[15px]" type="button" disabled={disable[i]} onClick={()=>decrementCounter(i)}>-</button>
                        <p>{num[i]}</p>
                        <button className="w-[30px] text-2xl xl:text-xl lg:text-[19px] md:text-[18px] sm:text-[17px] xs:text-[16px] xxs:text-[16px] xxxs:text-[15px] mob:text-[15px] mobs:text-[15px] mobxs:text-[15px]" type="button" onClick={()=>incrementCounter(i)}>+</button>
                    </div>
                    <div>
                        <button className="text-sm xl:text-sm lg:text-sm md:text-sm sm:text-[12px] xs:text-[11px] xxs:text-[10px] mob:text-[9px] mobs:text-[9px] mobxs:text-[9px] text-white bg-zinc-700 px-4 py-[2px] rounded-xl">ADD</button>
                    </div>
                </div>    
            </div>
            ))}
            </div>
        </div>
    </div>  
</>
)
}
export default Italian;