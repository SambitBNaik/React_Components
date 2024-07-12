const mongoose= require("mongoose");

// register the user name, email, password

const userSchema= mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default:false,
    },

});

module.exports=mongoose.model("users",userSchema);


