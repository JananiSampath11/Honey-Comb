import React,{useRef} from "react";
import emailjs from '@emailjs/browser'

function Ecatering(){
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
        {/* <div className="bg-white text-center bg-opacity-20 h-[80vh] flex items-center justify-center">
            <div className="flex flex-col justify-center items-center w-2/4 h-full  xl:w-2/4 lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-3/4 xxs:w-3/4 mob:w-3/4 mobs:w-3/4"> 
                <h2 className=" pb-4  text-6xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-5xl xxs:text-5xl xxxs:text-[44px] mob:text-[40px] mobs:text-[35px] mobxs:text-3xl text-shadow-xl">Book Catering</h2>
                <form className="bg-black bg-opacity-50 w-full p-5 "  ref={form} onSubmit={SendEmail}>
                <select className="w-3/5 mb-1 text-gray-900 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600" name="service">
                    <option >Select Your Sevice Here....</option>
                    <option>Marriage-Wedding Catering Service</option>
                    <option>Birthday Party Catering Service</option>
                    <option>Home Catering Service</option>
                    <option>Indoor Catering Service</option>
                    <option>Corporate Event Catering Service</option>
                    <option>Outdoor Catering Service</option>
                    <option>School-College Function Catering Service</option>
                    <option>Party Catering Service</option>
                    <option>Buffet Catering Service</option>
                    <option>BBQ Catering Service</option>
                    <option>Others</option>
                </select>
                <select className="w-3/5 mb-1 text-gray-900 bg-white border rounded-md shadow-sm outline-none  focus:border-indigo-600" name="menu">
                <option>Select Your Menu</option>
                <option>Vegetarian</option>
                <option>Non Vegetarian</option>
                <option>Both</option>
                </select>
                <input className="w-3/5 mb-1 text-black bg-white border rounded-md" type="number" min="0" name="membersc" autoComplete="off" placeholder="No of Members that you expect.." required/>
                <input className="w-3/5 mb-1 text-black bg-white border rounded-md" type="text" name="yournamec" autoComplete="off" placeholder="Your Name" required/>
                <input className="w-3/5 mb-1 text-black bg-white border rounded-md" type="email" name="youremailc" autoComplete="off" placeholder="Your Mail" required/>
                <input className="w-3/5 mb-1 text-black bg-white border rounded-md" type="text" name="youraddressc" autoComplete="off" placeholder="Your Address" required/>
                <input className="w-3/5 mb-1 text-black bg-white border rounded-md" type="text" name="mobnumc" autoComplete="off" placeholder="Mob num" required/>
                <input className="w-3/5 mb-1 text-black bg-white border rounded-md" type="text" name="commentc" placeholder="Write Yours queries here...." autocomplete="off" required/><br/>
                <button className="bg-black text-white mx-2 py-1 px-4 rounded-xl text-md hover:text-black hover:bg-zinc-400">GET QUOTE</button>
                </form>
            </div>
        </div>             */}
    <div className="bg-white text-center bg-opacity-20 h-[80vh] flex flex-col items-center justify-center">
           
        <div className="w-3/5 xxs:h-3/4 mobs:h-2/4 sm:text-[16px] xxs:text-[15px] mob:text-[10px] mobxs:text-[8px] flex flex-col items-center justify-center">
        <h2 className="sm:text-5xl mobxs:text-4xl mt-0 text-shadow-xl">Book Catering</h2>
            <form className="bg-black w-full py-10 px-3 bg-opacity-50 flex flex-col justify-center items-center "  ref={form} onSubmit={SendEmail}>
                
                <select className="w-5/6 mb-2 text-gray-900 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600" name="service">
                    <option >Select Your Sevice Here....</option>
                    <option>Marriage-Wedding Catering Service</option>
                    <option>Birthday Party Catering Service</option>
                    <option>Home Catering Service</option>
                    <option>Indoor Catering Service</option>
                    <option>Corporate Event Catering Service</option>
                    <option>Outdoor Catering Service</option>
                    <option>School-College Function Catering Service</option>
                    <option>Party Catering Service</option>
                    <option>Buffet Catering Service</option>
                    <option>BBQ Catering Service</option>
                    <option>Others</option>
                </select>
                <select className="w-5/6 mb-2 text-gray-900 bg-white border rounded-md shadow-sm outline-none  focus:border-indigo-600" name="menu">
                    <option>Select Your Menu</option>
                    <option>Vegetarian</option>
                    <option>Non Vegetarian</option>
                    <option>Both</option>
                </select>
                <input className="w-5/6 mb-2 text-black bg-white border rounded-md" type="number" min="0" name="membersc" autoComplete="off" placeholder="No of Members that you expect.." required/>
                <input className="w-5/6 mb-2 text-black bg-white border rounded-md" type="text" name="yournamec" autoComplete="off" placeholder="Your Name" required/>
                <input className="w-5/6 mb-2 text-black bg-white border rounded-md" type="email" name="youremailc" autoComplete="off" placeholder="Your Mail" required/>
                <input className="w-5/6 mb-2 text-black bg-white border rounded-md" type="text" name="youraddressc" autoComplete="off" placeholder="Your Address" required/>
                <input className="w-5/6 mb-2 text-black bg-white border rounded-md" type="text" name="mobnumc" autoComplete="off" placeholder="Mob num" required/>
                <input className="w-5/6 mb-2 text-black bg-white border rounded-md" type="text" name="commentc" placeholder="Write Yours queries here...." autocomplete="off" required/>
                <button className="bg-black text-white rounded-lg hover:text-black hover:bg-zinc-400 sm:text-sm mob:text-[12px] mobxs:text-[8px] p-1">GET QUOTE</button>
                 
            </form>
        </div> 
    </div>
        </>
    )
}
export default Ecatering;