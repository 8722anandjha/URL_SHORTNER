import express from 'express'
import { createShortUrl, redirectFromShortUrl } from '../controller/shortUrl.controller.js';

const router = express.Router();

router.post("/",createShortUrl);
export default router