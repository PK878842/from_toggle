import { useState } from "react";
import './signup.css'
import './login.jsx'
import Login from "./login.jsx";

function Signup(){
    const [username,setusername] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [btntext,setbtntext] = useState("SIGNUP")
    function SetValue(){
        if(username.trim() === "" && email.trim() === "" && password.trim() === ""){
            setbtntext("EMPTY FIELDS ❌")
            setTimeout(()=>{
                setbtntext("SIGNUP")
            },3000);
            return;
        }
        localStorage.setItem("username",username);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        console.log("detailes saved successfully");
        setbtntext("SUCCESS");
        setTimeout(()=>{
            setbtntext("SIGNUP")
        },3000);
    }
    return(
        <div className="signup_bg">
            <h2 className="signup_title">SIGNUP</h2>
            <input onChange={(e)=>setusername(e.target.value)} type="text" required placeholder="enter your username"/>
            <input onChange={(e)=>setemail(e.target.value)} type="email" required placeholder="enter your email"/>
            <input onChange={(e)=>setpassword(e.target.value)} type="password" required placeholder="enter your password"/>
            <button className="signup_button" onClick={SetValue}>{btntext}</button>
        </div>
    )
}
export default Signup;