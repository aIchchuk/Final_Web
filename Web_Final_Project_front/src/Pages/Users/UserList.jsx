import { useQuery } from "@tanstack/react-query";
import "./user.css"
import axios from "axios";


function UserList(){

    const getApiCall = useQuery({
        queryKey:["GET_USER_DATA"],
        queryFn(){
            return axios.get("http://localhost:8080/employee")
        }
    })

    console.log(getApiCall);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="b">ID</th>
                        <th className="b">Username</th>
                        <th className="b">Email</th>
                        <th className="b">Password</th>
                    </tr>
                </thead>

                <tbody>
                    <tr></tr>
                </tbody>
            </table>
            
        </div>
    );

}


export default UserList