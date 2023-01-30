import React,{useRef} from "react";
import emailjs from '@emailjs/browser';

function Booktable(){
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
           <h2 className=" sm:text-5xl mobxs:text-4xl mt-0 text-shadow-xl">Book Table</h2>
            <form className="bg-black w-full py-10 px-3 bg-opacity-50 flex flex-col justify-center items-center "ref={form} onSubmit={SendEmail}>
                <select className="w-5/6 mb-2 text-gray-900 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600" name="menub">
                <option>Select Your Menu</option>
                <option>Vegetarian</option>
                <option>Non Vegetarian</option>
                <option>Both</option>
                </select>
                <select className="w-5/6 mb-2 text-gray-900 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600" name="tabletype">
                <option>Select Your Table Type</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Tea Time</option>
                </select>
                <input className="w-5/6 p-[2px] mb-2 text-black bg-white border rounded-md" type="number"min="0" name="membersb" autoComplete="off" placeholder="No of Members per table" required/>
                <input className="w-5/6 p-[2px] mb-2 text-black bg-white border rounded-md" type="text" name="yournameb" autoComplete="off" placeholder="Your Name" required/>
                <input className="w-5/6 p-[2px] mb-2 text-black bg-white border rounded-md" type="mail" name="youremailb" autoComplete="off" placeholder="Your Mail" required/>
                <input className="w-5/6 p-[2px] mb-2 text-black bg-white border rounded-md" type="text" name="youraddressb" autoComplete="off" placeholder="Your Address" required/>
                <input className="w-5/6 p-[2px] mb-2 text-black bg-white border rounded-md" type="text" name="mobnumb" autoComplete="off" placeholder="Mob num" required/>
                <input className="w-5/6 p-[2px] mb-2 text-black bg-white border rounded-md" type="text" name="commentb" placeholder="Write Yours comment here...." autocomplete="off" required/><br/>
                <button className="bg-black text-white mx-2 py-1 px-4 rounded-xl text-md hover:text-black hover:bg-zinc-400">BOOK TABLE</button>
                
                </form>
            </div>
        </div>    
        </>
    )
}
export default Booktable;