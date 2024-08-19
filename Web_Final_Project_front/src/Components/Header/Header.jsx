import "./Header.css"
import { Link } from "react-router-dom";

import Login from "../../Pages/Login_Register/Login";
import Signup from "../../Pages/Login_Register/Signup";


function Header(){

    return(
        <div className="header">
            <div className="morehead">
                <div className="anot"><h3>Fa-taak</h3></div>

                <Link to = "/login"><h3>Login</h3></Link>
                
            </div>
                
        </div>
    );


}

export default Header