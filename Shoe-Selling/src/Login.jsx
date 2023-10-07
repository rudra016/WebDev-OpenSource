import { useState } from "react";
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function Login({handleDataFromChild}){
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
      const navigate = useNavigate()
      const { username, password } = formData;
      const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleDataFromChild(username)
        try {
          await axios.post('http://localhost:8080/api/auth/signin', formData).then(
            res =>{
              console.log(res);
              navigate("/")
            }
          )
          .catch(error=>{
            console.error('Request failed:');
            alert("incorrect login credentials")
          })
          // console.log(res)
        } catch (e) {
          alert(e)
        }

      };

    return(
        <div className="loginContainer">
    <div className="backgroundLogin">
        <div className="LoginShape"></div>
        <div className="LoginShape"></div>
    </div>
    <form onSubmit={handleSubmit} className="loginForm">
        <h3>Login Here</h3>

        <label for="username" className="loginLabel">Username</label>
        <input className="loginInput" type="text" placeholder="username" id="username" name="username" value={username} onChange={handleChange}/>

        <label for="password" className="loginLabel">Password</label>
        <input className="loginInput" type="password" placeholder="Password" id="password" name="password" value={password} onChange={handleChange} />

        <button className="login">Log In</button>
    </form>
        </div>
    )
}