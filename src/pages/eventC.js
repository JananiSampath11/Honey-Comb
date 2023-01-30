import React, { useRef } from "react";
// import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser';


function Event(){
    const form = useRef();
        const SendEmail = (e) => {
          e.preventDefault();
    
        emailjs.sendForm('service_76hbu6w', 'template_nuavm1f', form.current, 'FoYfR0DLGu-MHz_Hc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  
return(
    <>
    <div className="bg-white text-center bg-opacity-20 h-[80vh] flex flex-col items-center justify-center">
    <div className="w-3/5 xxs:h-3/4 mobs:h-2/4 sm:text-[16px] xxs:text-[15px] mob:text-[10px] mobxs:text-[8px] flex flex-col items-center justify-center">
           <h2 className=" sm:text-5xl mobxs:text-4xl mt-0 text-shadow-xl">Book My Event</h2>
            <form className="bg-black w-full py-10 px-3 bg-opacity-50 flex flex-col justify-center items-center "ref={form} onSubmit={SendEmail}>
              <select  className="w-5/6 mb-2 text-gray-900 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600" name="event">
                    <option>Select Your Event Here...</option>
                    <option>Birthday Party</option>
                    <option>Bachelors Party</option>
                    <option>Proposal Event</option>
                    <option>Reception</option>
                    <option>Corporate Meetings</option>
                    <option>Theme Party</option>
                    <option>Business Meetings</option>
                    <option>Fireworks Services</option>
                    <option>Sounds, Lights and Decors</option>
                    <option>Anniversary Celebration</option>
                    <option>DJ Party</option>
                </select>
                <select className="w-5/6 p-[2px] mb-2 text-gray-900 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600"name="budget">
                    <option>Select Your Budget Here...</option>
                    <option>Below 5000</option>
                    <option>Below 10000</option>
                    <option>Below 15000</option>
                    <option>Below 30000</option>
                    <option>Below 50000</option>
                </select>
                <select className="w-5/6 p-[2px] mb-2 text-gray-900 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600"name="venue">
                    <option>Select Your Venue...</option>
                    <option>Bonquat Hall</option>
                    <option>Restraurant</option>
                    <option>Terrace</option>
                    <option>Home</option>
                    <option>Others..</option>
                </select>
                <select className="w-5/6 p-[2px] mb-2 text-gray-900 bg-white border rounded-md shadow-sm outline-none  focus:border-indigo-600"name="phocors">
                    <option>Select Photography and Decorations Here...</option>
                    <option>Only Photography</option>
                    <option>Only DEcorations</option>
                    <option>Both</option>
                </select>
                <input className="w-5/6 p-[2px] mb-2 text-black bg-white border rounded-md" type="number" min="0" name="members" autoComplete="off" placeholder="No of Members that you expect.." required/>
                <input className="w-5/6 p-[2px] mb-2 text-black bg-white border rounded-md" type="text" name="yourname" autoComplete="off" placeholder="Your Name" required/>
                <input className="w-5/6 p-[2px] mb-2 text-black bg-white border rounded-md" type="email" name="yourmail" autoComplete="off" placeholder="Your Mail" required/>
                <input className="w-5/6 p-[2px] mb-2 text-black bg-white border rounded-md" type="text" name="youraddress" autoComplete="off" placeholder="Your Address" required/>
                <input className="w-5/6 p-[2px] mb-2 text-black bg-white border rounded-md" type="text" name="mobnum" autoComplete="off" placeholder="Mob num" required/><br/>
                <button className="bg-black text-white mx-2 py-1 px-4 rounded-xl text-md hover:text-black hover:bg-zinc-400">GET QUOTE</button>   
            </form>
        </div>
    </div>
    </>
    )
}
export default Event;

