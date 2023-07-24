import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express()


const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017',{dbName:"video_sharing"});
        console.log("connected to DB")
    }catch(err){
        console.log("Connected to DB")
    }
} 
  
app.use(cors({ credentials: true, origin: true }))
app.use(cookieParser())
app.use(express.json())
app.use("/api/users",userRoutes);
app.use("/api/videos",videoRoutes);
app.use("/api/comments",commentRoutes);
app.use("/api/auth",authRoutes);

app.use((err,req,res,next) => {
    const status = err.status || 500;
    const message = err.message || "something went wrong";

    return res.status(status).json({
        succcess:false,
        status,
        message
    })

})


app.listen(8000,() => {
    console.log("server started running")
    connectDB();
})