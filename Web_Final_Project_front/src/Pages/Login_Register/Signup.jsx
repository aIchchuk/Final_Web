import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './loginsignup.css';  // Ensure you import the CSS file

function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const signUpMutation = useMutation({
    mutationKey: ["SIGN_UP"],
    mutationFn: async (data) => {
      return axios.post("http://localhost:8080/users/signup", null, {
        params: data,
      });
    },
    onSuccess: () => {
      // Redirect to the login page on successful registration
      navigate("/login");
    },
    onError: (error) => {
      alert("Sign Up failed: " + (error.response?.data || "Unknown error"));
    },
  });

  const onSubmit = (data) => {
    signUpMutation.mutate(data);
  };

  return (
    <>
      <div className="background-overlay">
        <div className="login-container">
          <div className="sparkle"></div>
          <div className="login-header">
            <h2>Sign Up for Fataak</h2>
          </div>
          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Email</label>
                <input type="email" {...register("email")} />
              </div>
              <div>
                <label>Username</label>
                <input type="text" {...register("username")} />
              </div>
              <div>
                <label>Password</label>
                <input type="password" {...register("password")} />
              </div>
              <div className="button-container">
                <button type="submit">Sign Up</button>
                <button type="button" onClick={() => navigate("/login")}>Back to Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
