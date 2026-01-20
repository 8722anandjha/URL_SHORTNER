import express from 'express'
import { createShortUrl, deleteUrlById } from '../controller/shortUrl.controller.js';
import { authUser } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/create",createShortUrl);
router.delete("/delete/:id",authUser,deleteUrlById)

export default router