import { useParams } from "react-router-dom";

import Body from "../Components/Body/Body";
import "../Components/Body/Body.css"
import "../index.css"
import Header from "../Components/Header/Header";
import "../Components/Header/Header.css"
import { Link } from "react-router-dom";


function Dashboard() {
    const { userId } = useParams();
  
    // Fetch and display user-specific data here using userId
  
    return (
      <div className="add">
        <div className="header">
            <div className="morehead">
                <div className="anot"><Link to = "/"><h3>Fa-taak</h3></Link></div>

            </div>
                
        </div>
        
        <Body />
      </div>
    );
  }
  
  export default Dashboard;