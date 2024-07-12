import axiosInstance from "./index";

export const registerUser= async(payload)=>{
    try{
        const response=await axiosInstance.post("http://localhost:3030/app/v1/users/register",payload);
        console.log(response);
        return response.data;
    }catch(error){
        return error.response.data || error;    
    }
}

export const loginUser=async(payload)=>{
    try{
        const response= await axiosInstance.post("http://localhost:3030/app/v1/users/login",payload);
        return response.data;
    }catch(error){
        return error.response.data || error;
    }
}