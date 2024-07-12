const express=require("express");
const{registerUser,userLogin}=require("../Controller/userController");
const userRouter=express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',userLogin);

module.exports=userRouter;