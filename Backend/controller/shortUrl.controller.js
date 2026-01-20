import { deleteShortUrl, getCustomSlug, getShortUrl } from "../dao/short_url.js";
import {
  generateShortUrlWithoutUser,
  generateShortUrlWithUser,
} from "../services/shortUrl.service.js";

export const createShortUrl = async (req, res, next) => {
  try {
    const { url, slug } = req.body;
    let shortUrl;

    if (req.user) {
      shortUrl = await generateShortUrlWithUser(url, req.user._id, slug);
    } else {
      shortUrl = await generateShortUrlWithoutUser(url);
    }

    res.status(200).send({
      short_url: process.env.APP_URL + shortUrl,
    });
  } catch (err) {
    next(err);
  }
};

export const redirectFromShortUrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const full_url = await getShortUrl(id);

    if (!full_url) {
      return res.status(404).json({ message: "Short URL not found" });
    }
    const redirectUrl = full_url.startsWith("http")
      ? full_url
      : `https://${full_url}`;

    res.redirect(redirectUrl);
  } catch (err) {
    next(err);
  }
};

export const createCustomShortUrl = async (req, res, next) => {
  try {
    const { url, slug } = req.body;

    if (!req.user) {
      return res.status(401).json({ message: "Login required" });
    }

    const shortUrl = await generateShortUrlWithUser(url, req.user._id, slug);

    res.status(200).json({
      short_url: process.env.APP_URL + shortUrl,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUrlById= async(req,res)=>{
    const { id } = req.params; 
    if(!id){
      return res.status(400).json("Url Id is missing")
    }
    const deleted =await deleteShortUrl(id)
    if (!deleted) {
      return res.status(404).json({ message: "URL not found" });
    }

    res.status(200).json({ message: "URL deleted successfully" });
   
}