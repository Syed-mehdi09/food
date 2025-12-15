import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import adminRouter from "./routes/adminRoute.js"
import deliveryRoutes from "./routes/deliveryRoute.js"




//app config
const app=express()
const port=process.env.PORT || 4001

//middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'https://food-frontend-k4ve.onrender.com',
    'https://food-yd1l.onrender.com'
  ],
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/admin",adminRouter)
app.use('/api/delivery',deliveryRoutes );


app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

