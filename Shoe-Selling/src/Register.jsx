import axios from "axios"
import { useState } from "react";

export default function Register({handleDataFromChild}){
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    });
    const { username, email, password } = formData;
    function handleChange(e){
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //   const response = await axios.post('http://localhost:6060/student', 
        //    { "id":"1",
        //     "fullName":" mohammed asim",
        //     "email":"mohammedAsim@gmail.com",
        //     "profession":"software engineer",
        //     "password":12345,
        //     "phoneNo":12345
        //   });
      
        //   // Handle the response
        //   console.log(response.data);
        // } catch (error) {
        //   // Handle any errors
        //   console.error('Error:', error);
        // }

        // const post = {
        //   "username":"bjkgjvbs",
        //   "email":"vdajvdbva@gmail.com",
        //   "password":"12345678",
        //   "role":["user"]
        // }
        try {
          await axios.post('http://localhost:8080/api/auth/signup', formData).then(
            res =>{
              console.log(res.data);
              alert("User Registered Succesfully")
            }
          )
          .catch(error=>{
            console.error('Request failed:');
            // if (error.response) {
            //   // The request was made and the server responded with a status code
            //   // that falls out of the range of 2xx
            //   console.log('Request failed with status:', error.response.status);
            //   console.log('Error response data:', error.response.data);
            // } else if (error.request) {
            //   // The request was made but no response was received
            //   // `error.request` is an instance of XMLHttpRequest in the browser
            //   console.log('Request was made but no response received:', error.request);
            // } else {
            //   // Something happened in setting up the request that triggered an error
            //   console.log('Error while setting up the request:', error.message);
            // }
            alert("user already registered")
          })
          // console.log(res)
        } catch (e) {
          alert(e)
        }

      };
      

    return (
      <div className="RegisterContainer">
<div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="register" onSubmit={handleSubmit}>
				<div className="register__field">
					<i className="register__icon fas fa-user"></i>
					<input 
          type="text" 
          name="username"
          className="register__input" 
          placeholder="User name" 
          value={username}  
          onChange={handleChange}
          />
				</div>
				<div className="register__field">
					<i className="register__icon fas fa-user"></i>
					<input 
          type="text" 
          name="email"
          className="register__input" 
          placeholder="Email" 
          value={email}  
          onChange={handleChange}
          />
				</div>
				<div className="register__field">
					<i className="register__icon fas fa-lock"></i>
					<input 
          type="password" 
          name="password"
          className="register__input" 
          placeholder="Password" 
          value={password}
          onChange={handleChange}
          />
				</div>
				<button className="button register__submit">
					<span className="button__text">Register</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			{/* <div className="social-register">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="#" className="social-register__icon fab fa-instagram"></a>
					<a href="#" className="social-register__icon fab fa-facebook"></a>
					<a href="#" className="social-register__icon fab fa-twitter"></a>
				</div>
			</div> */}
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
      </div>
      );
      
}