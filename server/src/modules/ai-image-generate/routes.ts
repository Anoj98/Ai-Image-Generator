import express from 'express';
const router = express.Router();

import imageGenerate from './controller.js'



router.post('/ai-image-generate', imageGenerate);

export default router;