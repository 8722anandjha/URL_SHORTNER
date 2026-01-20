import { getAllUrls } from "../dao/user.dao.js";

export const getAllUserUrls=async(req,res)=>{
        const _id= req.user;
        const urls= await getAllUrls(_id);
        res.status(200).json({message:"success",urls})
}