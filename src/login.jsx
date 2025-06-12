import { useState } from "react";
import './login.css'

function Login(){
    const [user_email,setuseremail] = useState("");
    const [user_password,setuserpassword] = useState("");
    const [buttontxt,setbuttontxt] = useState("LOGIN");
    
    function checkdetailes(){
        if(user_email.trim() === "" && user_password.trim() === ""){
            setbuttontxt("EMPTY FIELDS ❌")
            setTimeout(()=>{
                setbuttontxt("LOGIN")
            },3000);
            return;
        }
        if(user_email == localStorage.getItem("email") && user_password == localStorage.getItem("password")){
            setbuttontxt("SUCCESS");
            console.log("success");
            setTimeout(()=>{
                setbuttontxt("LOGIN")
            },3000);
        }
        
        else{
            setbuttontxt("INVALID");
            console.log("not valid");
            setTimeout(()=>{
                setbuttontxt("LOGIN")
            },3000);
        }
    }
    
    return(
        <div className="login_bg">
            <h2 className="login_title">LOGIN</h2>
            <input onChange={(e)=>setuseremail(e.target.value)} type="email" required placeholder="enter your email"/>
            <input onChange={(e)=>setuserpassword(e.target.value)} type="password" required placeholder="enter your password"/>
            <button onClick={checkdetailes}>{buttontxt}</button>
        </div>
    )
}
export default Login;