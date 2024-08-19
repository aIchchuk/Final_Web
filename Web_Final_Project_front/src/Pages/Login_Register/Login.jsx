import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './loginsignup.css';  // Ensure you import the CSS file

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const loginMutation = useMutation({
    mutationKey: ["LOGIN"],
    mutationFn: async (data) => {
      return axios.post("http://localhost:8080/users/login", null, {
        params: data,
      });
    },
    onSuccess: () => {
      // Redirect to the home page on successful login
      navigate("/userposts");
    },
    onError: (error) => {
      alert("Login failed: " + (error.response?.data || "Unknown error"));
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <>
      <div className="background-overlay">
        <div className="login-container">
          <div className="sparkle"></div>
          <div className="login-header">
            <h2>Login to Fataak</h2>
          </div>
          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Username</label>
                <input type="text" {...register("username")} />
              </div>
              <div>
                <label>Password</label>
                <input type="password" {...register("password")} />
              </div>
              <div className="button-container">
                <button type="submit">Login</button>
                <button type="button">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
