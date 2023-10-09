import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/shared/InputForm";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import Spinner from "../components/shared/Spinner";
import {  toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Redux State
  const {loading} = useSelector(state => state.alerts)

  //hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //FORM FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      //Validation
      if(!name || !lastName || !email || !password){
        return alert("Please provide all Fields!");
      }
      
      dispatch(showLoading());
      const { data } = await axios.post("/api/v1/auth/register", { name, lastName, email, password });
      dispatch(hideLoading());

      if(data.success){
        toast.success("Register Successfully!");
        navigate("/login");
      }

    } catch (error) {
      dispatch(hideLoading());
      toast.error("Invalid Form Details, Please try again!")
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (<Spinner />) : (
        <div className="container">
        <div className="signup-content">
          <form onSubmit={handleSubmit}>
            <h1 className="form-title">Create account</h1>
            <img src="/assets/images/jobReg.png" className="w-100 h-50 " />
            <div className="form-group mb-1">
              <InputForm
                placeholder={"First Name"}
                type={"text"}
                name={"name"}
                value={name}
                handleChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group mb-1">
              <InputForm
                placeholder={"Last Name"}
                type={"text"}
                name={"lastName"}
                value={lastName}
                handleChange={(e) => setLastName(e.target.value)}
              />
            </div>

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
                value="Register"
              />
            </div>
          </form>

          <p className="loginhere">
            Have already an account ?{" "}
            <Link to="/login" className="loginhere-link">
              Login here!
            </Link>
          </p>
        </div>
      </div>
      )}
    </>
  );
};

export default Register;
