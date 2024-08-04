import "./Footer.css"
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer(){
    return(
        <div className="footer">
                        
            <div className = "icon">
                <button className="insta"><FaInstagram/></button>
                <button className="yt"><FaYoutube/></button>
                <button className="twitt"><FaTwitter/></button>
            </div>

            <div className="foot">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
                <a href="#">More Info</a>
            </div>


            <div className="last">
                <a href = "#">Terms Of Service</a>
                <a href = "#">Privacy</a>
                <a href = "#">Cookies</a>
            </div>
        </div>
    );

}

export default Footer