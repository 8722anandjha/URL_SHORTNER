
import { getCustomSlug, getShortUrl } from '../dao/short_url.js';
import {  generateShortUrlWithoutUser, generateShortUrlWithUser } from '../services/shortUrl.service.js';

export const createShortUrl= async(req,res,next)=>{
    try{
        const {url,slug} = req.body;
        let shortUrl
        if(req.user){
             shortUrl = await generateShortUrlWithUser(url,req.user.id,slug)
        }else{
             shortUrl= await generateShortUrlWithoutUser(url)
        }

        res.status(200).send({
            "short_url":process.env.APP_URL+ shortUrl
        }); 
    }catch(err){
        next(err);
    }
}



export const redirectFromShortUrl= async(req, res,next)=>{
    try{
        const {id}= req.params
        const url = await getShortUrl(id)
        console.log(url)
        res.redirect(url.full_url)
    }catch(err){
        next(err)
    }
}

export const createCustomShortUrl= async(req,res)=>{
    const {url, slug}= req.body
  
    const shortUrl = await generateShortUrlWithUser(url,customUrl)
    res.status(200).json({shortUrl:process.env.APP_URL +shortUrl})
}
