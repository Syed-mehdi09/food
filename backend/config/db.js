import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://BijayShah:bjshah123@cluster0.0z6cqls.mongodb.net/Food')//use your mongodb url
    .then(()=>console.log("DB Connected successfully"));
}