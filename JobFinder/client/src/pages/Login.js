import React, { useState } from "react";
import InputForm from "../components/shared/InputForm";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import Spinner from "../components/shared/Spinner";
import {  toast } from 'react-toastify';

const Login = () => {
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Redux State
  const { loading } = useSelector(state => state.alerts);

  //FORM FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(showLoading());
      const { data } = await axios.post("/api/v1/auth/login", { email, password });
      if(data.success){
        dispatch(hideLoading());
        localStorage.setItem("token", data.token);
        toast.success("Login Successfully!");
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Invalid Credentials, Please try again!");
      console.log(error);
    }
  };

  return (
    <>
      { loading ? (<Spinner />) : (
        <div className="container">
        <div className="signup-content">
          <form onSubmit={handleSubmit}>
            <h1 className="form-title">Login account</h1>
            <img src="/assets/images/jobLogin.png" className="w-100 h-50 " />

            <div className="form-group mb-1">
              <InputForm
                placeholder={"Your Email"}
                type={"email"}
                name={"email"}
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group mb-1">
              <InputForm
                placeholder={"Set Password"}
                type={"password"}
                name={"password"}
                value={password}
                handleChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                name="submit"
                id="submit"
                className="form-submit"
                value="Login"
              />
            </div>
          </form>

          <p className="loginhere">
            Have not any account ?{" "}
            <Link to="/register" className="loginhere-link">
              Register here!
            </Link>
          </p>
        </div>
      </div>
      ) }
    </>
  );
};

export default Login;
