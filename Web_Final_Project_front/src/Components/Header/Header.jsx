import "./Header.css"
import { Link } from "react-router-dom";

import Login from "../../Pages/Login_Register/Login";
import Signup from "../../Pages/Login_Register/Signup";


function Header(){

    return(
        <div className="header">
            <div className="morehead">
                <div className="anot"><h3>Fa-taak</h3></div>
                <button><h3>Home</h3></button>
                <Link to = "/aboutus"><h3>About Us</h3></Link>
                <Link to = "/contact"><h3>Contact</h3></Link>
                <Link to = "/moreinfo"><h3>More Info</h3></Link>
                
            </div>
                
        </div>
    );


}

export default Header