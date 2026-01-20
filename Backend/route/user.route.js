import express from "express"

import {getAllUserUrls} from "../controller/user.controller.js"
import { authUser } from "../middleware/auth.middleware.js"


const router= express.Router()
router.get("/me",authUser,getAllUserUrls)
export default router