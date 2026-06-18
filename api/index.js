import express from 'express';
import mongoose from 'mongoose';
import dotenv  from 'dotenv';
import userRouter from './routes/user.route.js';  //"useRouter" was used here instead of "router" as used in the export default, no biggie
import authRouter from './routes/auth.route.js';

dotenv.config()   //initializing the 'dotenv' that was imported.

console.log("MONGO =", process.env.MONGO);
mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to DB well")
}).catch((err) => {
    console.log(err)
})

const app = express() 

app.use(express.json()); //this will allow json() as the input of the server becus normally, we're not allowed to send any json to the server.


app.listen(3000, () => {
    console.log("e dey show and listeneddddd and changed oo")
});
 

 app.use("/api/user", userRouter ); 
app.use("/api/auth", authRouter);




//creating a middleware for checking errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500  //500 is internal server error.
    const message  = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message

    })
}) 





