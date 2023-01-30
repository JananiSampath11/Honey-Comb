import React ,{useRef} from "react";

function Key(){
    return(
           document.querySelector("#username").addEventListener("keypress",()=>{
            document.querySelector("#password").focus();
           })
        )}
const login=[{  name:"janani",
password:"jan@123"},
{name:"shri",
password:"shri@123"},
{name:"jan",
password:"j@123"},
{name:"shrijan",
password:"sj@123"},
{name:"s",
password:"j@123"},
];
function validate(){
var nam=document.getElementById("username").value;
console.log(nam.placeholder);
var pass=document.getElementById("password").value;
var flag=true;
login.forEach((v)=>{
if(v.name === nam && v.password === pass)
{ 
alert("Hello User");
flag=false;
}

})
if ( flag===true){
alert("Access denied");
}}
function reg(){   
var props = document.getElementById("username").value;
let flag = true;
// let j = [];
login.forEach((v) => {
if(v.name === props){
alert("Username already taken");
flag = false;
}
})
console.log(flag)
if(flag === true){
// console.log("flag")
// j += login.push(props);
alert("Registered Successfully",login.slice(login.length-1));
flag = false;
// console.log(login)
}
}
function Login(){
    // const form = useRef();
    
    return(
        <>
       {/*   <!--username:Shri Janani , Password:Janani@11--> */}

    <div className="bg-white text-center bg-opacity-20 h-[80vh] flex flex-col items-center justify-center">
    <div className="w-3/5 xxs:h-3/4 mobs:h-2/4 sm:text-[16px] xxs:text-[15px] mob:text-[10px] mobxs:text-[8px] flex flex-col items-center justify-center">
        <h2 className=" sm:text-5xl mobxs:text-4xl mt-0 text-shadow-xl">Register / Login</h2>
        <form className="bg-black w-full py-10 px-3 bg-opacity-50 flex flex-col justify-center items-center " >
            <div className="w-full mb-5">
                <label className="text-2xl w-2/6 px-3 text-white ">Username</label>
                <input className="w-4/6 py-[5px] px-1 border rounded-md" type="text" name="Username" id="username" placeholder="username" autocomplete="off"  onKeyDown={Key} required/>
            </div>
            <div className="w-full mb-5">
                <label className="text-2xl w-2/6 px-3 text-white ">Password</label>
                <input className="w-4/6 py-[5px] px-1 border rounded-md" type="text" name="Password" id="password" placeholder="password" autocomplete="off" required/>
            </div>
            <div className="w-full">
                <button className="bg-black text-white mt-2 mx-2 py-1 px-4 rounded-xl text-md hover:text-black hover:bg-zinc-400" type="reset" name="clear"value="CLEAR" >CLEAR</button>
                <button className="bg-black text-white mt-2 mx-2 py-1 px-4 rounded-xl text-md hover:text-black hover:bg-zinc-400" type="button" name="register"value="REGISTER" onClick={reg}>REGISTER</button>
                <button className="bg-black text-white mt-2 mx-2 py-1 px-4 rounded-xl text-md hover:text-black hover:bg-zinc-400" type="button"id="submit" value="LOGIN" onClick={validate}>LOGIN</button>
            </div>
        </form>
    </div>
    </div>       
        </>
        )}

export default (Login);