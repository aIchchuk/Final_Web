import { useQuery } from "@tanstack/react-query";
import "./user.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function UserList(){

    const navigate = useNavigate();

    const getApiCall = useQuery({
        queryKey:["GET_USER_DATA"],
        queryFn(){
            return axios.get("http://localhost:8080/users")
        }
    })

    console.log(getApiCall?.data?.data);

    return(
        <div>
            <button className="b" onClick={()=>navigate("/users/add")}>Add new user</button>
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
                    {getApiCall?.data?.data?.map(i=>(
                        <tr>
                            <td>{i?.id}</td>
                            <td>{i?.username}</td>
                            <td>{i?.email}</td>
                            <td>{i?.password}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            
        </div>
    );

}


export default UserList