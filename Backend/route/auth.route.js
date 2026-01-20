import express from "express"

import {  register_User ,login_User, get_current_user, logout_User} from "../controller/auth.controller.js"
import { authUser } from "../middleware/auth.middleware.js"


const router= express.Router()

router.post("/register", register_User)
router.post("/login",login_User)
router.post("/logout",logout_User)
router.get("/me",authUser,get_current_user)
export default router