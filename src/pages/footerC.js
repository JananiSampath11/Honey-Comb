import React from "react";
// import {Link} from 'react-router-dom';

function Footer(){
    return(
        <>
        
            <div className=" w-full h-full bg-black text-center text-white bg-opacity-90 items-center justify-center flex flex-col">
                <p className="text-sm">Follow us on</p>
                <div className="flex justify-center  ">
                    {/* <button className="px-2 text-xl"><i className="fa-brands fa-facebook "></i></button>
                    <button className="px-2 text-xl"><i className="fa-brands fa-instagram"></i></button>
                    <button className="px-2 text-xl"><i className="fa-brands fa-whatsapp"></i></button>
                    <button className="px-2 text-xl"><i className="fa-regular fa-envelope"></i></button>
                    <button className="px-2 text-xl"><i className="fa-brands fa-twitter"></i></button> */}
                    <a className="px-2 text-xl" href="https://m.facebook.com/100039795437242/" target={"blank"}>
                    <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a className="px-2 text-xl" href="https://www.instagram.com/im_shri_janani/" target={"blank"}>
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a className="px-2 text-xl" href="https://wa.me/8667256092" target={"blank"}>
                    <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <a className="px-2 text-xl" href="https://twitter.com/ShriJanani9808?t=0QoBGYaW1T17JLT_x39pfQ&s=09" target={"blank"}>
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div>
        
        </>
    )
} 
export default Footer;