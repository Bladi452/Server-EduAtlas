import { Router } from "express";

const router = Router();

router.get('/chat/:id')

router.post('/chat', sendMessage)

export default router