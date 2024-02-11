import express from 'express';
const router = express.Router();



import postRoutes from './modules/post/routes.js';
import delleRoutes from './modules/ai-image-generate/routes.js';


http://localhost:8080/api/post
router.use('/api', postRoutes);

http://localhost:8080/api/delle
router.use('/api', delleRoutes);

export default router;