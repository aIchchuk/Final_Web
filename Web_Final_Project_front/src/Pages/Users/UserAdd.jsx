import { useForm } from "react-hook-form";
import "./user.css"; 


import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function UserAdd() {
  const { register, handleSubmit } = useForm();

  const saveApiCall = useMutation({
    mutationKey: ["SAVE_USER_DATA"],
    mutationFn: async (data) => {
        const formData = new FormData();
        
        formData.append('username', data['username'])
        formData.append('email', data['email'])
        formData.append('password', data['password'])

        return axios.post("http://localhost:8080/users", formData);
    },
  });

  const submit = async (data) => {
    saveApiCall.mutate(data, {
        onSuccess() {

        }
    })
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label>Username</label>
        <input
          type={"text"}
          {...register("username")}
          className="a"
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type={"text"}
          {...register("email")}
          className="a"
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type={"text"}
          id="password"
          {...register("password")}
          className="a"
        />
      </div>

      <div>
        <input type="submit" className="a" />
      </div>
    </form>
  );
}

export default UserAdd;
