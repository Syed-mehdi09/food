import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb://localhost:27017/food')//use your mongodb url
    .then(()=>console.log("DB Connected successfully"));
}