import React from "react";
import {Link} from 'react-router-dom';
import './homecss.css'
function Home(){
return(
    <>
    
        {/* <div className="h-[80vh] flex items-center justify-around bg-white bg-opacity-10 " id="hom">
            <div className=" flex flex-col basis-1/3 justify-around items-center text-xl xl:text-xl sm:text-lg xs:text-md xxs:text-sm xxxs:text-xs mob:text-xs  mobs:text-[10px] mobxs:text-[8px]" id="h1">
                <Link to ="/Menu" className=" hover:bg-black bg-white text-black text-center
                        hover:text-white transition 
                        duration-300 w-1/2 py-5 rounded-xl ">ORDER NOW</Link>
                <Link to ="/Ecatering" className="hover:bg-black bg-white text-black text-center
                        hover:text-white transition
                        duration-300 w-1/2 py-5 rounded-2xl">E-CATERING</Link>
            </div>
            <div className=" bg-slate-200  bg-opacity-40 flex flex-col basis-254 items-center justify-around" 
              style={{clipPath:" polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",}}id="h2">
                <h2 className="text-6xl font-display1 text-center leading-normal lg:text-5xl md:text-4xl sm:text-4xl xs:text-4xl xxs:text-xl xxxs:text-lg mob:text-[15px] mobs:text-[12px]">WELCOME TO HONEY COMB</h2>
            </div>  
            <div className="container flex flex-col basis-1/3 justify-around items-center text-xl xl:text-xl sm:text-lg xs:text-md xxs:text-sm xxxs:text-xs mob:text-xs mobs:text-[10px]  mobxs:text-[8px]" id="h3">
                <Link to ="/booktable" className=" hover:bg-black bg-white text-black text-center
                        hover:text-white transition
                        duration-300 w-1/2 py-5 rounded-xl">BOOK A TABLE</Link>
                <Link to ="/Event" className="hover:bg-black bg-white text-black text-center
                        hover:text-white transition
                        duration-300 w-1/2 py-5 rounded-2xl">BOOK AN EVENT</Link>
            </div>
            
         </div> */}

<div className="h-[80vh] flex items-center justify-around  bg-white bg-opacity-10 " >
    <div className="h-full w-full flex items-center justify-around ">
            <div className="h-1/4 w-1/6  xl:text-xl lg:text-[18px] md:text-[17px] sm:text-[15px] xs:text-[13px] xxs:text-[12px] xxxs:text-[10px] mob:text-[9px] mobs:text-[7px] mobxs:text-[5px] flex flex-col justify-around text-center">
                <Link to ="/Menu" className="h-1/4 hover:bg-black bg-slate-200 text-black 
                        hover:text-white transition flex justify-center items-center p-1
                        duration-300  rounded-xl ">ORDER NOW</Link>
                <Link to ="/Ecatering" className="h-1/4 hover:bg-black bg-slate-200 text-black 
                        hover:text-white transition flex justify-center items-center p-1
                        duration-300  rounded-xl">E-CATERING</Link>
            </div>
            <div className="h-[85%] w-[25%] xl:h-[80%] xl:w-[30%] lg:h-[75%] lg:w-[38%] md:h-[68%] md:w-[42%] sm:h-[65%] sm:w-[46%] xs:h-[56%] xs:w-[48%] xxs:h-[53%] xxs:w-[50%] xxxs:h-[45%] xxxs:w-[50%] mob:h-[35%] mob:w-[55%] mobs:h-[35%] mobs:w-[50%] bg-white bg-opacity-40 flex justify-center items-center rounded-full">
                <h2 className=" text-[60px] xl:text-[60px] lg:text-[58px] md:text-[52px] sm:text-[48px] xs:text-[44px] xxs:text-[40px] xxxs:text-[34px] mob:text-[32px] mobs:text-[30px] mobxs:text-[28px] font-display1 text-center px-3">WELCOME TO HONEY COMB</h2>
            </div>  
            <div className="h-1/4 w-1/6  p-1 xl:text-xl lg:text-[18px] md:text-[17px] sm:text-[15px] xs:text-[13px] xxs:text-[12px] xxxs:text-[10px] mob:text-[9px] mobs:text-[7px] mobxs:text-[5px] flex flex-col justify-around text-center ">
                <Link to ="/booktable" className="h-1/4 hover:bg-black bg-slate-200 text-black 
                        hover:text-white transition flex justify-center items-center p-1
                        duration-300  rounded-xl">BOOK A TABLE</Link>
                <Link to ="/Event" className="h-1/4 hover:bg-black bg-slate-200 text-black 
                        hover:text-white transition flex justify-center items-center p-1
                        duration-300  rounded-xl">BOOK EVENT</Link>
            </div>
            </div>
         </div>
    
    </>
    )
}
export default Home;
//style={{clipPath:" polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"}}