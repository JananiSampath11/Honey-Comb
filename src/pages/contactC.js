import React, { useRef } from "react";
// import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser'


function Key(){
    return(
           document.querySelector("#name").addEventListener("keypress",()=>{
            document.querySelector("#mail").focus();
           })
        )}
    


// function Contact(){
    // function sendEmail(){
    //     emailjs.send({
    //         Host : "smtp.elasticemail.com",
    //         Username : "jananisambath11@gmail.com",
    //         Password : "mail@11jan",
    //         To : 'jananisambath11@gmail.com',
    //         From : document.getElementById("mail").value,
    //         Subject : "New Contact Form Enquiry",
    //         Body : "And this is the body"
    //     }).then(
    //       (message )=> alert(message)
    //     );
    // }
    function Contact(){
        const form = useRef();
        const SendEmail = (e) => {
          e.preventDefault();
    
        emailjs.sendForm('service_76hbu6w', 'template_f7c8xy6', form.current, 'FoYfR0DLGu-MHz_Hc')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        .then(
                  (message )=> alert(message)
                );
                e.target.reset()
            };
            
       
         
                

  

    return(
        <>
 <div className="bg-white text-center bg-opacity-20 h-[80vh] flex flex-col items-center justify-center">
    <div className="w-3/5 xxs:h-3/4 mobs:h-2/4 sm:text-[16px] xxs:text-[15px] mob:text-[10px] mobxs:text-[8px] flex flex-col items-center justify-center">
        <h2 className=" sm:text-5xl mobxs:text-4xl mt-0 text-shadow-xl">Wanna Contact</h2>
            <form className="bg-black w-full py-10 px-3 bg-opacity-50 flex flex-col justify-center items-center "ref={form} onSubmit={SendEmail}>
                <div  className="w-5/6 h-[50px] mb-2 text-gray-900 border-none border rounded-md flex justify-center items-center" name="event">
                    <i className="w-1/6 fa-solid fa-user mr-2 md:text-3xl xxxs:text-[20px] mobxs:text-[18px] text-white" id="i1"></i>
                    <input className="w-5/6 py-[5px] border rounded-md" type="text" name="yourname" id="name" placeholder="Your Name" autocomplete="off" onKeyDown={Key} required/><br/>
                </div>
                <div className="w-5/6 h-[50px] mb-2 text-gray-900 border-none border rounded-md flex justify-center items-center">
                    <i className="w-1/6 fa-solid fa-envelope mr-2 md:text-3xl xxxs:text-[20px] mobxs:text-[18px] text-white" id="i2"></i>
                    <input className="w-5/6 py-[5px] border rounded-md" type="email" name="youremail" id="mail" placeholder="Your Email" autocomplete="off" required/><br/>
                </div>
                <div className="w-5/6 h-[50px] mb-2 text-gray-900 border-none border rounded-md flex justify-center items-center">
                    <i className="w-1/6 fa-solid fa-phone mr-2 md:text-3xl xxxs:text-[20px] mobxs:text-[18px] text-white" id="i3"></i>
                    <input className="w-5/6 py-[5px] border rounded-md" type="text" name="phone" placeholder="Phone" autocomplete="off" required/><br/>
                </div>
                <div className="w-5/6 h-[50px] mb-2 text-gray-900 border-none border rounded-md flex justify-center items-center">
                    <i className="w-1/6 fa-solid fa-pen mr-2 md:text-3xl xxxs:text-[20px] mobxs:text-[18px] text-white" id="i4"></i>
                    <input className="w-5/6 py-[5px] border rounded-md" type="text" name="comment" placeholder="Write comment here...." autocomplete="off" required/><br/>
                </div>
                <button className="bg-black text-white mt-4 mx-2 py-1 px-4 rounded-xl text-md hover:text-black hover:bg-zinc-400">SUBMIT</button>
         
            </form>
    </div> 
 </div>             
        </>
    )
} 
export default Contact;