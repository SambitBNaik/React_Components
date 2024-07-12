const mongoose= require("mongoose");

mongoose
   .connect(process.env.MongoDBURL)
   .then(()=>{
    console.log("Connection is successfull");
   })
   .catch((err)=>{
    console.log("Failed to connect with DB",err);
   })