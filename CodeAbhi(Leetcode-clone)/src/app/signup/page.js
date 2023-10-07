"use client"
import { useState } from 'react';

import Header from '../header';

import '../globals.css'



export default  function Page(){
    const [name,Setname] = useState('');
    const [email,Setemail] = useState('');
    const [password,Setpassword] = useState('');
    const[sendalert,Setsendalert] = useState('');
    const alert = () => {

      if(sendalert)
      {return(
        <div className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Warning alert!</span> {sendalert}
        </div>
      </div>
      );
      }
      else {
        return(
          <></>
        )
      }
    }

    async function handleSignup(){
      const user = {
        name:name,
        email:email,
        password:password
      }
       
      fetch ("http://localhost:5173/signup", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      }).then(
        (response) => {
         console.log("fetched");
         return response.json();
        
        }).then(data => {
          if(data.status!=200){
            Setsendalert(data.msg);
           }
           else{
            Setsendalert('');
            
           }
          if(data.url) {
            console.log(data.url);
            window.location.replace(data.url);
           }
           else console.log(data);
          }
        ).catch(
        err=>{
          console.log(err.msg);
        }
      )
    }
    return (
        <>
        <Header/>

        <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                      <label  className="input-label">Your name</label>
                      <input  value={name} onChange={(e) => Setname(e.target.value)} type="name" name="name" id="name" className="input-box" placeholder="Full Name" required=""/>
                  </div>
                  <div>
                      <label  className="input-label">Your email</label>
                      <input value={email} onChange={(e) => Setemail(e.target.value)} type="email" name="email" id="email" className="input-box" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label  className="input-label">Password</label>
                      <input value={password} onChange={(e) => Setpassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="input-box" required=""/>
                  </div>
                  
                  {alert()}
                  <button type="button" onClick={handleSignup} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
        </div>
        </div>
        </div>

        </>

    );
};