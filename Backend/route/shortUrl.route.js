import express from 'express'
import {createShortUrl } from '../controller/shortUrl.controller.js';
import { authUser } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/",createShortUrl);

// router.post("/",createShortUrlAuth)
// router.post("/",createCustomShortUrl)
export default router