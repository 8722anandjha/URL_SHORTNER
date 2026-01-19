import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { attachUser } from './utils/attachUser.js';

dotenv.config()
const app = express();
const PORT= process.env.PORT || 5000;

app.use(cors({
    origin: process.env.REQUEST_ORIGIN ,
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(attachUser)

                     
import createShortUrl from "./route/shortUrl.route.js"
import auth_routes from "./route/auth.route.js"
import { redirectFromShortUrl } from './controller/shortUrl.controller.js';
import { errorHandler } from './utils/errorHandler.js';



app.use("/api/auth",auth_routes)
app.use("/api/create",createShortUrl);

app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)
app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running on PORT: ${PORT}`);
})