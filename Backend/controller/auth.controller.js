
import { cookieOptions } from "../config/config.js"
import { loginUser, registerUser } from "../services/auth.service.js"

export const register_User= async(req,res)=>{
        const {name, email, password} = req.body
        const token = await registerUser(name,email,password)
        res.status(200).cookie("accessToken",token,cookieOptions).json({
            token,
            message:"register success"
        })
}

export const login_User= async(req,res)=>{
    const {email,password}= req.body
   
    const{ token,user}= await loginUser(email,password)

    res.cookie("accessToken",token,cookieOptions)
    res.status(200).json({
        user,
        message:"login successfull"})
}