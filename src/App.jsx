import Signup from "./signup";
import Login from "./login";
import { useState } from "react";
import './App.css'
import Navbar from "./Navbar.jsx";

function App(){
    const [formtype,setformtype] = useState(null);
    
    return(
        <div>
            <Navbar/>
            <button style={formtype === "login" ? {visibility:"hidden",transition:"none"}:{visibility:"visible"}} className={formtype === "signup" ? "login_btn_after":"loginbtn"} onClick={()=>setformtype("login")}>LOGIN</button>
            <button style={formtype === "signup" ? {visibility:"hidden",transition:"none"}:{visibility:"visible"}} className={formtype === "login" ? "signup_btn_after": "signupbtn"} onClick={()=>setformtype("signup")}>SIGNUP</button>
            {formtype === "login" && <Login/>}
            {formtype === "signup" && <Signup/>}
        </div>

    )
}
export default App;