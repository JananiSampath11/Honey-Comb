import React from "react";
import {Link} from 'react-router-dom';
import './headercss.css'

function Header(){
return(
    <>
    <div className=" p-6 hover:bg-zinc-300 h-[12vh] bg-black bg-opacity-50 text-white
        hover:text-black transition
        duration-300 ease-in w-100 flex lg:flex ">
        <div className="w-2/4 flex flex-col items-start justify-center lg:w-2/4 xs:w-3/4">
            <h1 className="text-4xl xl:text-4xl xxs:text-3xl mob:text-2xl mobs:text-[18px] mobxs:text-[10px] font-display ">HONEY COMB</h1>
        </div>
        <div className="w-2/4 flex justify-center mx-0 items-center lg:w-2/4 lg:flex md:hidden sm:hidden xs:hidden xxs:hidden xxxs:hidden mob:hidden mobs:hidden mobxs:hidden">
                <Link to ="/" className="hover:bg-black bg-white text-black text-center
                    hover:text-white transition
                    duration-300 p-2 mr-3 w-24 rounded-3xl">HOME</Link>
                <Link to ="/About" className="hover:bg-black bg-white text-black text-center
                    hover:text-white transition
                    duration-300 p-2 mr-3 w-24 rounded-3xl">ABOUT</Link>
                <Link to ="/Menu" className="hover:bg-black bg-white text-black text-center
                    hover:text-white transition
                    duration-300 p-2 mr-3 w-24 rounded-3xl">MENU</Link>
                 <Link to ="/Event" className="hover:bg-black bg-white text-black text-center
                    hover:text-white transition
                    duration-300 p-2 mr-3 w-24 rounded-3xl">EVENTS</Link>
                 <Link to ="/Contact" className="hover:bg-black bg-white text-black text-center
                    hover:text-white transition
                    duration-300 p-2 mr-3 w-24 rounded-3xl">CONTACT</Link>
                <Link to ="/Login" className="hover:bg-black bg-white text-black text-center
                    hover:text-white transition
                    duration-300 p-2 mr-3 w-24 rounded-3xl">LOGIN</Link>
            
        </div>
            <div className="flex lg:hidden  justify-end w-2/4">{/*hambmenu */}
                <div className="group res res:hover:ord:block">
                    <button className="hb">
                        <div className="w-8 h-2 mb-1 bg-gray-600 animate-pulse border-2 border-black ham"></div>
                        <div className="w-8 h-2 mb-1 bg-gray-600 animate-pulse border-2 border-black ham"></div>
                        <div className="w-8 h-2 mb-1 bg-gray-600 animate-pulse border-2 border-black ham"></div>
                    </button>
                    <div className="ord hidden group-hover:block ">
                        <Link to ="/" className="cel">HOME</Link>
                        <Link to ="/About" className="cel">ABOUT</Link>
                        <Link to ="/Menu" className="cel">MENU</Link>
                        <Link to ="/Event" className="cel">EVENTS</Link>
                        <Link to ="/Contact" className="cel">CONTACT</Link>
                        <Link to ="/Login" className="cel">LOGIN</Link>
                    </div>
                </div>
            </div>

        
     </div>    
    </>
    )
}
export default Header;