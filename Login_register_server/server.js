const express= require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();
const dbConfig=require("./Config/dbConfig");
const userRouter=require("./Router/userRouter");

console.log(dbConfig);
app.use(express.json());
app.use(cors({origin:true}));
app.use("/app/v1/users",userRouter);
app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.listen(process.env.PORT,()=>{
    console.log(`Server listining to port ${process.env.port}`);
});