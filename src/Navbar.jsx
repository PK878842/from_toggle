import './Navbar.css'
function Navbar(){
    return(
        <div className="nav_bg">
           <h2 className="logo">LOGO</h2>
           <input className="search_box" type="text" placeholder="search here" />
           <ul className="links">
            <a href="#">HOME</a>
            <a href="#">CONTACT</a>
            <a href="#">SKILLS</a>
            <a href="#">ABOUT</a>
           </ul>
        </div>
    )
}
export default Navbar;