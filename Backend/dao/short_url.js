
import ShortUrl from "../model/shortURL.model.js";
import { ConflictError } from "../utils/errorHandler.js";
export const saveShortUrl= async(shortUrl,longUrl,userId)=>{
    try{
        const newUrl= new ShortUrl({
            full_url:longUrl,
            short_url: shortUrl
        })
        if(userId){
            newUrl.user= userId 
        }
       await newUrl.save();
    }catch(err){
        console.log(err.message);
        throw new ConflictError(err);
    }
}

export const getShortUrl = async(shortUrl)=>{
    return await ShortUrl.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}})
}

export const getCustomSlug = async (slug)=>{
    return await ShortUrl.findOne({short_url:slug})  
}