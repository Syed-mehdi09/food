import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        //checking if user exists
        const user = await userModel.findOne({email})
        if (!user) {
            return res.status(400).json({ success: false, message: "User does not exist" });
        }

        const isMAtch=await bcrypt.compare(password, user.password);            
        if (!isMAtch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        } 
        const token=createToken(user._id);
        res.json({success:true,token})          
    

}catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
} 

//register user
const registerUser = async (req, res) => {
    const { name, password,email } = req.body;
    try{
        //checking is user alredy exists
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message:"User already exists"})
        }
        //validating email and password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid email"})
        }
        if(password.length < 8){
            return res.json({success:false,message:"Password must be at least 8 characters long"})
        }
        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //creating user
        const newUser = new userModel({
            name:name,
            email:email,
            password: hashedPassword
        });

       const user= await newUser.save();

       const token = createToken(user._id);
       res.json({success:true,token})



    }catch(error){
       console.log(error);
       res.status(500).json({success:false,message:"Internal server error"});
   }

}
export { loginUser, registerUser };
