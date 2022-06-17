import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js";
import usersRoute from "./api/routes/users.js";
import picturesRoute from "./api/routes/pictures.js";
import cookieParser from "cookie-parser";

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!");
});

//duong dan dia chi
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/pictures", picturesRoute);

app.use((err,req,res,next)=>{
    //console.log("FPT University")
    //res.send("FPT University")
    //next()
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Co gi do khong on"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(5500, ()=>{
    connect();
    console.log("Connected to backend!");
});