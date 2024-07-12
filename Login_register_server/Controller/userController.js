const { MongoCompatibilityError } = require("mongodb");
const userModel= require("../Model/userModal");

// User registiration

const registerUser= async(req, res)=>{
    // check whether the user exsists or not
    try{
        const userExists= await userModel.findOne({email:req.body?.email});
        if(userExists){
            return res.status(200).json({
                success:false,
                message:"User already exists",
            });
        }
    
        const user= userModel(req.body);
        const response= await user.save();
        
        res.status(200).json({
            success:true,
            response: response,
            message:"User registered successfully",
        });
    } catch(error){
        res.status(400).json({
            success:false,
            message:error || "User has entered invalid information",
        });
    };
  
};


const userLogin= async(req, res)=>{
    try{
        // check the user email present inside the db
        // if email is present then compare the password with the db password
        const userExists= await userModel.findOne({email:req.body?.email});
        if(!userExists){
            return res.status(400).json({
                success:false,
                message:"User Email Doesnt exists.",
            });
        }

        if(req.body.password!==userExists.password){
            return res.status(400).send({
                success:false,
                message:"Invalid Password",
            });
        };


        res.status(200).send({
            success: true,
            message:"User LoggedIn Successfully",
        })

        //if user exists then check for password

    }catch(error){
        res.status(400).json({
            success:false,
            message:error || "User has entered in valid information",
        });
    };
}

module.exports={
    registerUser,
    userLogin,
}