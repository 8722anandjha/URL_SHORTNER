import mongoose from "mongoose";

const connectDB = async(req , res)=>{
    try{
        const connect= await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connect Successfully:${connect.connection.host}`)
    }catch(error){
        console.log(`Error: ${error}`);
        process.exit();
    }
}
export default connectDB;