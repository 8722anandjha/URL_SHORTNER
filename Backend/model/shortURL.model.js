import mongoose from "mongoose";

const shortUrlSchema= new mongoose.Schema({
    full_url:{
        type:String,
        require:true
    },
    short_url:{
        type: String,
        require: true,
        index: true,
        unique: true
    },
    clicks:{
      type: Number,
      required: true,
      default:0  
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        
    }
})

const shortUrl = mongoose.model("ShortUrl",shortUrlSchema);
export default shortUrl;