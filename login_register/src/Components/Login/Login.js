import React, { useState } from 'react';
import "./Login.css"
import loginbackground from "../../Assets/loginbackground.mp4"
import {Link, useNavigate} from "react-router-dom";
import { loginUser } from '../../API/usersApi';
import { message } from 'antd';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();
    const handlelogin=async(e)=>{
        e.preventDefault();
        try{
            const payload={email,password};
            console.log(payload);
            const response = await loginUser(payload);
            if(response.success){
                message.success(response.message);
                navigate("/home");
            }else{
                message.error(response.message);
            }
        }catch(error){
            console.error("Error in login user",error);
        }
    }
  return (
    <div className='loginContainer'>
        <video autoPlay muted loop className='loginbackgroundvideo'>
            <source src={loginbackground} type='video/mp4'/>
            Might be the browser doesnot support video
        </video>
      <div className='loginForm'>
        <h1>Login</h1>
          <form onSubmit={handlelogin}>
            <div className='loginFormGroup'>
                <label>Email</label>
                <input type='email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}} 
                placeholder='Enter your Email'/>
            </div>
            <div  className='loginFormGroup'>
                <label>Password</label>
                <input type='password'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}} 
                placeholder='Enter your password'/>
            </div>
            <button type='submit'>Login</button>
           </form>
        </div>
    </div>
  )
}

export default Login