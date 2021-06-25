import { Router } from "express";

const router = Router();

router.get('/document/:id');

router.post('/document');

export default router