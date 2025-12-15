import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://mehdi:mehdi123@cluster0.yaitqnx.mongodb.net/')//use your mongodb url
    .then(()=>console.log("DB Connected successfully"));
}