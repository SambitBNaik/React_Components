import React, { useState} from 'react'
import "./Register.css"
import Register_background from "../../Assets/Register_background_image.jpg";
import gif from "../../Assets/hd.mp4";
import backgroundVideo from "../../Assets/hd.mp4"
import { useSearchParams } from 'react-router-dom';
import {Link, useNavigate} from "react-router-dom";
import { registerUser } from '../../API/usersApi';
import {message} from 'antd';

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handelSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response= await registerUser({name,email,password});
            console.log(response);
            if(response.success){
                message.success(response.message);
                navigate("/login")
            }
        }catch(error){
            console.error("Error registering user :", error);
        }
    }
  return (
    <div className='backgroundContainer'>
        <video autoPlay muted loop className='backgroundVideo'>
            <source src={backgroundVideo} type='video/mp4'/>
            Your video doesnot support the video tag.
        </video>
         <div className='registerForm'>
            <h1>Register</h1>
            <form onSubmit={handelSubmit}>
                <div className='formGroup'>
                    <label>Name</label>
                    <input type='text' 
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    id="name" 
                    name="name" 
                    placeholder='Enter your UserName' 
                    required/>
                </div>
                <div  className='formGroup'>
                    <label>Email</label>
                    <input type='email' 
                    id='email'
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}} 
                    name='email' 
                    placeholder='Enter your Email' 
                    required/>
                </div>
                <div  className='formGroup'>
                    <label>Password</label>
                    <input type='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}} 
                    id='password' 
                    name='password' 
                    placeholder='Enter your password'
                     required/>
                </div>
                <button type='submit'>Register</button>
                <Link to="/login" style={{ color:'#fafafa'}}>Already have an account? Login.</Link>
            </form>
          </div>
    </div>
  )
}

export default Register;



