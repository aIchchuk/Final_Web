import "./Body.css"
import image from "../../assets/headtwo.jpg" 

function Body(){
    return(
        <div className="body">

            <div className = "lside">
                <h2>Top Genre</h2>
                <h2>Your Channels</h2>
            </div>

            <div className = "midside">
                <h2>Recommended Channels</h2>
                <h2>Your Channels</h2>
                <div className="img"><img src={image}></img></div>
            </div>

            <div className = "rside">
                <h2>Recommended Channels</h2>
                <h2>Your Channels</h2>
            </div>

        </div>
    );

}

export default Body